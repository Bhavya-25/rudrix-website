// Analytics helper. Works with the direct GA4 tag (gtag) and with Google Tag Manager's dataLayer; no-op if neither is loaded.
// Never pass names, emails, phone numbers or message text: only non-personal labels such as the form's source.
export function track(event, params = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') window.gtag('event', event, params);
  else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  }
}
