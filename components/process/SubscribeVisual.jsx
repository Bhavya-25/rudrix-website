'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Frame from './Frame';
import useReveal from './useReveal';

const ease = [0.22, 1, 0.36, 1];
const plans = ['MVP', 'Product', 'Custom'];
// Auto-play loop: the plan highlight hops around, then the switch flips off and back on.
const loop = [
  { on: true, plan: 1 },
  { on: true, plan: 2 },
  { on: true, plan: 0 },
  { on: false, plan: 0 },
  { on: true, plan: 1 },
];

export default function SubscribeVisual() {
  const [ref, show, reduce, live] = useReveal();
  const [view, setView] = useState(loop[0]);
  const [step, setStep] = useState(0);
  const [pausedUntil, setPausedUntil] = useState(0);

  // endless demo loop (paused while off-screen, after a click, or with reduced motion)
  useEffect(() => {
    if (!show || !live || reduce) return;
    const id = setInterval(() => {
      if (Date.now() < pausedUntil) return;
      setStep((s) => {
        const n = (s + 1) % loop.length;
        setView(loop[n]);
        return n;
      });
    }, 2200);
    return () => clearInterval(id);
  }, [show, live, reduce, pausedUntil]);

  const interact = (next) => {
    setPausedUntil(Date.now() + 6000);
    setView((v) => ({ ...v, ...next }));
  };

  const rise = (d) => ({
    initial: false,
    animate: show ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    transition: { duration: reduce ? 0 : 0.8, delay: reduce ? 0 : d, ease },
  });
  const spring = reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 };

  return (
    <motion.div ref={ref} {...rise(0)} className="h-full">
      <Frame className="flex h-full items-center justify-center p-[7%]">
        <motion.div {...rise(0.15)} className="flex w-full flex-col gap-[7%]">
          <Frame className="flex items-center justify-center gap-[9%] py-[5%]">
            <button
              type="button"
              role="switch"
              aria-checked={view.on}
              aria-label="Project kickoff"
              onClick={() => interact({ on: !view.on })}
              className={`flex h-[44px] w-[96px] items-center rounded-full border bg-black/50 p-1.5 transition-colors duration-500 ${
                view.on ? 'justify-start border-white/15' : 'justify-start border-white/10'
              }`}
            >
              <motion.span
                layout
                transition={spring}
                className="h-[26px] w-[26px] shrink-0 rounded-full"
                style={{ marginLeft: view.on ? 0 : 54 }}
                animate={{
                  backgroundColor: view.on ? '#ffd9c9' : '#4a4a4a',
                  boxShadow: view.on ? '0 0 14px rgba(255,74,0,0.6)' : '0 0 0px rgba(255,74,0,0)',
                }}
              />
              <motion.span
                className="absolute text-[13px] text-white/80"
                style={{ marginLeft: view.on ? 36 : 14 }}
                animate={{ opacity: 1 }}
                transition={spring}
              >
                {view.on ? 'On' : 'Off'}
              </motion.span>
            </button>
            <span className="text-[15px] text-white/85">Project kickoff</span>
          </Frame>

          <Frame className={`flex items-center justify-center gap-3 py-[5%] transition-opacity duration-500 ${view.on ? 'opacity-100' : 'opacity-45'}`}>
            {plans.map((p, i) => {
              const active = view.on && view.plan === i;
              return (
                <button
                  key={p}
                  type="button"
                  disabled={!view.on}
                  onClick={() => interact({ plan: i })}
                  className={`relative min-h-[44px] rounded-full border px-4 py-1.5 text-[13px] transition-colors duration-300 ${
                    active ? 'border-rudrix/70 text-[#ffd9c9]' : 'border-white/15 bg-black/50 text-white/80'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="plan-highlight"
                      transition={spring}
                      className="absolute inset-0 rounded-full bg-rudrix/15 shadow-[0_0_14px_rgba(255,74,0,0.25)]"
                    />
                  )}
                  <span className="relative">{p}</span>
                </button>
              );
            })}
          </Frame>
        </motion.div>
      </Frame>
    </motion.div>
  );
}
