'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, m as motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { engagement as e } from '@/data/ourProcess';
import EngagementVisual from './EngagementVisuals';

const ease = [0.22, 1, 0.36, 1];
const N = e.models.length;

function Body({ m, reduce, wide }) {
  return (
    <div className={`grid gap-8 ${wide ? 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14' : ''}`}>
      <div>
        {wide && (
          <div className="flex items-end gap-5">
            <span aria-hidden className="text-[clamp(100px,12vw,170px)] font-light leading-[0.8] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_#ff5a1f]">{m.number}</span>
            <span className="pb-2 text-[12px] font-medium tracking-[0.2em] text-[#ff5a1f]">{m.category}</span>
          </div>
        )}
        {wide && <h3 className="mt-8 text-[clamp(30px,3.3vw,46px)] font-normal leading-[1.08] tracking-[-0.03em]">{m.title}</h3>}
        <p className={`${wide ? 'mt-4' : ''} max-w-[560px] text-[clamp(16px,1.25vw,18px)] leading-[1.7] text-[#969691]`}>{m.description}</p>
        <p className="mt-6 text-[11px] font-medium tracking-[0.18em] text-[#7d7d78]">BEST FOR</p>
        <ul className="mt-3 flex flex-wrap gap-2">{m.bestFor.map((b) => <li key={b} className="rounded-full border border-[#292929] px-3 py-1.5 text-[12.5px] text-[#c9c9c4]">{b}</li>)}</ul>
        <p className="mt-6 text-[11px] font-medium tracking-[0.18em] text-[#7d7d78]">YOU GET</p>
        <ul className="mt-3 grid gap-2 text-[14.5px] text-[#f5f5f2] sm:grid-cols-2">{m.gets.map((g) => <li key={g} className="flex items-center gap-2.5"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />{g}</li>)}</ul>
        <p className="mt-7 max-w-[520px] border-l-2 border-[#ff5a1f] pl-4 text-[15px] italic leading-[1.5] text-[#f5f5f2]/85"><span className="not-italic text-[11px] font-medium tracking-[0.18em] text-[#ff5a1f]">IDEAL WHEN </span><br />“{m.ideal}”</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="rounded-[10px] border border-[#292929] bg-[#0b0b0b] p-5 sm:p-6"><EngagementVisual kind={m.visual} reduce={reduce} /></div>
        <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-[8px] border border-[#292929] bg-[#292929]">
          {m.traits.map(([k, v]) => (
            <div key={k} className="bg-[#0b0b0b] p-3.5 sm:p-4"><dt className="text-[10px] font-medium tracking-[0.14em] text-[#7d7d78]">{k}</dt><dd className="mt-1.5 text-[15px] text-[#f5f5f2]">{v}</dd></div>
          ))}
        </dl>
        <p className="-mt-3 text-[11px] text-[#5f5f5a]">Describes the model in general, not a promise or a rating.</p>
      </div>
    </div>
  );
}

export default function EngagementModels() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [pick, setPick] = useState(null);
  const tabs = useRef([]);
  const m = e.models[active];
  const go = (i) => setActive(Math.max(0, Math.min(N - 1, i)));
  const onKey = (ev) => {
    const map = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: N - 1 };
    if (!(ev.key in map)) return;
    ev.preventDefault();
    const n = Math.max(0, Math.min(N - 1, map[ev.key]));
    go(n); tabs.current[n]?.focus();
  };
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : d, ease } });

  return (
    <section aria-labelledby="em-title" className="section-x overflow-hidden bg-[#070707] py-[clamp(72px,9vw,130px)] text-[#f5f5f2]">
      <div className="mx-auto max-w-[1245px]">
        <header className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <div>
            <motion.div {...rise(0)} className="relative inline-block p-[6px]">
              {['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((c) => <span key={c} aria-hidden className={`absolute h-[7px] w-[7px] bg-[#ff5a1f] ${c}`} />)}
              <p className="border border-[#ff5a1f] px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] text-[#ff5a1f] sm:text-[13px]">{e.eyebrow}</p>
            </motion.div>
            <motion.h2 id="em-title" {...rise(0.08)} className="mt-6 text-[clamp(30px,3.5vw,54px)] font-normal leading-[1.06] tracking-[-0.035em]">{e.title[0]}<br />{e.title[1]}</motion.h2>
          </div>
          <motion.p {...rise(0.16)} className="max-w-[500px] text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-[#969691]">{e.text}</motion.p>
        </header>

        {/* desktop: selector tabs + large active panel */}
        <motion.div {...rise(0.2)} className="mt-[clamp(40px,5vw,72px)] hidden lg:block">
          <div role="tablist" aria-label="Engagement models" onKeyDown={onKey} className="grid grid-cols-4 gap-3">
            {e.models.map((x, i) => {
              const on = i === active;
              return (
                <button key={x.number} ref={(el) => (tabs.current[i] = el)} type="button" role="tab" id={`em-tab-${i}`} aria-selected={on} aria-controls="em-panel" tabIndex={on ? 0 : -1} onClick={() => go(i)}
                  className={`group relative overflow-hidden rounded-[10px] border px-5 py-4 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f] ${on ? 'border-[#ff5a1f] bg-[#ff5a1f]/[0.07]' : 'border-[#292929] hover:border-[#4a4a47]'}`}>
                  <span className={`block text-[11px] font-medium tracking-[0.18em] ${on ? 'text-[#ff5a1f]' : 'text-[#7d7d78]'}`}>{x.number} / {x.short.toUpperCase()}</span>
                  <span className={`mt-2 block text-[clamp(15px,1.3vw,18px)] leading-tight ${on ? 'text-[#f5f5f2]' : 'text-[#8f8f8a] group-hover:text-white'}`}>{x.title}</span>
                  <span className={`mt-2 block text-[11px] tracking-[0.12em] transition-opacity duration-300 ${on ? 'text-[#ff5a1f] opacity-100' : 'text-[#7d7d78] opacity-0 group-hover:opacity-100'}`}>{x.category}</span>
                  {on && <motion.span layoutId="em-underline" aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] bg-[#ff5a1f]" transition={{ duration: reduce ? 0 : 0.4, ease }} />}
                </button>
              );
            })}
          </div>
          <div id="em-panel" role="tabpanel" aria-labelledby={`em-tab-${active}`} className="mt-5 min-h-[600px] rounded-[14px] border border-[#292929] bg-[#0b0b0b] p-[clamp(28px,3.4vw,52px)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }} transition={{ duration: reduce ? 0 : 0.45, ease }}>
                <Body m={m} reduce={reduce} wide />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* mobile / tablet: accordion */}
        <ol className="mt-12 lg:hidden">
          {e.models.map((x, i) => {
            const on = i === active;
            return (
              <li key={x.number} className="border-t border-[#292929] last:border-b">
                <h3>
                  <button type="button" aria-expanded={on} aria-controls={`em-m-${i}`} onClick={() => setActive(on ? -1 : i)} className="flex min-h-[64px] w-full items-center gap-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ff5a1f]">
                    <span className={`w-9 shrink-0 text-[13px] font-medium tracking-[0.12em] ${on ? 'text-[#ff5a1f]' : 'text-[#7d7d78]'}`}>{x.number}</span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-[11px] font-medium tracking-[0.18em] ${on ? 'text-[#ff5a1f]' : 'text-[#7d7d78]'}`}>{x.category}</span>
                      <span className={`mt-0.5 block text-[clamp(19px,5vw,24px)] leading-tight ${on ? 'text-[#f5f5f2]' : 'text-[#969691]'}`}>{x.title}</span>
                    </span>
                    <Plus aria-hidden className={`h-5 w-5 shrink-0 transition-transform duration-300 ${on ? 'rotate-45 text-[#ff5a1f]' : 'text-[#969691]'}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div id={`em-m-${i}`} role="region" aria-label={x.title} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduce ? 0 : 0.45, ease }} className="overflow-hidden">
                      <div className="pb-8"><Body m={x} reduce={reduce} /></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>

        <motion.p {...rise(0.05)} className="mt-6 text-[13px] italic text-[#5f5f5a]">{e.note}</motion.p>

        {/* optional lightweight model finder */}
        <motion.div {...rise(0.1)} className="mt-[clamp(40px,5vw,72px)] rounded-[14px] border border-[#292929] p-[clamp(22px,3vw,40px)]">
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#7d7d78]">{e.cta.lead}</p>
          <h3 className="mt-3 text-[clamp(22px,2.4vw,32px)] font-normal tracking-[-0.02em]">{e.finderTitle}</h3>
          <div role="radiogroup" aria-label={e.finderTitle} className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {e.models.map((x, i) => {
              const on = pick === i;
              return (
                <button key={x.number} type="button" role="radio" aria-checked={on} onClick={() => { setPick(i); setActive(i); }} className={`min-h-[56px] rounded-[10px] border px-4 py-3 text-left text-[14.5px] leading-snug transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f] ${on ? 'border-[#ff5a1f] bg-[#ff5a1f]/10 text-[#f5f5f2]' : 'border-[#292929] text-[#969691] hover:border-[#4a4a47] hover:text-white'}`}>{x.finder}</button>
              );
            })}
          </div>
          <div aria-live="polite" className="mt-5 min-h-[24px] text-[14px]">
            {pick !== null && <p><span className="text-[11px] font-medium tracking-[0.18em] text-[#ff5a1f]">YOUR STARTING POINT </span><span className="ml-2 text-[#f5f5f2]">{e.models[pick].number} / {e.models[pick].title}</span></p>}
          </div>
          <div className="mt-6 flex flex-col gap-5 border-t border-[#292929] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[520px] text-[15px] leading-[1.6] text-[#969691]"><span className="text-[#f5f5f2]">{e.cta.title}</span> {e.cta.text}</p>
            <Link href={e.cta.href} className="group inline-flex min-h-[52px] shrink-0 items-center gap-5 rounded-[6px] bg-[#ff5a1f] px-6 text-[15px] font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#e84b12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none">
              {e.cta.label}<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
