'use client';
import { useEffect, useState } from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';
import WhyUsAccordion from './why-us/WhyUsAccordion';
import WhyUsImage from './why-us/WhyUsImage';
import { Asterisk, Sparkle } from './why-us/Sparkle';
import { whyUs } from '@/data/whyUs';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: '-10% 0px' };

export default function WhyChooseUs() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(whyUs.defaultIndex);

  // warm the cache for the other photos on the visitor's first scroll/touch, so none of it competes with the first paint
  useEffect(() => {
    let done = false;
    const warm = () => {
      if (done) return;
      done = true;
      whyUs.items.forEach((it) => { const im = new Image(); im.src = it.image; });
    };
    window.addEventListener('scroll', warm, { once: true, passive: true });
    window.addEventListener('pointerdown', warm, { once: true, passive: true });
    return () => { window.removeEventListener('scroll', warm); window.removeEventListener('pointerdown', warm); };
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="why-title"
      className="relative overflow-hidden bg-[#fafafa] section-x section-y text-ink"
    >
      <div className="relative mx-auto max-w-[1360px]">
        <motion.p
          className="flex items-center gap-3.5 text-[16px]"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease }}
        >
          <Sparkle className="h-[24px] w-[24px] text-ink" />
          {whyUs.eyebrow}
        </motion.p>

        <motion.h2
          id="why-title"
          className="mt-5 max-w-[900px] text-[clamp(34px,10.4vw,38px)] sm:text-[clamp(38px,5vw,72px)] font-medium leading-[1.02] tracking-[-0.045em]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          {whyUs.heading.map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </motion.h2>

        {/* decorative asterisk */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[2%] top-[8%] hidden h-[clamp(60px,6vw,90px)] w-[clamp(60px,6vw,90px)] text-[#c8c8c8] md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.55, scale: 1 }}
          viewport={vp}
          transition={{ duration: 1.1, delay: 0.3, ease }}
        >
          <Asterisk className="why-spin h-full w-full" />
        </motion.div>

        <div className="mt-10 grid items-stretch gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <WhyUsAccordion active={active} onChange={setActive} />
          </motion.div>
          <motion.div
            className="h-[420px] sm:h-[520px] lg:h-auto lg:min-h-[480px]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ duration: 0.9, delay: 0.25, ease }}
          >
            <WhyUsImage active={active} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
