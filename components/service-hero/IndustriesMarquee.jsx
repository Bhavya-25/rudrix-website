'use client';
import { m as motion, useReducedMotion } from 'framer-motion';
import { customSoftwareIndustries as master } from '@/data/services';

const ease = [0.22, 1, 0.36, 1];

function Card({ it, hidden }) {
  return (
    <li aria-hidden={hidden || undefined} className="relative mr-[clamp(14px,1.8vw,26px)] aspect-[3/2] w-[clamp(240px,27vw,390px)] shrink-0 overflow-hidden rounded-[8px] bg-[#d8d6d0]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={it.image} alt="" width={800} height={533} loading="lazy" decoding="async" draggable={false} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: it.position }} />
      <span aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(40,25,10,0.55)_0%,rgba(40,25,10,0.12)_45%,transparent_70%)]" />
      <p className="absolute bottom-[clamp(14px,1.8vw,26px)] left-[clamp(16px,1.8vw,26px)] right-3 truncate text-[clamp(20px,2.1vw,30px)] font-normal leading-none tracking-[-0.02em] text-white">{it.label}</p>
    </li>
  );
}

// Infinite right→left card marquee: two identical tracks, the group moves exactly one track width (translateX 0 → -50%).
export default function IndustriesMarquee({ data }) {
  const d = data || master;
  const reduce = useReducedMotion();
  const rise = (dl = 0) => ({ initial: reduce ? false : { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : dl, ease } });
  // each track repeats the four industries so one track is always wider than the viewport
  const track = [...d.items, ...d.items];
  return (
    <section aria-labelledby="ind-title" className="bg-[#f7f7f6] section-x py-[clamp(56px,7vw,110px)]">
      <div className="mx-auto max-w-[1245px]">
        <motion.h2 id="ind-title" {...rise(0)} className="text-[clamp(30px,3.5vw,52px)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">{d.title}</motion.h2>
        <motion.p {...rise(0.08)} className="mt-5 max-w-[560px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-slate2">{d.text}</motion.p>
        <motion.div {...rise(0.16)} className={`group/m mt-[clamp(32px,4vw,56px)] ${reduce ? 'overflow-x-auto' : 'overflow-hidden'}`}>
          <div className={`flex w-max ${reduce ? '' : 'marquee-left group-hover/m:[animation-play-state:paused]'}`} style={{ '--marquee': '40s' }}>
            {[0, 1].map((c) => (
              <ul key={c} aria-label={c === 0 ? 'Industries' : undefined} className="flex shrink-0">
                {track.map((it, i) => <Card key={`${c}-${i}`} it={it} hidden={c === 1 || i >= d.items.length} />)}
              </ul>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
