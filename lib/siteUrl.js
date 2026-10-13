// Single source of truth for the canonical origin. rudrix.co.in is the live domain (connected in Vercel, HTTPS valid).
// Override with NEXT_PUBLIC_SITE_URL only if the canonical domain ever changes.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rudrix.co.in').replace(/\/$/, '');
export const abs = (path = '') => `${SITE_URL}${path}`;
