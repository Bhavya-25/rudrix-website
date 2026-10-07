'use client';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { upworkReviews as u } from '@/data/testimonials';

const ease = [0.22, 1, 0.36, 1];
const GREEN = '#14c452';
const corners = ['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'];

function Stars({ rating }) {
  return (
    <span className="flex items-center gap-2" aria-label={rating ? `Rated ${rating} out of 5` : 'Rating not yet added'}>
      <span className="flex gap-[3px]" aria-hidden>
        {[0, 1, 2, 3, 4].map((k) => <Star key={k} className={`h-[13px] w-[13px] ${rating ? 'fill-[#e8710a] text-[#e8710a]' : 'fill-[#d6d6d3] text-[#d6d6d3]'}`} />)}
      </span>
      <span className="text-[13px] text-[#444]">{rating || '—'}</span>
    </span>
  );
}

function Card({ r, i, reduce }) {
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : (i % 2) * 0.1, ease }}
      className="group rounded-[16px] border bg-white p-6 shadow-[0_2px_10px_-6px_rgba(0,0,0,0.12)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(20,196,82,0.45)] sm:p-8 lg:p-[34px] motion-reduce:transition-none"
      style={{ borderColor: GREEN, borderLeftWidth: 3 }}
    >
      <h3 className="text-[clamp(21px,2vw,30px)] font-normal leading-[1.15] tracking-[-0.02em] text-[#1d1d1d]">{r.title}</h3>
      <div className="mt-5 grid gap-x-6 gap-y-2 text-[14px] text-[#1d1d1d] sm:grid-cols-2">
        <p>{r.date}</p>
        <div className="flex flex-col gap-2.5">
          {r.rate && <p>{r.rate}</p>}
          {r.hours && <p>{r.hours}</p>}
          {r.earned && <p>{r.earned}</p>}
        </div>
      </div>
      <p className="mt-7 text-[clamp(17px,1.4vw,20px)] text-[#1d1d1d]">Client’s review</p>
      <div className="mt-3"><Stars rating={r.rating} /></div>
      <blockquote className="mt-3.5 text-[14.5px] italic leading-[1.7] text-[#2a2a2a]">“{r.review}”</blockquote>
      <p className="mt-3 text-[13px] text-[#6b6b68]">— {r.client}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Review attributes">
        {r.tags.slice(0, 5).map((t) => <li key={t} className="rounded-full bg-[#f1f1ef] px-3 py-1.5 text-[11.5px] text-[#444]">{t}</li>)}
        {r.tags.length > 5 && <li className="rounded-full bg-[#f1f1ef] px-3 py-1.5 text-[11.5px] text-[#444]">+{r.tags.length - 5}</li>}
      </ul>
      {r.placeholder && <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#b0b0ad]">Placeholder — not a real review</p>}
    </motion.article>
  );
}

export default function UpworkReviews() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(u.initial);
  const list = u.items.slice(0, shown);
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
          <div className="flex flex-col gap-6 lg:gap-[clamp(28px,3.4vw,48px)]">{left.map((r, i) => <Card key={r.id} r={r} i={i} reduce={reduce} />)}</div>
          <div className="flex flex-col gap-6 lg:mt-[clamp(60px,6vw,88px)] lg:gap-[clamp(28px,3.4vw,48px)]">{right.map((r, i) => <Card key={r.id} r={r} i={i + 1} reduce={reduce} />)}</div>
        </div>

        {shown < u.items.length && (
          <div className="mt-12 flex justify-center">
            <button type="button" onClick={() => setShown(u.items.length)} className="min-h-[52px] rounded-[8px] border border-[#1d1d1d] px-7 text-[15px] font-medium text-[#1d1d1d] transition-colors hover:bg-[#1d1d1d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14c452]">View More Reviews</button>
          </div>
        )}
      </div>
    </section>
  );
}
