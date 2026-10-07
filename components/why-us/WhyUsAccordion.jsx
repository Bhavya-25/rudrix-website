'use client';
import { AnimatePresence, m as motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { whyUs } from '@/data/whyUs';

const ease = [0.22, 1, 0.36, 1];

export default function WhyUsAccordion({ active, onChange }) {
  const reduce = useReducedMotion();
  return (
    <ul className="flex flex-col gap-5 lg:gap-7">
      {whyUs.items.map((it, i) => {
        const open = i === active;
        return (
          <li
            key={it.number}
            className={`group border bg-[#faf9f7] transition-colors duration-300 ${
              open ? 'border-black/[0.14]' : 'border-black/[0.07] hover:border-black/[0.13]'
            }`}
          >
            <h3>
              <button
                type="button"
                id={`why-btn-${i}`}
                aria-expanded={open}
                aria-controls={`why-panel-${i}`}
                onClick={() => onChange(i)}
                className="flex min-h-[88px] w-full items-start gap-5 px-5 py-8 text-left sm:px-8 lg:min-h-[100px] lg:gap-6 lg:px-[28px] lg:py-[34px]"
              >
                <span className="hidden w-[34px] shrink-0 pt-[3px] text-[17px] text-[#666] sm:block lg:w-[40px] lg:text-[19px]">{it.number}</span>
                <span className="flex-1 text-[21px] sm:text-[clamp(19px,1.7vw,24px)] leading-[1.25] tracking-[-0.025em] text-ink transition-transform duration-300 group-hover:translate-x-[2px]">
                  {it.title}
                </span>
                <ChevronDown
                  aria-hidden
                  strokeWidth={1.7}
                  className="mt-[2px] h-[20px] w-[20px] shrink-0 text-ink transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`why-panel-${i}`}
                  role="region"
                  aria-labelledby={`why-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0.15 : 0.5, ease }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ y: reduce ? 0 : 8 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="max-w-[460px] pb-8 pl-5 pr-6 text-[16px] leading-[1.65] text-[#666] sm:pl-[calc(32px+34px+20px)] lg:pb-[34px] lg:pl-[calc(28px+40px+24px)]"
                  >
                    {it.description}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
