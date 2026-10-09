'use client';
import { useEffect, useRef, useState } from 'react';
import { m as motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { workStats } from '@/data/work';

const ease = [0.22, 1, 0.36, 1];

function Count({ value, reduce }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  // start at 0 on server AND client (a reduced-motion initial value caused a hydration mismatch); jump to the final value after mount
  const [n, setN] = useState(0);
  useEffect(() => { if (reduce) setN(value); }, [reduce, value]);
  useEffect(() => {
    if (!inView || reduce) return undefined;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1600);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);
  return <span ref={ref} aria-hidden>{n}</span>;
}

// Four white rounded stat cards on the light page background; counts up on scroll-in, orange suffix.
export default function ServiceStats() {
  const reduce = useReducedMotion();
  return (
    <section aria-label="Rudrix at a glance" className="bg-[#f7f7f6] section-x pb-[clamp(48px,6vw,96px)]">
      <dl className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {workStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : i * 0.08, ease }}
            className="rounded-[16px] bg-white px-5 pb-6 pt-6 sm:px-6 sm:pb-7 lg:px-6 lg:pt-7"
          >
            <dt className="min-h-[2.6em] text-[clamp(13px,1.1vw,16px)] leading-[1.3] text-[#8f8f8f] sm:min-h-0">{s.label}</dt>
            <dd className="mt-[clamp(20px,3vw,44px)] flex items-end text-[clamp(44px,5vw,72px)] font-light leading-none tracking-[-0.03em] text-[#222]">
              <span className="tabular-nums" aria-label={`${s.value}${s.suffix}`}><Count value={s.value} reduce={reduce} /></span>
              {s.suffix && <span aria-hidden className="mb-[0.12em] ml-[0.08em] text-[0.5em] font-normal leading-none text-[#ff5a00]">{s.suffix}</span>}
            </dd>
          </motion.div>
        ))}
      </dl>
    </section>
  );
}
