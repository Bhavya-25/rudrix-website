'use client';
import { useId, useState } from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';
import RollCta from './RollCta';
import { standards } from '@/data/about';

const ease = [0.22, 1, 0.36, 1];

function Chevron({ open }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`h-[18px] w-[18px] transition-transform duration-300 ease-out motion-reduce:transition-none ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function StandardsSection() {
  const reduce = useReducedMotion();
  const uid = useId();
  const [active, setActive] = useState(null); // all closed on load, one open at a time

  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -8% 0px' },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section aria-labelledby="standards-title" className="bg-[#050505] text-white section-y">
      <div className="mx-auto max-w-[1280px] px-[22px] sm:px-8">
        <motion.div {...reveal(0)} className="relative inline-block p-[6px]">
          {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h]) => (
            <span key={v + h} aria-hidden className="pointer-events-none absolute h-[7px] w-[7px] bg-white" style={{ [v]: 0, [h]: 0 }} />
          ))}
          <p className="border border-white/80 px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] text-white sm:text-[13px]">{standards.eyebrow}</p>
        </motion.div>

        <motion.h2 id="standards-title" {...reveal(0.08)} className="mt-6 text-[clamp(36px,5vw,66px)] font-normal leading-[1.02] tracking-[-0.03em]">
          {standards.title.map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </motion.h2>

        <ul className="mt-12 flex flex-col gap-3.5 lg:mt-14">
          {standards.items.map((it, i) => {
            const open = active === i;
            const btnId = `${uid}-btn-${i}`;
            const panelId = `${uid}-panel-${i}`;
            return (
              <motion.li
                key={it.title}
                {...reveal(0.12 + i * 0.07)}
                className={`bg-white/[0.055] transition-colors duration-300 ${open ? 'bg-white/[0.08]' : ''}`}
              >
                <h3>
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setActive(open ? null : i)}
                    className="group relative flex min-h-[72px] w-full items-center justify-between gap-4 pl-5 pr-3 text-left sm:pl-7 sm:pr-3.5"
                  >
                    {/* hover (desktop, closed rows): white wipe from the right, title out, one-line summary in, thumbnail pops up */}
                    <span
                      aria-hidden
                      className={`std-wipe pointer-events-none absolute inset-0 bg-white ${open ? 'hidden' : ''}`}
                    />
                    <span className={`std-title relative z-10 text-[clamp(18px,2vw,26px)] font-normal leading-[1.25] tracking-[-0.01em] transition-[color,opacity,transform] duration-300 ${open ? 'text-white' : 'text-white/70'}`}>
                      {it.title}
                    </span>
                    {!open && (
                      <span aria-hidden className="std-sum pointer-events-none absolute left-5 right-[270px] top-1/2 z-10 hidden -translate-y-1/2 text-[17px] font-semibold leading-snug text-[#202020] sm:left-7 lg:block">
                        {it.description}
                      </span>
                    )}
                    {!open && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        aria-hidden
                        alt=""
                        src={it.thumb}
                        width={217}
                        height={168}
                        loading="lazy"
                        draggable={false}
                        className="std-thumb pointer-events-none absolute right-[110px] top-1/2 z-20 hidden h-[168px] w-[217px] object-cover lg:block"
                      />
                    )}
                    <span className={`std-arrow relative z-30 flex h-[48px] w-[48px] shrink-0 items-center justify-center bg-black/45 transition-colors duration-300 ${open ? 'text-white' : 'text-white/70'}`}>
                      <Chevron open={open} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-[grid-template-rows,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className={`max-w-[760px] px-5 pb-6 text-[16px] leading-[1.6] text-white/65 transition-transform duration-[450ms] ease-out sm:px-7 sm:text-[17px] motion-reduce:transition-none ${open ? 'translate-y-0' : '-translate-y-2'}`}>
                      {it.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          {...reveal(0.1)}
          className="group/img relative mt-10 min-h-[420px] w-full overflow-hidden border border-white/[0.12] bg-[#0d0d0d] sm:min-h-[400px] lg:mt-12 lg:aspect-[2.7/1] lg:min-h-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={standards.image.src}
            alt={standards.image.alt}
            width={1200}
            height={800}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[50%_78%] transition-transform duration-[900ms] ease-out group-hover/img:scale-[1.03] motion-reduce:transition-none"
          />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.2)_100%),linear-gradient(to_top,rgba(0,0,0,0.55),transparent_60%)]" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-6 p-6 sm:p-9 lg:flex-row lg:items-end lg:justify-between lg:p-[56px]">
            <div className="max-w-[760px]">
              <h3 className="text-[clamp(28px,3.4vw,46px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">{standards.banner.title}</h3>
              <p className="mt-4 max-w-[640px] text-[15px] leading-[1.65] text-white/85 sm:text-[17px]">{standards.banner.text}</p>
            </div>
            <RollCta href={standards.banner.cta.href} label={standards.banner.cta.label} className="shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
