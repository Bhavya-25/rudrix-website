'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

// "26+" / "98%" / "24h": counts 0 → number once when scrolled into view, keeping the prefix/suffix.
export default function CountUp({ value, duration = 1800 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotion();
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? Number(m[1]) : 0;
  // start at 0 on server AND client (a reduced-motion initial value caused a hydration mismatch); jump to the final value after mount
  const [n, setN] = useState(!m ? target : 0);
  useEffect(() => { if (reduce) setN(target); }, [reduce, target]);

  useEffect(() => {
    if (!inView || reduce || !m) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3)))); // ease-out cubic
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} aria-label={value} className="tabular-nums">
      <span aria-hidden>{m ? `${n}${m[2]}` : value}</span>
    </span>
  );
}
