'use client';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import RotatingImageRing from './RotatingImageRing';
import HeroCTA from './HeroCTA';
import GrowthPartners from './GrowthPartners';
import { hero } from '@/data/site';

export default function HeroSection() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-white pt-36 text-ink md:pt-40"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 text-center sm:px-8">
        <h1
          id="hero-title"
          className="text-[clamp(34px,9.6vw,52px)] font-medium leading-[1.06] tracking-[-0.035em] sm:text-[clamp(52px,5.9vw,76px)] lg:text-[clamp(60px,5.4vw,100px)] lg:leading-[1.04]"
        >
          {hero.title.map((line, i) => (
            <span key={i} className="block md:whitespace-nowrap">
              {line.split(' ').map((w, j) => (
                <span
                  key={j}
                  className="hero-rise inline-block"
                  style={{ marginRight: '0.25em', '--d': `${0.3 + i * 0.12 + j * 0.04}s` }}
                >
                  {w}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p
          className="hero-rise mt-7 max-w-[700px] text-[17px] leading-[1.55] text-slate2 sm:text-[19px]"
          style={{ '--d': '0.1s' }}
        >
          {hero.body}
        </p>

        <HeroCTA />
      </div>

      <RotatingImageRing scroll={scrollYProgress} reduce={reduce} />

      <GrowthPartners />

    </section>
  );
}
