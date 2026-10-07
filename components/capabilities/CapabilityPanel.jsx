'use client';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import ToolsList from './ToolsList';
import CustomSolutionBar from './CustomSolutionBar';

const ease = [0.22, 1, 0.36, 1];
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

// One capability's content: heading → description → "What we deliver" → staggered cards.
export default function CapabilityPanel({ cap, animate = true }) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, transition: { duration: 0.28, ease } }}
      transition={{ duration: 0.55, ease }}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
      >
        <motion.h3 variants={item} className="text-[clamp(26px,2vw,32px)] font-normal leading-[1.15] tracking-[-0.025em] text-ink">
          {cap.heading}
        </motion.h3>
        <motion.p variants={item} className="mt-3 max-w-[900px] text-[16px] leading-[1.65] text-slate2 lg:text-[17px]">
          {cap.description}
        </motion.p>
        <motion.p variants={item} className="mt-6 text-[15px] text-slate2">What we deliver</motion.p>
        <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-3">
          {cap.services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </ul>
        <div className="mt-6">
          <ToolsList tools={cap.tools} />
        </div>
        <div className="mt-6">
          <CustomSolutionBar variants={item} />
        </div>
      </motion.div>
    </motion.div>
  );
}
