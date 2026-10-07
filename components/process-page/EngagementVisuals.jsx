'use client';
import { m as motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];
const lab = 'text-[11px] font-medium tracking-[0.18em]';

function Blueprint({ reduce }) {
  const rows = [['SCOPE', 100], ['DESIGN', 78], ['BUILD', 56], ['QA', 34], ['LAUNCH', 0]];
  return (
    <div>
      <p className={`${lab} text-[#7d7d78]`}>PROJECT BLUEPRINT</p>
      <ul className="mt-6 flex flex-col gap-5">
        {rows.map(([n, p], i) => (
          <li key={n} className="grid grid-cols-[80px_1fr] items-center gap-4">
            <span className={`${lab} ${p ? 'text-[#f5f5f2]' : 'text-[#6b6b66]'}`}>{n}</span>
            <span className="relative h-[10px] rounded-full border border-[#292929]">
              {p > 0 ? <motion.span className="absolute inset-y-0 left-0 origin-left rounded-full bg-[#ff5a1f]" style={{ width: `${p}%` }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : i * 0.08, ease }} /> : <span className="absolute -left-px -top-px h-[10px] w-[10px] rounded-full border border-[#6b6b66]" />}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Roadmap({ reduce }) {
  const cols = [['NOW', ['Core flows', 'Auth'], true], ['NEXT', ['Reporting', 'Integrations'], false], ['LATER', ['New ideas'], false]];
  return (
    <div>
      <p className={`${lab} text-[#7d7d78]`}>EVOLVING ROADMAP</p>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {cols.map(([h, items, on], c) => (
          <div key={h}>
            <p className={`${lab} ${on ? 'text-[#ff5a1f]' : 'text-[#7d7d78]'}`}>{h}</p>
            <div className="mt-3 flex flex-col gap-2.5">
              {items.map((t, i) => (
                <motion.div key={t} className={`rounded-[8px] border px-3 py-3 text-[12px] leading-tight sm:text-[13px] ${on ? 'border-[#ff5a1f] bg-[#ff5a1f]/10 text-[#f5f5f2]' : 'border-[#292929] text-[#8f8f8a]'}`} initial={reduce ? false : { opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.1 + c * 0.1 + i * 0.07, ease }}>{t}</motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[12px] text-[#6b6b66]">Cards can move between columns as priorities change.</p>
    </div>
  );
}

function Pod({ reduce }) {
  const n = ['PRODUCT', 'DESIGN', 'ENGINEERING', 'QA'];
  return (
    <div>
      <p className={`${lab} text-[#7d7d78]`}>DEDICATED POD</p>
      <div className="mt-6 flex flex-col items-center">
        {n.map((x, i) => (
          <div key={x} className="flex flex-col items-center">
            <motion.span className={`rounded-full border px-6 py-3 ${lab} ${i === 0 ? 'border-[#ff5a1f] text-[#ff5a1f]' : 'border-[#3a3a3a] text-[#f5f5f2]'}`} initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : i * 0.1, ease }}>{x}</motion.span>
            {i < n.length - 1 && <span aria-hidden className="h-6 w-px bg-[#ff5a1f]/60" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function Specialist({ reduce }) {
  const dots = [[20, 30], [50, 18], [80, 32], [30, 70], [70, 72], [50, 50]];
  return (
    <div>
      <p className={`${lab} text-[#7d7d78]`}>SPECIALIST SIGNAL</p>
      <div className="relative mt-5 h-[210px] rounded-[10px] border border-[#292929]">
        <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          {dots.slice(0, 5).map(([x, y]) => <line key={`${x}${y}`} x1={x} y1={y} x2="50" y2="50" stroke="#292929" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />)}
        </svg>
        {dots.map(([x, y], i) => (
          <motion.span key={i} className={`absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${i === 5 ? 'h-5 w-5 bg-[#ff5a1f] shadow-[0_0_24px_rgba(255,90,31,0.6)]' : 'border border-[#4a4a47] bg-[#0b0b0b]'}`} style={{ left: `${x}%`, top: `${y}%` }} initial={reduce ? false : { opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : i * 0.07, ease }} />
        ))}
      </div>
      <div className={`mt-4 flex items-center justify-between ${lab} text-[#7d7d78]`}><span>PROBLEM</span><span className="text-[#ff5a1f]">SPECIALIST</span><span>SOLUTION</span></div>
    </div>
  );
}

export default function EngagementVisual({ kind, reduce }) {
  const V = { blueprint: Blueprint, roadmap: Roadmap, pod: Pod, specialist: Specialist }[kind];
  return <V reduce={reduce} />;
}
