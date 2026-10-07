'use client';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Rocket, MessageSquareText, MapPin, Code2, FileText, LifeBuoy } from 'lucide-react';
import Marquee from './Marquee';
import { inquiry } from '@/data/inquiry';

const ease = [0.22, 1, 0.36, 1];
const icons = { Users, ShieldCheck, Rocket, MessageSquareText, MapPin, Code2, FileText, LifeBuoy };

export default function VisualPanel() {
  return (
    <motion.div
      className="relative hidden min-h-[640px] flex-col justify-between overflow-hidden bg-[#d96519] text-white sm:flex lg:min-h-0"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.9, ease }}
    >
      {/* photo, blended into the orange */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={inquiry.image}
        alt={inquiry.imageAlt}
        width={1400}
        height={1700}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full scale-[1.05] object-cover object-[65%_55%] mix-blend-multiply opacity-90 grayscale-[0.2]"
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(105,42,4,0.55),rgba(105,42,4,0.18)_40%,rgba(105,42,4,0.6)_100%)]" />

      <div className="relative px-7 pt-9 sm:px-10 sm:pt-10 lg:px-[46px] lg:pt-[50px]">
        <p aria-hidden className="text-[clamp(34px,3.7vw,54px)] font-medium leading-[1.1] tracking-[-0.03em]">
          {inquiry.heading.map((l) => (
            <span key={l} className="inline lg:block">{l} </span>
          ))}
        </p>
        <p className="mt-6 max-w-[500px] text-[16px] leading-[1.55] text-white lg:text-[18px]">{inquiry.description}</p>
      </div>

      <div className="relative pb-8 pt-10 lg:pb-9">
        <Marquee seconds={38} direction="right">
          {inquiry.benefits.map((b) => {
            const Icon = icons[b.icon];
            return (
              <span
                key={b.label}
                className="mr-3 flex min-h-[62px] shrink-0 items-center gap-3 rounded-[12px] bg-white/[0.14] px-6 text-[18px] font-medium text-white backdrop-blur-[2px]"
              >
                <Icon className="h-[20px] w-[20px]" strokeWidth={1.8} />
                {b.label}
              </span>
            );
          })}
        </Marquee>

        <p className="mt-9 px-7 text-[14px] tracking-[0.16em] text-white sm:px-10 lg:px-[46px]">{inquiry.trustedLabel}</p>
        <Marquee seconds={34} direction="left" className="mt-5">
          {inquiry.stack.map((l, i) => (
            <span
              key={l}
              className={`mr-12 shrink-0 text-[22px] text-white/60 ${
                ['font-bold tracking-[0.14em]', 'font-semibold italic tracking-tight', 'font-extrabold tracking-[0.22em]', 'font-medium tracking-[0.3em]'][i % 4]
              }`}
            >
              {l}
            </span>
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
}
