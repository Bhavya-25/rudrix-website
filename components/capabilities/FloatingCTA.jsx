'use client';
import { AnimatePresence, m as motion } from 'framer-motion';
import { icons } from './icons';
import { cta } from '@/data/capabilities';

const Arrow = icons.ArrowUpRight;

// Pill that floats at the bottom of the viewport while the capabilities section is on screen.
export default function FloatingCTA({ visible }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-30 flex justify-center px-4 sm:bottom-6">
    <AnimatePresence>
      {visible && (
        <motion.a
          href={cta.href}
          className="group pointer-events-auto flex w-full max-w-[560px] items-center gap-3 rounded-[12px] bg-[#111] py-2.5 pl-3 pr-2.5 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.5)] ring-1 ring-white/10 sm:w-auto sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-rudrix text-[18px] font-bold leading-none text-white">
            R
          </span>
          <span className="flex-1 text-[14px] leading-[1.3] text-white/85 sm:flex-none sm:pr-2 sm:text-[15px]">{cta.label}</span>
          <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
            <Arrow className="h-4 w-4 arw" strokeWidth={2} />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
    </div>
  );
}
