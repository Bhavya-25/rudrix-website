'use client';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { clients } from '@/data/about';

const ease = [0.22, 1, 0.36, 1];

function Corners({ color = '#ff4a00', size = 7 }) {
  return ['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((p) => {
    const [v, h] = p.split('-');
    return <span key={p} aria-hidden className="absolute" style={{ width: size, height: size, background: color, [v]: -size / 2, [h]: -size / 2 }} />;
  });
}

function TextCard({ t }) {
  return (
    <figure className="flex h-full min-h-[380px] flex-col justify-between border border-black/[0.08] bg-[#fafafa] p-6 sm:min-h-[430px] sm:p-10">
      {t.rating ? <p aria-label={`${t.rating} out of 5 stars`} className="text-[20px] tracking-[2px] text-[#f5b301]">{'★'.repeat(t.rating)}</p> : <span aria-hidden />}
      <blockquote className="text-[clamp(18px,1.7vw,22px)] leading-[1.65] text-[#1d1d1d]">{t.quoted === false ? t.quote : <>&ldquo;{t.quote}&rdquo;</>}</blockquote>
      <figcaption className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[18px] font-medium text-[#111]">{t.name}</p>
          <p className="mt-0.5 text-[14px] text-[#6b6b68]">{t.role}</p>
        </div>
        {t.logo && /* eslint-disable-next-line @next/next/no-img-element */ <img src={t.logo} alt="" className="h-8 w-auto" />}
      </figcaption>
    </figure>
  );
}

function VideoCard({ t }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative h-full min-h-[380px] overflow-hidden bg-[#111] sm:min-h-[430px]">
      {playing && t.video ? (
        <video src={t.video} poster={t.poster} controls autoPlay className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={t.poster} alt={t.alt} loading="lazy" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
      )}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),transparent_55%)]" />
      {t.video && !playing && (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play video testimonial from ${t.name}`} className="absolute left-5 top-5 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/35 text-white backdrop-blur-[2px] transition-transform duration-300 hover:scale-105">
          <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden />
        </button>
      )}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-[clamp(20px,2vw,26px)] font-medium">{t.name}</p>
        <p className="mt-1 text-[15px] text-white/80">{t.role}</p>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  const reduce = useReducedMotion();
  const n = clients.testimonials.length;
  const GAP = 20;
  const track = useRef(null);
  // order[1] is the active slide; order[0] is the previous one (peeks in on wide screens)
  const [order, setOrder] = useState(() => Array.from({ length: n }, (_, i) => (i - 1 + n) % n));
  const paused = useRef(false);
  const busy = useRef(false);
  const drag = useRef(null);
  const active = order[1];

  const widths = () => (track.current ? [...track.current.children].map((c) => c.offsetWidth) : []);
  const pad = () => (typeof window !== 'undefined' && window.innerWidth >= 1280 ? 235 : 0);
  const base = (w = widths()) => pad() - (w[0] + GAP);
  const setX = (x, animate) => {
    const t = track.current;
    if (!t) return;
    t.style.transition = animate && !reduce ? 'transform 650ms cubic-bezier(0.22,1,0.36,1)' : 'none';
    t.style.transform = `translate3d(${x}px,0,0)`;
  };

  // after every reorder, put the active slide back at its resting position (no animation)
  useLayoutEffect(() => { setX(base(), false); });
  useEffect(() => {
    const onResize = () => setX(base(), false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  const next = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    const w = widths();
    setX(base(w) - (w[1] + GAP), true);
    setTimeout(() => { setOrder((o) => [...o.slice(1), o[0]]); busy.current = false; }, reduce ? 0 : 660);
  }, [reduce]); // eslint-disable-line react-hooks/exhaustive-deps

  const prev = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    const w = widths();
    const last = w[w.length - 1];
    // put the previous-previous slide in front, start shifted back by one slide, then slide into place
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
    requestAnimationFrame(() => {
      const w2 = widths();
      setX(base(w2) - (w2[1] + GAP), false);
      requestAnimationFrame(() => {
        setX(base(w2), true);
        setTimeout(() => { busy.current = false; }, reduce ? 0 : 660);
      });
    });
    void last;
  }, [reduce]); // eslint-disable-line react-hooks/exhaustive-deps

  // autoplay: off for reduced motion; paused on hover/focus, while a video plays, and when the tab is hidden
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (paused.current || document.hidden || track.current?.querySelector('video')) return;
      next();
    }, 6500);
    return () => clearInterval(id);
  }, [reduce, next]);

  // touch / mouse drag
  const onDown = (e) => {
    if (busy.current || e.target.closest('button,a,video')) return;
    drag.current = { x: e.clientX, id: e.pointerId, moved: 0 };
    track.current.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    const d = drag.current;
    if (!d) return;
    d.moved = e.clientX - d.x;
    setX(base() + d.moved, false);
  };
  const onUp = () => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    if (d.moved < -60) next();
    else if (d.moved > 60) prev();
    else setX(base(), true);
  };

  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: 0.7, delay: d, ease } });
  const markets = (
    <>
      {clients.markets.map((m) => (
        <span key={m.name} className="mr-3 flex h-[60px] shrink-0 items-center gap-3 border border-black/[0.08] bg-[#fafafa] px-5 text-[16px] text-[#222]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={m.flag} alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
          {m.name}
        </span>
      ))}
    </>
  );

  return (
    <section id="testimonials" aria-labelledby="clients-title" className="bg-white section-y">
      <div className="mx-auto max-w-[1280px] px-[22px] sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div {...rise(0)} className="relative inline-block p-[6px]">
              <div className="relative"><Corners /><p className="border border-[#ff4a00] px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] text-rudrix-strong sm:text-[13px]">{clients.eyebrow}</p></div>
            </motion.div>
            <motion.h2 id="clients-title" {...rise(0.08)} className="mt-6 text-[clamp(36px,5vw,64px)] font-normal leading-[1.03] tracking-[-0.03em] text-[#1d1d1d]">
              {clients.title.map((l) => <span key={l} className="block">{l}</span>)}
            </motion.h2>
            <motion.p {...rise(0.16)} className="mt-5 max-w-[560px] text-[16px] leading-[1.55] text-[#5f5f5c] sm:text-[17px]">{clients.text}</motion.p>
          </div>
          <motion.div {...rise(0.24)}>
            <Link href={clients.link.href} className="group inline-flex min-h-[44px] items-center gap-2 text-[16px] font-semibold text-rudrix-strong">
              {clients.link.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[5px]" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <motion.div {...rise(0.1)} className="mt-10">
          <p className="sr-only">Markets we work in: {clients.markets.map((m) => m.name).join(', ')}</p>
          <div aria-hidden className="marquee-mask overflow-hidden">
            <div className="marquee-left flex w-max" style={{ '--marquee': '26s' }}>
              <div className="flex shrink-0">{markets}{markets}</div>
              <div className="flex shrink-0">{markets}{markets}</div>
            </div>
          </div>
        </motion.div>

        <motion.div {...rise(0.1)} className="relative mt-8" onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)} onFocus={() => (paused.current = true)} onBlur={() => (paused.current = false)}>
          <div className="clients-clip overflow-hidden" role="region" aria-roledescription="carousel" aria-label="Client testimonials">
            <div
              ref={track}
              className="flex cursor-grab touch-pan-y select-none gap-5 will-change-transform active:cursor-grabbing"
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerCancel={onUp}
            >
              {order.map((idx, pos) => {
                const t = clients.testimonials[idx];
                return (
                  <div
                    key={idx}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${idx + 1} of ${n}`}
                    aria-hidden={pos === 0 ? true : undefined}
                    className={`shrink-0 ${t.type === 'video' ? 'w-[86vw] sm:w-[400px]' : 'w-[86vw] sm:w-[560px]'}`}
                  >
                    {t.type === 'video' ? <VideoCard t={t} /> : <TextCard t={t} />}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-2" aria-hidden>
              {clients.testimonials.map((_, i) => <span key={i} className={`h-[3px] rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-[#111]' : 'w-4 bg-black/20'}`} />)}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={prev} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center border border-black/15 text-[#111] transition-colors hover:bg-black/[0.04]"><ChevronLeft className="h-5 w-5" aria-hidden /></button>
              <button type="button" onClick={next} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center border border-black/15 text-[#111] transition-colors hover:bg-black/[0.04]"><ChevronRight className="h-5 w-5" aria-hidden /></button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
