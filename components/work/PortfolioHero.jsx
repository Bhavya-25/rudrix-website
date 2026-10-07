'use client';
import { m as motion, useReducedMotion } from 'framer-motion';
import { portfolioHero as p } from '@/data/work';

const ease = [0.22, 1, 0.36, 1];

// Static layered stack: four project visuals offset diagonally, each with a coloured outline and corner squares.
export default function PortfolioHero() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="portfolio-title" className="relative overflow-hidden bg-white pb-[clamp(56px,7vw,100px)] pt-[clamp(150px,13vw,170px)]">
      {/* huge faint word drifting right → left forever: two identical tracks, moved by exactly one track's width */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[clamp(230px,22vw,300px)] select-none overflow-hidden">
        <div className="marquee-left flex w-max" style={{ '--marquee': '46s' }}>
          {[0, 1].map((t) => (
            <div key={t} className="flex shrink-0">
              {[0, 1].map((k) => (
                <span key={k} className="pf-word mr-[0.35em] whitespace-nowrap text-[clamp(120px,19vw,282px)] font-medium leading-none tracking-[-0.02em] text-[#f4f4f4]">{p.word}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="pf-stack relative mx-auto" role="img" aria-label="Selected Rudrix project visuals">
        {p.stack.map((c, i) => (
          <motion.div
            key={c.src}
            className="pf-layer absolute"
            style={{ '--i': i, '--c': c.color, zIndex: i + 1 }}
            initial={reduce ? false : { opacity: 0, x: 24, y: 24 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 + (p.stack.length - 1 - i) * 0.1, ease }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.src} alt="" width={900} height={680} loading="eager" draggable={false} className="h-full w-full object-cover" />
            {['tl', 'tr', 'bl', 'br'].map((k) => <span key={k} aria-hidden className={`pf-corner pf-${k}`} />)}
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto mt-[clamp(36px,5vw,70px)] max-w-[900px] px-[22px] text-center sm:px-8">
        <motion.h1 id="portfolio-title" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }} className="text-[clamp(28px,3.65vw,52px)] font-normal leading-[1.2] tracking-[-0.036em] text-[#1d1d1d]">
          {p.title}
        </motion.h1>
        <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease }} className="mx-auto mt-5 max-w-[720px] text-[clamp(14px,1.12vw,16px)] leading-[1.6] text-[#5f5f5c]">{p.text}</motion.p>
      </div>
    </section>
  );
}
