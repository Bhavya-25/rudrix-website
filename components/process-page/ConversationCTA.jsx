'use client';
import Link from 'next/link';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight, Check } from 'lucide-react';
import { conversation as c } from '@/data/ourProcess';

const ease = [0.22, 1, 0.36, 1];

export default function ConversationCTA() {
  const reduce = useReducedMotion();
  const show = (d) => ({ initial: reduce ? false : { opacity: 0, y: 26 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : d, ease } });
  return (
    <section aria-labelledby="cc-title" className="relative isolate overflow-hidden bg-[#080808] text-white">
      <div aria-hidden className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#ff5a1f]/60 to-transparent" />
      <div aria-hidden className="absolute -left-[10%] bottom-[-30%] -z-10 h-[70%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.12),transparent_65%)]" />
      <div className="section-x py-[clamp(72px,9vw,130px)]">
        <div className="mx-auto grid max-w-[1245px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[clamp(40px,6vw,100px)]">
          <div>
            <motion.p {...show(0)} className="flex items-center gap-3 text-[12px] font-medium tracking-[0.22em] text-[#ff5a1f] sm:text-[13px]"><span aria-hidden className="h-px w-8 bg-[#ff5a1f]" />{c.eyebrow}</motion.p>
            <motion.h2 id="cc-title" {...show(0.1)} className="mt-6 text-[clamp(34px,4.4vw,68px)] font-normal leading-[1.03] tracking-[-0.035em]">{c.title[0]}<br />{c.title[1]}</motion.h2>
            <motion.p {...show(0.2)} className="mt-7 max-w-[500px] text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-white/70">{c.text}</motion.p>
            <motion.div {...show(0.3)} className="mt-9">
              <Link href={c.cta.href} className="group inline-flex min-h-[56px] items-center gap-6 rounded-[6px] bg-[#ff5a1f] px-7 text-[16px] font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#e84b12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none">
                {c.cta.label}<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
              </Link>
            </motion.div>
            <motion.p {...show(0.38)} className="mt-6 max-w-[420px] text-[14px] leading-[1.6] text-white/45">{c.micro}</motion.p>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: reduce ? 0.2 : 1.1, delay: reduce ? 0 : 0.3, ease }}
            className="group/frame relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#111] sm:aspect-[16/11] lg:aspect-[5/5.4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.imageAlt} width={1200} height={1200} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/frame:scale-[1.04] motion-reduce:transition-none" style={{ objectPosition: '50% 35%', filter: 'saturate(0.85) contrast(1.05)' }} />
              <span aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,8,0.88)_0%,rgba(8,8,8,0.1)_55%,rgba(8,8,8,0.35)_100%)]" />
              <span aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(255,90,31,0.25),transparent_55%)] mix-blend-screen" />
              <span aria-hidden className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.55)]" />
            </div>

            <motion.aside aria-label={c.status.caption} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.7, ease }} className="relative mt-4 w-full rounded-[12px] border border-white/15 bg-[#0d0d0d]/90 p-5 backdrop-blur sm:absolute sm:right-6 sm:top-6 sm:mt-0 sm:w-[230px] lg:-right-6">
              <p className="text-[10px] font-medium tracking-[0.2em] text-white/50">{c.status.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5 text-[13px]">
                {c.status.rows.map(([n, s]) => (
                  <li key={n} className="flex items-center justify-between gap-4"><span className={s === 'next' ? 'text-white/35' : 'text-white/85'}>{n.toUpperCase()}</span>
                    <span aria-hidden className={`grid h-[18px] w-[18px] place-items-center rounded-full ${s === 'done' ? 'bg-white/10' : s === 'now' ? 'bg-[#ff5a1f]' : 'border border-white/20'}`}>{s === 'done' ? <Check className="h-3 w-3" /> : s === 'now' ? <span className="h-1.5 w-1.5 rounded-full bg-white" /> : null}</span></li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/10 pt-3 text-[10px] font-medium tracking-[0.2em] text-[#ff5a1f]">{c.status.footer}</p>
              <p className="mt-1 text-[10px] text-white/35">{c.status.caption}</p>
            </motion.aside>

            <Link href={c.cta.href} className="group/next relative mt-4 inline-flex min-h-[44px] items-center gap-3 rounded-full border border-white/20 bg-[#0d0d0d]/90 px-5 text-[11px] font-medium tracking-[0.16em] text-white/85 backdrop-blur transition-colors hover:border-[#ff5a1f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:absolute sm:bottom-6 sm:left-6 sm:mt-0">
              <span className="text-[#ff5a1f]">{c.next.lead}</span>
              <span className="group-hover/next:hidden group-focus-visible/next:hidden">{c.next.label}</span>
              <span className="hidden group-hover/next:inline group-focus-visible/next:inline">{c.next.hover} →</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
