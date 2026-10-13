'use client';
import Script from 'next/script';
import { useEffect } from 'react';
import { track } from '@/lib/analytics';

// Loads one GTM container when NEXT_PUBLIC_GTM_ID is set (format GTM-XXXXXXX); renders nothing otherwise.
// GA4 (and any ad pixels) are configured inside GTM, so no separate gtag/GA script is added here (avoids duplicate page views).
// In GTM use the built-in "Initialization - All Pages" trigger for the Google tag and a "History Change" trigger for client-side route changes.
const ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function GoogleTagManager() {
  useEffect(() => {
    if (!ID) return undefined;
    // Delegated click tracking for contact links (no personal data is sent: only the link type).
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

  if (!ID || !/^GTM-[A-Z0-9]+$/.test(ID)) return null;
  return (
    <>
      <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${ID}');`}</Script>
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=${ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" />
      </noscript>
    </>
  );
}
