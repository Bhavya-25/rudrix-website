import { clean, clientIp, emailOk, forget, isDuplicate, mailConfigured, rateLimited, sendNotification } from '@/lib/serverMail';

export const runtime = 'nodejs';

const SOURCES = { 'contact-page': 'Contact page form', 'project-inquiry': 'Project inquiry form (page)', 'inquiry-popup': 'Project inquiry popup' };
const fail = (status, error) => Response.json({ ok: false, error }, { status });

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return fail(400, 'Invalid request.'); }
  if (!b || typeof b !== 'object') return fail(400, 'Invalid request.');

  // honeypot: bots fill the hidden field. Pretend success without sending anything.
  if (clean(b.website)) return Response.json({ ok: true });

  const ip = clientIp(req);
  if (rateLimited(ip, 'contact')) return fail(429, 'Too many requests. Please try again in a few minutes.');

  const name = clean(b.name, 120).replace(/\s+/g, ' ');
  const email = clean(b.email, 254);
  const service = clean(b.service, 160);
  const message = clean(b.message, 5000);
  const source = SOURCES[b.source] ? b.source : 'contact-page';
  if (!name) return fail(400, 'Please enter your name.');
  if (!emailOk(email)) return fail(400, 'Please enter a valid email address.');
  if (!service) return fail(400, 'Please choose a service.');
  if (source === 'contact-page' && !message) return fail(400, 'Please tell us about your project.');
  if (b.consent !== true) return fail(400, 'Please accept the terms to continue.');

  if (!mailConfigured()) return fail(503, 'Our form service is not available right now.');

  const fp = `c:${email.toLowerCase()}:${message.slice(0, 80)}:${service}`;
  if (isDuplicate(fp)) return fail(409, 'This message was already sent. We will be in touch soon.');

  const ok = await sendNotification({
    subject: `New website inquiry: ${name}${service ? ` (${service})` : ''}`,
    replyTo: email,
    source: SOURCES[source],
    rows: [['Name', name], ['Email', email], ['Phone', clean(b.phone, 40)], ['Company', clean(b.company, 160)], ['Service', service], ['Budget', clean(b.budget, 80)], ['Timeline', clean(b.timeline, 80)], ['Message', message], ['Accepted terms', 'Yes']],
  }).catch(() => false);
  if (!ok) { forget(fp); return fail(502, 'We could not send your message. Please try again, or email us directly.'); }
  return Response.json({ ok: true });
}
