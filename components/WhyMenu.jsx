'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Users, MessageSquareQuote, Workflow } from 'lucide-react';
import { whyMenu } from '@/data/site';

const ease = [0.22, 1, 0.36, 1];
const icons = { users: Users, quote: MessageSquareQuote, process: Workflow };

// "Why Rudrix" dropdown: link list on the left, promo image card on the right. Hover, click/tap or keyboard.
export default function WhyMenu({ label, index = 0 }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const timer = useRef(null);
  const btn = useRef(null);

  const openNow = () => { clearTimeout(timer.current); setOpen(true); };
  const closeSoon = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(false), 140); };
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); } };
    const onDown = (e) => { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown); };
  }, [open]);

  return (
    <div
      ref={wrap}
      className="relative"
      onPointerEnter={(e) => e.pointerType === 'mouse' && openNow()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && closeSoon()}
      onBlur={(e) => { if (!wrap.current?.contains(e.relatedTarget)) setOpen(false); }}
    >
      <button
        ref={btn}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="why-mega"
        onClick={() => setOpen((o) => !o)}
        className="hero-rise group relative inline-flex items-center gap-1.5 py-2 max-lg:py-3 text-[15px] text-slate2 transition-colors hover:text-ink"
        style={{ '--d': `${0.3 + index * 0.07}s` }}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden />
        <span className={`absolute inset-x-0 bottom-0.5 h-px origin-left bg-ink transition-transform duration-300 ${open ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
      </button>

      <AnimatePresence>
        {open && (
          <div className="absolute left-1/2 top-full z-50 w-[min(660px,calc(100vw-32px))] -translate-x-1/2 pt-3">
            <motion.div
              id="why-mega"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: reduce ? 0 : 0.2, ease }}
            >
              <div className="grid gap-6 rounded-[10px] border border-black/[0.06] bg-white p-[30px] shadow-[0_24px_64px_-16px_rgba(10,20,50,0.18),0_2px_8px_rgba(10,20,50,0.06)] md:grid-cols-[1fr_280px]">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#777]">{whyMenu.heading}</p>
                  <ul className="mt-4 flex flex-col gap-3">
                    {whyMenu.items.map((it) => {
                      const Icon = icons[it.icon];
                      return (
                        <li key={it.label}>
                          <Link href={it.href} onClick={() => setOpen(false)} className="group/item flex items-center gap-3.5 rounded-[8px] py-1 transition-colors">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border border-black/[0.08] bg-[#f4f4f2] text-ink transition-colors group-hover/item:border-rudrix group-hover/item:text-rudrix-strong">
                              <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden />
                            </span>
                            <span>
                              <span className="block text-[15px] font-semibold leading-tight text-ink">{it.label}</span>
                              <span className="mt-1 block text-[13px] leading-none text-[#8a8a87]">{it.sub}</span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Link href={whyMenu.promo.href} onClick={() => setOpen(false)} className="group/promo relative hidden h-[337px] overflow-hidden rounded-[8px] bg-near-black md:block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={whyMenu.promo.image} alt="" width={400} height={500} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/promo:scale-105" style={{ objectPosition: '50% 30%' }} />
                  <span aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),rgba(0,0,0,0)_55%)]" />
                  <span className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <span className="text-[17px] font-medium leading-[1.25] text-white">{whyMenu.promo.text[0]}<br />{whyMenu.promo.text[1]}</span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[6px] bg-white text-ink transition-transform duration-300 group-hover/promo:-translate-y-0.5"><ArrowUpRight className="h-4 w-4" aria-hidden /></span>
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
