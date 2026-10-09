'use client';
import { useId, useState } from 'react';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { contact } from '@/data/contact';

export default function ContactFAQ() {
  const uid = useId();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(null);
  const f = contact.faq;
  return (
    <ul className="divide-y divide-black/10 border-y border-black/10">
      {f.items.map((it, i) => {
        const on = open === i;
        return (
          <motion.li key={it.q} initial={reduce ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -5% 0px' }} transition={{ duration: 0.5, delay: i * 0.05 }}>
            <h3>
              <button type="button" id={`${uid}-b${i}`} aria-expanded={on} aria-controls={`${uid}-p${i}`} onClick={() => setOpen(on ? null : i)} className="group flex min-h-[72px] w-full items-center gap-5 py-4 text-left">
                <span className="w-9 shrink-0 text-[14px] tabular-nums text-rudrix-strong" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1 text-[clamp(17px,1.7vw,22px)] font-medium leading-snug text-ink">{it.q}</span>
                <span aria-hidden className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-[22px] leading-none transition-[transform,background-color] duration-300 group-hover:bg-black/[0.04] ${on ? 'rotate-45' : ''}`}>+</span>
              </button>
            </h3>
            <div id={`${uid}-p${i}`} role="region" aria-labelledby={`${uid}-b${i}`} className={`grid transition-[grid-template-rows,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${on ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden"><p className="max-w-[760px] pb-6 pl-14 pr-4 text-[16px] leading-[1.7] text-slate2 sm:text-[17px]">{it.a}</p></div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
