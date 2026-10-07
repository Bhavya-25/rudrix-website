'use client';
import { useEffect, useRef, useState } from 'react';
import { m as motion, useInView, useReducedMotion } from 'framer-motion';
import { results } from '@/data/results';

const ease = [0.22, 1, 0.36, 1];

// "26+" → counts 0 → 26 once on scroll-in, keeping the suffix
function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });
  const reduce = useReducedMotion();
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? Number(m[1]) : 0;
  const [n, setN] = useState(reduce || !m ? target : 0);
  useEffect(() => {
    if (!inView || reduce || !m) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1600);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps
  return <span ref={ref} aria-label={value}>{m ? `${n}${m[2]}` : value}</span>;
}

export default function StatsCard() {
  return (
    <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[24px] bg-[#0b0b0b] p-7 text-white sm:p-8 lg:min-h-0 lg:rounded-[32px] lg:p-9">
      {/* dark grayscale tech texture */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={results.statsImage}
        alt=""
        aria-hidden
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover opacity-[0.28] grayscale"
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.85)_55%,#050505_100%)]" />
      <div aria-hidden className="stats-noise absolute inset-0" />

      {results.stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease }}
        >
          <p className="text-[clamp(56px,6vw,88px)] font-semibold leading-none tracking-[-0.04em]"><CountUp value={s.value} /></p>
          <p className="mt-3 text-[16px] text-white/90">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
