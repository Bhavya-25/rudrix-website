'use client';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { portfolioCta as c } from '@/data/work';
import Cta from '@/components/Cta';

const ease = [0.22, 1, 0.36, 1];

// HTML/CSS phone frame with a portrait OneUp Creatives poster. The copy, logo and screens come from the OneUp project
// (data/projects.js description and highlights + the project cover); the layout is a portrait composition made for this frame.
function Phone() {
  return (
    <div className="pcta-phone relative aspect-[1/2.07] w-full rounded-[13%/6.4%] bg-[#1c2a33] p-[2.6%] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.65),0_0_0_2px_#8fa3ad_inset]" role="img" aria-label="OneUp Creatives project poster: Built to Engage. Designed to Convert.">
      <div className="relative h-full w-full overflow-hidden rounded-[11%/5.4%] bg-[#0b0908] text-white" style={{ containerType: 'inline-size' }}>
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(120%_55%_at_85%_0%,rgba(255,90,0,0.38),transparent_60%),radial-gradient(90%_40%_at_0%_100%,rgba(255,90,0,0.22),transparent_65%)]" />
        <div aria-hidden className="absolute left-1/2 top-[2%] z-10 h-[3.3%] w-[28%] -translate-x-1/2 rounded-full bg-black" />
        <div className="absolute inset-0 flex flex-col px-[7%] pt-[12%] text-[3.3cqw]" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/projects/oneup-logo.webp" alt="" width={150} height={60} className="h-[4.6em] w-auto self-start mix-blend-screen" draggable={false} />
          <span className="mt-[1.6em] self-start rounded-[0.4em] border border-[#ff5a00]/70 px-[0.9em] py-[0.55em] text-[0.62em] font-semibold tracking-[0.14em] text-[#ff7a2a]">FULL-STACK CREATIVE AGENCY WEBSITE</span>
          <p className="mt-[1.1em] text-[2.9em] font-bold leading-[1.04] tracking-[-0.02em]">Built to Engage.<br /><span className="text-[#ff5a00]">Designed to Convert.</span></p>
          <p className="mt-[1.1em] text-[0.82em] leading-[1.55] text-white/70">A sleek, high-performance creative agency website built with modern full-stack technologies, designed to convert visitors into clients.</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/projects/oneup-screens.webp" alt="" width={599} height={592} loading="lazy" decoding="async" className="mt-[1.2em] w-full rounded-[0.9em] object-cover" draggable={false} />
          <ul className="mt-[1.1em] grid grid-cols-2 gap-[0.6em] text-[0.74em] font-medium">
            {['CMS Portfolio', 'Animated UI', 'Lead Gen', 'SEO Optimised'].map((t) => (
              <li key={t} className="rounded-[0.7em] border border-white/10 bg-white/[0.06] px-[0.9em] py-[0.8em] text-center">{t}</li>
            ))}
          </ul>
          <p className="mt-auto pb-[6%] text-center text-[0.62em] tracking-[0.08em] text-white/50">Next.js · Tailwind CSS · Node.js · Sanity CMS</p>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioCTA() {
  const reduce = useReducedMotion();
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -10% 0px' }, transition: { duration: 0.8, delay: d, ease } });
  return (
    <section aria-labelledby="pcta-title" className="bg-white section-x pb-[clamp(110px,14vw,200px)] pt-[clamp(40px,6vw,90px)]">
      <div className="pcta relative mx-auto max-w-[1260px]">
        <motion.div
          {...rise(0)}
          className="pcta-banner relative rounded-[8px] bg-[#3a120c] bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(90deg, rgba(10,4,8,0.15), rgba(10,4,8,0.35)), url('/images/cta-silk.webp')" }}
        >
          <div className="relative z-10 flex h-full flex-col justify-between gap-8 p-7 pr-7 sm:p-10 lg:w-[62%] lg:p-[clamp(32px,4.6vw,64px)]">
            <div>
              <h2 id="pcta-title" className="text-[clamp(32px,3.9vw,56px)] font-normal leading-[1.15] tracking-[-0.03em] text-white">
                {c.title.map((l) => <span key={l} className="block">{l}</span>)}
              </h2>
              <p className="mt-6 max-w-[520px] text-[clamp(15px,1.25vw,18px)] leading-[1.6] text-white/90">{c.text}</p>
            </div>
            <Cta href={c.cta.href} variant="light" className="w-fit">{c.cta.label}</Cta>
          </div>
        </motion.div>

        {/* the phone sits over the banner and runs past its top and bottom edges */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="pcta-phone-wrap relative z-20 mx-auto lg:absolute"
        >
          <div className="pcta-float"><Phone /></div>
        </motion.div>
      </div>
    </section>
  );
}
