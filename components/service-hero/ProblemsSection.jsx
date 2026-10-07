'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Repeat, Puzzle, Unplug, TrendingUp, TriangleAlert } from 'lucide-react';
import { customSoftwareProblems as master } from '@/data/services';

const ease = [0.22, 1, 0.36, 1];
const icons = { Repeat, Puzzle, Unplug, TrendingUp, TriangleAlert };
const R = 44;
const C = 2 * Math.PI * R;

// 3/4 ring: light track for every item, orange arc that draws in for the active one.
function Ring({ active, reduce, children }) {
  return (
    <span className="relative grid h-[clamp(64px,7.2vw,96px)] w-[clamp(64px,7.2vw,96px)] shrink-0 place-items-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-[135deg]" aria-hidden>
        <circle cx="50" cy="50" r={R} fill="none" stroke="#ff5a1f" strokeOpacity="0.1" strokeWidth="5" />
        <motion.circle
          cx="50" cy="50" r={R} fill="none" stroke="#ff5a1f" strokeWidth="5" strokeLinecap="round"
          strokeDasharray={C}
          initial={false}
          animate={{ strokeDashoffset: active ? C * 0.25 : C, opacity: active ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 0.9, ease }}
        />
      </svg>
      {children}
    </span>
  );
}

export default function ProblemsSection({ data }) {
  const d = data || master;
  const N = d.items.length;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const btns = useRef([]);
  const cur = d.items[active];

  useEffect(() => { const img = new Image(); img.src = d.items[(active + 1) % N].image; }, [active]);

  const onKey = (e) => {
    const map = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: N - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    const n = Math.max(0, Math.min(N - 1, map[e.key]));
    setActive(n); btns.current[n]?.focus();
  };
  const rise = (dl = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : dl, ease } });

  return (
    <section aria-labelledby="pb-title" className="bg-[#f7f7f6] section-x py-[clamp(56px,7vw,110px)]">
      <div className="mx-auto max-w-[1245px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <motion.h2 id="pb-title" {...rise(0)} className="text-[clamp(30px,3.8vw,58px)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">{d.title[0]}<br className="hidden sm:block" /> {d.title[1]}</motion.h2>
            <motion.p {...rise(0.08)} className="mt-6 max-w-[640px] text-[clamp(16px,1.3vw,18px)] leading-[1.65] text-slate2">{d.text}</motion.p>
          </div>
          <motion.div {...rise(0.16)} className="lg:pb-2">
            <Link href={d.cta.href} className="group inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap text-[17px] font-semibold text-rudrix-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]">
              {d.cta.label}<ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <motion.div {...rise(0.1)} className="mt-[clamp(32px,4vw,64px)] grid gap-8 rounded-[24px] border border-[#eeeeeb] bg-white p-[clamp(18px,3vw,56px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-[clamp(32px,4vw,60px)]">
          <div role="tablist" aria-label="Common problems" aria-orientation="vertical" onKeyDown={onKey} className="flex flex-col justify-between gap-3 lg:py-1">
            {d.items.map((it, i) => {
              const on = i === active;
              const Icon = icons[it.icon];
              return (
                <button
                  key={it.id}
                  ref={(el) => (btns.current[i] = el)}
                  type="button" role="tab" id={`pb-tab-${i}`} aria-selected={on} aria-controls="pb-panel" tabIndex={on ? 0 : -1}
                  onPointerEnter={(e) => { if (e.pointerType === 'mouse') setActive(i); }}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex min-h-[64px] items-center gap-[clamp(14px,1.8vw,26px)] rounded-[16px] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f]"
                >
                  <Ring active={on} reduce={reduce}>
                    <span className={`grid h-[58%] w-[58%] place-items-center rounded-full transition-colors duration-500 ${on ? 'text-[#ff5a1f]' : 'text-[#ff5a1f]/35 group-hover:text-[#ff5a1f]/60'}`}><Icon className="h-[55%] w-[55%]" strokeWidth={1.6} aria-hidden /></span>
                  </Ring>
                  <span className={`text-[clamp(18px,1.9vw,26px)] font-normal leading-[1.2] tracking-[-0.02em] transition-colors duration-500 ${on ? 'text-[#171717]' : 'text-[#b4b4b0] group-hover:text-[#8a8a85]'}`}>{it.title}</span>
                </button>
              );
            })}
          </div>

          <div id="pb-panel" role="tabpanel" aria-labelledby={`pb-tab-${active}`} className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#e6e4de] sm:aspect-[16/11] lg:aspect-auto lg:min-h-[560px]">
            <AnimatePresence initial={false}>
              <motion.div
                key={cur.id}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: reduce ? 0 : 0.6 } }}
                transition={{ duration: reduce ? 0 : 0.8, ease }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cur.image} alt={cur.alt} width={1200} height={1500} loading="lazy" decoding="async" draggable={false} className="h-full w-full object-cover" style={{ objectPosition: cur.position }} />
              </motion.div>
            </AnimatePresence>
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(to_top,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.3)_55%,transparent_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-[clamp(18px,2.4vw,34px)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={cur.id}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: reduce ? 0 : 0.45, ease }}
                  className="max-w-[640px] text-[clamp(20px,2.1vw,32px)] font-normal leading-[1.12] tracking-[-0.025em] text-white"
                >
                  {cur.overlay[0]}<br />{cur.overlay[1]}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="sr-only" aria-live="polite">{cur.title}. {cur.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
