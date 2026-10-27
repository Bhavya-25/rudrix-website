'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { track } from '@/lib/analytics';

// IDs are public (they appear in every page's source), so constants as fallbacks are fine.
// Both are installed as requested by the SEO team: the GTM container (GTM-MWF5TB8Q) AND the direct GA4 tag (G-RNP4KY9BFZ).
// WARNING: if the GTM container also contains a GA4 tag/config for G-RNP4KY9BFZ, every visit is counted twice. Either keep GA4
// out of the container, or set NEXT_PUBLIC_GA_DIRECT=false to switch the direct tag off.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-RNP4KY9BFZ';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-MWF5TB8Q';
const useGtm = /^GTM-[A-Z0-9]+$/.test(GTM_ID || '');
const useGa = process.env.NEXT_PUBLIC_GA_DIRECT !== 'false' && /^G-[A-Z0-9]+$/.test(GA_ID);

/** GTM noscript fallback: rendered by the layout immediately after <body> opens, as Google's install steps require. */
export function GtmNoScript() {
  if (!useGtm) return null;
  return (
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" />
    </noscript>
  );
}

export default function Analytics() {
  const path = usePathname();

  // Direct GA4: the initial config sends no page view (send_page_view:false); we send one per route, including client-side navigations.
  useEffect(() => {
    if (!useGa || typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', { page_path: path, page_location: window.location.href, page_title: document.title });
  }, [path]);

  // Delegated click tracking for contact links and CTAs (no personal data: only link type / button text / internal destination).
  useEffect(() => {
    if (!useGa && !useGtm) return undefined;
    const onClick = (e) => {
      const a = e.target.closest?.('a[href]');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('mailto:')) track('email_click');
      else if (href.startsWith('tel:')) track('phone_click');
      else if (href.includes('wa.me/')) track('whatsapp_click');
      else if (a.classList.contains('cta')) track('cta_click', { cta_text: (a.querySelector('.cta-track > span')?.textContent || a.textContent || '').trim().slice(0, 60), cta_destination: href.startsWith('/') ? href : 'external' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!useGtm && !useGa) return null;
  return (
    <>
      {useGtm && <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script>}
      {useGa && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});`}</Script>
        </>
      )}
    </>
  );
}
