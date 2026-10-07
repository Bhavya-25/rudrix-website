'use client';
import { useState } from 'react';
import { AnimatePresence, m as motion, useReducedMotion } from 'framer-motion';
import FAQItem from './faq/FAQItem';
import { faq as defaultFaq } from '@/data/faq';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: '-10% 0px' };
export default function FAQSection({ data }) {
  const faq = data || defaultFaq;
  const names = Object.keys(faq.categories);
  const reduce = useReducedMotion();
  const [category, setCategory] = useState(names[0]);
  const [openIndex, setOpenIndex] = useState(null); // everything starts closed

  const pick = (name) => {
    setCategory(name);
    setOpenIndex(null);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-[#f6f2ea] section-x section-y text-ink"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <motion.h2
            id="faq-title"
            className="text-[clamp(38px,5vw,72px)] font-medium leading-[1.04] tracking-[-0.035em]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease }}
          >
            {faq.heading}
          </motion.h2>
          <motion.p
            className="mx-auto mt-5 max-w-[470px] text-[16px] leading-[1.6] text-[#7a7a76] lg:text-[17px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            {faq.intro}
          </motion.p>
        </div>

        <motion.div
          className={`mt-10 flex justify-center lg:mt-12 ${names.length < 2 ? 'hidden' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <div
            role="tablist"
            aria-label="FAQ categories"
            className="flex max-w-[420px] flex-wrap justify-center gap-2.5 sm:max-w-none"
          >
            {names.map((n) => {
              const on = n === category;
              return (
                <button
                  key={n}
                  type="button"
                  role="tab"
                  id={`faq-tab-${n}`}
                  aria-selected={on}
                  aria-controls="faq-list"
                  onClick={() => pick(n)}
                  className={`min-h-[48px] shrink-0 rounded-full px-6 text-[16px] font-medium transition-colors duration-300 ${
                    on ? 'bg-[#0b0b0b] text-white' : 'bg-white text-[#6b6b68] hover:text-ink'
                  }`}
                >
                  {n}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div id="faq-list" role="tabpanel" aria-labelledby={`faq-tab-${category}`} className="mt-10 sm:mt-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={category}
              className="flex flex-col gap-2.5"
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -10, transition: { duration: 0.22, ease } }}
              transition={{ duration: reduce ? 0.12 : 0.4, ease }}
            >
              {faq.categories[category].map((item, i) => (
                <FAQItem
                  key={item.question}
                  id={`${category}-${i}`}
                  question={item.question}
                  answer={item.answer}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
