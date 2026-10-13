// Tiny dataLayer helper. Everything here is a no-op until a GTM container is configured (NEXT_PUBLIC_GTM_ID).
// Never pass names, emails, phone numbers or message text: only non-personal labels such as the form's source.
export function track(event, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
