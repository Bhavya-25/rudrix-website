'use client';
import { useEffect, useState } from 'react';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { Star, X } from 'lucide-react';
import { upworkReviews as u } from '@/data/testimonials';

const ease = [0.22, 1, 0.36, 1];
const GREEN = '#14c452';
const corners = ['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'];

function Stars({ rating }) {
  return (
    <span className="flex items-center gap-2" aria-label={`Rated ${rating} out of 5`}>
      <span className="flex gap-[3px]" aria-hidden>
        {[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-[13px] w-[13px] fill-[#e8710a] text-[#e8710a]" />)}
      </span>
      <span className="text-[13px] text-[#444]">{Number(rating).toFixed(1)}</span>
    </span>
  );
}

function Lightbox({ r, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = prev; };
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" aria-label={`Upwork review from ${r.name}`} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 sm:p-8" onClick={onClose}>
      <div className="relative max-h-full max-w-[860px] overflow-auto rounded-[16px] bg-white" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={r.screenshot} alt={r.alt} width={r.width} height={r.height} className="block h-auto w-full" />
        <button type="button" autoFocus onClick={onClose} aria-label="Close review" className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/80 text-white"><X className="h-5 w-5" aria-hidden /></button>
      </div>
    </div>
  );
}

function Card({ r, i, reduce, onOpen }) {
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : (i % 2) * 0.1, ease }}
      className="group rounded-[16px] border bg-white p-3 shadow-[0_2px_10px_-6px_rgba(0,0,0,0.12)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(20,196,82,0.45)] sm:p-4 motion-reduce:transition-none"
      style={{ borderColor: GREEN, borderLeftWidth: 3 }}
    >
      <button type="button" onClick={() => onOpen(r)} aria-label={`Open the full Upwork review from ${r.name}`} className="block w-full cursor-zoom-in overflow-hidden rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14c452]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={r.screenshot} alt={r.alt} width={r.width} height={r.height} loading="lazy" decoding="async" draggable={false} className="block h-auto w-full" />
      </button>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-2 pb-1 pt-4">
        <div>
          <p className="text-[16px] font-medium text-[#1d1d1d]">{r.name}</p>
          <p className="text-[13px] text-[#6b6b68]">{[r.location, r.role !== r.location ? r.role : null].filter(Boolean).join(' · ')}</p>
        </div>
        <Stars rating={r.rating} />
      </div>
    </motion.article>
  );
}

export default function UpworkReviews() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(null);
  const list = u.items;
  const left = list.filter((_, i) => i % 2 === 0);
  const right = list.filter((_, i) => i % 2 === 1);
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : d, ease } });
  return (
    <section aria-labelledby="uw-title" className="section-x bg-white py-[clamp(64px,8vw,110px)]">
      <div className="mx-auto max-w-[1360px]">
        <header className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <motion.div {...rise(0)} className="relative inline-block p-[6px]">
              {corners.map((c) => <span key={c} aria-hidden className={`absolute h-[7px] w-[7px] bg-[#ff5a1f] ${c}`} />)}
              <p className="border border-[#ff5a1f] px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] text-[#e04a10] sm:text-[13px]">{u.eyebrow}</p>
            </motion.div>
            <motion.h2 id="uw-title" {...rise(0.08)} className="mt-6 text-[clamp(40px,4.8vw,70px)] font-normal leading-[1.05] tracking-[-0.035em] text-[#1d1d1d]">{u.title[0]}<br />{u.title[1]}</motion.h2>
            <motion.p {...rise(0.16)} className="mt-6 max-w-[600px] text-[clamp(16px,1.3vw,19px)] leading-[1.65] text-[#6b6b68]">{u.text}</motion.p>
          </div>
          <motion.div {...rise(0.2)} className="inline-flex w-fit shrink-0 rounded-[8px] p-[5px]" style={{ background: '#0fd55a' }} role="img" aria-label={u.rating ? `Upwork rating ${u.rating} out of 5` : 'Upwork client reviews'}>
            <span className="grid place-items-center rounded-[6px] bg-[#04180b] px-5 py-5 text-[clamp(22px,2vw,30px)] font-semibold leading-none text-white sm:px-6">Upwork</span>
            <span className="flex flex-col justify-center px-4 text-white sm:px-5">
              {u.rating ? (
                <>
                  <span className="text-[clamp(22px,2vw,30px)] font-semibold leading-none">{u.rating}/5</span>
                  <span className="mt-1.5 flex gap-1" aria-hidden>{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="h-5 w-5 fill-white text-white" />)}</span>
                </>
              ) : (
                <span className="text-[clamp(18px,1.6vw,24px)] font-semibold leading-tight">Client<br />Reviews</span>
              )}
            </span>
          </motion.div>
        </header>

        <div aria-hidden className="mt-[clamp(36px,4vw,64px)] h-px w-full bg-black/10" />

        <div className="mt-[clamp(32px,4vw,60px)] grid items-start gap-6 lg:grid-cols-2 lg:gap-[clamp(28px,3.4vw,48px)]">
          <div className="flex flex-col gap-6 lg:gap-[clamp(28px,3.4vw,48px)]">{left.map((r, i) => <Card key={r.id} r={r} i={i} reduce={reduce} onOpen={setOpen} />)}</div>
          <div className="flex flex-col gap-6 lg:mt-[clamp(60px,6vw,88px)] lg:gap-[clamp(28px,3.4vw,48px)]">{right.map((r, i) => <Card key={r.id} r={r} i={i + 1} reduce={reduce} onOpen={setOpen} />)}</div>
        </div>

        {open && <Lightbox r={open} onClose={() => setOpen(null)} />}
      </div>
    </section>
  );
}
