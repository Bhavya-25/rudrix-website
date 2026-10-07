'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { workStats } from '@/data/work';

export function Counter({ value, suffix, accent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1800);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);
  return (
    <span ref={ref} aria-label={`${value}${suffix}`} className="tabular-nums">
      <span aria-hidden className={accent ? 'text-[#10c44c]' : 'text-[#1d1d1d]'}>{n}</span>
      {suffix && <span aria-hidden className="text-[#8a8a8a]">{suffix}</span>}
    </span>
  );
}

// Four bordered cells: big light numbers that count up on scroll-in, with the symbol in grey.
export default function WorkStats() {
  const reduce = useReducedMotion();
  return (
    <section aria-label="Rudrix at a glance" className="bg-white section-x pb-[clamp(56px,7vw,96px)]">
      <motion.dl
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-[1100px] grid-cols-2 border border-black/[0.08] lg:grid-cols-4"
      >
        {workStats.map((s, i) => (
          <div key={s.label} className={`flex flex-col items-center justify-start px-4 py-[clamp(28px,4vw,52px)] text-center ${i % 2 === 1 ? 'border-l border-black/[0.08]' : ''} ${i >= 2 ? 'border-t border-black/[0.08] lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l lg:border-black/[0.08]' : ''}`}>
            <dd className="order-1 text-[clamp(44px,5vw,68px)] font-light leading-none tracking-[-0.02em]">
              <Counter value={s.value} suffix={s.suffix} accent={i === 0} />
            </dd>
            <dt className="order-2 mt-[clamp(20px,2.6vw,36px)] min-h-[2.8em] sm:min-h-0 text-[clamp(13px,1.1vw,16px)] tracking-[0.02em] text-[#5f5f5c]">{s.label}</dt>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
