'use client';
import { useEffect, useRef, useState } from 'react';
import { m as motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import ValueCard from './values/ValueCard';
import { values } from '@/data/values';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: '-10% 0px' };

// Resting offsets of each card (in card heights) when the pin starts — as on the reference:
// card 1 is already in place, card 2 is just below, cards 3 and 4 follow a card-height apart.
const START = [0, 0.28, 1.28, 2.28];

/**
 * Pinned "stream-in" scroll (matches marketinglab.framer.ai): the heading and the
 * first card stay put while the remaining cards travel up from below at scroll speed,
 * one after another, until all four form a row. On narrow screens the row also pans
 * sideways during the same scroll. Reduced motion → static grid.
 */
export default function OurValues() {
  const reduce = useReducedMotion();
  const outer = useRef(null);
  const frame = useRef(null);
  const headRef = useRef(null);
  const [m, setM] = useState({ h: 0, wide: false, fits: false, dist: 0 });

  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] });
  const imgProgress = useScroll({ target: outer, offset: ['start end', 'end start'] }).scrollYProgress;

  const mRef = useRef(m);
  mRef.current = m;
  const x = useTransform(scrollYProgress, (p) => -p * mRef.current.dist);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const measure = () => {
      const root = frame.current;
      if (!root) return;
      const wide = mq.matches;
      const iw = window.innerWidth;
      const headH = headRef.current ? headRef.current.getBoundingClientRect().height : 200;
      // card height of the layout we would pin (computed, so it doesn't depend on which layout is showing)
      let h;
      if (wide) {
        const g = [...root.querySelectorAll('article')].find((a) => a.offsetParent !== null);
        h = g ? g.getBoundingClientRect().height : 0;
      } else {
        const w = iw < 640 ? Math.min(iw * 0.86, 380) : Math.min(iw * 0.52, 380);
        h = w / 0.79;
      }
      const trackEl = root.querySelector('[data-pan]');
      const dist = trackEl ? Math.max(0, Math.round(trackEl.scrollWidth - root.clientWidth)) : 0;
      const fits = h > 0 && window.innerHeight >= headH + (wide ? 48 : 32) + h + 90;
      setM((prev) => ({ h: h > 0 ? Math.round(h) : prev.h, wide, fits, dist: trackEl ? dist : prev.dist }));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (frame.current) ro.observe(frame.current);
    mq.addEventListener('change', measure);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener('change', measure);
      window.removeEventListener('resize', measure);
    };
  }, []);

  // stream (desktop): cards rise one after another · pan (mobile/tablet): cards slide sideways · grid: plain fallback
  const mode = reduce || !m.fits || !m.h ? 'grid' : m.wide ? 'stream' : 'pan';
  const span = mode === 'stream' ? Math.round(m.h * START[3]) : mode === 'pan' ? Math.round(Math.max(m.dist * 1.15, 360)) : 0;
  const pinned = mode !== 'grid';

  const header = (
    <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:text-left">
      <motion.h2
        id="values-title"
        className="text-[clamp(44px,6vw,88px)] font-medium leading-[0.98] tracking-[-0.04em]"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.9, ease }}
      >
        {values.heading.map((l) => (
          <span key={l} className="inline-block first:mr-[0.25em] lg:block lg:first:mr-0">{l}</span>
        ))}
      </motion.h2>
      <motion.p
        className="max-w-[470px] text-[16px] leading-[1.55] text-white/55 lg:text-right lg:text-[17px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.8, delay: 0.2, ease }}
      >
        {values.intro}
      </motion.p>
    </div>
  );

  return (
    <section
      id="values"
      aria-labelledby="values-title"
      className="relative overflow-x-clip bg-[#0b0b0b] text-white"
    >
      <div ref={outer} style={{ height: pinned ? `calc(100vh + ${span}px)` : 'auto' }}>
        <div
          className={`px-5 sm:px-8 lg:px-12 xl:px-[88px] ${
            pinned ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-8' : 'py-[clamp(64px,9vw,130px)]'
          }`}
        >
          <div ref={frame} className="mx-auto w-full max-w-[1360px]">
            <div ref={headRef}>{header}</div>
            <div className="mt-8 lg:mt-[48px]">
              {mode === 'grid' && (
                <div className="mx-auto grid max-w-[560px] gap-5 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                  {values.items.map((item, i) => (
                    <ValueCard key={item.number} item={item} index={i} scroll={imgProgress} />
                  ))}
                </div>
              )}

              {mode === 'stream' && (
                <div className="flex gap-6">
                  {values.items.map((item, i) => (
                    <RisingCard key={item.number} index={i} progress={scrollYProgress} mRef={mRef} span={span}>
                      <ValueCard item={item} index={i} scroll={imgProgress} />
                    </RisingCard>
                  ))}
                </div>
              )}

              {mode === 'pan' && (
                <motion.div data-pan style={{ x }} className="flex w-max gap-4 sm:gap-5">
                  {values.items.map((item, i) => (
                    <div key={item.number} className="w-[min(86vw,380px)] shrink-0 sm:w-[min(52vw,380px)]">
                      <ValueCard item={item} index={i} scroll={imgProgress} />
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// One card in the stream: travels up 1px per scrolled px, starting START[index] card-heights below.
function RisingCard({ index, progress, mRef, span, children }) {
  const y = useTransform(progress, (p) => {
    const h = mRef.current.h;
    return Math.max(0, START[index] * h - p * span);
  });
  const opacity = useTransform(progress, (p) => {
    const h = mRef.current.h || 1;
    const off = Math.max(0, START[index] * h - p * span);
    return Math.min(1, 0.25 + 0.75 * (1 - Math.min(1, off / (h * 0.9))));
  });
  return (
    <motion.div style={{ y, opacity }} className="w-[calc((100%-4.5rem)/4)] shrink-0">
      {children}
    </motion.div>
  );
}
