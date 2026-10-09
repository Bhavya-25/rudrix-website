'use client';
import Link from 'next/link';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight } from 'lucide-react';
import RollCta from './RollCta';
import { milestones } from '@/data/about';

const ease = [0.22, 1, 0.36, 1];
const ORANGE = '#ff4a00';

// Small orange square at each corner, drawn with CSS (no images).
function Corners({ size = 7, offset = 3.5 }) {
  const base = { width: size, height: size, background: ORANGE };
  const o = -offset;
  return (
    <>
      <span aria-hidden className="pointer-events-none absolute" style={{ ...base, top: o, left: o }} />
      <span aria-hidden className="pointer-events-none absolute" style={{ ...base, top: o, right: o }} />
      <span aria-hidden className="pointer-events-none absolute" style={{ ...base, bottom: o, left: o }} />
      <span aria-hidden className="pointer-events-none absolute" style={{ ...base, bottom: o, right: o }} />
    </>
  );
}

function Step({ step, index, reduce }) {
  return (
    <motion.li
      className="group grid grid-cols-[clamp(88px,22vw,140px)_minmax(0,1fr)] gap-3 xl:grid-cols-[160px_minmax(0,1fr)]"
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.65, delay: reduce ? 0 : index * 0.08, ease }}
    >
      <div
        className="relative flex min-h-[132px] items-center justify-center border bg-white shadow-[0_3px_5px_-3px_rgba(255,74,0,0.45)] transition-shadow duration-300 group-hover:shadow-[0_8px_16px_-6px_rgba(255,74,0,0.5)] xl:min-h-[160px]"
        style={{ borderColor: ORANGE }}
      >
        <Corners />
        <span
          aria-hidden
          className="milestone-num select-none text-[clamp(48px,11vw,64px)] font-extrabold leading-none tracking-[-0.02em] transition-transform duration-300 group-hover:-translate-y-[3px] xl:text-[68px]"
        >
          {step.number}
        </span>
      </div>
      <div className="flex min-h-[132px] flex-col justify-center border border-[#e8e8e6] bg-white px-4 py-5 transition-[background-color,transform] duration-300 group-hover:-translate-y-[2px] group-hover:bg-[#fcfcfb] sm:px-7 xl:min-h-[160px] xl:px-6 xl:py-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#8a8a87] sm:text-[12.5px]">
          <span className="sr-only">Step {step.number}: </span>{step.label}
        </p>
        <h3 className="mt-2.5 text-[15px] font-bold uppercase leading-[1.25] text-[#161616] sm:text-[17px] xl:mt-2 xl:text-[16.5px]">{step.title}</h3>
        <p className="mt-3 max-w-[340px] text-[14px] leading-[1.6] text-[#8a8a87] sm:text-[15px] xl:mt-2.5 xl:text-[14px] xl:leading-[1.5]">{step.description}</p>
      </div>
    </motion.li>
  );
}

export default function MilestonesSection() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -8% 0px' },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section aria-labelledby="milestones-title" className="bg-white section-y">
      <div className="mx-auto max-w-[1280px] px-[22px] sm:px-8">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,572fr)_minmax(0,560fr)] xl:items-start xl:gap-x-[clamp(48px,7.8vw,113px)]">
          {/* left: sticky on desktop while the steps scroll past */}
          <div className="xl:sticky xl:top-[120px]">
            <motion.div {...fade(0)} className="relative inline-block p-[6px]">
              <Corners size={7} offset={0} />
              <p className="border px-4 py-2 text-[12px] font-medium tracking-[0.16em] text-rudrix-strong sm:text-[14px] sm:tracking-[2px]" style={{ borderColor: ORANGE }}>
                {milestones.eyebrow}
              </p>
            </motion.div>

            <motion.h2 id="milestones-title" {...fade(0.08)} className="mt-6 text-[clamp(32px,3.6vw,46px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#1d1d1d]">
              {milestones.title.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </motion.h2>

            <motion.p {...fade(0.16)} className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-[#5d5d5a] sm:text-[17px]">
              {milestones.text}
            </motion.p>

            <motion.div
              className="group/img relative mt-8 h-[270px] w-full overflow-hidden rounded-[8px] bg-[#e9ece5] sm:h-auto sm:aspect-[572/270] xl:mt-12"
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={milestones.image.src}
                alt={milestones.image.alt}
                width={1200}
                height={1500}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[50%_28%] transition-transform duration-[900ms] ease-out group-hover/img:scale-[1.03]"
              />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(52,70,32,0.88)_0%,rgba(52,70,32,0.5)_38%,rgba(52,70,32,0)_72%)] transition-opacity duration-500 group-hover/img:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7">
                <p className="max-w-[300px] text-[18px] leading-[1.35] text-white sm:text-[22px] xl:text-[24px]">
                  {milestones.quote.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </p>
                <RollCta href={milestones.cta.href} label={milestones.cta.label} size="md" className="shrink-0" />
              </div>
            </motion.div>
          </div>

          {/* right: five steps */}
          <ol className="flex flex-col gap-3" aria-label="Rudrix process milestones">
            {milestones.steps.map((s, i) => (
              <Step key={s.number} step={s} index={i} reduce={reduce} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
