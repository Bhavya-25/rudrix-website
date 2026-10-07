'use client';
import { motion } from 'framer-motion';
import { toolCatalog } from '@/data/capabilities';

const ease = [0.22, 1, 0.36, 1];
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

// "Tools we use": one compact bordered square per technology, logo centred at a consistent size.
export default function ToolsList({ tools = [] }) {
  const list = tools.map((id) => toolCatalog[id]).filter(Boolean);
  return (
    <div>
      <motion.p variants={item} className="text-[16px] text-slate2">Tools we use</motion.p>
      <motion.ul
        className="mt-3 flex flex-wrap gap-2.5 sm:gap-3"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        aria-label="Technologies we use for this service"
      >
        {list.map((t) => (
          <motion.li key={t.name} variants={item}>
            <span
              tabIndex={0}
              aria-label={t.name}
              className="group relative flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border border-black/[0.1] bg-white transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:border-black/[0.22] focus-visible:-translate-y-[2px] focus-visible:border-black/[0.22] sm:h-[56px] sm:w-[56px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.src}
                alt=""
                width={28}
                height={28}
                loading="lazy"
                draggable={false}
                className="h-[24px] w-[24px] object-contain transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-focus-visible:scale-[1.06] sm:h-[28px] sm:w-[28px]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-[6px] bg-ink px-2.5 py-1 text-[12px] text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
              >
                {t.name}
              </span>
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
