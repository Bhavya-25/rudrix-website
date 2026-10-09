'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight, Check } from 'lucide-react';
import { buildJourney as master } from '@/data/services';
import Cta from '@/components/Cta';

const ease = [0.22, 1, 0.36, 1];

function Panel({ ph, reduce }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#e4e2dc] lg:aspect-auto lg:h-[min(520px,62vh)]">
      <AnimatePresence initial={false}>
        <motion.div key={ph.number} className="absolute inset-0" initial={reduce ? false : { opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, transition: { duration: reduce ? 0 : 0.5 } }} transition={{ duration: reduce ? 0 : 0.7, ease }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ph.image} alt={ph.alt} width={1200} height={1000} loading="lazy" decoding="async" draggable={false} className="h-full w-full object-cover" style={{ objectPosition: ph.position }} />
        </motion.div>
      </AnimatePresence>
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent)]" />
      <p className="absolute bottom-5 left-5 right-5 text-[clamp(18px,2vw,28px)] font-normal leading-[1.15] tracking-[-0.02em] text-white sm:bottom-7 sm:left-7">{ph.overlay}</p>
    </div>
  );
}

function Copy({ ph }) {
  return (
    <>
      <p className="text-[12px] font-semibold tracking-[0.2em] text-[#d63c00]">PHASE {ph.number}</p>
      <h3 className="mt-2 text-[clamp(26px,2.6vw,38px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">{ph.title}</h3>
      <p className="mt-3 text-[clamp(17px,1.4vw,20px)] font-medium leading-[1.4] text-ink/85">{ph.lead}</p>
      <p className="mt-3 max-w-[560px] text-[15.5px] leading-[1.7] text-slate2">{ph.text}</p>
      <p className="mt-5 border-l-2 border-[#ff5a1f] pl-4 text-[14.5px] leading-[1.55] text-ink"><span className="block text-[11px] font-semibold tracking-[0.18em] text-[#8a8a85]">DELIVERABLE</span>{ph.deliverable}</p>
    </>
  );
}

export default function BuildJourney({ data }) {
  const d = data || master;
  const N = d.phases.length;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const runway = useRef(null);
  const ph = d.phases[active];

  // natural page scroll: each runway block becomes "active" when it crosses the viewport middle (no scroll hijacking)
  useEffect(() => {
    const el = runway.current;
    if (!el) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(Number(e.target.dataset.i)); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    el.querySelectorAll('[data-i]').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const jump = (i) => {
    const t = runway.current?.querySelector(`[data-i="${i}"]`);
    setActive(i);
    if (t) t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  };
  const rise = (dl = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : dl, ease } });

  return (
    <section aria-labelledby="bj-title" className="bg-[#f7f7f6] section-x py-[clamp(64px,8vw,120px)]">
      <div className="mx-auto max-w-[1245px]">
        <div className="max-w-[820px]">
          <motion.p {...rise(0)} className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-rudrix-strong sm:text-[13px]"><span aria-hidden className="h-px w-8 bg-rudrix-strong" />{d.eyebrow}</motion.p>
          <motion.h2 id="bj-title" {...rise(0.08)} className="mt-6 text-[clamp(30px,4vw,60px)] font-medium leading-[1.06] tracking-[-0.035em] text-ink">{d.title[0]}<br className="hidden sm:block" /> {d.title[1]}</motion.h2>
          <motion.p {...rise(0.16)} className="mt-6 max-w-[640px] text-[clamp(16px,1.35vw,19px)] leading-[1.65] text-slate2">{d.text}</motion.p>
        </div>

        {/* desktop: sticky timeline + active panel while the page scrolls naturally past invisible runway blocks */}
        <div className="relative mt-[clamp(36px,5vw,72px)] hidden lg:block" style={{ minHeight: `${N * 52}vh` }}>
          <div ref={runway} aria-hidden className="absolute inset-0 flex flex-col">{d.phases.map((p, i) => <div key={p.number} data-i={i} className="flex-1" />)}</div>
          <div className="sticky top-[110px] grid grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] gap-[clamp(32px,4vw,64px)]">
            <div className="flex flex-col">
            <div role="tablist" aria-label="Build phases" aria-orientation="vertical" className="relative flex flex-col gap-1">
              <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-[#e0e0dc]" />
              <span aria-hidden className="absolute left-[18px] top-6 w-[3px] origin-top bg-[#ff5a1f] shadow-[0_0_10px_rgba(255,90,31,0.5)] transition-[height] duration-500" style={{ height: `calc((100% - 48px) * ${active / (N - 1)})` }} />
              {d.phases.map((p, i) => {
                const on = i === active; const done = i < active;
                return (
                  <button key={p.number} type="button" role="tab" aria-selected={on} aria-controls="bj-panel" id={`bj-tab-${i}`} onClick={() => jump(i)} className="group relative flex min-h-[56px] items-center gap-4 rounded-[12px] py-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f]">
                    <span className={`relative z-10 grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full border text-[12px] font-medium transition-all duration-500 ${on ? 'border-[#ff5a1f] bg-[#ff5a1f] text-white shadow-[0_0_18px_rgba(255,90,31,0.45)]' : done ? 'border-[#ff5a1f] bg-[#f7f7f6] text-[#ff5a1f]' : 'border-[#d9d9d4] bg-[#f7f7f6] text-[#8a8a85]'}`}>{done ? <Check className="h-4 w-4" aria-hidden /> : p.number}</span>
                    <span className={`text-[clamp(18px,1.7vw,24px)] tracking-[-0.02em] transition-colors duration-300 ${on ? 'font-medium text-ink' : 'text-[#9a9a95] group-hover:text-ink'}`}>{p.title}</span>
                  </button>
                );
              })}
            </div>
              <Cta href={d.cta.href} size="sm" className="mt-6 w-fit">{d.cta.label}</Cta>
            </div>
            <div id="bj-panel" role="tabpanel" aria-labelledby={`bj-tab-${active}`} className="grid gap-6">
              <Panel ph={ph} reduce={reduce} />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={ph.number} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }} transition={{ duration: reduce ? 0 : 0.4, ease }}><Copy ph={ph} /></motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* mobile / tablet: every phase stacked and readable */}
        <ol className="mt-12 grid gap-10 lg:hidden">
          {d.phases.map((p) => (
            <li key={p.number}>
              <Panel ph={p} reduce={reduce} />
              <div className="mt-5"><Copy ph={p} /></div>
            </li>
          ))}
          <li>
            <Cta href={d.cta.href} size="sm" className="w-full sm:w-auto">{d.cta.label}</Cta>
          </li>
        </ol>
      </div>
    </section>
  );
}
