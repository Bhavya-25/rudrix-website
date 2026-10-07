'use client';
import { m as motion, useReducedMotion, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function ValueCard({ item, index, scroll }) {
  const reduce = useReducedMotion();
  // image layer drifts a few px against the page scroll (card stays still; image is oversized so it never exposes the edge)
  const y = useTransform(scroll, [0, 1], [reduce ? 0 : -14, reduce ? 0 : 14]);
  const delay = 0.3 + index * 0.12;

  return (
    <article
      className="value-card group relative aspect-[0.79/1] lg:aspect-[0.62/1] lg:min-h-[min(480px,58vh)] overflow-hidden rounded-[24px] border border-white/45 bg-[#ff5a14] transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-white/75"
    >
      {/* image layer (parallax) */}
      <motion.div className="absolute -inset-y-[6%] inset-x-0" style={{ y }}>
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0, scale: reduce ? 1 : 1.12, y: reduce ? 0 : 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: reduce ? 0.2 : 1.1 + index * 0.1, delay: reduce ? 0 : delay, ease }}
        >
          <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.alt}
              width={900}
              height={1400}
              loading="lazy"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: item.position }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* colour + readability overlays */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,90,20,0),rgba(110,10,0,0.18))] transition-opacity duration-500 group-hover:opacity-80" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_26%,rgba(40,0,0,0.42)_55%,rgba(20,0,0,0.84)_100%)] transition-opacity duration-500 group-hover:opacity-100" />

      {/* number */}
      <span
        aria-hidden
        className="absolute right-6 top-[11%] text-[clamp(64px,19vw,88px)] font-normal leading-none tracking-[-0.04em] text-white sm:text-[clamp(64px,8vw,90px)] lg:left-1/2 lg:right-auto lg:top-[15%] lg:-translate-x-1/2 lg:text-[clamp(72px,7vw,110px)]"
      >
        {item.number}
      </span>

      {/* copy */}
      <div className="absolute inset-x-6 bottom-8 lg:inset-x-7">
        <h3 className="text-[clamp(21px,1.7vw,24px)] font-medium leading-[1.15] tracking-[-0.02em] text-white">{item.title}</h3>
        <p className="mt-4 max-w-[92%] text-[15px] leading-[1.5] text-white/90 lg:text-[16px]">{item.description}</p>
      </div>
    </article>
  );
}
