'use client';
import { motion } from 'framer-motion';
import { icons } from './icons';
import { custom } from '@/data/capabilities';

const Arrow = icons.ArrowRight;

export default function CustomSolutionBar({ variants }) {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col gap-5 rounded-[8px] bg-[#fafafa] px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-[40px] lg:py-4"
    >
      <p className="text-[clamp(20px,1.7vw,26px)] font-semibold tracking-[-0.01em] text-ink">{custom.title}</p>
      <a
        href={custom.href}
        className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[8px] bg-rudrix-strong px-7 text-[17px] text-white shadow-[0_1px_0_rgba(0,0,0,0.12)] transition-[transform,background-color,box-shadow] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#b83300] hover:shadow-[0_14px_24px_-12px_rgba(214,60,0,0.7)] active:translate-y-0"
      >
        {custom.label}
        <Arrow className="h-[18px] w-[18px] transition-transform duration-[350ms] group-hover:translate-x-1" strokeWidth={2.2} aria-hidden />
      </a>
    </motion.div>
  );
}
