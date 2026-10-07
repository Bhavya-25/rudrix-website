'use client';
import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { Check, Lock, Plus } from 'lucide-react';
import { protection as p } from '@/data/ourProcess';

const ease = [0.22, 1, 0.36, 1];
const N = p.items.length;
const lab = 'text-[11px] font-medium tracking-[0.18em]';

function Dot({ s }) {
  return (
    <span aria-hidden className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full text-[10px] ${s === 'done' ? 'bg-[#171717] text-white' : s === 'now' ? 'bg-[#ff5a1f] text-white' : 'border border-[#c4c4be]'}`}>
      {s === 'done' ? <Check className="h-3 w-3" /> : s === 'now' ? <span className="h-1.5 w-1.5 rounded-full bg-white" /> : null}
    </span>
  );
}

function Chain({ steps, reduce, label }) {
  return (
    <div>
      <p className={`${lab} text-[#70706c]`}>{label}</p>
      <ol className="mt-5 flex flex-col gap-0">
        {steps.map((s, i) => (
          <motion.li key={s} className="flex items-stretch gap-4" initial={reduce ? false : { opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : i * 0.08, ease }}>
            <span className="flex flex-col items-center"><span className={`h-3 w-3 rounded-full border-2 ${i === steps.length - 1 ? 'border-[#ff5a1f] bg-[#ff5a1f]' : 'border-[#171717] bg-white'}`} />{i < steps.length - 1 && <span className="my-1 w-px flex-1 bg-[#d9d9d4]" />}</span>
            <span className={`pb-5 text-[15px] ${i === steps.length - 1 ? 'font-medium text-[#171717]' : 'text-[#44443f]'}`}>{s}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

const visuals = {
  confidential: ({ reduce }) => (
    <div>
      <p className={`${lab} text-[#70706c]`}>CONCEPTUAL · CONFIDENTIAL BRIEF</p>
      <div className="mt-5 flex items-start gap-4 rounded-[10px] border border-[#d9d9d4] bg-white p-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fff0e9] text-[#ff5a1f]"><Lock className="h-5 w-5" aria-hidden /></span>
        <div className="flex-1">
          <div className="h-2 w-2/3 rounded-full bg-[#171717]/80" /><div className="mt-2.5 h-2 w-full rounded-full bg-[#e4e4df]" /><div className="mt-2.5 h-2 w-5/6 rounded-full bg-[#e4e4df]" />
          <ul className="mt-5 flex flex-col gap-2.5 text-[13.5px] text-[#44443f]"><li className="flex items-center gap-2.5"><Dot s="done" />Expectations agreed first</li><li className="flex items-center gap-2.5"><Dot s="now" />Detailed work begins</li></ul>
        </div>
      </div>
    </div>
  ),
  handover: ({ reduce }) => <Chain reduce={reduce} label="OWNERSHIP & HANDOVER PATH" steps={['Repository', 'Design assets', 'Documentation', 'Handover']} />,
  scope: ({ reduce }) => (
    <div>
      <p className={`${lab} text-[#70706c]`}>CONCEPTUAL · PROJECT DEFINITION</p>
      <div className="mt-5 divide-y divide-[#e4e4df] overflow-hidden rounded-[10px] border border-[#d9d9d4] bg-white">
        {[['INCLUDED', 'Approved requirements', 'done'], ['MILESTONES', 'Defined', 'done'], ['CHANGES', 'Discussed before implementation', 'now'], ['STATUS', 'Clear', 'done']].map(([k, v, s]) => (
          <div key={k} className="flex items-center justify-between gap-4 px-5 py-3.5"><div><p className="text-[10.5px] font-medium tracking-[0.18em] text-[#70706c]">{k}</p><p className="mt-1 text-[14.5px] text-[#171717]">{v}</p></div><Dot s={s} /></div>
        ))}
      </div>
    </div>
  ),
  continuity: ({ reduce }) => <Chain reduce={reduce} label="AFTER LAUNCH" steps={['Build', 'Launch', 'Monitor', 'Improve']} />,
};

function Body({ it, reduce }) {
  const V = visuals[it.visual];
  return (
    <div className="grid gap-6 pt-1 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] md:gap-8">
      <p className="text-[clamp(16px,1.25vw,18px)] leading-[1.7] text-[#70706c]">{it.description}</p>
      <div className="rounded-[10px] bg-[#f1f1ec] p-5"><V reduce={reduce} /></div>
    </div>
  );
}

export default function ProtectedDelivery() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(0);
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
  const btns = useRef([]);
  const frac = seen && open !== null ? open / (N - 1) : 0;
  const onKey = (e) => {
    const cur = open ?? 0;
    const map = { ArrowDown: cur + 1, ArrowUp: cur - 1, Home: 0, End: N - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    const n = Math.max(0, Math.min(N - 1, map[e.key]));
    setOpen(n); btns.current[n]?.focus();
  };
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : d, ease } });
  return (
    <section ref={ref} aria-labelledby="pd-title" className="section-x bg-[#f7f7f4] py-[clamp(72px,9vw,130px)] text-[#171717]">
      <div className="mx-auto grid max-w-[1245px] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-[clamp(48px,6vw,100px)]">
        <div className="lg:sticky lg:top-[120px] lg:self-start">
          <motion.div {...rise(0)} className="relative inline-block p-[6px]">
            {['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((c) => <span key={c} aria-hidden className={`absolute h-[7px] w-[7px] bg-[#ff5a1f] ${c}`} />)}
            <p className="border border-[#ff5a1f] px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] text-[#e04a10] sm:text-[13px]">{p.eyebrow}</p>
          </motion.div>
          <motion.h2 id="pd-title" {...rise(0.08)} className="mt-6 text-[clamp(30px,3.3vw,50px)] font-normal leading-[1.06] tracking-[-0.035em]">{p.title[0]}<br />{p.title[1]}</motion.h2>
          <motion.p {...rise(0.16)} className="mt-6 max-w-[470px] text-[clamp(16px,1.3vw,19px)] leading-[1.7] text-[#70706c]">{p.text}</motion.p>
          <motion.p {...rise(0.24)} className="mt-8 flex items-center gap-3 text-[15px] font-medium"><span aria-hidden className="h-px w-8 bg-[#ff5a1f]" />{p.statement}</motion.p>
        </div>

        <motion.div {...rise(0.12)} className="relative" onKeyDown={onKey}>
          <span aria-hidden className="absolute bottom-[40px] left-[19px] top-[40px] hidden w-px bg-[#d9d9d4] sm:block" />
          <span aria-hidden className="absolute bottom-[40px] left-[18px] top-[40px] hidden w-[3px] sm:block">
            <motion.span className="block h-full origin-top bg-[#ff5a1f] shadow-[0_0_10px_rgba(255,90,31,0.45)]" initial={false} animate={{ scaleY: frac }} transition={{ duration: reduce ? 0 : 0.6, ease }} />
          </span>
          <ul className="flex flex-col gap-3">
            {p.items.map((it, i) => {
              const on = open === i;
              return (
                <li key={it.number} className={`relative rounded-[12px] border transition-colors duration-300 sm:ml-0 ${on ? 'border-[#171717]/25 bg-white shadow-[0_18px_40px_-26px_rgba(0,0,0,0.35)]' : 'border-[#d9d9d4] hover:border-[#171717]/30'}`}>
                  <h3>
                    <button ref={(el) => (btns.current[i] = el)} type="button" aria-expanded={on} aria-controls={`pd-${i}`} onClick={() => setOpen(on ? null : i)} className="flex min-h-[72px] w-full items-center gap-4 px-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a1f] sm:gap-5 sm:px-5">
                      <span className={`relative z-10 grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full border text-[12px] font-medium transition-all duration-500 ${on ? 'border-[#ff5a1f] bg-[#ff5a1f] text-white' : 'border-[#d9d9d4] bg-[#f7f7f4] text-[#70706c]'}`}>{it.number}</span>
                      <span className="min-w-0 flex-1">
                        <span className={`block text-[11px] font-medium tracking-[0.18em] ${on ? 'text-[#ff5a1f]' : 'text-[#70706c]'}`}>{it.category}</span>
                        <span className="mt-1 block text-[clamp(18px,1.9vw,26px)] leading-tight tracking-[-0.02em]">{it.title}</span>
                      </span>
                      <Plus aria-hidden className={`h-5 w-5 shrink-0 transition-transform duration-300 ${on ? 'rotate-45 text-[#ff5a1f]' : 'text-[#70706c]'}`} />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div id={`pd-${i}`} role="region" aria-label={it.title} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduce ? 0 : 0.5, ease }} className="overflow-hidden">
                        <motion.div className="px-4 pb-6 sm:px-5 sm:pl-[80px]" initial={reduce ? false : { y: 8 }} animate={{ y: 0 }} transition={{ duration: reduce ? 0 : 0.5, ease }}><Body it={it} reduce={reduce} /></motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
