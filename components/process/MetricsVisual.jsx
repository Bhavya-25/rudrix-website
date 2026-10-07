'use client';
import { m as motion } from 'framer-motion';
import Frame from './Frame';
import useReveal from './useReveal';
import { process } from '@/data/process';

const ease = [0.22, 1, 0.36, 1];

export default function MetricsVisual() {
  const [ref, show, reduce] = useReveal();
  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: reduce ? 0 : 0.8, ease }}
    >
      <Frame className="flex h-full flex-col justify-center gap-[5%] px-[8%] py-[6%]">
        {process.metrics.map((m, i) => (
          <motion.div
            key={m.label}
            className="metric-row cursor-default"
            initial={false}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.15 + i * 0.12, ease }}
          >
            <span className="text-[15px] text-white/55">{m.label}</span>
            <div className="metric-track mt-2 h-[22px] w-full rounded-full border border-white/15 bg-black/40 p-[4px]">
              <span className="metric-fill block h-full rounded-full" style={{ '--rest': `${m.rest}%` }} />
            </div>
          </motion.div>
        ))}
      </Frame>
    </motion.div>
  );
}
