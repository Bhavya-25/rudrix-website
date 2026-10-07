'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// The popup code is only downloaded when it is about to open, so it never affects page load.
const InquiryPopup = dynamic(() => import('./InquiryPopup'), { ssr: false });

const DELAY_MS = 6000; // time after a full page load before the popup opens

export default function InquiryPopupLoader() {
  const [show, setShow] = useState(false);

  // Runs once per full page load (state resets on reload, so it opens again after a refresh).
  useEffect(() => {
    let timer;
    const arm = () => {
      timer = setTimeout(() => setShow(true), DELAY_MS);
    };
    if (document.readyState === 'complete') arm();
    else window.addEventListener('load', arm, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', arm);
    };
  }, []);

  return show ? <InquiryPopup /> : null;
}
