'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { results } from '@/data/results';

const ease = [0.22, 1, 0.36, 1];
const list = results.testimonials;
const pad = (n) => String(n).padStart(2, '0');

export default function TestimonialCard() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const touch = useRef(null);

  // preload the other photos so switching never flashes blank
  useEffect(() => {
    list.forEach((t) => { const im = new Image(); im.src = t.image; });
  }, []);

  const go = (d) => {
    setDir(d);
    setI((v) => (v + d + list.length) % list.length);
  };

  const t = list[i];
  const shift = reduce ? 0 : 22 * dir;

  return (
    <motion.div
      role="group"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1);
        if (e.key === 'ArrowLeft') go(-1);
      }}
      onTouchStart={(e) => (touch.current = [e.touches[0].clientX, e.touches[0].clientY])}
      onTouchEnd={(e) => {
        if (!touch.current) return;
        const dx = e.changedTouches[0].clientX - touch.current[0];
        const dy = e.changedTouches[0].clientY - touch.current[1];
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
        touch.current = null;
      }}
      className="relative min-h-[520px] overflow-hidden rounded-[24px] bg-[#111] text-white outline-offset-4 sm:min-h-[560px] lg:min-h-0 lg:rounded-[32px]"
    >
      {/* background photo — layered crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={t.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: reduce ? 1 : 1.03, transition: { duration: reduce ? 0.15 : 0.7, ease } }}
          transition={{ duration: reduce ? 0.15 : 1, ease }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={t.image}
            alt={t.alt}
            width={1800}
            height={1100}
            draggable={false}
            className="h-full w-full object-cover"
            style={{ objectPosition: t.position }}
          />
        </motion.div>
      </AnimatePresence>
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.78))]" />

      {/* counter */}
      <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-12 lg:top-10" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={i}
            className="text-[16px] text-white/80"
            initial={{ opacity: 0, y: reduce ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: 0.4, ease }}
          >
            {pad(i + 1)} / {pad(list.length)}
          </motion.p>
        </AnimatePresence>
        <span aria-hidden className="mt-2 block h-px w-[52px] bg-white/35" />
      </div>

      {/* quote + client */}
      <div className="absolute inset-x-6 bottom-24 sm:inset-x-8 sm:bottom-9 lg:inset-x-12 lg:bottom-11 lg:pr-[130px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={i}
            initial={{ opacity: 0, x: shift }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -shift }}
            transition={{ duration: reduce ? 0.15 : 0.6, ease }}
          >
            <blockquote className="max-w-[980px] text-[clamp(24px,2.7vw,44px)] font-semibold leading-[1.12] tracking-[-0.03em]">
              “{t.quote}”
            </blockquote>
            <p className="mt-8 text-[16px] font-medium lg:mt-10">{t.name}</p>
            <p className="mt-0.5 text-[16px] text-white/65">{t.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* arrows */}
      <div className="absolute bottom-6 right-6 flex gap-2.5 sm:bottom-9 sm:right-8 lg:bottom-10 lg:right-10">
        {[
          { d: -1, label: 'Previous testimonial', Icon: ChevronLeft },
          { d: 1, label: 'Next testimonial', Icon: ChevronRight },
        ].map(({ d, label, Icon }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            onClick={() => go(d)}
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-sm transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-black/70 active:scale-95"
          >
            <Icon className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
