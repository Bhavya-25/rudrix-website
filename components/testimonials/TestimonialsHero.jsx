import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { testimonialsHero as t, mosaicRows } from '@/data/testimonials';

const GREEN = '#1fe06b';

function Tile({ tile, priority }) {
  const style = { width: `calc(var(--rh) * ${tile.w})` };
  const base = 'relative mr-[10px] h-full shrink-0 overflow-hidden border border-white/[0.07] bg-[#0b0b0b]';
  if (tile.type === 'image') {
    return (
      <div className={base} style={style}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={tile.src} alt="" width={400} height={400} loading={priority ? 'eager' : 'lazy'} decoding="async" draggable={false} className="h-full w-full object-cover" style={{ objectPosition: tile.pos }} />
      </div>
    );
  }
  if (tile.type === 'logo') {
    return (
      <div className={`${base} grid place-items-center`} style={style}>
        <span className="text-[calc(var(--rh)*0.16)] font-bold tracking-tight text-white/55">Rudrix.</span>
      </div>
    );
  }
  return (
    <div className={base} style={{ ...style, background: tile.tone === 'orange' ? 'linear-gradient(135deg,#ff4a00,#7a2300)' : 'linear-gradient(135deg,#1c1c1c,#050505)' }} />
  );
}

function Row({ row, index }) {
  const dir = row.dir === 'left' ? 'marquee-left' : 'marquee-right';
  // second copy is decorative duplicate so the loop is seamless (translateX 0 → -50%)
  return (
    <div className="h-[var(--rh)] w-full overflow-hidden" style={{ marginBottom: 10 }}>
      <div className={`${dir} flex h-full w-max`} style={{ '--marquee': `${row.speed}s` }}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex h-full shrink-0" aria-hidden>
            {row.tiles.map((tile, k) => <Tile key={k} tile={tile} priority={index < 2 && copy === 0 && k < 5} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsHero() {
  const corners = ['left-0 top-0', 'right-0 top-0', 'bottom-0 left-0', 'bottom-0 right-0'];
  return (
    <section aria-labelledby="th-title" className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-black text-white [--rh:clamp(150px,calc((100svh-30px)/4),290px)]">
      {/* layer 1: decorative mosaic */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-20 pt-[10px]">
        {mosaicRows.map((row, k) => <Row key={k} row={row} index={k} />)}
      </div>
      {/* layer 2/3: dark overlay + gradient (darkest behind the copy, lighter to the right) */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.88)_38%,rgba(0,0,0,0.62)_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75)_0%,transparent_22%,transparent_60%,rgba(0,0,0,0.85)_100%)]" />

      <div className="section-x relative z-10 pb-[clamp(110px,12vh,150px)] pt-[clamp(130px,22vh,220px)]">
        <div className="mx-auto max-w-[1245px]">
          <div className="max-w-[700px]">
            <div className="hero-rise relative inline-block p-[6px]" style={{ '--d': '0.1s' }}>
              {corners.map((c) => <span key={c} aria-hidden className={`absolute h-[7px] w-[7px] ${c}`} style={{ background: GREEN }} />)}
              <p className="border px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] sm:text-[13px]" style={{ borderColor: GREEN, color: '#fff' }}>{t.eyebrow}</p>
            </div>
            <h1 id="th-title" className="hero-rise mt-6 text-[clamp(40px,6vw,88px)] font-normal leading-[1] tracking-[-0.035em]" style={{ '--d': '0.22s' }}>
              {t.title[0]}<br />{t.title[1]}
            </h1>
            <p className="hero-rise mt-7 max-w-[600px] text-[clamp(16px,1.35vw,20px)] leading-[1.6] text-white/85" style={{ '--d': '0.34s' }}>{t.text}</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-5 z-20 flex justify-center sm:bottom-7">
        <Link href={t.cta.href} className="hero-rise group inline-flex w-full max-w-[560px] items-center gap-3.5 rounded-[10px] border border-white/15 bg-[#161616]/95 p-3 pr-4 text-[15px] text-white/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] backdrop-blur transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#1e1e1e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:text-[17px]" style={{ '--d': '0.5s' }}>
          <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-[#ff4a00] text-[17px] font-bold text-white">R</span>
          <span className="min-w-0 flex-1 leading-snug">{t.cta.label}</span>
          <span aria-hidden className="grid h-7 w-7 shrink-0 place-items-center rounded-[6px] bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5"><ArrowUpRight className="h-3.5 w-3.5" /></span>
        </Link>
      </div>
    </section>
  );
}
