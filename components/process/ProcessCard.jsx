'use client';
import { m as motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function ProcessCard({ step, delay = 0, visualClass, big = false, children }) {
  return (
    <motion.article
      className="process-card group relative flex flex-col overflow-hidden rounded-[12px] border border-white/[0.08] p-[clamp(16px,3.2vw,48px)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:border-rudrix/30 hover:shadow-[0_0_60px_-20px_rgba(255,74,0,0.35)]"
      initial={{ opacity: 0, y: 30, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      <div className={visualClass}>{children}</div>
      <h3 className={`mt-[clamp(24px,3vw,48px)] font-normal leading-[1.1] tracking-[-0.03em] text-white ${big ? 'text-[clamp(28px,2.6vw,40px)]' : 'text-[clamp(28px,2.3vw,36px)]'}`}>
        <span className="text-rudrix">{step.n}</span> {step.title}
      </h3>
      <p className="mt-5 max-w-[520px] text-[clamp(15px,1.1vw,17px)] leading-[1.55] text-white/50">{step.body}</p>
    </motion.article>
  );
}
