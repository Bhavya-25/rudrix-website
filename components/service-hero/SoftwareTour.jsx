'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, m as motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { customSoftwareTour as master } from '@/data/services';

const ease = [0.65, 0, 0.35, 1];
const N = master.types.length;
const GAP = 1.8; // % gap between panels
const SLIVER = 7.3; // % width of a collapsed panel
const MAIN = 100 - GAP * (N - 1) - SLIVER * (N - 1); // % width of the open panel
const mod = (i) => ((i % N) + N) % N;

// Fixed row of N panels (like the reference): the open panel is wide, every other panel is a narrow sliver.
// Previous slides collapse to the left of it, upcoming ones to the right. Next/prev wrap around; clicking a sliver opens it.
export default function SoftwareTour({ data }) {
  const d = data || master;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const touch = useRef(null);
  const go = (s) => setActive((a) => mod(a + s));
  const cur = d.types[active];

  useEffect(() => { const img = new Image(); img.src = d.types[mod(active + 1)].image; }, [active]);

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
  };
  const rise = (dl = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : dl, ease: [0.22, 1, 0.36, 1] } });

  return (
    <section aria-labelledby="st-title" className="bg-[#f7f7f6] section-x py-[clamp(56px,7vw,110px)]">
      <div className="mx-auto max-w-[1245px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <motion.h2 id="st-title" {...rise(0)} className="text-[clamp(32px,4.2vw,64px)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">{d.title[0]}<br />{d.title[1]}</motion.h2>
            <motion.p {...rise(0.08)} className="mt-6 max-w-[700px] text-[clamp(16px,1.35vw,19px)] leading-[1.65] text-slate2">{d.text}</motion.p>
          </div>
          <motion.div {...rise(0.16)} className="lg:pb-2">
            <Link href={d.cta.href} className="group inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap text-[17px] font-semibold text-rudrix-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717]">
              {d.cta.label}<ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <div
          role="region" aria-roledescription="carousel" aria-label="Types of software we build" onKeyDown={onKey}
          onPointerDown={(e) => { if (e.pointerType !== 'mouse') touch.current = e.clientX; }}
          onPointerUp={(e) => { if (touch.current == null) return; const dx = e.clientX - touch.current; touch.current = null; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); }}
          style={{ touchAction: 'pan-y' }}
          className="mt-[clamp(36px,5vw,72px)] grid gap-8 lg:grid-cols-[minmax(0,2.7fr)_minmax(0,7.3fr)] lg:items-center lg:gap-[clamp(24px,2.4vw,40px)]"
        >
          <div className="order-2 lg:order-1 lg:pr-4">
            <div className="relative min-h-[230px]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div key={cur.id} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }} transition={{ duration: reduce ? 0 : 0.5, ease: 'easeOut' }}>
                  <h3 className="text-[clamp(24px,2.3vw,34px)] font-normal leading-[1.2] tracking-[-0.025em] text-ink">{cur.title}</h3>
                  <p className="mt-4 max-w-[400px] text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-slate2">{cur.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-6 flex gap-3">
              <button type="button" aria-label="Previous software type" onClick={() => go(-1)} className="grid h-[54px] w-[54px] place-items-center rounded-[8px] border border-black/[0.06] bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-[transform,background-color] duration-300 hover:-translate-x-0.5 hover:bg-[#f0f0ee] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] motion-reduce:transition-none"><ArrowLeft className="h-5 w-5" aria-hidden /></button>
              <button type="button" aria-label="Next software type" onClick={() => go(1)} className="grid h-[54px] w-[54px] place-items-center rounded-[8px] bg-[#ff5a00] text-white transition-[transform,background-color] duration-300 hover:translate-x-0.5 hover:bg-[#e84f00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] motion-reduce:transition-none"><ArrowRight className="h-5 w-5" aria-hidden /></button>
            </div>
            <p className="sr-only" aria-live="polite">{active + 1} of {N}: {cur.title}</p>
          </div>

          <motion.div {...rise(0.1)} className="order-1 flex h-[clamp(300px,45vw,630px)] [container-type:inline-size] lg:order-2" style={{ gap: `${GAP}%` }}>
            {d.types.map((s, i) => {
              const open = i === active;
              return (
                <motion.button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={open ? undefined : `Show ${s.title}`}
                  aria-current={open || undefined}
                  tabIndex={open ? -1 : 0}
                  initial={false}
                  animate={{ width: `${open ? MAIN : SLIVER}%` }}
                  transition={{ duration: reduce ? 0 : 0.75, ease }}
                  className={`relative h-full shrink-0 overflow-hidden rounded-[10px] bg-[#e4e2dc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f] sm:rounded-[14px] ${open ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {/* the picture keeps the open-panel width so panels reveal/crop it instead of squashing it */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={open ? s.alt : ''} width={1400} height={1250} loading={i < 2 ? 'eager' : 'lazy'} decoding="async" draggable={false} className="absolute left-1/2 top-0 h-full max-w-none -translate-x-1/2 object-cover" style={{ width: `${MAIN}cqw`, objectPosition: s.position }} />
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
