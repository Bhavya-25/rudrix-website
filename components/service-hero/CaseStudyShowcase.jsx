'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, m as motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CircleCheck, TriangleAlert } from 'lucide-react';
import { customSoftwareCases as master } from '@/data/services';
import { conceptCases } from '@/data/work';

const ease = [0.22, 1, 0.36, 1];
const projects = conceptCases.projects;
const N = projects.length;
const mod = (i) => ((i % N) + N) % N;

export default function CaseStudyShowcase({ data }) {
  const h = data || master;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const lock = useRef(false);
  const touch = useRef(null);
  const p = projects[active];

  const go = (s) => {
    if (lock.current) return;
    lock.current = true;
    setDir(s);
    setActive((a) => mod(a + s));
    setTimeout(() => { lock.current = false; }, reduce ? 150 : 700);
  };
  const onKey = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
  };
  const rise = (dl = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : dl, ease } });
  const x = reduce ? 0 : 48;
  const slide = {
    initial: (d) => ({ opacity: 0, x: d * x }),
    animate: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: -d * x }),
  };

  return (
    <section aria-labelledby="cs-title" className="bg-[#f7f7f6] section-x py-[clamp(56px,7vw,110px)]">
      <div className="mx-auto max-w-[1245px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <motion.h2 id="cs-title" {...rise(0)} className="text-[clamp(32px,4.2vw,64px)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">{h.title[0]}<br />{h.title[1]}</motion.h2>
            <motion.p {...rise(0.08)} className="mt-6 max-w-[620px] text-[clamp(16px,1.3vw,18px)] leading-[1.65] text-slate2">{h.text}</motion.p>
          </div>
          <motion.div {...rise(0.16)} className="lg:pb-2">
            <Link href={h.cta.href} className="group inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap text-[17px] font-semibold text-rudrix-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]">
              {h.cta.label}<ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...rise(0.1)}
          role="region" aria-roledescription="carousel" aria-label="Case studies" tabIndex={0} onKeyDown={onKey}
          onPointerDown={(e) => { if (e.pointerType !== 'mouse') touch.current = e.clientX; }}
          onPointerUp={(e) => { if (touch.current == null) return; const dx = e.clientX - touch.current; touch.current = null; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); }}
          style={{ touchAction: 'pan-y' }}
          className="mt-[clamp(32px,4vw,60px)] outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a1f]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f7f6]"
        >
          <motion.div animate={{ backgroundColor: p.color }} transition={{ duration: reduce ? 0 : 0.6 }} className="overflow-hidden rounded-[10px] p-[clamp(18px,2.4vw,36px)] text-white" style={{ backgroundColor: p.color }}>
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.div key={p.id} custom={dir} variants={slide} initial="initial" animate="animate" exit="exit" transition={{ duration: reduce ? 0 : 0.5, ease }} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-[clamp(28px,3.4vw,52px)]">
                <div className="flex flex-col lg:py-[clamp(8px,1.6vw,24px)]">
                  <h3 className="text-[clamp(28px,2.9vw,44px)] font-medium leading-[1.1] tracking-[-0.025em]">{p.title}</h3>
                  <p className="mt-4 max-w-[560px] text-[clamp(16px,1.35vw,19px)] leading-[1.5] text-white/85">{p.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Services provided">
                    {p.services.map((s) => <li key={s} className="rounded-[4px] bg-white/[0.16] px-[18px] py-2.5 text-[15px] text-white">{s}</li>)}
                  </ul>
                  <p className="mt-6 text-[15px] font-semibold">Concept project</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-auto lg:pt-10">
                    <div className="rounded-[6px] bg-white p-5 text-[#1d1d1d]">
                      <p className="flex items-center gap-2.5 text-[15px] font-semibold"><TriangleAlert className="h-[18px] w-[18px] text-[#e5311d]" aria-hidden />Challenge</p>
                      <p className="mt-3 text-[14.5px] leading-[1.65] text-[#5f5f5c]">{p.challenge}</p>
                    </div>
                    <div className="rounded-[6px] bg-white p-5 text-[#1d1d1d]">
                      <p className="flex items-center gap-2.5 text-[15px] font-semibold"><CircleCheck className="h-[18px] w-[18px] text-[#1db954]" aria-hidden />Solution</p>
                      <p className="mt-3 text-[14.5px] leading-[1.65] text-[#5f5f5c]">{p.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-black/20 lg:aspect-auto lg:min-h-[520px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.alt} width={1400} height={1250} loading="lazy" decoding="async" draggable={false} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: p.position }} />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="mt-6 flex justify-center gap-3">
            <button type="button" aria-label="Previous case study" onClick={() => go(-1)} className="grid h-[48px] w-[58px] place-items-center rounded-full border border-black/20 text-ink transition-[transform,background-color,border-color] duration-300 hover:-translate-x-0.5 hover:border-black/50 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] motion-reduce:transition-none"><ArrowLeft className="h-5 w-5" aria-hidden /></button>
            <button type="button" aria-label="Next case study" onClick={() => go(1)} className="grid h-[48px] w-[58px] place-items-center rounded-full border border-black/20 text-ink transition-[transform,background-color,border-color] duration-300 hover:translate-x-0.5 hover:border-black/50 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] motion-reduce:transition-none"><ArrowRight className="h-5 w-5" aria-hidden /></button>
          </div>
          <p className="sr-only" aria-live="polite">Case study {active + 1} of {N}: {p.title}</p>
        </motion.div>
      </div>
    </section>
  );
}
