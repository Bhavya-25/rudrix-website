'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { m as motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { finalCta as c } from '@/data/ourProcess';
import { recognition } from '@/data/work';

const ease = [0.22, 1, 0.36, 1];

export default function FinalCTA() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-14, 14]);
  const show = (d) => ({ initial: reduce ? false : { opacity: 0, y: 26 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : d, ease } });
  return (
    <section ref={ref} aria-labelledby="fc-title" className="relative isolate overflow-hidden bg-[#080808] text-white">
      <div aria-hidden className="absolute -right-[10%] -top-[20%] -z-10 h-[70%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.14),transparent_65%)]" />
      <div className="section-x pb-[clamp(36px,4vw,56px)] pt-[clamp(72px,9vw,130px)]">
        <div className="mx-auto grid max-w-[1245px] items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6.2fr)] lg:gap-[clamp(40px,5vw,90px)]">
          <div>
            <motion.p {...show(0)} className="flex items-center gap-3 text-[12px] font-medium tracking-[0.22em] text-[#ff5a1f] sm:text-[13px]"><span aria-hidden className="h-px w-8 bg-[#ff5a1f]" />{c.eyebrow}</motion.p>
            <motion.h2 id="fc-title" {...show(0.1)} className="mt-6 text-[clamp(34px,4vw,62px)] font-normal leading-[1.04] tracking-[-0.035em]">{c.title[0]}<br />{c.title[1]}</motion.h2>
            <motion.p {...show(0.2)} className="mt-7 max-w-[500px] text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-white/70">{c.text}</motion.p>
            <motion.div {...show(0.3)} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href={c.cta.href} className="group inline-flex min-h-[56px] items-center gap-6 rounded-[6px] bg-[#ff5a1f] px-7 text-[16px] font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#e84b12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none">
                {c.cta.label}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
              </Link>
              <Link href={c.secondary.href} className="group inline-flex min-h-[44px] items-center gap-2 text-[15px] text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {c.secondary.label}<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </motion.div>
            <motion.p {...show(0.38)} className="mt-6 max-w-[420px] text-[14px] leading-[1.6] text-white/45">{c.micro} {c.note}</motion.p>
            <motion.ul {...show(0.45)} aria-label="What we build" className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium tracking-[0.2em] text-white/45">
              {c.intents.map((t) => <li key={t} className="uppercase">{t}</li>)}
            </motion.ul>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: reduce ? 0.2 : 1.1, delay: reduce ? 0 : 0.35, ease }}
            className="group/visual relative lg:-mr-[clamp(0px,4vw,70px)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#111] sm:aspect-[16/11] lg:aspect-[5/5.2]">
              <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.imageAlt} width={1200} height={1200} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/visual:scale-[1.03] motion-reduce:transition-none" style={{ objectPosition: '50% 40%', filter: 'saturate(0.85) contrast(1.05)' }} />
              </motion.div>
              <span aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,8,0.85)_0%,rgba(8,8,8,0.15)_55%,rgba(8,8,8,0.35)_100%)]" />
              <span aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,90,31,0.22),transparent_55%)] mix-blend-screen" />
              <span aria-hidden className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]" />
            </div>

            <motion.aside
              aria-label={`${c.status.caption}: decorative build status`}
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mt-4 w-full rounded-[12px] sm:absolute sm:-bottom-6 sm:left-[-28px] sm:mt-0 sm:w-[260px] border border-white/15 bg-[#0d0d0d]/90 p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur sm:p-6 lg:-left-10"
            >
              <p className="text-[10px] font-medium tracking-[0.2em] text-white/50">{c.status.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5 text-[13px]">
                {c.status.rows.map(([name, s]) => (
                  <li key={name} className="flex items-center justify-between gap-4">
                    <span className={s === 'next' ? 'text-white/35' : 'text-white/85'}>{name.toUpperCase()}</span>
                    <span aria-hidden className={`grid h-[18px] w-[18px] place-items-center rounded-full text-[10px] ${s === 'done' ? 'bg-white/10 text-white' : s === 'now' ? 'bg-[#ff5a1f] text-white' : 'border border-white/20'}`}>
                      {s === 'done' ? <Check className="h-3 w-3" /> : s === 'now' ? <span className="h-1.5 w-1.5 rounded-full bg-white" /> : null}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/10 pt-3 text-[10px] font-medium tracking-[0.2em] text-[#ff5a1f]">{c.status.footer}</p>
              <p className="mt-1 text-[10px] text-white/35">{c.status.caption}</p>
            </motion.aside>
          </motion.div>
        </div>

        <motion.div {...show(0.5)} className="mx-auto mt-[clamp(56px,6vw,90px)] flex max-w-[1245px] flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-medium tracking-[0.22em] text-white/45">FIND OUR WORK</p>
          <ul className="flex flex-wrap gap-3">
            {c.platforms.map((k) => {
              const p = recognition.profiles[k];
              const name = k[0].toUpperCase() + k.slice(1);
              const inner = (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt="" width={20} height={20} className="h-5 w-5 invert" />
                  {name.toUpperCase()}
                </>
              );
              const cls = 'inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-white/15 px-4 text-[12px] font-medium tracking-[0.14em] text-white/70';
              return (
                <li key={k}>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit Rudrix on ${name}`} className={`${cls} transition-colors hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}>{inner}</a>
                  ) : (
                    <span className={`${cls} opacity-70`}>{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
