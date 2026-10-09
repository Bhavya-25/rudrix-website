'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ChevronDown, ArrowRight, AppWindow, LayoutPanelTop, ScanSearch, Palette, Smartphone, Layers, ShoppingBag, Globe, Puzzle, Blocks, Laptop, Apple, Tablet, TabletSmartphone, Megaphone, Search, MousePointerClick, Target, Share2 } from 'lucide-react';
import { servicesMenu } from '@/data/site';

const menuIcons = { AppWindow, LayoutPanelTop, ScanSearch, Palette, Smartphone, Layers, ShoppingBag, Globe, Puzzle, Blocks, Laptop, Apple, Tablet, TabletSmartphone, Megaphone, Search, MousePointerClick, Target, Share2 };

const ease = [0.22, 1, 0.36, 1];

// "Services" mega menu: opens on hover (mouse), click/tap, or keyboard. Panel sits just under the header bar.
export default function MegaMenu({ label, index = 0 }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const timer = useRef(null);
  const btn = useRef(null);

  const openNow = () => {
    clearTimeout(timer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
    };
    const onDown = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  return (
    <div
      ref={wrap}
      onPointerEnter={(e) => e.pointerType === 'mouse' && openNow()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && closeSoon()}
      onBlur={(e) => {
        if (!wrap.current?.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={btn}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="services-mega"
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
          <div className="absolute left-1/2 top-full z-50 w-[min(1200px,calc(100vw-32px))] -translate-x-1/2 pt-2">
          <motion.div
            id="services-mega"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: reduce ? 0 : 0.2, ease }}
          >
            <div className="grid gap-6 rounded-[12px] border border-black/[0.06] bg-white p-[30px] shadow-[0_24px_64px_-16px_rgba(10,20,50,0.18),0_2px_8px_rgba(10,20,50,0.06)] xl:grid-cols-[1fr_300px]">
              <div className="flex flex-col gap-7">
                {servicesMenu.map((group) => (
                  <div key={group.name}>
                    <p className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#777]">{group.name}</p>
                    <ul className="mt-3 grid gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((s) => {
                        const Icon = menuIcons[s.icon];
                        return (
                          <li key={s.label}>
                            <Link href={s.href} onClick={() => setOpen(false)} className="group/item flex items-center gap-3.5 rounded-[8px] py-1 transition-colors">
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border border-black/[0.08] bg-[#f4f4f2] text-ink transition-colors group-hover/item:border-rudrix group-hover/item:text-rudrix-strong">
                                <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[15px] font-semibold leading-tight text-ink">{s.label}</span>
                                <span className="mt-1 block text-[13px] leading-none text-[#8a8a87]">{s.sub}</span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* promo card */}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="group/promo relative hidden min-h-[360px] flex-col justify-end overflow-hidden rounded-[12px] bg-near-black p-6 text-white xl:flex"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hero-2.webp" alt="" width={500} height={600} className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover/promo:scale-105" />
                <span aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.1)_70%)]" />
                <span className="relative text-[12px] font-medium uppercase tracking-[0.08em] text-white/80">Let&apos;s talk</span>
                <span className="relative mt-2 text-[22px] font-semibold leading-[1.2]">Have a product in mind?</span>
                <span className="relative mt-5 inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-rudrix-strong px-5 text-[15px] font-medium">
                  Start a conversation <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover/promo:-rotate-45" aria-hidden />
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
