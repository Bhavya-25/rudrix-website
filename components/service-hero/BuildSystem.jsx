'use client';
import { useState } from 'react';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { buildSystem as master } from '@/data/services';

const ease = [0.22, 1, 0.36, 1];
const O = '#ff5a1f';
// node positions in the 520x420 system map
const nodes = {
  discover: { x: 260, y: 48, label: 'DISCOVER' },
  design: { x: 70, y: 210, label: 'DESIGN' },
  build: { x: 450, y: 210, label: 'BUILD' },
  improve: { x: 260, y: 372, label: 'IMPROVE' },
};
const links = [['discover', 'design'], ['discover', 'build'], ['design', 'improve'], ['build', 'improve']];

function SystemMap({ active, reduce }) {
  return (
    <svg viewBox="0 0 520 420" className="h-full w-full" fill="none" role="img" aria-label="Rudrix build system: discover, design, build and improve around one core" >
      <defs>
        <radialGradient id="bs-glow"><stop offset="0%" stopColor={O} stopOpacity="0.35" /><stop offset="100%" stopColor={O} stopOpacity="0" /></radialGradient>
        <pattern id="bs-grid" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0V26" stroke="#171717" strokeOpacity="0.05" /></pattern>
      </defs>
      <rect width="520" height="420" rx="20" fill="url(#bs-grid)" />
      {links.map(([a, b]) => {
        const A = nodes[a]; const B = nodes[b];
        const on = active === a || active === b;
        return <line key={a + b} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke={on ? O : '#cfcfc9'} strokeWidth={on ? 2 : 1.4} strokeDasharray="4 6" style={{ transition: 'stroke .5s' }} />;
      })}
      {['discover', 'design', 'build', 'improve'].map((k) => (
        <line key={k} x1={nodes[k].x} y1={nodes[k].y} x2="260" y2="210" stroke={active === k ? O : '#d9d9d3'} strokeWidth={active === k ? 2.2 : 1.4} style={{ transition: 'stroke .5s' }} />
      ))}
      {!reduce && ['discover', 'design', 'build', 'improve'].map((k, i) => (
        <motion.circle key={`p${k}`} r="3.2" fill={O} initial={false} animate={{ cx: [nodes[k].x, 260], cy: [nodes[k].y, 210], opacity: [0, 1, 0] }} transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.9 }} />
      ))}
      <rect x="196" y="178" width="128" height="64" rx="14" fill="#fff" stroke="#171717" strokeOpacity="0.18" />
      <text x="260" y="206" textAnchor="middle" fontSize="10" letterSpacing="2.4" fill="#8a8a85">BUSINESS</text>
      <text x="260" y="224" textAnchor="middle" fontSize="12" fontWeight="600" letterSpacing="1.4" fill="#171717">LOGIC</text>
      {Object.entries(nodes).map(([k, n]) => {
        const on = active === k;
        return (
          <g key={k} style={{ transition: 'opacity .5s' }} opacity={active && !on ? 0.5 : 1}>
            {on && <circle cx={n.x} cy={n.y} r="46" fill="url(#bs-glow)" />}
            <circle cx={n.x} cy={n.y} r={on ? 15 : 12} fill={on ? O : '#fff'} stroke={on ? O : '#171717'} strokeOpacity={on ? 1 : 0.5} strokeWidth="1.6" style={{ transition: 'all .5s' }} />
            <text x={n.x} y={n.y + (k === 'improve' ? 40 : k === 'discover' ? -26 : 36)} textAnchor="middle" fontSize="11" fontWeight="600" letterSpacing="2.4" fill={on ? '#d63c00' : '#6b6b68'}>{n.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Card({ p, on, setActive, reduce, i }) {
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: reduce ? 0.2 : 0.65, delay: reduce ? 0 : i * 0.08, ease }}
    >
      <button
        type="button"
        aria-pressed={on}
        onMouseEnter={() => setActive(p.node)} onMouseLeave={() => setActive(null)}
        onFocus={() => setActive(p.node)} onBlur={() => setActive(null)}
        onClick={() => setActive(on ? null : p.node)}
        className={`h-full w-full rounded-[18px] border bg-white p-6 text-left transition-[border-color,transform,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f] motion-reduce:transition-none ${on ? '-translate-y-0.5 border-[#ff5a1f]/60 shadow-[0_20px_40px_-28px_rgba(255,90,31,0.6)]' : 'border-[#e8e8e5] hover:border-[#171717]/25'}`}
      >
        <span className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em]"><span className={on ? 'text-[#d63c00]' : 'text-[#8a8a85]'}>{p.number}</span><span aria-hidden className={`h-px flex-1 transition-colors ${on ? 'bg-[#ff5a1f]' : 'bg-[#e4e4df]'}`} /></span>
        <span className="mt-4 block text-[clamp(18px,1.6vw,22px)] font-medium leading-[1.2] tracking-[-0.02em] text-ink">{p.title}</span>
        <span className="mt-3 block text-[15px] leading-[1.65] text-slate2">{p.description}</span>
      </button>
    </motion.li>
  );
}

export default function BuildSystem({ data }) {
  const d = data || master;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(null);
  const rise = (dl = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : dl, ease } });
  const left = d.principles.slice(0, 2);
  const right = d.principles.slice(2);
  return (
    <section aria-labelledby="bs-title" className="bg-[#f1f1ee] section-x py-[clamp(64px,8vw,120px)]">
      <div className="mx-auto max-w-[1245px]">
        <div className="max-w-[820px]">
          <motion.p {...rise(0)} className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-rudrix-strong sm:text-[13px]"><span aria-hidden className="h-px w-8 bg-rudrix-strong" />{d.eyebrow}</motion.p>
          <motion.h2 id="bs-title" {...rise(0.08)} className="mt-6 text-[clamp(30px,4vw,60px)] font-medium leading-[1.06] tracking-[-0.035em] text-ink">{d.title[0]}<br className="hidden sm:block" /> {d.title[1]}</motion.h2>
          <motion.p {...rise(0.16)} className="mt-6 max-w-[640px] text-[clamp(16px,1.35vw,19px)] leading-[1.65] text-slate2">{d.text}</motion.p>
        </div>

        <div className="mt-[clamp(36px,5vw,72px)] grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-5">
          <ul className="order-2 grid gap-4 lg:order-1 lg:gap-5">{left.map((p, i) => <Card key={p.number} p={p} on={active === p.node} setActive={setActive} reduce={reduce} i={i} />)}</ul>
          <motion.div {...rise(0.1)} className="order-1 aspect-[520/420] w-full rounded-[22px] border border-[#e8e8e5] bg-white p-3 lg:order-2"><SystemMap active={active} reduce={reduce} /></motion.div>
          <ul className="order-3 grid gap-4 lg:gap-5">{right.map((p, i) => <Card key={p.number} p={p} on={active === p.node} setActive={setActive} reduce={reduce} i={i + 2} />)}</ul>
        </div>
      </div>
    </section>
  );
}
