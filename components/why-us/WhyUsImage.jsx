'use client';
import { AnimatePresence, m as motion, useReducedMotion } from 'framer-motion';
import { whyUs } from '@/data/whyUs';

const ease = [0.22, 1, 0.36, 1];

// Layered crossfade: the new photo fades/settles in above the old one.
export default function WhyUsImage({ active }) {
  const reduce = useReducedMotion();
  const it = whyUs.items[active];
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#ecebe8]">
      <AnimatePresence initial={false}>
        <motion.img
          key={it.image}
          src={it.image}
          alt={it.alt}
          width={1600}
          height={2000}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: it.position }}
          initial={{ opacity: 0, scale: reduce ? 1 : 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: reduce ? 1 : 1.02, transition: { duration: reduce ? 0.15 : 0.6, ease } }}
          transition={{ duration: reduce ? 0.15 : 0.7, ease }}
        />
      </AnimatePresence>
    </div>
  );
}
