'use client';
import Link from 'next/link';
import { m as motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { workingProcess as wp } from '@/data/work';

const ease = [0.22, 1, 0.36, 1];
const corners = ['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'];

function Markers({ inset = '-3.5px', size = 7 }) {
  return corners.map((c) => (
    <span key={c} aria-hidden className={`absolute bg-[#ff5a1f] ${c}`} style={{ width: size, height: size, margin: inset }} />
  ));
}

function Step({ s, i, reduce }) {
  const reverse = i % 2 === 1;
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : (i % 3) * 0.09, ease }}
      className={`group grid gap-3 sm:gap-4 ${reverse ? 'grid-cols-[minmax(0,1fr)_clamp(76px,22%,124px)]' : 'grid-cols-[clamp(76px,22%,124px)_minmax(0,1fr)]'}`}
    >
      <div className={`relative flex aspect-square items-center justify-center border border-[#ff5a1f] bg-white ${reverse ? 'order-2' : ''}`}>
        <Markers />
        <span className="wp-num select-none text-[clamp(30px,3.6vw,52px)] font-semibold leading-none tracking-[-0.02em] transition-transform duration-[400ms] group-hover:scale-[1.06] motion-reduce:transition-none">{s.number}</span>
      </div>
      <div className="flex min-w-0 flex-col justify-center border border-black/10 bg-white px-5 py-4 transition-colors duration-300 group-hover:border-black/25 group-hover:bg-[#fffaf6] sm:px-7">
        <h3 className="text-[clamp(18px,1.5vw,22px)] font-medium leading-tight text-[#1d1d1d] transition-transform duration-[400ms] group-hover:translate-x-[3px] motion-reduce:transition-none">
          <span className="sr-only">Step {Number(s.number)}: </span>{s.title}
        </h3>
        <p className="mt-2.5 max-w-[420px] text-[clamp(14px,1.05vw,15.5px)] leading-[1.7] text-[#6b6b68]">{s.description}</p>
      </div>
    </motion.li>
  );
}

export default function WorkingProcess() {
  const reduce = useReducedMotion();
  const rise = (d = 0, y = 22) => ({ initial: reduce ? false : { opacity: 0, y }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : d, ease } });
  return (
    <section aria-labelledby="wp-title" className="section-x overflow-x-clip bg-[#fafaf7] py-[clamp(72px,9vw,128px)]">
      <div className="mx-auto grid max-w-[1245px] grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-[clamp(48px,7vw,120px)]">
        <header>
          <motion.div {...rise(0, 15)} className="relative inline-block p-[6px]">
            <Markers inset="0px" />
            <p className="border border-[#ff5a1f] px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] text-[#e04a10] sm:text-[13px]">{wp.eyebrow}</p>
          </motion.div>
          <motion.h2 id="wp-title" {...rise(0.08, 25)} className="mt-6 text-[clamp(36px,4.2vw,64px)] font-normal leading-[1.12] tracking-[-0.03em] text-[#1d1d1d]">
            {wp.title[0]}<br />{wp.title[1]}
          </motion.h2>
          <motion.p {...rise(0.16)} className="mt-6 max-w-[540px] text-[clamp(16px,1.4vw,20px)] leading-[1.65] text-[#6b6b68]">{wp.text}</motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : 0.24, ease }}
            className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[16px] bg-[#2d3a24] sm:aspect-[16/9] lg:mt-14"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={wp.image} alt={wp.alt} width={1200} height={1500} loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: '50% 32%' }} />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(38,58,22,0.88)_0%,rgba(38,58,22,0.45)_38%,transparent_70%)]" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7">
              <p className="text-[clamp(20px,2vw,28px)] font-normal leading-[1.3] text-white">{wp.cta.lead[0]}<br />{wp.cta.lead[1]}</p>
              <Link href={wp.cta.href} className="group/btn inline-flex min-h-[48px] items-center gap-3 rounded-[6px] bg-[#fafafa] px-5 text-[15px] font-medium text-[#111] shadow-[0_1px_2px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none">
                {wp.cta.label}
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#ffe6da]"><ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden /></span>
              </Link>
            </div>
          </motion.div>
        </header>

        <ol className="flex flex-col gap-3 sm:gap-4">
          {wp.steps.map((s, i) => <Step key={s.number} s={s} i={i} reduce={reduce} />)}
        </ol>
      </div>
    </section>
  );
}
