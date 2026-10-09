'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { recognition as r } from '@/data/work';

const ease = [0.22, 1, 0.36, 1];
// x (in cards-width units at desktop), y px, scale, rotate, z, delay
const poses = [
  { x: -0.86, y: -0.11, s: 0.667, r: 0, z: 1, d: 0.05 },
  { x: -0.66, y: -0.11, s: 0.742, r: 0, z: 2, d: 0.1 },
  { x: -0.423, y: -0.11, s: 0.846, r: 0, z: 3, d: 0.15 },
  { x: 0, y: 0, s: 1, r: 0, z: 6, d: 0.2 },
  { x: 0.423, y: -0.11, s: 0.846, r: 0, z: 3, d: 0.15 },
  { x: 0.66, y: -0.11, s: 0.742, r: 0, z: 2, d: 0.1 },
  { x: 0.86, y: -0.11, s: 0.667, r: 0, z: 1, d: 0.05 },
];

function Card({ item, o, i, jump, dup, onPick, reduce }) {
  const clamped = Math.max(-3, Math.min(3, o));
  const hidden = Math.abs(o) > 3; // beyond the fan: parked behind the outer card, invisible
  const pose = poses[clamped + 3];
  const prof = item.k ? r.profiles[item.k] : null;
  const accent = prof ? prof.accent : item.accent;
  const name = prof ? item.k[0].toUpperCase() + item.k.slice(1) : null;
  const inner = (
    <div className="rc-face flex h-full flex-col bg-white text-[#111]">
      <div className="flex flex-col items-center justify-center" style={{ height: '44%' }}>
        {prof ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={prof.logo} alt="" width={64} height={64} className="h-[clamp(30px,3.9vw,56px)] w-auto" />
            <p className="mt-2 text-[clamp(20px,2.4vw,34px)] font-semibold leading-none tracking-tight">{name}</p>
          </>
        ) : null}
      </div>
      <div className="flex items-center justify-center px-3 text-center text-[clamp(11px,1.25vw,18px)] font-semibold text-white" style={{ background: accent, height: '16%' }}>{prof ? prof.label : item.tile}</div>
      <div className="flex flex-1 flex-col items-center justify-start px-5 pt-[7%] text-center">
        {prof ? (
          <>
            <p className="text-[clamp(16px,1.9vw,27px)] font-semibold leading-tight">Rudrix</p>
            <p className="mt-2 hidden text-[clamp(10px,1vw,14px)] leading-snug text-[#6b6b6b] sm:block">{prof.text}</p>
            <p aria-hidden className="mt-3 flex gap-[0.35em] text-[clamp(12px,1.35vw,19px)] leading-none text-[#9aa0ab]">{[0, 1, 2, 3, 4].map((k) => <span key={k}>★</span>)}</p>
            <p className="mt-2 text-[clamp(10px,0.95vw,13px)] font-semibold" style={{ color: accent }}>{prof.url ? 'View profile →' : 'Profile link coming soon'}</p>
          </>
        ) : null}
      </div>
    </div>
  );
  const common = { 'aria-hidden': dup || undefined, inert: dup || undefined, className: `rc-card absolute left-1/2 top-0${jump ? ' rc-jump' : ''}${hidden ? ' rc-hide' : ''}`, onClick: o !== 0 && !hidden ? onPick : undefined, style: { '--x': pose.x, '--y': pose.y, '--s': pose.s, '--r': `${pose.r}deg`, zIndex: hidden ? 0 : pose.z, cursor: o !== 0 ? 'pointer' : undefined } };
  const motionProps = {
    initial: reduce ? false : { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -10% 0px' },
    transition: { duration: 0.8, delay: pose.d, ease },
  };
  const wrap = (child) => (
    <motion.div {...common} {...motionProps} data-o={o}>
      <div className="rc-inner">{child}</div>
    </motion.div>
  );
  if (prof && prof.url) {
    return wrap(<a href={prof.url} target="_blank" rel="noopener noreferrer" aria-label={`Rudrix on ${name}`} className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4a00]">{inner}</a>);
  }
  return wrap(<div className="h-full" role={prof ? 'group' : undefined} aria-label={prof ? `Rudrix on ${name}` : undefined} aria-hidden={prof && !hidden ? undefined : true}>{inner}</div>);
}

export default function Recognition() {
  const reduce = useReducedMotion();
  const real = r.fan.length;
  // repeat the real cards so the fan always has all 7 slots filled; repeats are decorative (aria-hidden)
  const ring = useMemo(() => Array.from({ length: real < 7 ? real * Math.ceil(7 / real) : real }, (_, i) => r.fan[i % real]), [real]);
  const n = ring.length;
  const half = Math.floor(n / 2);
  const [active, setActive] = useState(half);
  const prev = useRef(null);
  const paused = useRef(false);
  const drag = useRef(null);
  const offs = ring.map((_, i) => ((i - active + n + half) % n + n) % n - half);
  const jumps = offs.map((o, i) => prev.current !== null && Math.abs(o - prev.current[i]) > half);
  useEffect(() => { prev.current = offs; });
  const go = useCallback((d) => setActive((a) => (a + d + n) % n), [n]);
  useEffect(() => {
    if (reduce || n < 2) return;
    const id = setInterval(() => { if (!paused.current && !document.hidden) go(1); }, 4500);
    return () => clearInterval(id);
  }, [reduce, go, n]);
  const onDown = (e) => { drag.current = { x: e.clientX, moved: 0 }; };
  const onMove = (e) => { if (drag.current) drag.current.moved = e.clientX - drag.current.x; };
  const onUp = () => { const d = drag.current; drag.current = null; if (!d) return; if (d.moved < -50) go(1); else if (d.moved > 50) go(-1); };
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: 0.7, delay: d, ease } });
  return (
    <section aria-labelledby="rec-title" className="relative overflow-hidden bg-black text-white section-x pb-[clamp(64px,6.6vw,94px)] pt-[clamp(56px,5.6vw,80px)]">
      {/* faint award seal */}
      <svg aria-hidden viewBox="0 0 200 240" className="pointer-events-none absolute right-[4%] top-[clamp(30px,5vw,70px)] hidden w-[clamp(180px,22vw,320px)] text-white opacity-[0.07] md:block" fill="none" stroke="currentColor" strokeWidth="5">
        <path d="M100 8l16 10 19-2 9 17 18 8-2 19 11 16-11 16 2 19-18 8-9 17-19-2-16 10-16-10-19 2-9-17-18-8 2-19-11-16 11-16-2-19 18-8 9-17 19 2z" />
        <circle cx="100" cy="100" r="52" /><path d="M100 70l9 19 21 3-15 15 4 21-19-10-19 10 4-21-15-15 21-3z" fill="currentColor" />
        <path d="M60 170l-14 62 34-18 20 20 6-50M140 170l14 62-34-18-20 20-6-50" />
      </svg>

      <div className="relative mx-auto max-w-[1245px]">
        <motion.div {...rise(0)} className="relative inline-block p-[6px]">
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((k) => { const [v, h] = k.split('-'); return <span key={k} aria-hidden className="absolute h-[7px] w-[7px] bg-[#ff4a00]" style={{ [v]: 0, [h]: 0 }} />; })}
          <p className="border border-[#ff4a00] px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] text-[#ff5a14] sm:text-[13px]">{r.eyebrow}</p>
        </motion.div>
        <motion.h2 id="rec-title" {...rise(0.08)} className="mt-5 max-w-[780px] text-[clamp(24px,2.65vw,38px)] font-normal leading-[1.2] tracking-[-0.02em]">
          <span className="text-white">Find Our Work Across Leading Design &amp; Freelance Platforms, </span>
          <span className="text-white/45">Where We Share Thoughtful Design, Reliable Development And Digital Products.</span>
        </motion.h2>
        <div aria-hidden className="mt-[clamp(28px,2.4vw,34px)] h-px w-full bg-white/10" />

        <div
          className="rc-stage relative mx-auto mt-[clamp(36px,4.2vw,60px)] touch-pan-y select-none"
          role="region" aria-roledescription="carousel" aria-label="Platforms where Rudrix shares its work"
          onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}
          onFocus={() => (paused.current = true)} onBlur={() => (paused.current = false)}
          onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
        >
          {ring.map((it, i) => <Card key={i} item={it} o={offs[i]} i={i} dup={i >= real} jump={jumps[i]} onPick={() => setActive(i)} reduce={reduce} />)}
          <p className="sr-only" aria-live="polite">Showing card {(active % real) + 1} of {real}</p>
        </div>
      </div>
    </section>
  );
}
