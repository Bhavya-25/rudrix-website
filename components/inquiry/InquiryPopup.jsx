'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { X, ShieldCheck, Rocket, Users } from 'lucide-react';
import ProjectForm from './ProjectForm';
import { inquiry } from '@/data/inquiry';

const ease = [0.22, 1, 0.36, 1];
export default function InquiryPopup() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(true);
  const panel = useRef(null);
  const lastFocus = useRef(null);

  // Mounted by InquiryPopupLoader after the delay, so it opens immediately.
  useEffect(() => {
    lastFocus.current = document.activeElement;
  }, []);

  const close = () => {
    setOpen(false);
    lastFocus.current?.focus?.();
  };

  // Lock page scroll, close on Escape, keep Tab focus inside the dialog.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => panel.current?.querySelector('input')?.focus(), 350);
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key !== 'Tab' || !panel.current) return;
      const f = [...panel.current.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled])')].filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/[0.66] p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: reduce ? 0 : 0.26, ease: [0.42, 0, 1, 1] } }}
          exit={{ opacity: 0, transition: { duration: reduce ? 0 : 0.3, ease: [0, 0, 0.45, 1] } }}
          onMouseDown={(e) => e.target === e.currentTarget && close()}
        >
          <motion.div
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            className="relative grid max-h-[94dvh] w-full max-w-[1500px] grid-cols-1 overflow-y-auto rounded-[12px] bg-[#fafafa] p-3 shadow-[0_0_100px_rgba(0,0,0,0.08)] sm:p-[13px] lg:w-[72vw] lg:min-w-[900px] lg:grid-cols-[0.4fr_0.6fr] lg:overflow-hidden"
          >
            {/* left: image panel */}
            <div className="relative hidden min-h-[560px] flex-col justify-between overflow-hidden rounded-[12px] bg-[#050c28] text-white lg:flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/popup.webp" alt="" width={900} height={1300} draggable={false} className="absolute inset-0 h-full w-full object-cover object-[60%_50%] opacity-80" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,12,40,0.9),rgba(5,12,40,0.3)_50%,rgba(5,12,40,0.78))]" />
              <div className="relative px-10 pt-10">
                <p aria-hidden className="text-[clamp(26px,2.3vw,34px)] font-medium leading-[1.14] tracking-[-0.03em]">
                  Have a product in mind? Tell us what you're building
                </p>
                <p className="mt-5 max-w-[420px] text-[15px] leading-[1.55] text-white/90">
                  One form, one team, one reply. Tell us what you're trying to build, improve or solve, and we'll help you find the next practical step.
                </p>
              </div>
              <div className="relative px-10 pb-9">
                <div className="overflow-hidden" aria-label="Highlights">
                  <ul className="popup-ticker flex w-max items-center" style={{ '--sp': '16s' }}>
                    {[0, 1].map((c) =>
                      ['Expert Team', 'NDA Protected', 'Quick Response'].map((t, i) => (
                        <li key={`${c}-${i}`} aria-hidden={c === 1} className="mr-3 flex min-h-[56px] shrink-0 items-center gap-2.5 rounded-[12px] bg-white/[0.14] px-4 text-[15px] font-medium">
                          {i === 0 ? <Users className="h-5 w-5" strokeWidth={1.8} aria-hidden /> : i === 1 ? <ShieldCheck className="h-5 w-5" strokeWidth={1.8} aria-hidden /> : <Rocket className="h-5 w-5" strokeWidth={1.8} aria-hidden />}
                          {t}
                        </li>
                      )),
                    )}
                  </ul>
                </div>
                <p className="mt-9 text-[14px] uppercase tracking-[0.16em] text-white/85">Startups and growing businesses worldwide</p>
              </div>
            </div>

            {/* right: form */}
            <div className="relative rounded-[12px] bg-white px-4 pb-4 pt-14 sm:px-8 lg:overflow-y-auto lg:px-[48px] lg:pb-5 lg:pt-[44px]">
              <button
                type="button"
                onClick={close}
                aria-label="Close dialog"
                className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 sm:right-4 sm:top-4"
              >
                <X className="h-7 w-7" strokeWidth={2} aria-hidden />
              </button>
              <h2 id="popup-title" className="text-[clamp(22px,1.9vw,28px)] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
                {inquiry.formHeading}
              </h2>
              <div className="mt-6">
                <ProjectForm idPrefix="popup-" compact source="inquiry-popup" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
