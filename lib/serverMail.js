// Server-only helpers for form submissions. Secrets come from environment variables, never from client code.
// Delivery: SMTP via Nodemailer when SMTP_* variables are set (any mailbox provider), otherwise the Resend REST API.
import nodemailer from 'nodemailer';
const API = () => process.env.RESEND_API_URL || 'https://api.resend.com';
export const RECIPIENT = () => process.env.CONTACT_RECIPIENT || 'info@rudrix.co.in';

export const emailOk = (v) => typeof v === 'string' && v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const clean = (v, max = 2000) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '');
const smtpConfigured = () => Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
export const mailConfigured = () => smtpConfigured() || Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);

// --- tiny in-memory guards (best effort: per server instance) ---
const hits = new Map();
export function rateLimited(ip, key, limit = 5, windowMs = 10 * 60 * 1000) {
  const k = `${key}:${ip}`;
  const now = Date.now();
  const list = (hits.get(k) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(k, list);
  if (hits.size > 5000) for (const [kk, v] of hits) if (!v.some((t) => now - t < windowMs)) hits.delete(kk);
  return list.length > limit;
}
const recent = new Map();
export function isDuplicate(fingerprint, windowMs = 60 * 1000) {
  const now = Date.now();
  for (const [k, t] of recent) if (now - t > windowMs) recent.delete(k);
  if (recent.has(fingerprint)) return true;
  recent.set(fingerprint, now);
  return false;
}
export const forget = (fingerprint) => recent.delete(fingerprint);
export const clientIp = (req) => (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';

async function resend(path, body) {
  const res = await fetch(`${API()}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(10000),
  });
  let data = null;
  try { data = await res.json(); } catch { /* non-JSON body */ }
  return { ok: res.ok, status: res.status, data };
}

export async function sendNotification({ subject, rows, replyTo, source }) {
  const when = new Date().toISOString();
  const all = [...rows, ['Form source', source], ['Submitted (UTC)', when]];
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#111"><h2 style="margin:0 0 16px">${esc(subject)}</h2><table cellpadding="8" style="border-collapse:collapse">${all
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="border-bottom:1px solid #eee;color:#666;vertical-align:top"><b>${esc(k)}</b></td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join('')}</table></div>`;
  const text = all.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
  if (smtpConfigured()) {
    const port = Number(process.env.SMTP_PORT || 465);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
    // the authenticated mailbox is the sender; the visitor is only the Reply-To
    await transport.sendMail({ from: process.env.EMAIL_FROM || `Rudrix Website <${process.env.SMTP_USER}>`, to: RECIPIENT(), replyTo, subject, html, text });
    return true;
  }
  const r = await resend('/emails', { from: process.env.EMAIL_FROM, to: [RECIPIENT()], reply_to: replyTo, subject, html, text });
  return r.ok;
}

// Saves a subscriber in the configured Resend Audience. Returns 'saved' | 'duplicate' | 'failed'.
export async function addSubscriber(email) {
  const id = process.env.RESEND_AUDIENCE_ID;
  if (!id) return 'unconfigured';
  const r = await resend(`/audiences/${id}/contacts`, { email, unsubscribed: false });
  if (r.ok) return 'saved';
  if (r.status === 409 || /already exists/i.test(JSON.stringify(r.data || {}))) return 'duplicate';
  return 'failed';
}
