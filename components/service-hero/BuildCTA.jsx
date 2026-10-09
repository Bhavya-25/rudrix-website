'use client';
import Link from 'next/link';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight } from 'lucide-react';
import { customSoftwareCta as master } from '@/data/services';

const ease = [0.22, 1, 0.36, 1];

// Original abstract "system" graphic: stacked rounded layers joined by nodes. Low contrast, cropped by the panel.
function SystemGraphic() {
  // Rudrix monogram: big soft-metal "R" + the orange full stop from the wordmark, over dark rounded tiles
  return (
    <svg viewBox="0 0 520 440" className="h-full w-full" fill="none" aria-hidden>
      <defs>
        <linearGradient id="bc-t" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2c2a29" /><stop offset="100%" stopColor="#141414" /></linearGradient>
        <linearGradient id="bc-ar" x1="0.1" y1="0" x2="0.9" y2="1"><stop offset="0%" stopColor="#d8c8c0" /><stop offset="55%" stopColor="#8f817b" /><stop offset="100%" stopColor="#4a423f" /></linearGradient>
      </defs>
      <rect x="30" y="60" width="140" height="140" rx="28" fill="url(#bc-t)" />
      <rect x="130" y="0" width="110" height="110" rx="26" fill="url(#bc-t)" />
      <rect x="30" y="250" width="140" height="150" rx="28" fill="url(#bc-t)" />
      <rect x="400" y="290" width="110" height="110" rx="26" fill="url(#bc-t)" />
      <text x="150" y="400" fontSize="440" fontWeight="700" fontFamily="inherit" letterSpacing="-12" fill="url(#bc-ar)">R</text>
      <circle cx="452" cy="378" r="26" fill="#ff5a1f" />
    </svg>
  );
}

export default function BuildCTA({ data }) {
  const d = data || master;
  const reduce = useReducedMotion();
  const show = (dl) => ({ initial: reduce ? false : { opacity: 0, y: 26 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : dl, ease } });
  return (
    <section aria-labelledby="bcta-title" className="bg-[#f7f7f6] section-x pb-[clamp(56px,7vw,110px)]">
      {/* panel proportions follow the reference: very wide, short (about 3.8 : 1 at full width) */}
      <motion.div
        {...show(0)}
        className="relative mx-auto max-w-[1245px] overflow-hidden rounded-[clamp(12px,1.2vw,16px)] bg-[linear-gradient(100deg,#3b3b3b_0%,#1c1c1c_38%,#070707_62%,#000_100%)] text-white md:h-[clamp(300px,28.6vw,356px)]"
      >
        <motion.div
          aria-hidden
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduce ? 0 : 1.2, delay: reduce ? 0 : 0.1, ease }}
          className="pointer-events-none absolute -bottom-[22%] right-[2%] top-[4%] hidden w-[38%] md:block"
        >
          <motion.div className="h-full w-full" animate={reduce ? undefined : { y: [-5, 5, -5] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}>
            <SystemGraphic />
          </motion.div>
        </motion.div>

        <div className="relative flex h-full flex-col justify-between gap-8 px-[clamp(22px,3.3vw,40px)] py-[clamp(28px,3vw,40px)] md:max-w-[64%]">
          <div>
            <motion.h2 id="bcta-title" {...show(0.1)} className="text-[clamp(30px,3.7vw,46px)] font-normal leading-[1.08] tracking-[-0.03em]">{d.title}</motion.h2>
            <motion.p {...show(0.18)} className="mt-4 max-w-[560px] text-[clamp(15px,1.15vw,16px)] leading-[1.6] text-[#bdbdbd]">{d.text}</motion.p>
          </div>
          <motion.div {...show(0.26)}>
            <Link href={d.cta.href} className="group relative inline-flex h-[clamp(54px,4.6vw,58px)] w-full items-center rounded-[8px] bg-rudrix-strong pl-[clamp(20px,1.9vw,24px)] pr-[72px] text-[clamp(16px,1.3vw,17px)] font-normal text-white transition-[filter,transform] duration-300 hover:-translate-y-px hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:w-auto sm:min-w-[250px]">
              {d.cta.label}
              <span aria-hidden className="absolute right-[3px] top-1/2 grid h-[calc(100%-6px)] aspect-square -translate-y-1/2 place-items-center rounded-full bg-white/[0.24] transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none">
                <ArrowRight className="h-[15px] w-[15px] arw" strokeWidth={2.6} />
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
