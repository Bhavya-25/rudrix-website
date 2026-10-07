'use client';
import { AnimatePresence, m as motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function FAQItem({ id, question, answer, open, onToggle }) {
  const reduce = useReducedMotion();
  return (
    <li className="rounded-[16px] bg-white transition-colors duration-300 hover:bg-[#fafafa] sm:rounded-[24px] md:rounded-[24px]">
      <h3>
        <button
          type="button"
          id={`faq-btn-${id}`}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          onClick={onToggle}
          className="flex min-h-[80px] w-full items-center justify-between gap-5 rounded-[inherit] px-5 py-5 text-left md:min-h-[92px] md:px-7"
        >
          <span className="text-[18px] sm:text-[clamp(17px,1.4vw,20px)] font-medium leading-[1.3] text-ink">{question}</span>
          <span
            aria-hidden
            className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0b0b0b] text-white md:h-[44px] md:w-[44px]"
          >
            <span
              className="relative block h-[18px] w-[18px] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded bg-current" />
              <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded bg-current" />
            </span>
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-btn-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0.12 : 0.45, ease }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: reduce ? 0 : -4 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.45, ease }}
              className="max-w-[860px] px-5 pb-7 pr-[72px] text-[15px] leading-[1.65] text-[#666] md:px-7 md:pr-[88px] md:text-[16px]"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
