'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { m as motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { customSoftwareHero as master } from '@/data/services';

const ease = [0.22, 1, 0.36, 1];

export default function CustomSoftwareHero({ data }) {
  const h = data || master;
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 28]);
  const rise = (d) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : d, ease } });

  return (
    <section ref={ref} aria-labelledby="csh-title" className="relative overflow-hidden bg-[#f7f7f6] pt-[clamp(144px,13vw,160px)]">
      <div className="section-x">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-[clamp(40px,5vw,90px)]">
          <div className="lg:py-6">
            <motion.p {...rise(0)} className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.22em] text-rudrix-strong sm:text-[13px]"><span aria-hidden className="h-px w-8 bg-rudrix-strong" />{h.eyebrow}</motion.p>
            <motion.h1 id="csh-title" {...rise(0.1)} className="mt-6 max-w-[680px] text-[clamp(38px,4.9vw,76px)] font-normal leading-[1.05] tracking-[-0.04em] text-ink">
              {h.title.map((l) => <span key={l} className="block">{l}</span>)}
            </motion.h1>
            <motion.p {...rise(0.2)} className="mt-7 max-w-[560px] text-[clamp(16px,1.35vw,19px)] leading-[1.65] text-slate2">{h.text}</motion.p>
            <motion.div {...rise(0.3)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link href={h.primary.href} className="group inline-flex min-h-[56px] items-center justify-center gap-4 rounded-[4px] bg-[linear-gradient(97deg,#e04a10_0%,#d63c00_100%)] px-7 text-[16px] font-medium text-white transition-[transform,filter] duration-300 hover:-translate-y-px hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717] motion-reduce:transition-none">
                {h.primary.label}
                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link href={h.secondary.href} className="inline-flex min-h-[56px] items-center justify-center rounded-[4px] border border-black/[0.08] bg-white px-7 text-[16px] font-medium text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[transform,border-color] duration-300 hover:-translate-y-px hover:border-black/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717] motion-reduce:transition-none">
                {h.secondary.label}
              </Link>
            </motion.div>
            <motion.ul {...rise(0.45)} aria-label="Focus areas" className="mt-[clamp(32px,4.5vw,64px)] flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-semibold tracking-[0.16em] text-[#4a4a47]">
              {h.proof.map((t) => <li key={t} className="flex items-center gap-2 uppercase"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />{t}</li>)}
            </motion.ul>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.9, delay: reduce ? 0 : 0.25, ease }}
            className="group/img relative aspect-[4/5] w-full overflow-hidden rounded-[26px] bg-[#e7e5e0] sm:aspect-[5/5] lg:aspect-auto lg:h-[clamp(520px,46vw,700px)]"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-x-0 -inset-y-[28px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={h.image} alt={h.imageAlt} width={1200} height={1500} fetchPriority="high" className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover/img:scale-[1.015] motion-reduce:transition-none" style={{ objectPosition: '50% 40%' }} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* subtle category strip: decorative, seamless CSS marquee (two identical tracks) */}
      <div aria-hidden className="marquee-mask mt-[clamp(40px,5vw,72px)] overflow-hidden py-[clamp(24px,3vw,40px)] opacity-[0.28]">
        <div className="marquee-left flex w-max" style={{ '--marquee': '48s' }}>
          {[0, 1].map((c) => (
            <div key={c} className="flex shrink-0 items-center">
              {h.strip.map((t) => <span key={`${c}-${t}`} className="mx-[clamp(28px,4vw,64px)] whitespace-nowrap text-[clamp(20px,2.4vw,32px)] font-semibold italic tracking-[-0.03em] text-[#1d1d1d]">{t}</span>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
