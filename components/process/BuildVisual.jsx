'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Frame from './Frame';
import useReveal from './useReveal';
import { process } from '@/data/process';

const ease = [0.22, 1, 0.36, 1];
const total = process.code.length;

/**
 * Endless collaborative-coding demo: lines type in one by one, a teammate's
 * cursor + "Rudrix" badge wanders across the editor, then the loop restarts.
 */
export default function BuildVisual() {
  const [ref, show, reduce, live] = useReveal();
  const [count, setCount] = useState(reduce ? total : 0);

  useEffect(() => {
    if (reduce) return setCount(total);
    if (!show || !live) return;
    let hold = 0;
    const id = setInterval(() => {
      setCount((c) => {
        if (c < total) return c + 1;
        hold += 1;
        if (hold > 12) {
          hold = 0;
          return 0; // restart
        }
        return c;
      });
    }, 260);
    return () => clearInterval(id);
  }, [show, live, reduce]);

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={false}
      animate={show ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.6, ease }}
    >
      <Frame className="relative h-full overflow-hidden px-[8%] py-[7%]">
        <pre
          className="font-mono text-[clamp(11px,1.05vw,16px)] leading-[1.7] text-white/55 [mask-image:linear-gradient(to_bottom,#000_55%,transparent_100%)]"
          aria-label="Code editor example"
        >
          {process.code.map((line, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={i < count ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ duration: reduce ? 0 : 0.4, ease }}
              className="whitespace-pre"
            >
              {line || ' '}
            </motion.div>
          ))}
        </pre>

        {/* teammate cursor + badge, endlessly wandering */}
        <motion.div
          className="pointer-events-none absolute z-10"
          initial={false}
          animate={
            show
              ? reduce
                ? { left: '58%', top: '24%', opacity: 1 }
                : {
                    left: ['18%', '58%', '30%', '62%', '40%', '18%'],
                    top: ['68%', '24%', '50%', '38%', '16%', '68%'],
                    opacity: 1,
                  }
              : { left: '18%', top: '68%', opacity: 0 }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  left: { duration: 14, ease: [0.65, 0, 0.35, 1], repeat: Infinity },
                  top: { duration: 14, ease: [0.65, 0, 0.35, 1], repeat: Infinity },
                  opacity: { duration: 0.6 },
                }
          }
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-transparent stroke-[#ffd9c9]" strokeWidth="1.5" aria-hidden>
            <path d="M5 3l14 7-6 2-2 6z" />
          </svg>
          <motion.span
            className="absolute left-5 top-4 whitespace-nowrap rounded-[8px] border border-rudrix/60 bg-[#3a1a0d] px-3.5 py-2 text-[14px] text-[#ffd9c9]"
            initial={false}
            animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 1.2, ease }}
          >
            Rudrix
          </motion.span>
        </motion.div>
      </Frame>
    </motion.div>
  );
}
