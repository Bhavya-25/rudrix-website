'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { m as motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { customSoftwareWhy as master } from '@/data/services';

const ease = [0.22, 1, 0.36, 1];
const O = '#ff5a1f';
const G = '#b9b9b3';
const D = '#1d1d1d';

// Each visual has an "off" (generic/fragmented) and "on" (custom-built) state. `on` = hovered/focused, or played once on reveal.
function Friction({ on, t }) {
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full" fill="none" aria-hidden>
      <motion.line x1="22" y1="50" x2="178" y2="50" stroke={O} strokeWidth="2" strokeLinecap="round" initial={false} animate={{ pathLength: on ? 1 : 0.0, opacity: on ? 1 : 0 }} transition={t} />
      <line x1="22" y1="50" x2="70" y2="50" stroke={G} strokeWidth="1.5" strokeDasharray="3 5" />
      <line x1="76" y1="50" x2="122" y2="50" stroke={G} strokeWidth="1.5" strokeDasharray="3 5" />
      {[22, 122, 178].map((x) => <circle key={x} cx={x} cy="50" r="7" fill="#fff" stroke={D} strokeWidth="1.5" />)}
      <motion.circle cx="72" cy="50" r="7" fill="#fff" stroke={G} strokeWidth="1.5" initial={false} animate={{ opacity: on ? 0.1 : 1, scale: on ? 0.5 : 1 }} style={{ transformOrigin: '72px 50px' }} transition={t} />
      <motion.circle cx="178" cy="50" r="7" fill={O} initial={false} animate={{ opacity: on ? 1 : 0.25 }} transition={t} />
    </svg>
  );
}

function Workflow({ on, t }) {
  const br = [[40, 'M100 52 L100 62 Q100 70 40 78'], [100, 'M100 52 L100 78'], [160, 'M100 52 L100 62 Q100 70 160 78']];
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full" fill="none" aria-hidden>
      <path d="M100 22 L100 38" stroke={D} strokeWidth="1.5" />
      <rect x="82" y="8" width="36" height="14" rx="4" fill="#fff" stroke={D} strokeWidth="1.5" />
      <rect x="82" y="38" width="36" height="14" rx="4" fill="#fff" stroke={D} strokeWidth="1.5" />
      {br.map(([x, d], i) => (
        <g key={x}>
          <path d={d} stroke={G} strokeWidth="1.5" />
          <motion.path d={d} stroke={O} strokeWidth="2" initial={false} animate={{ pathLength: on ? 1 : 0, opacity: on ? 1 : 0 }} transition={{ ...t, delay: on ? i * 0.18 : 0 }} />
          <motion.rect x={x - 18} y="78" width="36" height="14" rx="4" fill="#fff" stroke={on ? O : D} strokeWidth="1.5" initial={false} transition={t} />
        </g>
      ))}
    </svg>
  );
}

function Clarity({ on, t }) {
  const dots = [[24, 20], [60, 76], [30, 56], [172, 24], [150, 80], [176, 58], [90, 14], [110, 84]];
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full" fill="none" aria-hidden>
      {dots.map(([x, y], i) => (
        <motion.circle key={i} r="4" fill={i % 3 === 0 ? O : D} initial={false} animate={{ cx: on ? 100 : x, cy: on ? 50 : y, opacity: on ? 0 : 0.8 }} transition={{ ...t, delay: on ? i * 0.03 : 0 }} />
      ))}
      <motion.g initial={false} animate={{ opacity: on ? 1 : 0, scale: on ? 1 : 0.8 }} style={{ transformOrigin: '100px 50px' }} transition={{ ...t, delay: on ? 0.25 : 0 }}>
        <rect x="64" y="22" width="72" height="56" rx="8" fill="#fff" stroke={D} strokeWidth="1.5" />
        <rect x="72" y="30" width="26" height="8" rx="2" fill={O} />
        <rect x="72" y="44" width="56" height="4" rx="2" fill={G} /><rect x="72" y="54" width="44" height="4" rx="2" fill={G} /><rect x="72" y="64" width="50" height="4" rx="2" fill={G} />
      </motion.g>
    </svg>
  );
}

function Evolve({ on, t }) {
  const sats = [[100, 18, 'USERS'], [32, 78, 'DATA'], [168, 78, 'INTEGRATIONS']];
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full" fill="none" aria-hidden>
      {sats.map(([x, y, l], i) => {
        const sx = on ? x : 100 + (x - 100) * 0.35;
        const sy = on ? y : 50 + (y - 50) * 0.35;
        return (
          <g key={l}>
            <motion.line x1="100" y1="50" initial={false} animate={{ x2: sx, y2: sy }} stroke={on ? O : G} strokeWidth="1.5" transition={t} />
            <motion.circle r="6" fill="#fff" stroke={D} strokeWidth="1.5" initial={false} animate={{ cx: sx, cy: sy }} transition={t} />
          </g>
        );
      })}
      <circle cx="100" cy="50" r="10" fill={O} />
    </svg>
  );
}

const visuals = { friction: Friction, workflow: Workflow, clarity: Clarity, evolve: Evolve };

function Card({ o, i, reduce }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const [hover, setHover] = useState(false);
  const on = reduce ? true : hover || seen;
  const Visual = visuals[o.visual];
  const t = { duration: reduce ? 0 : 0.9, ease };
  return (
    <motion.li
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : i * 0.08, ease }}
    >
      <article
        tabIndex={0}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocus={() => setHover(true)} onBlur={() => setHover(false)}
        className="group flex h-full flex-col rounded-[22px] border border-[#e8e8e5] bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#ff5a1f]/50 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.3)] focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f] motion-reduce:transition-none sm:p-7"
      >
        <div className="flex items-center justify-between text-[12px] font-medium tracking-[0.18em] text-[#8f8f8a]">
          <span>{o.number}</span>
          <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ff5a1f]" />
        </div>
        <div className="mt-6 flex h-[130px] items-center justify-center rounded-[14px] bg-[#f7f7f5] px-4 py-3"><Visual on={on} t={t} /></div>
        <p className="mt-3 text-[10px] font-medium tracking-[0.2em] text-[#ff5a1f]">{o.caption}</p>
        <h3 className="mt-5 text-[clamp(21px,1.9vw,26px)] font-medium leading-[1.15] tracking-[-0.02em] text-ink">{o.title}</h3>
        <p className="mt-3 text-[15.5px] leading-[1.65] text-slate2">{o.description}</p>
      </article>
    </motion.li>
  );
}

export default function CustomSoftwareWhy({ data }) {
  const w = data || master;
  const reduce = useReducedMotion();
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : d, ease } });
  return (
    <section aria-labelledby="csw-title" className="bg-[#f7f7f5] section-x py-[clamp(64px,8vw,130px)]">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-[860px]">
            <motion.p {...rise(0)} className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-rudrix-strong sm:text-[13px]"><span aria-hidden className="h-px w-8 bg-rudrix-strong" />{w.eyebrow}</motion.p>
            <motion.h2 id="csw-title" {...rise(0.08)} className="mt-6 text-[clamp(28px,3.5vw,54px)] font-medium leading-[1.06] tracking-[-0.035em] text-ink">{w.title[0]}<br className="hidden md:block" /> {w.title[1]}</motion.h2>
            <motion.p {...rise(0.16)} className="mt-6 max-w-[780px] text-[clamp(16px,1.35vw,19px)] leading-[1.65] text-slate2">{w.text}</motion.p>
          </div>
          <motion.div {...rise(0.24)} className="lg:pb-2">
            <Link href={w.cta.href} className="group inline-flex min-h-[44px] items-center gap-2 text-[16px] font-semibold text-rudrix-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]">
              <span className="border-b border-rudrix-strong/40 pb-0.5 transition-colors group-hover:border-rudrix-strong">{w.cta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <motion.div {...rise(0.1)} className="mt-[clamp(40px,5vw,72px)] flex items-center gap-4 text-[11px] font-medium tracking-[0.22em] text-[#8f8f8a]">
          <span>{w.label}</span><span aria-hidden className="h-px flex-1 bg-[#e0e0dc]" />
        </motion.div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {w.outcomes.map((o, i) => <Card key={o.number} o={o} i={i} reduce={reduce} />)}
        </ul>
      </div>
    </section>
  );
}
