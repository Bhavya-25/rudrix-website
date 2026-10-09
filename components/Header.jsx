'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, m as motion } from 'framer-motion';
import AvailabilityBadge from './AvailabilityBadge';
import MegaMenu from './MegaMenu';
import WhyMenu from './WhyMenu';
import { ChevronDown } from 'lucide-react';
import { nav, site, whyMenu, servicesMenu } from '@/data/site';

const ease = [0.22, 1, 0.36, 1];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sub, setSub] = useState(null); // which mobile accordion (Services / Why Rudrix) is expanded

  // Same threshold as the reference: the bar switches state once the page has scrolled past 20px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    document.documentElement.dataset.menu = open ? 'open' : ''; // lets the floating WhatsApp button step aside
    if (!open) setSub(null);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.documentElement.dataset.menu = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className="header-shell fixed inset-x-0 top-0 z-40"
      style={{ height: scrolled ? 72 : 118, padding: scrolled ? '0px' : '56px 24px 0px' }}
    >
      <AvailabilityBadge hidden={scrolled} />

      <div
        className={`header-bar ${scrolled ? 'glass-nav-solid' : 'glass-nav'} mx-auto flex h-full items-center justify-between gap-8 px-6`}
        style={{ maxWidth: scrolled ? '100%' : '1200px', borderRadius: scrolled ? 0 : 16 }}
      >
        <a
          href="/"
          aria-label="Rudrix home"
          className="hero-rise inline-flex min-h-[44px] items-center text-[30px] font-bold leading-none tracking-tight text-rudrix md:text-[34px]"
          style={{ '--d': '0.25s' }}
        >
          {site.name}.
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-12">
          {nav.map((item, i) =>
            item.mega ? (
              <MegaMenu key={item.label} label={item.label} index={i} />
            ) : item.why ? (
              <WhyMenu key={item.label} label={item.label} index={i} />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="hero-rise group relative py-2 max-lg:py-3 text-[15px] text-slate2 transition-colors hover:text-ink"
                style={{ '--d': `${0.3 + i * 0.07}s` }}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center">
          <a
            href="/contact"
            className="hero-pop hidden min-h-[52px] items-center rounded-full bg-slate2 px-6 text-[15px] font-medium text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.45)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-ink md:inline-flex"
            style={{ '--d': '0.55s' }}
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="hero-pop inline-flex min-h-[44px] items-center rounded-full bg-near-black px-5 text-sm font-medium text-white md:hidden"
            style={{ '--d': '0.45s' }}
          >
            Menu
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-near-black px-6 pb-8 pt-6 text-white md:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[30px] font-bold leading-none text-rudrix">{site.name}.</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="min-h-[44px] rounded-full bg-white/10 px-5 text-sm font-medium"
              >
                Close
              </button>
            </div>
            <ul className="mt-10 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
              {[...nav, { label: 'Contact', href: '/contact' }].map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.07, ease }}
                >
                  {item.mega || item.why ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setSub((v) => (v === item.label ? null : item.label))}
                        aria-expanded={sub === item.label}
                        aria-controls={`m-sub-${i}`}
                        className="flex w-full items-center justify-between gap-4 py-2 text-left text-[clamp(30px,min(12vw,7.5vh),56px)] font-bold leading-[1.05] tracking-tight"
                      >
                        {item.label}
                        <ChevronDown className={`h-7 w-7 shrink-0 text-white/70 transition-transform duration-300 ${sub === item.label ? 'rotate-180' : ''}`} aria-hidden />
                      </button>
                      <AnimatePresence initial={false}>
                        {sub === item.label && (
                          <motion.ul
                            id={`m-sub-${i}`}
                            key="sub"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease }}
                            className="mb-2 ml-1 flex flex-col overflow-hidden"
                          >
                            {item.why
                              ? whyMenu.items.map((s2) => (
                                  <li key={s2.label}>
                                    <a href={s2.href} onClick={() => setOpen(false)} className="block py-2 text-[19px] text-white/70">{s2.label}</a>
                                  </li>
                                ))
                              : servicesMenu.map((g) => (
                                  <li key={g.name} className="pb-2">
                                    <p className="pt-2 text-[12px] font-medium uppercase tracking-[0.08em] text-white/40">{g.name}</p>
                                    <ul>
                                      {g.items.map((s2) => (
                                        <li key={s2.label}>
                                          <a href={s2.href} onClick={() => setOpen(false)} className="block py-1.5 text-[19px] text-white/70">{s2.label}</a>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-[clamp(30px,min(12vw,7.5vh),56px)] font-bold leading-[1.05] tracking-tight"
                    >
                      {item.label}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center gap-2.5 text-sm text-white/70">
                <span className="live-dot h-2 w-2 rounded-full bg-live" /> {site.status}
              </span>
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex min-h-[56px] items-center justify-center rounded-full bg-rudrix text-base font-semibold text-white"
              >
                Start a Project →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
