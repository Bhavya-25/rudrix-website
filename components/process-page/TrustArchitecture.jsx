'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, LayoutGroup, m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight, Plus } from 'lucide-react';
import { trust as t } from '@/data/ourProcess';

const ease = [0.22, 1, 0.36, 1];

function Principle({ p, open, onToggle, reduce }) {
  const dur = reduce ? 0 : 0.5;
  return (
    <li className="relative border-t border-[#d8d8d3] last:border-b">
      {open && <motion.span layoutId="trust-marker" aria-hidden className="absolute -left-px top-0 h-full w-[3px] bg-[#ff5a1f]" transition={{ duration: reduce ? 0 : 0.45, ease }} />}
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`trust-${p.id}`}
          onClick={onToggle}
          className="group flex min-h-[44px] w-full items-center gap-4 py-6 pl-5 pr-2 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ff5a1f] sm:gap-6 sm:pl-8 sm:py-7"
        >
          <span className={`w-8 shrink-0 text-[13px] font-medium tracking-[0.12em] transition-colors duration-300 ${open ? 'text-[#ff5a1f]' : 'text-[#9a9a95] group-hover:text-[#ff5a1f]'}`}>{p.number}</span>
          <span className={`flex-1 text-[clamp(22px,2.4vw,36px)] leading-[1.1] tracking-[-0.025em] transition-[color,transform] duration-300 ${open ? 'font-medium text-[#171717]' : 'font-normal text-[#171717]/55 group-hover:translate-x-1 group-hover:text-[#171717]'}`}>{p.title}</span>
          <span aria-hidden className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${open ? 'rotate-45 border-[#ff5a1f] bg-[#ff5a1f] text-white' : 'border-[#d8d8d3] text-[#171717] group-hover:border-[#171717]'}`}><Plus className="h-4 w-4" /></span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`trust-${p.id}`}
            role="region"
            aria-label={p.title}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: dur, ease }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 pb-8 pl-5 sm:pl-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-8 lg:pl-[calc(2rem+56px)]">
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 1.05, x: 16 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: reduce ? 0 : 0.7, ease }}
                className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-[#e9e9e4] md:order-2 md:aspect-[4/5]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.alt} width={800} height={1000} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: p.pos }} />
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(0,0,0,0.35),transparent)]" />
              </motion.div>
              <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.1, ease }} className="flex flex-col justify-between gap-6 md:order-1 md:pr-2">
                <p className="text-[clamp(16px,1.25vw,18px)] leading-[1.7] text-[#686868]">{p.description}</p>
                <p className="flex items-center gap-3 text-[12px] font-medium tracking-[0.14em] text-[#171717]">
                  <span aria-hidden className="h-px w-8 bg-[#ff5a1f]" />{p.number} / {p.label}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function TrustArchitecture() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(t.principles[0].id);
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 25 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.75, delay: reduce ? 0 : d, ease } });
  return (
    <section aria-labelledby="trust-title" className="section-x bg-[#f7f7f4] py-[clamp(72px,9vw,130px)] text-[#171717]">
      <div className="mx-auto grid max-w-[1245px] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-[clamp(48px,6vw,110px)]">
        <div className="lg:sticky lg:top-[120px] lg:self-start">
          <motion.div {...rise(0)} className="relative inline-block p-[6px]">
            {['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((c) => <span key={c} aria-hidden className={`absolute h-[7px] w-[7px] bg-[#ff5a1f] ${c}`} />)}
            <p className="border border-[#ff5a1f] px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] text-[#e04a10] sm:text-[13px]">{t.eyebrow}</p>
          </motion.div>
          <motion.h2 id="trust-title" {...rise(0.08)} className="mt-6 text-[clamp(32px,3.5vw,54px)] font-normal leading-[1.05] tracking-[-0.035em]">
            {t.title.map((l, i) => <span key={l} className="block">{l}</span>)}
          </motion.h2>
          <motion.p {...rise(0.16)} className="mt-6 max-w-[480px] text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-[#686868]">{t.text}</motion.p>
          <motion.div {...rise(0.24)} className="mt-9">
            <Link href={t.cta.href} className="group inline-flex min-h-[48px] items-center gap-3 rounded-[6px] bg-[#ff5a1f] px-6 text-[15px] font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#e84b12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] motion-reduce:transition-none">
              {t.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <div>
          <motion.div {...rise(0.12)}>
            <LayoutGroup>
              <ul className="relative">
                {t.principles.map((p) => (
                  <Principle key={p.id} p={p} open={open === p.id} onToggle={() => setOpen((cur) => (cur === p.id ? null : p.id))} reduce={reduce} />
                ))}
              </ul>
            </LayoutGroup>
          </motion.div>
          <motion.p {...rise(0.2)} className="mt-8 text-[14px] italic text-[#9a9a95]">{t.closing}</motion.p>
        </div>
      </div>
    </section>
  );
}
