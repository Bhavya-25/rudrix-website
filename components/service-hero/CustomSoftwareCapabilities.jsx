'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { m as motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { customSoftwareCapabilities as master } from '@/data/services';

const ease = [0.22, 1, 0.36, 1];
const O = '#ff5a1f';
const G = '#c3c3bd';
const D = '#1d1d1d';

function Workflow({ on, t }) {
  const pts = [[24, 62], [64, 26], [104, 62], [144, 30], [176, 50]];
  const path = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');
  return (
    <svg viewBox="0 0 200 90" className="h-full w-full" fill="none" aria-hidden>
      <path d={path} stroke={G} strokeWidth="1.2" strokeDasharray="3 4" />
      <motion.path d={path} stroke={O} strokeWidth="2" strokeLinejoin="round" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ ...t, duration: t.duration * 1.3 }} />
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i === 4 ? 6 : 4.5} fill={i === 4 ? O : '#fff'} stroke={i === 4 ? O : D} strokeWidth="1.4" />)}
    </svg>
  );
}
function Layers({ on, t }) {
  return (
    <svg viewBox="0 0 200 90" className="h-full w-full" fill="none" aria-hidden>
      {[['UI', 8], ['API', 34], ['DATA', 60]].map(([l, y], i) => (
        <g key={l}>
          <motion.rect x="38" width="124" height="20" rx="5" fill="#fff" stroke={on ? O : D} strokeWidth="1.4" initial={false} animate={{ y: on ? y : 8 + i * 4, opacity: on ? 1 : 0.7 }} transition={{ ...t, delay: i * 0.08 }} />
          <motion.text x="100" textAnchor="middle" fontSize="9" letterSpacing="2" fill={D} initial={false} animate={{ y: (on ? y : 8 + i * 4) + 13 }} transition={{ ...t, delay: i * 0.08 }}>{l}</motion.text>
        </g>
      ))}
    </svg>
  );
}
function Connect({ on, t }) {
  const n = [[30, 45], [100, 16], [100, 74], [170, 45]];
  return (
    <svg viewBox="0 0 200 90" className="h-full w-full" fill="none" aria-hidden>
      {n.slice(1).map(([x, y]) => <line key={`${x}${y}`} x1="30" y1="45" x2={x} y2={y} stroke={G} strokeWidth="1.3" />)}
      <line x1="100" y1="16" x2="170" y2="45" stroke={G} strokeWidth="1.3" /><line x1="100" y1="74" x2="170" y2="45" stroke={G} strokeWidth="1.3" />
      <motion.circle r="3.5" fill={O} initial={false} animate={on ? { cx: [30, 100, 170], cy: [45, 16, 45] } : { cx: 30, cy: 45 }} transition={{ duration: on ? 1.8 : 0.2, ease: 'easeInOut' }} />
      {n.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="8" fill="#fff" stroke={i === 0 ? O : D} strokeWidth="1.4" />)}
    </svg>
  );
}
function Automation({ on, t }) {
  const st = [28, 76, 124, 172];
  return (
    <svg viewBox="0 0 200 90" className="h-full w-full" fill="none" aria-hidden>
      <line x1="28" y1="45" x2="172" y2="45" stroke={G} strokeWidth="1.3" />
      <motion.line x1="28" y1="45" y2="45" stroke={O} strokeWidth="2" initial={false} animate={{ x2: on ? 172 : 28 }} transition={{ ...t, duration: t.duration * 1.4 }} />
      {st.map((x, i) => <motion.rect key={x} x={x - 11} y="34" width="22" height="22" rx="6" fill="#fff" stroke={D} strokeWidth="1.4" initial={false} animate={{ stroke: on ? O : D }} transition={{ ...t, delay: on ? i * 0.28 : 0 }} />)}
      {st.map((x, i) => <motion.path key={x} d={`M${x - 4} 45 l3 3 l5 -6`} stroke={O} strokeWidth="1.6" strokeLinecap="round" initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ ...t, delay: on ? i * 0.28 + 0.2 : 0 }} />)}
    </svg>
  );
}
function Data({ on, t }) {
  const bars = [30, 52, 40, 68, 58];
  return (
    <svg viewBox="0 0 200 90" className="h-full w-full" fill="none" aria-hidden>
      {bars.map((h, i) => (
        <g key={i}>
          <motion.circle cx={44 + i * 28} r="3.5" fill={i === 3 ? O : D} initial={false} animate={{ cy: on ? 80 - h - 3 : 22 + (i % 3) * 20, opacity: on ? 0 : 0.8 }} transition={{ ...t, delay: i * 0.05 }} />
          <motion.rect x={38 + i * 28} width="12" rx="3" fill={i === 3 ? O : D} initial={false} animate={{ y: on ? 80 - h : 80, height: on ? h : 0, opacity: on ? 1 : 0 }} transition={{ ...t, delay: 0.1 + i * 0.06 }} />
        </g>
      ))}
      <line x1="30" y1="80" x2="172" y2="80" stroke={G} strokeWidth="1.2" />
    </svg>
  );
}

function AppUI({ tab }) {
  const nav = ['Dashboard', 'Workflow', 'Users', 'Analytics'];
  return (
    <div className="overflow-hidden rounded-[12px] border border-black/10 bg-white shadow-[0_24px_50px_-28px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-black/[0.07] bg-[#fafaf8] px-3 py-2.5"><i className="h-2 w-2 rounded-full bg-[#e0e0da]" /><i className="h-2 w-2 rounded-full bg-[#e0e0da]" /><i className="h-2 w-2 rounded-full bg-[#e0e0da]" /></div>
      <div className="grid grid-cols-[96px_1fr]">
        <ul className="flex flex-col gap-1 border-r border-black/[0.07] p-2.5 text-[11px]">
          {nav.map((n, i) => <li key={n} className={`rounded-[6px] px-2 py-1.5 transition-colors duration-300 ${i === tab ? 'bg-[#ff5a1f]/10 font-medium text-[#d63c00]' : 'text-[#8a8a85]'}`}>{n}</li>)}
        </ul>
        <div className="p-3">
          <div className="h-2 w-1/3 rounded-full bg-[#171717]/80" />
          <div className="mt-3 grid grid-cols-3 gap-2">{[0, 1, 2].map((k) => <div key={k} className={`h-9 rounded-[6px] border transition-colors duration-500 ${k === tab % 3 ? 'border-[#ff5a1f]/50 bg-[#ff5a1f]/5' : 'border-black/[0.07]'}`} />)}</div>
          <div className="mt-2.5 flex h-[54px] items-end gap-1.5">{[40, 62, 48, 80, 66, 92, 74].map((h, k) => <div key={k} className="flex-1 rounded-t-[3px] bg-[#e4e4df] transition-all duration-500" style={{ height: `${(h * (0.75 + ((k + tab) % 4) * 0.08))}%`, background: k === (tab * 2) % 7 ? '#ff5a1f' : undefined }} />)}</div>
        </div>
      </div>
    </div>
  );
}

const visuals = { workflow: Workflow, layers: Layers, connect: Connect, automation: Automation, data: Data };

function Card({ it, i, reduce }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const [hover, setHover] = useState(false);
  const [tab, setTab] = useState(0);
  const on = reduce ? true : hover || seen;
  const V = visuals[it.visual];
  const t = { duration: reduce ? 0 : 0.8, ease };
  useEffect(() => {
    if (!it.featured || !hover || reduce) return undefined;
    const id = setInterval(() => setTab((x) => (x + 1) % 4), 1300);
    return () => clearInterval(id);
  }, [it.featured, hover, reduce]);
  return (
    <motion.li
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : (it.featured ? 0.1 : 0.15 + i * 0.07), ease }}
      className={it.featured || it.number === '06' ? 'sm:col-span-2' : ''}
    >
      <article
        tabIndex={0}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocus={() => setHover(true)} onBlur={() => setHover(false)}
        className={`group relative flex h-full flex-col overflow-hidden rounded-[20px] border bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#171717]/30 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f] motion-reduce:transition-none sm:p-7 ${it.featured ? 'border-[#171717]/20 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-8' : 'border-[#e8e8e5]'}`}
      >
        <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[#ff5a1f] transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-3 text-[11px] font-medium tracking-[0.18em]">
            <span className="text-[#8f8f8a]">{it.number} <span className="ml-2 text-[#ff5a1f]">{it.category}</span></span>
            <ArrowUpRight aria-hidden className="h-4 w-4 text-[#8f8f8a] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ff5a1f]" />
          </div>
          {!it.featured && <div className="mt-5 h-[88px] rounded-[12px] bg-[#f7f7f5] px-3 py-1.5"><V on={on} t={t} /></div>}
          <h3 className={`mt-5 font-medium leading-[1.12] tracking-[-0.02em] text-ink ${it.featured ? 'text-[clamp(26px,2.6vw,36px)]' : 'text-[clamp(19px,1.6vw,23px)]'}`}>{it.title}</h3>
          <p className={`mt-3 leading-[1.65] text-slate2 ${it.featured ? 'text-[16.5px]' : 'text-[15px]'}`}>{it.description}</p>
          <ul className={`mt-5 flex flex-wrap gap-2 lg:mt-auto lg:pt-5 ${it.points.length ? '' : 'hidden'}`} aria-label={`${it.title} includes`}>
            {it.points.map((p) => <li key={p} className="rounded-full border border-[#e4e4df] px-3 py-1 text-[12px] text-[#5f5f5a]">{p}</li>)}
          </ul>
        </div>
        {it.featured && <div className="mt-6 lg:mt-0" aria-hidden><AppUI tab={on && !hover && !reduce ? 0 : tab} /></div>}
      </article>
    </motion.li>
  );
}

export default function CustomSoftwareCapabilities({ data }) {
  const c = data || master;
  const reduce = useReducedMotion();
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : d, ease } });
  const featured = c.items.find((x) => x.featured);
  const rest = c.items.filter((x) => !x.featured);
  return (
    <section aria-labelledby="csc-title" className="bg-[#f1f1ee] section-x py-[clamp(64px,8vw,130px)]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,4.2fr)_minmax(0,7.8fr)] lg:gap-[clamp(32px,4vw,72px)]">
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <motion.p {...rise(0)} className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-rudrix-strong sm:text-[13px]"><span aria-hidden className="h-px w-8 bg-rudrix-strong" />{c.eyebrow}</motion.p>
            <motion.h2 id="csc-title" {...rise(0.08)} className="mt-6 text-[clamp(28px,2.9vw,44px)] font-medium leading-[1.08] tracking-[-0.035em] text-ink">{c.title[0]} {c.title[1]}</motion.h2>
            <motion.p {...rise(0.16)} className="mt-6 max-w-[460px] text-[clamp(16px,1.3vw,18px)] leading-[1.65] text-slate2">{c.text}</motion.p>
            <motion.div {...rise(0.24)} className="mt-8">
              <Link href={c.cta.href} className="group inline-flex min-h-[44px] items-center gap-2 text-[16px] font-semibold text-rudrix-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]">
                <span className="border-b border-rudrix-strong/40 pb-0.5 transition-colors group-hover:border-rudrix-strong">{c.cta.label}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </motion.div>
          </div>

          <div>
            <motion.p {...rise(0.1)} className="mb-5 flex items-center gap-4 text-[11px] font-medium tracking-[0.22em] text-[#8f8f8a]"><span>{c.label}</span><span aria-hidden className="h-px flex-1 bg-[#dcdcd6]" /></motion.p>
            <ul className="grid gap-4 sm:grid-cols-2">
              <Card it={featured} i={0} reduce={reduce} />
              {rest.map((it, i) => <Card key={it.number} it={it} i={i + 1} reduce={reduce} />)}
            </ul>
          </div>
        </div>

        <motion.div {...rise(0.1)} className="mt-[clamp(32px,4vw,56px)] flex flex-col gap-5 rounded-[18px] bg-[#171717] px-[clamp(22px,3vw,40px)] py-7 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[clamp(18px,1.8vw,24px)] font-normal tracking-[-0.02em]">{c.closing.text}</p>
          <Link href={c.closing.href} className="group inline-flex min-h-[48px] w-fit items-center gap-3 rounded-[6px] bg-[#ff5a1f] px-6 text-[15px] font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#e84b12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none">
            {c.closing.label}<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
