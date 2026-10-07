'use client';
import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Plus } from 'lucide-react';
import { milestones as m } from '@/data/ourProcess';
import MilestoneVisual from './MilestoneVisuals';

const ease = [0.22, 1, 0.36, 1];
const N = m.items.length;

function Detail({ it, index, reduce, compact }) {
  return (
    <div className={`grid gap-8 ${compact ? '' : 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14'}`}>
      <div>
        {!compact && (
          <div className="flex items-end gap-5">
            <span aria-hidden className="text-[clamp(110px,13vw,190px)] font-light leading-[0.8] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_#ff5a1f]">{it.number}</span>
            <span className="pb-2 text-[12px] font-medium tracking-[0.2em] text-[#ff5a1f]">{it.category}</span>
          </div>
        )}
        {!compact && <h3 className="mt-8 text-[clamp(30px,3.4vw,48px)] font-normal leading-[1.08] tracking-[-0.03em] text-[#f5f5f2]">{it.title}</h3>}
        <p className={`${compact ? '' : 'mt-4'} max-w-[560px] text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-[#9b9b96]`}>{it.description}</p>
        <p className="mt-5 max-w-[520px] border-l-2 border-[#ff5a1f] pl-4 text-[16px] italic leading-[1.5] text-[#f5f5f2]/85">“{it.question}”</p>
      </div>
      <div className="flex flex-col gap-6">
        {!compact && (
          <div className="relative flex aspect-[10/7] items-center justify-center overflow-hidden rounded-[10px] border border-[#292929] bg-[#0e0e0e]">
            <span aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,90,31,0.18),transparent_60%)]" />
            <MilestoneVisual index={index} reduce={reduce} className="relative h-[82%] w-auto" />
          </div>
        )}
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[8px] border border-[#292929] bg-[#292929] text-[13px]">
          <div className="bg-[#0b0b0b] p-4"><dt className="text-[11px] tracking-[0.14em] text-[#7d7d78]">INPUT</dt><dd className="mt-1.5 text-[#f5f5f2]">{it.input}</dd></div>
          <div className="bg-[#0b0b0b] p-4"><dt className="text-[11px] tracking-[0.14em] text-[#ff5a1f]">OUTPUT</dt><dd className="mt-1.5 text-[#f5f5f2]">{it.output}</dd></div>
          <div className="col-span-2 bg-[#0b0b0b] p-4"><dt className="text-[11px] tracking-[0.14em] text-[#7d7d78]">DELIVERABLE</dt><dd className="mt-1.5 text-[16px] text-[#f5f5f2]">{it.deliverable}</dd></div>
        </dl>
        <ul className="flex flex-wrap gap-2" aria-label="Focus areas">
          {it.tags.map((t) => <li key={t} className="rounded-full border border-[#292929] px-3 py-1.5 text-[12px] text-[#9b9b96]">{t}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default function MilestoneMap() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
  const tabs = useRef([]);
  const touch = useRef(null);
  const pct = seen ? active / (N - 1) : 0;
  const go = (i) => setActive(Math.max(0, Math.min(N - 1, i)));
  const onKey = (e) => {
    const map = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: N - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    const next = Math.max(0, Math.min(N - 1, map[e.key]));
    go(next);
    tabs.current[next]?.focus();
  };
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 25 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.75, delay: reduce ? 0 : d, ease } });
  const it = m.items[active];

  return (
    <section ref={ref} aria-labelledby="ms-title" className="section-x overflow-hidden bg-[#080808] py-[clamp(72px,9vw,130px)] text-[#f5f5f2]">
      <div className="mx-auto max-w-[1245px]">
        <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
          <div>
            <motion.div {...rise(0)} className="relative inline-block p-[6px]">
              {['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((c) => <span key={c} aria-hidden className={`absolute h-[7px] w-[7px] bg-white ${c}`} />)}
              <p className="border border-white px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] sm:text-[13px]">{m.eyebrow}</p>
            </motion.div>
            <motion.h2 id="ms-title" {...rise(0.08)} className="mt-6 text-[clamp(34px,4.3vw,66px)] font-normal leading-[1.04] tracking-[-0.035em]">{m.title[0]}<br />{m.title[1]}</motion.h2>
          </div>
          <motion.p {...rise(0.16)} className="max-w-[520px] text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-[#9b9b96]">{m.text}</motion.p>
        </header>

        {/* DESKTOP: milestone route + one large active panel */}
        <div className="mt-[clamp(48px,6vw,90px)] hidden lg:block">
          <div role="tablist" aria-label="Project milestones" aria-orientation="horizontal" onKeyDown={onKey} className="relative grid grid-cols-6">
            <span aria-hidden className="absolute left-[calc(100%/12)] right-[calc(100%/12)] top-[21px] h-px bg-[#292929]" />
            <span aria-hidden className="absolute left-[calc(100%/12)] right-[calc(100%/12)] top-[20px] h-[3px]">
              <motion.span className="block h-full origin-left bg-[#ff5a1f] shadow-[0_0_14px_2px_rgba(255,90,31,0.55)]" initial={false} animate={{ scaleX: pct }} transition={{ duration: reduce ? 0 : 0.7, ease }} />
            </span>
            {m.items.map((x, i) => {
              const on = i === active; const done = i < active;
              return (
                <button key={x.number} ref={(el) => (tabs.current[i] = el)} type="button" role="tab" id={`ms-tab-${i}`} aria-selected={on} aria-controls="ms-panel" tabIndex={on ? 0 : -1} onClick={() => go(i)}
                  className="group relative flex flex-col items-center px-2 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a1f]">
                  <span className={`relative z-10 grid h-[44px] w-[44px] place-items-center rounded-full border text-[13px] font-medium transition-all duration-500 ${on ? 'scale-110 border-[#ff5a1f] bg-[#ff5a1f] text-white shadow-[0_0_24px_rgba(255,90,31,0.5)]' : done ? 'border-[#ff5a1f] bg-[#080808] text-[#ff5a1f]' : 'border-[#292929] bg-[#080808] text-[#7d7d78] group-hover:border-[#6b6b66] group-hover:text-[#f5f5f2]'}`}>
                    {done ? <Check className="h-4 w-4" aria-hidden /> : x.number}
                  </span>
                  <span className={`mt-4 text-[11px] font-medium tracking-[0.18em] transition-colors duration-300 ${on ? 'text-[#ff5a1f]' : 'text-[#7d7d78]'}`}>{x.category}</span>
                  <span className={`mt-1.5 max-w-[170px] text-[15px] leading-[1.25] transition-colors duration-300 ${on ? 'text-[#f5f5f2]' : 'text-[#7d7d78] group-hover:text-[#c9c9c4]'}`}>{x.title}</span>
                </button>
              );
            })}
          </div>

          <div id="ms-panel" role="tabpanel" aria-labelledby={`ms-tab-${active}`} onPointerDown={(e) => { if (e.pointerType !== 'mouse') touch.current = e.clientX; }} onPointerUp={(e) => { if (touch.current == null) return; const dx = e.clientX - touch.current; touch.current = null; if (Math.abs(dx) > 60) go(active + (dx < 0 ? 1 : -1)); }} style={{ touchAction: 'pan-y' }} className="mt-[clamp(40px,5vw,70px)] min-h-[560px] rounded-[14px] border border-[#292929] bg-[#0b0b0b] p-[clamp(28px,3.4vw,52px)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }} transition={{ duration: reduce ? 0 : 0.4, ease }}>
                <Detail it={it} index={active} reduce={reduce} />
              </motion.div>
            </AnimatePresence>
            <div className="mt-10 flex items-center justify-between border-t border-[#292929] pt-6">
              <p className="text-[13px] tracking-[0.14em] text-[#7d7d78]" aria-live="polite">MILESTONE {it.number} / 0{N}</p>
              <div className="flex gap-3">
                <button type="button" onClick={() => go(active - 1)} disabled={active === 0} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#3a3a3a] px-5 text-[12px] font-medium tracking-[0.14em] transition-colors hover:border-[#ff5a1f] hover:text-[#ff5a1f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#3a3a3a] disabled:hover:text-inherit"><ArrowLeft className="h-4 w-4" aria-hidden />PREVIOUS</button>
                <button type="button" onClick={() => go(active + 1)} disabled={active === N - 1} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#ff5a1f] bg-[#ff5a1f] px-5 text-[12px] font-medium tracking-[0.14em] text-white transition-colors hover:bg-[#e84b12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:border-[#3a3a3a] disabled:bg-transparent disabled:text-[#7d7d78] disabled:opacity-60">NEXT<ArrowRight className="h-4 w-4" aria-hidden /></button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET: vertical milestone journey (accordion) */}
        <ol className="relative mt-12 lg:hidden">
          <span aria-hidden className="absolute bottom-6 left-[21px] top-6 w-px bg-[#292929]" />
          <span aria-hidden className="absolute left-[20px] top-6 w-[3px] origin-top bg-[#ff5a1f] shadow-[0_0_12px_rgba(255,90,31,0.55)] transition-[height] duration-700" style={{ height: `calc((100% - 48px) * ${seen ? active / (N - 1) : 0})` }} />
          {m.items.map((x, i) => {
            const on = i === active; const done = i < active;
            return (
              <li key={x.number} className="relative pb-2">
                <h3>
                  <button type="button" aria-expanded={on} aria-controls={`ms-m-${i}`} onClick={() => setActive(i)} className="flex min-h-[56px] w-full items-center gap-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f]">
                    <span className={`relative z-10 grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full border text-[13px] font-medium transition-all duration-500 ${on ? 'border-[#ff5a1f] bg-[#ff5a1f] text-white' : done ? 'border-[#ff5a1f] bg-[#080808] text-[#ff5a1f]' : 'border-[#292929] bg-[#080808] text-[#7d7d78]'}`}>{done ? <Check className="h-4 w-4" aria-hidden /> : x.number}</span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-[11px] font-medium tracking-[0.18em] ${on ? 'text-[#ff5a1f]' : 'text-[#7d7d78]'}`}>{x.category}</span>
                      <span className={`mt-0.5 block text-[clamp(19px,5vw,24px)] leading-tight ${on ? 'text-[#f5f5f2]' : 'text-[#9b9b96]'}`}>{x.title}</span>
                    </span>
                    <Plus aria-hidden className={`h-5 w-5 shrink-0 text-[#9b9b96] transition-transform duration-300 ${on ? 'rotate-45 text-[#ff5a1f]' : ''}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div id={`ms-m-${i}`} role="region" aria-label={x.title} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduce ? 0 : 0.45, ease }} className="overflow-hidden">
                      <div className="pb-6 pl-[60px]">
                        <Detail it={x} index={i} reduce={reduce} compact />
                        <div className="mt-5 flex gap-3">
                          <button type="button" onClick={() => go(i - 1)} disabled={i === 0} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#3a3a3a] px-4 text-[12px] font-medium tracking-[0.14em] disabled:opacity-35"><ArrowLeft className="h-4 w-4" aria-hidden />PREV</button>
                          <button type="button" onClick={() => go(i + 1)} disabled={i === N - 1} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#ff5a1f] bg-[#ff5a1f] px-4 text-[12px] font-medium tracking-[0.14em] text-white disabled:border-[#3a3a3a] disabled:bg-transparent disabled:opacity-40">NEXT<ArrowRight className="h-4 w-4" aria-hidden /></button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
