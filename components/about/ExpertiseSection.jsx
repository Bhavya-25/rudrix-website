'use client';
import Link from 'next/link';
import { m as motion, useReducedMotion } from 'framer-motion';
import ExpertiseIcon from './ExpertiseIcons';
import RollCta from './RollCta';
import { expertise } from '@/data/about';

const ease = [0.22, 1, 0.36, 1];

// Small square registration marks at the four corners (CSS only).
function Marks({ className = 'bg-white/[0.28]', size = 11, inset = 7 }) {
  const s = { width: size, height: size };
  return (
    <>
      <span aria-hidden className={`pointer-events-none absolute transition-colors duration-300 ${className}`} style={{ ...s, top: inset, left: inset }} />
      <span aria-hidden className={`pointer-events-none absolute transition-colors duration-300 ${className}`} style={{ ...s, top: inset, right: inset }} />
      <span aria-hidden className={`pointer-events-none absolute transition-colors duration-300 ${className}`} style={{ ...s, bottom: inset, left: inset }} />
      <span aria-hidden className={`pointer-events-none absolute transition-colors duration-300 ${className}`} style={{ ...s, bottom: inset, right: inset }} />
    </>
  );
}

export default function ExpertiseSection() {
  const reduce = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -8% 0px' },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section aria-labelledby="expertise-title" className="bg-[#050505] text-white section-y">
      <div className="mx-auto max-w-[1280px] px-[22px] sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div {...reveal(0)} className="relative inline-block p-[6px]">
              <Marks className="bg-white" size={7} inset={0} />
              <p className="border border-white/80 px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] text-white sm:text-[13px]">{expertise.eyebrow}</p>
            </motion.div>
            <motion.h2 id="expertise-title" {...reveal(0.08)} className="mt-6 text-[clamp(38px,5vw,66px)] font-normal leading-[1.02] tracking-[-0.03em]">
              {expertise.title.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </motion.h2>
            <motion.p {...reveal(0.16)} className="mt-6 max-w-[520px] text-[16px] leading-[1.6] text-white/70 sm:text-[17px]">{expertise.text}</motion.p>
          </div>
          <motion.div {...reveal(0.24)}>
            <RollCta href={expertise.cta.href} label={expertise.cta.label} />
          </motion.div>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-3">
          {expertise.items.map((it, i) => (
            <motion.li
              key={it.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -6% 0px' }}
              transition={{ duration: 0.65, delay: reduce ? 0 : (i % 3) * 0.08, ease }}
            >
              <Link
                href={it.href}
                aria-label={`${it.title}: ${it.text}`}
                className="group relative flex h-full min-h-[340px] flex-col justify-between border border-white/[0.12] bg-transparent p-6 transition-[border-color,box-shadow] duration-300 ease-out hover:border-[#ff4a00] hover:shadow-[inset_0_0_80px_rgba(255,74,0,0.13)] focus-visible:border-[#ff4a00] focus-visible:shadow-[inset_0_0_80px_rgba(255,74,0,0.13)] sm:p-7 lg:min-h-[380px] lg:p-8"
              >
                <Marks className="bg-white/[0.26] group-hover:bg-[#ff4a00] group-focus-visible:bg-[#ff4a00]" />
                <ExpertiseIcon
                  name={it.icon}
                  className="mt-6 h-[84px] w-[84px] text-white/[0.22] transition-colors duration-300 ease-out group-hover:text-[#ff4a00] group-focus-visible:text-[#ff4a00] sm:h-[96px] sm:w-[96px] lg:h-[104px] lg:w-[104px]"
                />
                <div className="mt-10">
                  <h3 className="border-b border-white/[0.14] pb-3 text-[18px] font-medium uppercase leading-tight tracking-[-0.005em] text-white transition-colors duration-300 sm:text-[20px]">
                    {it.title}
                  </h3>
                  <p className="mt-3 min-h-[48px] max-w-[320px] text-[14px] leading-[1.55] text-white/70 transition-[opacity,transform] duration-300 ease-out lg:translate-y-1 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                    {it.text}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
