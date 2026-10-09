import { addSubscriber, clean, clientIp, emailOk, forget, isDuplicate, mailConfigured, rateLimited, sendNotification } from '@/lib/serverMail';

export const runtime = 'nodejs';

const fail = (status, error) => Response.json({ ok: false, error }, { status });

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return fail(400, 'Invalid request.'); }
  if (!b || typeof b !== 'object') return fail(400, 'Invalid request.');
  if (clean(b.website)) return Response.json({ ok: true, status: 'received' });

  if (rateLimited(clientIp(req), 'newsletter', 5)) return fail(429, 'Too many requests. Please try again in a few minutes.');
  const email = clean(b.email, 254).toLowerCase();
  if (!emailOk(email)) return fail(400, 'Please enter a valid email address.');
  if (!mailConfigured()) return fail(503, 'Our form service is not available right now.');

  const fp = `n:${email}`;
  if (isDuplicate(fp)) return Response.json({ ok: true, status: 'duplicate' });

  // 1) store the subscriber (only when an audience is configured), 2) notify the team
  const stored = await addSubscriber(email).catch(() => 'failed');
  if (stored === 'failed') { forget(fp); return fail(502, 'We could not complete your subscription. Please try again.'); }
  const notified = await sendNotification({
    subject: `Newsletter signup: ${email}`,
    replyTo: email,
    source: 'Footer newsletter form',
    rows: [['Email', email], ['Saved to audience', stored === 'unconfigured' ? 'No (RESEND_AUDIENCE_ID not set)' : stored === 'duplicate' ? 'Already subscribed' : 'Yes']],
  }).catch(() => false);
  if (!notified && stored === 'unconfigured') { forget(fp); return fail(502, 'We could not complete your subscription. Please try again.'); }

  // "subscribed" only when really saved; otherwise we only received the request
  return Response.json({ ok: true, status: stored === 'saved' ? 'subscribed' : stored === 'duplicate' ? 'duplicate' : 'received' });
}
