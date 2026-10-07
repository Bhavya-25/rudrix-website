'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { m as motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { processHero as h } from '@/data/ourProcess';

const SLIDE = { duration: 0.32, ease: [0.4, 0, 0.2, 1] };
const n = h.steps.length;

// One ticker row. Two stacked copies of the label (white + orange) slide horizontally inside a clipped box:
// the new step's orange label rolls in from the right while the old one rolls out to the left.
function Row({ step, phase, reduce }) {
  // phase: 'on' (active) | 'out' (was active one step ago) | 'idle'
  const on = phase === 'on';
  const out = phase === 'out';
  const t = reduce ? { duration: 0 } : SLIDE;
  return (
    <span className="relative flex items-center">
      <motion.span aria-hidden className="absolute -left-10 hidden lg:block" initial={false} animate={{ opacity: on ? 1 : 0, x: on ? 0 : -8 }} transition={reduce ? { duration: 0 } : { duration: 0.32, ease: 'easeOut' }}>
        <ArrowRight className="h-6 w-6 text-[#ff9153]" />
      </motion.span>
      <span className="relative block overflow-hidden whitespace-nowrap">
        <motion.span
          className="block text-white/55"
          initial={false}
          animate={on ? { x: '-110%' } : out ? { x: ['110%', '0%'] } : { x: '0%' }}
          transition={t}
        >{step.title}</motion.span>
        <motion.span
          aria-hidden
          className="absolute inset-0 block text-[#ff9153]"
          initial={false}
          animate={on ? { x: ['110%', '0%'] } : out ? { x: '-110%' } : { x: '110%' }}
          transition={on || out ? t : { duration: 0 }}
        >{step.title}</motion.span>
      </span>
    </span>
  );
}

export default function OurProcessHero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(h.steps.findIndex((s) => s.id === h.initial));
  const [prev, setPrev] = useState(-1);
  const timer = useRef(null);

  const goTo = (i) => setActive((cur) => { setPrev(cur); return i; });

  // Auto-advance like the reference; restarts after a manual pick. Stopped for reduced motion.
  useEffect(() => {
    if (reduce) return undefined;
    timer.current = setInterval(() => goTo((active + 1) % n), h.interval);
    return () => clearInterval(timer.current);
  }, [active, reduce]);

  // Follow the real step sections once they exist on the page.
  useEffect(() => {
    const targets = h.steps.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!targets.length) return undefined;
    const io = new IntersectionObserver((entries) => {
      const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (hit) goTo(h.steps.findIndex((s) => s.id === hit.target.id));
    }, { rootMargin: '-35% 0px -55% 0px' });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const onPick = (e, i) => {
    const el = document.getElementById(h.steps[i].id);
    e.preventDefault();
    goTo(i);
    if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section aria-labelledby="op-title" className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0d0a08] text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={h.image} alt="" width={1200} height={1457} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" style={{ objectPosition: '50% 62%' }} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.6)_45%,rgba(0,0,0,0.36)_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,transparent_25%,transparent_70%,rgba(0,0,0,0.55)_100%)]" />

      <div className="section-x pb-[clamp(48px,9vh,110px)] pt-[clamp(140px,22vh,220px)]">
        <div className="mx-auto grid max-w-[1245px] items-end gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,0.9fr)] lg:gap-[clamp(40px,5vw,90px)]">
          <div>
            <h1 id="op-title" className="max-w-[900px] text-[clamp(34px,4.3vw,68px)] font-normal leading-[1.02] tracking-[-0.035em]">
              {h.title[0]}<br className="hidden sm:block" /> {h.title[1]}
            </h1>
            <p className="mt-7 max-w-[650px] text-[clamp(16px,1.35vw,20px)] leading-[1.65] text-white/80">{h.text}</p>
            <div className="mt-9">
              <Link href={h.cta.href} className="group inline-flex min-h-[56px] items-center gap-4 rounded-[3px] bg-[#fafafa] px-7 text-[16px] font-medium text-[#111] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none">
                {h.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]" aria-hidden />
              </Link>
            </div>
          </div>

          <nav aria-label="Our process steps" className="-mx-5 min-w-0 sm:-mx-8 lg:mx-0 lg:pl-10">
            <ol className="flex snap-x gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:px-8 lg:flex-col lg:gap-5 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
              {h.steps.map((s, i) => {
                const on = i === active;
                const phase = on ? 'on' : i === prev ? 'out' : 'idle';
                return (
                  <li key={s.id} className="shrink-0 snap-start">
                    <a
                      href={`#${s.id}`}
                      onClick={(e) => onPick(e, i)}
                      aria-current={on ? 'step' : undefined}
                      className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9153]"
                    >
                      {/* desktop: sliding ticker row */}
                      <span className="hidden text-[clamp(22px,2vw,30px)] font-medium leading-tight lg:block"><Row step={s} phase={phase} reduce={reduce} /></span>
                      {/* mobile/tablet: pill */}
                      <span className={`flex min-h-[44px] items-center rounded-full border px-4 text-[15px] transition-colors duration-300 lg:hidden ${on ? 'border-[#ff9153] text-[#ff9153]' : 'border-white/20 text-white/55'}`}>{s.short}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
