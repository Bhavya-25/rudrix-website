'use client';
import { useRef, useState } from 'react';
import { AnimatePresence, m as motion, useInView, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { visibility as v } from '@/data/ourProcess';

const ease = [0.22, 1, 0.36, 1];
const N = v.items.length;

function Mark({ s }) {
  return (
    <span aria-hidden className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full text-[10px] ${s === 'done' ? 'bg-white/10 text-white' : s === 'now' ? 'bg-[#ff5a1f] text-white' : 'border border-white/25'}`}>
      {s === 'done' ? <Check className="h-3 w-3" /> : s === 'now' ? <span className="h-1.5 w-1.5 rounded-full bg-white" /> : null}
    </span>
  );
}

function Timeline() {
  const cols = [
    ['COMPLETED', [['Discovery', 'done'], ['Product direction', 'done']]],
    ['IN PROGRESS', [['UI system', 'now']]],
    ['NEXT', [['Design review', 'next'], ['Build kickoff', 'next']]],
  ];
  return (
    <div className="grid gap-px overflow-hidden rounded-[10px] border border-[#292929] bg-[#292929] sm:grid-cols-3">
      {cols.map(([h, rows]) => (
        <div key={h} className="bg-[#0b0b0b] p-5">
          <p className={`text-[11px] font-medium tracking-[0.18em] ${h === 'IN PROGRESS' ? 'text-[#ff5a1f]' : 'text-[#7d7d78]'}`}>{h}</p>
          <ul className="mt-4 flex flex-col gap-3 text-[14px] text-[#f5f5f2]">
            {rows.map(([t, s]) => <li key={t} className={`flex items-center gap-3 ${s === 'next' ? 'text-white/50' : ''}`}><Mark s={s} />{t}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function People() {
  const nodes = ['CLIENT', 'DESIGN', 'ENGINEERING'];
  return (
    <div className="flex flex-col items-stretch rounded-[10px] border border-[#292929] bg-[#0b0b0b] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-9">
      {nodes.map((n, i) => (
        <div key={n} className="flex flex-col items-center sm:flex-row">
          <span className={`rounded-full border px-5 py-3 text-[12px] font-medium tracking-[0.18em] ${i === 0 ? 'border-[#ff5a1f] text-[#ff5a1f]' : 'border-[#3a3a3a] text-[#f5f5f2]'}`}>{n}</span>
          {i < nodes.length - 1 && (
            <span aria-hidden className="flex flex-col items-center py-2 text-[#ff5a1f] sm:flex-row sm:px-4 sm:py-0">
              <span className="h-5 w-px bg-[#ff5a1f]/60 sm:h-px sm:w-10" /><span className="mx-1 text-[14px] leading-none sm:mx-2">↔</span><span className="h-5 w-px bg-[#ff5a1f]/60 sm:h-px sm:w-10" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function Board({ reduce }) {
  const rows = [['Discovery', 100, 'done'], ['Design', 82, 'now'], ['Development', 41, 'now'], ['QA', 0, 'next'], ['Launch', 0, 'next']];
  return (
    <div className="rounded-[10px] border border-[#292929] bg-[#0b0b0b] p-5">
      <p className="text-[11px] font-medium tracking-[0.18em] text-[#7d7d78]">CONCEPTUAL PROJECT VIEW</p>
      <ul className="mt-5 flex flex-col gap-4">
        {rows.map(([name, p, s], i) => (
          <li key={name} className="grid grid-cols-[110px_1fr_40px] items-center gap-4 text-[13px] sm:grid-cols-[130px_1fr_44px]">
            <span className={s === 'next' ? 'text-white/45' : 'text-[#f5f5f2]'}>{name}</span>
            <span className="h-[3px] overflow-hidden rounded-full bg-[#292929]">
              <motion.span className="block h-full origin-left rounded-full bg-[#ff5a1f]" style={{ width: `${p}%` }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.1 + i * 0.07, ease }} />
            </span>
            <span className="text-right tabular-nums text-[#8f8f8a]">{p}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Scope() {
  const rows = [['PROJECT', 'Website / SaaS / eCommerce', 'next'], ['CURRENT SCOPE', 'Approved', 'done'], ['CHANGE REQUEST', 'Client review required', 'now']];
  return (
    <div className="divide-y divide-[#292929] overflow-hidden rounded-[10px] border border-[#292929] bg-[#0b0b0b]">
      {rows.map(([k, val, s]) => (
        <div key={k} className="flex items-center justify-between gap-4 px-5 py-4">
          <div><p className="text-[11px] font-medium tracking-[0.18em] text-[#7d7d78]">{k}</p><p className="mt-1.5 text-[15px] text-[#f5f5f2]">{val}</p></div>
          {s !== 'next' && <Mark s={s} />}
        </div>
      ))}
    </div>
  );
}

const visuals = { timeline: Timeline, people: People, board: Board, scope: Scope };

export default function ClientVisibility() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
  const tabs = useRef([]);
  const mtabs = useRef([]);
  const it = v.items[active];
  const Visual = visuals[it.kind];
  const frac = seen ? active / (N - 1) : 0;
  const onKey = (refs) => (e) => {
    const map = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: N - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    const n = Math.max(0, Math.min(N - 1, map[e.key]));
    setActive(n);
    refs.current[n]?.focus();
  };
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : d, ease } });

  return (
    <section ref={ref} aria-labelledby="cv-title" className="section-x overflow-hidden bg-[#0a0a0a] py-[clamp(72px,9vw,130px)] text-[#f5f5f2]">
      <div className="mx-auto max-w-[1245px]">
        <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-end lg:gap-16">
          <div>
            <motion.div {...rise(0)} className="relative inline-block p-[6px]">
              {['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((c) => <span key={c} aria-hidden className={`absolute h-[7px] w-[7px] bg-white ${c}`} />)}
              <p className="border border-white px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] sm:text-[13px]">{v.eyebrow}</p>
            </motion.div>
            <motion.h2 id="cv-title" {...rise(0.08)} className="mt-6 text-[clamp(34px,4.3vw,66px)] font-normal leading-[1.04] tracking-[-0.035em]">{v.title[0]}<br />{v.title[1]}</motion.h2>
          </div>
          <motion.p {...rise(0.16)} className="max-w-[500px] text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-[#8f8f8a]">{v.text}</motion.p>
        </header>

        <motion.div {...rise(0.2)} className="mt-[clamp(40px,5vw,80px)] grid gap-8 lg:grid-cols-[minmax(0,4.4fr)_minmax(0,7.6fr)] lg:gap-[clamp(32px,4vw,64px)]">
          {/* desktop: vertical index with progress line */}
          <div role="tablist" aria-label="Visibility principles" aria-orientation="vertical" onKeyDown={onKey(tabs)} className="relative hidden self-start lg:block">
            <span aria-hidden className="absolute bottom-[34px] left-[19px] top-[34px] w-px bg-[#292929]" />
            <span aria-hidden className="absolute bottom-[34px] left-[18px] top-[34px] w-[3px]">
              <motion.span className="block h-full origin-top bg-[#ff5a1f] shadow-[0_0_12px_rgba(255,90,31,0.55)]" initial={false} animate={{ scaleY: frac }} transition={{ duration: reduce ? 0 : 0.6, ease }} />
            </span>
            {v.items.map((x, i) => {
              const on = i === active;
              return (
                <button key={x.number} ref={(el) => (tabs.current[i] = el)} type="button" role="tab" id={`cv-tab-${i}`} aria-selected={on} aria-controls="cv-panel" tabIndex={on ? 0 : -1} onClick={() => setActive(i)}
                  className={`group relative flex w-full items-center gap-5 rounded-[10px] border py-4 pl-0 pr-4 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f] ${on ? 'border-[#3a3a3a] bg-white/[0.03]' : 'border-transparent hover:bg-white/[0.02]'}`}>
                  <span className={`relative z-10 grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full border text-[12px] font-medium transition-all duration-500 ${on ? 'border-[#ff5a1f] bg-[#ff5a1f] text-white shadow-[0_0_20px_rgba(255,90,31,0.5)]' : i < active ? 'border-[#ff5a1f] bg-[#0a0a0a] text-[#ff5a1f]' : 'border-[#292929] bg-[#0a0a0a] text-[#7d7d78] group-hover:border-[#6b6b66] group-hover:text-white'}`}>{x.number}</span>
                  <span>
                    <span className={`block text-[11px] font-medium tracking-[0.18em] transition-colors ${on ? 'text-[#ff5a1f]' : 'text-[#7d7d78] group-hover:text-[#ff5a1f]'}`}>{x.category}</span>
                    <span className={`mt-1 block text-[clamp(17px,1.5vw,21px)] leading-tight transition-colors ${on ? 'text-[#f5f5f2]' : 'text-[#8f8f8a] group-hover:text-white'}`}>{x.nav}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* mobile / tablet: compact 01–04 selector */}
          <div role="tablist" aria-label="Visibility principles" onKeyDown={onKey(mtabs)} className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
            {v.items.map((x, i) => {
              const on = i === active;
              return (
                <button key={x.number} ref={(el) => (mtabs.current[i] = el)} type="button" role="tab" id={`cv-mtab-${i}`} aria-selected={on} aria-controls="cv-panel" tabIndex={on ? 0 : -1} onClick={() => setActive(i)}
                  className={`min-h-[48px] shrink-0 rounded-full border px-5 text-[13px] font-medium tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f] ${on ? 'border-[#ff5a1f] bg-[#ff5a1f] text-white' : 'border-[#292929] text-[#8f8f8a]'}`}>{x.number}</button>
              );
            })}
          </div>

          <div id="cv-panel" role="tabpanel" aria-labelledby={`cv-tab-${active}`} className="min-h-[470px] rounded-[14px] border border-[#292929] bg-[#0d0d0d] p-[clamp(22px,3vw,44px)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }} transition={{ duration: reduce ? 0 : 0.4, ease }}>
                <div className="flex items-center justify-between gap-4 text-[11px] font-medium tracking-[0.18em]">
                  <p className="text-[#ff5a1f]">{it.number} / {it.label}</p>
                  <p className="hidden text-[#7d7d78] sm:block">{v.system}</p>
                </div>
                <h3 className="mt-6 text-[clamp(28px,3.2vw,44px)] font-normal leading-[1.08] tracking-[-0.03em]">{it.title}</h3>
                <p className="mt-4 max-w-[560px] text-[clamp(16px,1.25vw,18px)] leading-[1.7] text-[#8f8f8a]">{it.description}</p>
                <motion.div className="mt-8" initial={reduce ? false : { opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.1, ease }}>
                  <Visual reduce={reduce} />
                </motion.div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#292929] pt-5">
                  <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.18em]"><span className="text-[#7d7d78]">PROJECT SIGNAL</span><span className="flex items-center gap-2 text-[#f5f5f2]"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />{it.signal}</span></p>
                  <p className="text-[11px] tracking-[0.14em] text-[#5f5f5a]">Conceptual · not a real project</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <p className="sr-only" aria-live="polite">Principle {it.number} of 0{N}: {it.title}</p>
          </div>
        </motion.div>

        <motion.p {...rise(0.1)} className="mt-10 text-[14px] italic text-[#5f5f5a]">{v.closing}</motion.p>
      </div>
    </section>
  );
}
