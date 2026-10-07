'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { clientStory as s } from '@/data/testimonials';

const ease = [0.22, 1, 0.36, 1];
const corners = ['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'];

export default function ClientStory() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-24, 24]);
  const show = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -10% 0px' },
    transition: { duration: reduce ? 0.2 : 0.85, delay: reduce ? 0 : delay, ease },
  });
  const m = s.metric || s.fallbackMetric;
  const numeric = !!s.metric;
  return (
    <section ref={ref} aria-labelledby="cs-title" className="relative isolate overflow-hidden bg-[#050505] text-white">
      {/* layer 1: oversized product visual, cropped to the right and pushed behind the copy */}
      <motion.div aria-hidden style={{ y }} className="absolute -bottom-[8%] -top-[8%] right-[-12%] -z-20 w-[120%] lg:w-[78%]">
        <motion.div
          className="h-full w-full"
          initial={reduce ? false : { opacity: 0.3, scale: 1.06 }}
          whileInView={{ opacity: 0.55, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: reduce ? 0.2 : 1.6, ease }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.image} alt="" width={1200} height={1200} loading="lazy" decoding="async" className="h-full w-full object-cover" style={{ objectPosition: '50% 40%', filter: 'grayscale(1) contrast(1.05)' }} />
        </motion.div>
      </motion.div>
      {/* layer 2/3: dark overlay + gradients */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.9)_32%,rgba(5,5,5,0.45)_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.7)_0%,transparent_25%,transparent_70%,#050505_100%)]" />

      <div className="section-x py-[clamp(56px,6vw,90px)]">
        <div className="mx-auto grid min-h-[min(900px,100svh)] max-w-[1245px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-[clamp(40px,6vw,110px)]">
          <div className="flex flex-col">
            <motion.div {...show(0)} className="relative inline-block self-start p-[6px]">
              {corners.map((c) => <span key={c} aria-hidden className={`absolute h-[7px] w-[7px] bg-white ${c}`} />)}
              <p className="border border-white px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] sm:text-[13px]">{s.eyebrow}</p>
            </motion.div>
            <motion.h2 id="cs-title" {...show(0.1)} className="mt-6 max-w-[640px] text-[clamp(34px,4.1vw,64px)] font-normal leading-[1.02] tracking-[-0.03em]">{s.headline}</motion.h2>

            <div className="mt-12 lg:mt-auto lg:pt-16">
              <motion.div {...show(0.4)} className="flex items-end gap-4">
                <p className={`${numeric ? 'text-[clamp(52px,6vw,88px)]' : 'text-[clamp(28px,3vw,44px)]'} font-normal leading-none tracking-[-0.03em]`}>{m.value}</p>
                <p className="max-w-[200px] pb-1 text-[clamp(15px,1.3vw,19px)] leading-[1.3] text-white/70">
                  {Array.isArray(m.label) ? <>{m.label[0]}<br />{m.label[1]}</> : m.label}
                </p>
              </motion.div>
              <motion.div {...show(0.5)} className="mt-6">
                <Link href={s.cta.href} className="group inline-flex min-h-[56px] items-center gap-3 rounded-[6px] bg-[#fafafa] px-6 text-[15px] font-medium text-[#111] shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none">
                  {s.cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]" aria-hidden />
                </Link>
              </motion.div>
            </div>
          </div>

          <figure className="flex flex-col justify-center lg:pt-[clamp(60px,7vw,110px)]">
            <motion.span {...show(0.2)} aria-hidden className="block select-none text-[clamp(80px,8vw,130px)] font-bold leading-[0.6] tracking-tight">“</motion.span>
            <motion.blockquote {...show(0.3)} className="mt-6 flex flex-col gap-5 text-[clamp(17px,1.5vw,22px)] leading-[1.45] text-white">
              {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </motion.blockquote>
            <motion.figcaption {...show(0.4)} className="mt-8">
              <p className="text-[17px] font-medium">{s.client.name}</p>
              <p className="mt-1 text-[15px] text-white/60">{s.client.role}</p>
              {s.placeholder && <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">Placeholder — not a real testimonial</p>}
            </motion.figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
