'use client';
import { m as motion } from 'framer-motion';

// Small line illustrations, one per milestone. Strokes draw in when mounted (skipped for reduced motion).
const O = '#ff5a1f';
const G = '#6b6b66';

function P({ d, c = G, w = 2, delay = 0, reduce, fill = 'none' }) {
  return (
    <motion.path d={d} stroke={c} strokeWidth={w} fill={fill} strokeLinecap="round" strokeLinejoin="round"
      initial={reduce ? false : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }} />
  );
}

const draw = [
  // 01 conversation
  (r) => (<>
    <P reduce={r} d="M40 50h110a12 12 0 0 1 12 12v46a12 12 0 0 1-12 12H88l-24 20v-20H40a12 12 0 0 1-12-12V62a12 12 0 0 1 12-12z" />
    <P reduce={r} delay={0.2} c={O} d="M180 96h72a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12h-16v20l-24-20h-32a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12z" />
    <P reduce={r} delay={0.5} d="M50 78h80M50 96h52" />
    <P reduce={r} delay={0.7} c={O} d="M196 124h56M196 140h34" />
  </>),
  // 02 document + scope
  (r) => (<>
    <P reduce={r} d="M92 30h96l36 36v136a8 8 0 0 1-8 8H92a8 8 0 0 1-8-8V38a8 8 0 0 1 8-8z" />
    <P reduce={r} delay={0.2} d="M188 30v36h36" />
    <P reduce={r} delay={0.3} d="M108 96h80M108 118h96M108 140h70" />
    <P reduce={r} delay={0.6} c={O} w={2.5} d="M108 176l14 14 30-32" />
    <P reduce={r} delay={0.8} c={O} d="M176 180h32" />
  </>),
  // 03 architecture nodes
  (r) => (<>
    <P reduce={r} c={O} d="M130 30h60a8 8 0 0 1 8 8v28a8 8 0 0 1-8 8h-60a8 8 0 0 1-8-8V38a8 8 0 0 1 8-8z" />
    <P reduce={r} delay={0.2} d="M160 74v26M70 100h180M70 100v26M160 100v26M250 100v26" />
    <P reduce={r} delay={0.4} d="M42 126h56a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8H42a8 8 0 0 1-8-8v-26a8 8 0 0 1 8-8zM132 126h56a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8v-26a8 8 0 0 1 8-8zM222 126h56a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8v-26a8 8 0 0 1 8-8z" />
    <P reduce={r} delay={0.7} c={O} d="M70 168v22M160 168v22M250 168v22M70 190h180" />
  </>),
  // 04 UI wireframe
  (r) => (<>
    <P reduce={r} d="M44 36h232a10 10 0 0 1 10 10v148a10 10 0 0 1-10 10H44a10 10 0 0 1-10-10V46a10 10 0 0 1 10-10z" />
    <P reduce={r} delay={0.2} d="M34 66h252" />
    <P reduce={r} delay={0.3} c={O} d="M52 51h.1M68 51h.1M84 51h.1" w={5} />
    <P reduce={r} delay={0.4} d="M52 88h80v52H52zM144 88h124M144 108h96M144 128h110" />
    <P reduce={r} delay={0.7} c={O} d="M52 160h60v22H52z" />
    <P reduce={r} delay={0.8} d="M124 160h60v22h-60zM196 160h72v22h-72z" />
  </>),
  // 05 code
  (r) => (<>
    <P reduce={r} d="M44 36h232a10 10 0 0 1 10 10v148a10 10 0 0 1-10 10H44a10 10 0 0 1-10-10V46a10 10 0 0 1 10-10z" />
    <P reduce={r} delay={0.2} c={O} w={3} d="M92 96l-28 28 28 28M228 96l28 28-28 28" />
    <P reduce={r} delay={0.5} c={O} w={3} d="M178 86l-36 76" />
    <P reduce={r} delay={0.8} d="M60 190h80M160 190h60" />
  </>),
  // 06 deploy / growth
  (r) => (<>
    <P reduce={r} d="M96 120a34 34 0 0 1 4-68 48 48 0 0 1 92 8 30 30 0 0 1-4 60H96z" />
    <P reduce={r} delay={0.3} c={O} w={3} d="M160 196v-60M136 160l24-24 24 24" />
    <P reduce={r} delay={0.6} d="M44 196h232" />
    <P reduce={r} delay={0.8} c={O} d="M60 196v-14M84 196v-22M236 196v-30M260 196v-42" />
  </>),
];

export default function MilestoneVisual({ index, reduce, className = '' }) {
  return (
    <svg viewBox="0 0 320 224" role="img" aria-label="" aria-hidden className={className} fill="none">
      {draw[index](reduce)}
    </svg>
  );
}
