'use client';
import { motion } from 'framer-motion';
import Frame from './Frame';
import useReveal from './useReveal';

const ease = [0.22, 1, 0.36, 1];
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };

// Generic stand-in integration glyphs (not real brand marks).
const icons = {
  zap: <path {...s} d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  spark: (
    <g {...s}>
      <path d="M12 3c1.5 4 3 5.5 7 7-4 1.5-5.5 3-7 7-1.5-4-3-5.5-7-7 4-1.5 5.5-3 7-7z" />
      <path d="M19 17v4M17 19h4" />
    </g>
  ),
  hash: <path {...s} d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16" />,
  github: (
    <g {...s}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </g>
  ),
  box: (
    <g {...s}>
      <path d="M21 8l-9-5-9 5 9 5z" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" />
    </g>
  ),
  chat: (
    <g {...s}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L3 20l1-4.6A8 8 0 1 1 21 12z" />
      <path d="M9 11h.01M15 11h.01" />
    </g>
  ),
  notion: (
    <g {...s}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 16V8l6 8V8" />
    </g>
  ),
  sail: (
    <g {...s}>
      <path d="M12 3v13M12 3c3 3 5 7 5 13h-5M12 7c-3 2-5 5-5 9h5" />
      <path d="M4 19h16l-2 2H6z" />
    </g>
  ),
  asterisk: <path {...s} d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />,
  mail: (
    <g {...s}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </g>
  ),
};

const rows = [
  { dir: 'left', items: ['zap', 'spark', 'hash', 'github', 'box', 'chat'] },
  { dir: 'right', items: ['notion', 'sail', 'asterisk', 'mail', 'hash', 'github'] },
];

// Two endless tickers moving in opposite directions (the track holds two copies for a seamless loop).
export default function RequestVisual() {
  const [ref, show, reduce] = useReveal();
  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={false}
      animate={show ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.6, ease }}
    >
      <Frame className="relative flex h-full flex-col justify-center gap-[5.5%] overflow-hidden" style={{ containerType: 'inline-size' }}>
        {rows.map((row, r) => (
          <div key={r} className="overflow-hidden">
            <div
              className="icon-track flex w-max"
              style={{
                animationDirection: row.dir === 'right' ? 'reverse' : 'normal',
                animationDuration: `${r ? 30 : 26}s`,
                marginLeft: r ? '-3cqw' : '-9cqw',
              }}
            >
              {[...row.items, ...row.items].map((name, c) => (
                <motion.div
                  key={c}
                  className="flex aspect-square w-[19.5cqw] shrink-0 items-center justify-center rounded-[12px] border border-white/[0.12] bg-[#0b0b0b] text-white/75 transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-rudrix/50 hover:text-white"
                  style={{ marginRight: '3.8cqw' }}
                  aria-hidden={c >= row.items.length || undefined}
                  initial={false}
                  animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                  transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.2 + (r * 5 + (c % 6)) * 0.06, ease }}
                >
                  <svg viewBox="0 0 24 24" className="h-[38%] w-[38%]" aria-hidden>
                    {icons[name]}
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </Frame>
    </motion.div>
  );
}
