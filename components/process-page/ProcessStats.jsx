'use client';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { Counter } from '@/components/work/WorkStats';
import { workStats } from '@/data/work';

// Platforms only (no ratings or badges are claimed): logos are decorative next to the platform name.
const platforms = [
  { name: 'Upwork', logo: '/platforms/upwork.svg' },
  { name: 'Dribbble', logo: '/platforms/dribbble.svg' },
  { name: 'Behance', logo: '/platforms/behance.svg' },
];

export default function ProcessStats() {
  const reduce = useReducedMotion();
  return (
    <section aria-label="Rudrix at a glance" className="bg-white section-x py-[clamp(48px,6vw,90px)]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        transition={{ duration: reduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[1245px] border border-black/[0.08]"
      >
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {workStats.map((s, i) => (
            <div key={s.label} className={`flex flex-col items-center px-4 py-[clamp(28px,4vw,52px)] text-center ${i % 2 === 1 ? 'border-l border-black/[0.08]' : ''} ${i >= 2 ? 'border-t border-black/[0.08] lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l lg:border-black/[0.08]' : ''}`}>
              <dd className="order-1 text-[clamp(44px,5.6vw,80px)] font-light leading-none tracking-[-0.02em]">
                <Counter value={s.value} suffix={s.suffix} accent={i === 0} />
              </dd>
              <dt className="order-2 mt-[clamp(20px,2.6vw,36px)] min-h-[2.8em] text-[clamp(13px,1.15vw,17px)] tracking-[0.02em] text-[#5f5f5c] sm:min-h-0">{s.label}</dt>
            </div>
          ))}
        </dl>
        <ul className="grid grid-cols-1 border-t border-black/[0.08] bg-[#f5f5f5] sm:grid-cols-3">
          {platforms.map((p, i) => (
            <li key={p.name} className={`flex min-h-[96px] items-center justify-center gap-3 px-4 py-6 ${i > 0 ? 'border-t border-black/[0.08] sm:border-l sm:border-t-0' : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.logo} alt="" width={32} height={32} className="h-[clamp(24px,2.4vw,34px)] w-auto opacity-85 grayscale" />
              <span className="text-[clamp(20px,2.2vw,30px)] font-semibold tracking-[-0.02em] text-[#222]">{p.name}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
