'use client';
import { motion } from 'framer-motion';
import { site } from '@/data/site';

export default function AvailabilityBadge({ hidden = false }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-center">
    <motion.div
      className=""
      initial={{ y: '-100%' }}
      animate={{ y: hidden ? '-100%' : 0 }}
      transition={hidden ? { duration: 0.35, ease: [0.4, 0, 0.2, 1] } : { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.03 }}
        className="status-tab pointer-events-auto flex items-center gap-2.5 max-lg:min-h-[44px] rounded-b-[22px] bg-near-black whitespace-nowrap px-6 pb-2.5 pt-2 text-[12.5px] font-medium text-white sm:px-9 sm:text-sm"
      >
        <span className="live-dot h-2 w-2 rounded-full bg-live" aria-hidden />
        {site.status}
      </motion.a>
    </motion.div>
    </div>
  );
}
