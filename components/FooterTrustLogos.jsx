'use client';
import { motion } from 'framer-motion';
import { footer } from '@/data/footer';

const styles = [
  'font-bold tracking-[0.12em]',
  'font-semibold italic tracking-tight',
  'font-extrabold tracking-[0.2em]',
  'font-medium tracking-[0.3em]',
  'font-bold tracking-tight',
  'font-semibold tracking-[0.18em]',
];

export default function FooterTrustLogos() {
  return (
    <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-12 sm:text-left">
      <span className="shrink-0 whitespace-nowrap text-[17px] text-white/85">{footer.trustedLabel}</span>
      <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:justify-start sm:gap-x-8">
        {footer.logos.map((name, i) => (
          <motion.li
            key={name}
            className={`text-[18px] uppercase text-white/60 ${styles[i % styles.length]}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            {name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
