'use client';
import { motion } from 'framer-motion';
import { icons } from './icons';

const ease = [0.22, 1, 0.36, 1];

export const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon];
  return (
    <motion.li
      variants={cardVariants}
      className="group flex min-h-[150px] flex-col rounded-[8px] border border-black/[0.07] bg-white p-3.5 sm:p-5 transition-[transform,border-color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-black/[0.16] lg:min-h-[130px] lg:p-[20px]"
    >
      <Icon className="h-[22px] w-[22px] text-ink transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5" strokeWidth={1.6} aria-hidden />
      <div className="mt-7 lg:mt-6">
        <h4 className="text-[15px] font-semibold leading-tight text-ink sm:text-[17px] lg:text-[18px]">{service.title}</h4>
        <p className="mt-2 text-[13px] leading-[1.5] text-slate2 sm:text-[15px] sm:leading-[1.55]">{service.text}</p>
      </div>
    </motion.li>
  );
}
