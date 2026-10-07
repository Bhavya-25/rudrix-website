'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { customSoftwareTech as master } from '@/data/services';
import { toolCatalog } from '@/data/capabilities';

const ease = [0.22, 1, 0.36, 1];

// Logo sits in a 72px light-grey circle; the glyph is contained in a fixed 36px box so wide and tall marks look the same size.
function TechnologyIcon({ tool }) {
  return (
    <span className="grid h-[clamp(56px,5vw,72px)] w-[clamp(56px,5vw,72px)] shrink-0 place-items-center rounded-full bg-[#f4f4f3] transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={tool.src} alt="" width={36} height={36} loading="lazy" decoding="async" draggable={false} className="h-[clamp(28px,2.5vw,36px)] w-[clamp(28px,2.5vw,36px)] object-contain" />
    </span>
  );
}

export default function TechGrid({ data }) {
  const d = data || master;
  const reduce = useReducedMotion();
  const rise = (dl = 0) => ({ initial: reduce ? false : { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : dl, ease } });
  return (
    <section aria-labelledby="tg-title" className="bg-[#f7f7f6] section-x py-[clamp(64px,8vw,120px)]">
      <div className="mx-auto max-w-[1245px]">
        <div className="mx-auto max-w-[900px] text-center">
          <motion.h2 id="tg-title" {...rise(0)} className="text-[clamp(30px,4.2vw,64px)] font-normal leading-[1.15] tracking-[-0.035em] text-ink">{d.title}</motion.h2>
          <motion.p {...rise(0.08)} className="mx-auto mt-6 max-w-[780px] text-[clamp(16px,1.4vw,20px)] leading-[1.65] text-slate2">{d.text}</motion.p>
        </div>
        <ul className="mt-[clamp(40px,5vw,76px)] grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {d.tools.map((k, i) => {
            const tool = toolCatalog[k];
            return (
              <motion.li
                key={k}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -6% 0px' }}
                transition={{ duration: reduce ? 0.2 : 0.6, delay: reduce ? 0 : (i % 4) * 0.07, ease }}
                className="group flex min-h-[clamp(96px,10vw,140px)] items-center gap-[clamp(16px,1.8vw,24px)] rounded-[clamp(20px,2.2vw,30px)] border border-black/[0.04] bg-white px-[clamp(18px,2vw,26px)] py-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_36px_-24px_rgba(0,0,0,0.25)] motion-reduce:transition-none"
              >
                <TechnologyIcon tool={tool} />
                <span className="min-w-0 text-[clamp(18px,1.65vw,24px)] font-medium leading-tight tracking-[-0.02em] text-[#202020]">{tool.name}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
