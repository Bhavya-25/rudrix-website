'use client';
import { m as motion } from 'framer-motion';
import StatsCard from './results/StatsCard';
import TestimonialCard from './results/TestimonialCard';
import { results } from '@/data/results';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: '-8% 0px' };

export default function ClientResults() {
  return (
    <section
      id="results"
      aria-labelledby="client-results-heading"
      className="relative overflow-hidden bg-[#f3f3f1] section-x section-y text-ink"
    >
      <div className="relative mx-auto max-w-[1360px]">
        <motion.p
          className="relative z-10 text-center text-[16px] text-slate2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease }}
        >
          {results.eyebrow}
        </motion.p>

        {/* oversized background heading, partly covered by the cards and fading out toward them */}
        <motion.h2
          id="client-results-heading"
          className="pointer-events-none relative z-0 -mb-[0.2em] mt-2 select-none whitespace-nowrap text-center text-[clamp(64px,13.4vw,236px)] font-bold leading-[1] tracking-[-0.05em] text-[#b9b9b6] [mask-image:linear-gradient(to_bottom,#000_25%,transparent_88%)] sm:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 1, delay: 0.1, ease }}
        >
          {results.heading}
        </motion.h2>

        <motion.div
          className="relative z-10 mt-4 grid gap-5 lg:grid-cols-[minmax(0,0.31fr)_minmax(0,0.69fr)] lg:gap-7 lg:h-[clamp(520px,38.5vw,640px)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <StatsCard />
          <TestimonialCard />
        </motion.div>
      </div>
    </section>
  );
}
