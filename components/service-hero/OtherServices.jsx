'use client';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { serviceBySlug } from '@/data/services';

const ease = [0.22, 1, 0.36, 1];
// site visuals per service (concept/stock images already in /public)
const images = {
  'web-development': { src: '/images/hero-6.webp', pos: '50% 45%' },
  'ui-ux-design': { src: '/images/why-us-design.webp', pos: '50% 35%' },
  'software-maintenance-and-support': { src: '/images/why-us-engineering.webp', pos: '50% 60%' },
  'saas-development': { src: '/images/work/04-nexaflow.webp', pos: '50% 45%' },
  'ecommerce-development': { src: '/images/work/03-scalecommerce.webp', pos: '50% 40%' },
  'mobile-app-development': { src: '/images/work/01-finora.webp', pos: '50% 40%' },
  'mvp-development': { src: '/images/why-us-strategy.webp', pos: '50% 45%' },
  'custom-software-development': { src: '/images/inquiry.webp', pos: '50% 40%' },
};

// "Explore our other services": big image cards with a white label tab and a dark ↗ square, linking to the related service pages.
export default function OtherServices({ service }) {
  const reduce = useReducedMotion();
  const list = service.related.map(serviceBySlug).filter(Boolean).slice(0, 3);
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : d, ease } });
  return (
    <section aria-labelledby="os-title" className="bg-[#f7f7f6] section-x py-[clamp(56px,7vw,110px)]">
      <div className="mx-auto max-w-[1245px]">
        <motion.h2 id="os-title" {...rise(0)} className="text-[clamp(30px,3.6vw,54px)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">Explore Our Other Services</motion.h2>
        <motion.p {...rise(0.08)} className="mt-5 text-[clamp(14px,1.3vw,18px)] md:whitespace-nowrap leading-[1.6] text-slate2">Need more than {service.name.toLowerCase()}? Here’s what else we can help with.</motion.p>
        <ul className="mt-[clamp(32px,4vw,64px)] grid gap-4 md:grid-cols-3 md:gap-5">
          {list.map((s, i) => {
            const img = images[s.slug] || images['custom-software-development'];
            return (
              <motion.li key={s.slug} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -6% 0px' }} transition={{ duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : i * 0.1, ease }}>
                <Link href={`/services/${s.slug}`} className="group relative block aspect-[4/5] overflow-hidden rounded-[16px] bg-[#e4e2dc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a1f] md:aspect-[0.94]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt="" width={900} height={960} loading="lazy" decoding="async" draggable={false} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none" style={{ objectPosition: img.pos }} />
                  <span className="absolute inset-x-[2.5%] bottom-[2.5%] flex flex-col gap-5 rounded-[12px] bg-white p-5 sm:gap-7 sm:p-6">
                    <span aria-hidden className="grid h-[40px] w-[40px] place-items-center rounded-[8px] bg-[#222] text-white transition-colors duration-300 group-hover:bg-[#ff5a1f]"><ArrowUpRight className="h-[18px] w-[18px]" /></span>
                    <span className="whitespace-nowrap text-[clamp(16px,1.55vw,22px)] font-normal leading-[1.15] tracking-[-0.02em] text-ink">{s.name}</span>
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
