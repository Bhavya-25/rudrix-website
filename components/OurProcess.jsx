'use client';
import { motion } from 'framer-motion';
import ProcessCard from './process/ProcessCard';
import SubscribeVisual from './process/SubscribeVisual';
import RequestVisual from './process/RequestVisual';
import BuildVisual from './process/BuildVisual';
import MetricsVisual from './process/MetricsVisual';
import GlobeVisual from './process/GlobeVisual';
import { process as data } from '@/data/process';

const ease = [0.22, 1, 0.36, 1];
const small = 'aspect-[1.3/1] w-full sm:aspect-[1.55/1]';
const large = 'aspect-[1.2/1] w-full sm:aspect-[2.2/1] md:aspect-[2/1] lg:aspect-[2.3/1]';

export default function OurProcess() {
  const [s1, s2, s3, s4, s5] = data.steps;
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="process-section relative overflow-hidden bg-[#0b0b0b] section-x section-y text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse at top, rgba(255,74,0,0.07), transparent 65%)' }}
      />
      <div className="relative mx-auto max-w-[1360px]">
        <motion.h2
          id="process-title"
          className="text-[clamp(44px,6vw,88px)] font-medium leading-[0.98] tracking-[-0.045em]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease }}
        >
          {data.heading[0]} <span className="text-[#ffc9b0]">{data.heading[1]}</span>
        </motion.h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          <ProcessCard step={s1} delay={0} visualClass={small}><SubscribeVisual /></ProcessCard>
          <ProcessCard step={s2} delay={0.1} visualClass={small}><RequestVisual /></ProcessCard>
          <div className="md:col-span-2 lg:col-span-1">
            <ProcessCard step={s3} delay={0.2} visualClass={`${small} md:aspect-[3.4/1] lg:aspect-[1.55/1]`}><BuildVisual /></ProcessCard>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:mt-6 lg:gap-6">
          <ProcessCard step={s4} delay={0} big visualClass={large}><MetricsVisual /></ProcessCard>
          <ProcessCard step={s5} delay={0.12} big visualClass={large}><GlobeVisual /></ProcessCard>
        </div>
      </div>
    </section>
  );
}
