'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import CapabilityNavigation from './capabilities/CapabilityNavigation';
import CapabilityPanel from './capabilities/CapabilityPanel';
import FloatingCTA from './capabilities/FloatingCTA';
import { icons } from './capabilities/icons';
import { capabilities, capabilitiesIntro } from '@/data/capabilities';

const ease = [0.22, 1, 0.36, 1];

export default function CapabilitiesSection() {
  const reduce = useReducedMotion();
  const section = useRef(null);
  const triggers = useRef([]);
  const mobileRefs = useRef([]);
  const [mActive, setMActive] = useState(0);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);

  // Scroll-driven switching: each capability owns a tall invisible segment; the one
  // crossing the middle of the viewport is active. No scroll listeners, no wheel hijacking.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    triggers.current.forEach((t) => t && io.observe(t));
    // mobile scroll-spy for the sticky tab bar
    const mio = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setMActive(Number(e.target.dataset.index))),
      { rootMargin: '-30% 0px -60% 0px' }
    );
    mobileRefs.current.forEach((t) => t && mio.observe(t));
    const vis = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.05 });
    vis.observe(section.current);
    return () => {
      io.disconnect();
      mio.disconnect();
      vis.disconnect();
    };
  }, []);

  const select = (i) => {
    setActive(i);
    triggers.current[i]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  };

  return (
    <section
      id="services"
      ref={section}
      aria-labelledby="capabilities-title"
      className="relative bg-[#f7f7f5] section-x section-y text-ink"
    >
      <div className="mx-auto max-w-[1360px]">
        <motion.h2
          id="capabilities-title"
          className="text-[clamp(38px,5vw,72px)] font-medium leading-[1.08] tracking-[-0.04em]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease }}
        >
          {capabilitiesIntro.map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </motion.h2>

        {/* ───────── desktop: sticky nav + switching panel ───────── */}
        <div className="relative mt-16 hidden lg:block [@media(max-height:820px)]:lg:hidden" style={{ height: `${capabilities.length * 85 + 40}vh` }}>
          {capabilities.map((c, i) => (
            <div
              key={c.id}
              ref={(el) => (triggers.current[i] = el)}
              data-index={i}
              aria-hidden
              className="pointer-events-none absolute inset-x-0"
              style={{ top: `${i * 85}vh`, height: '85vh' }}
            />
          ))}
          <div className="sticky top-[4vh] grid grid-cols-[minmax(240px,22%)_1fr] gap-10 xl:gap-[60px]">
            <motion.div
              className="self-center"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <CapabilityNavigation active={active} onSelect={select} />
            </motion.div>
            <div className="min-h-[660px] rounded-[8px] border border-black/[0.06] bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.02)] xl:p-8">
              <AnimatePresence mode="wait">
                <CapabilityPanel key={capabilities[active].id} cap={capabilities[active]} animate={!reduce} />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ───────── mobile / tablet: sticky icon tabs + stacked capabilities ───────── */}
        <div className="mt-10 lg:hidden [@media(max-height:820px)]:lg:block">
          <div role="tablist" aria-label="Capabilities" className="sticky top-0 z-20 -mx-5 grid grid-cols-4 border-b border-black/[0.08] bg-[#f7f7f5]/95 px-2 backdrop-blur sm:-mx-8 sm:px-6">
            {capabilities.map((c, i) => {
              const on = i === mActive;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => {
                    setMActive(i);
                    mobileRefs.current[i]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
                  }}
                  className="relative flex min-h-[72px] flex-col items-center justify-center gap-1.5 px-1 py-3 text-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.iconSrc} alt="" width={24} height={24} draggable={false} className="h-[24px] w-[24px] transition-opacity duration-300" style={{ opacity: on ? 1 : 0.85 }} />
                  <span className={`text-[13px] leading-[1.15] transition-colors duration-300 ${on ? 'text-ink' : 'text-slate2'}`}>{c.title}</span>
                  <span aria-hidden className="absolute inset-x-2 bottom-0 h-[2px] rounded-full transition-opacity duration-300" style={{ background: c.color, opacity: on ? 1 : 0 }} />
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-10 pt-6">
            {capabilities.map((c, i) => (
              <article
                key={c.id}
                ref={(el) => (mobileRefs.current[i] = el)}
                data-index={i}
                aria-label={c.title}
                className="scroll-mt-[96px]"
              >
                <div className="rounded-[8px] border border-black/[0.06] bg-white p-4 sm:p-8">
                  <CapabilityPanel cap={c} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <FloatingCTA visible={inView} />
    </section>
  );
}
