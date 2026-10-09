'use client';
import { m as motion } from 'framer-motion';
import { icons } from './icons';
import { custom } from '@/data/capabilities';
import Cta from '@/components/Cta';

const Arrow = icons.ArrowRight;

export default function CustomSolutionBar({ variants }) {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col gap-5 rounded-[8px] bg-[#fafafa] px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-[40px] lg:py-4"
    >
      <p className="text-[clamp(20px,1.7vw,26px)] font-semibold tracking-[-0.01em] text-ink">{custom.title}</p>
      <Cta href={custom.href}>{custom.label}</Cta>
    </motion.div>
  );
}
