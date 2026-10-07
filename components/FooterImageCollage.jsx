'use client';
import { motion, useReducedMotion } from 'framer-motion';
import PosterCard from './PosterCard';
import { footer } from '@/data/footer';

const ease = [0.22, 1, 0.36, 1];
const fade = 'linear-gradient(to bottom, transparent 0%, #000 12.5%, #000 87.5%, transparent 100%)';

/**
 * One tilted, vertically-masked column of endlessly scrolling cards.
 * The list is rendered twice and translated by -50% for a seamless loop.
 */
function Column({ items, direction, seconds, className, delay }) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];
  return (
    <motion.div
      className={`absolute top-0 h-full w-[46%] ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: reduce ? 0.2 : 1, delay: reduce ? 0 : delay, ease }}
    >
      <div className="h-full w-full rotate-[4deg]">
        <div className="group h-full w-full overflow-hidden" style={{ maskImage: fade, WebkitMaskImage: fade }}>
          <ul
            className="footer-ticker flex flex-col"
            style={{
              '--dur': `${seconds}s`,
              animationDirection: direction === 'down' ? 'reverse' : 'normal',
            }}
          >
            {loop.map((c, i) => {
              const dup = i >= items.length;
              return (
                <li key={i} className="shrink-0 pb-[34px]" aria-hidden={dup || undefined}>
                  <PosterCard kind={c} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function FooterImageCollage() {
  const { columnA, columnB, secondsPerLoop } = footer.collage;
  return (
    <div
      className="relative mx-auto h-[420px] w-full max-w-[360px] md:h-[600px] md:max-w-[460px] lg:mx-0 lg:ml-auto lg:h-[680px] lg:max-w-[520px] [mask-image:linear-gradient(to_top,transparent_0%,#000_35%)]"
      role="group"
      aria-label="Campaign examples"
    >
      <Column items={columnA} direction="up" seconds={secondsPerLoop} className="left-0" delay={0.2} />
      <Column items={columnB} direction="down" seconds={secondsPerLoop * 1.1} className="left-[54%] translate-y-[18px]" delay={0.4} />
    </div>
  );
}
