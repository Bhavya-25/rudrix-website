// Demo marketing posters for the footer collage. Sizes use container-query
// units (cqw) so the type scales with the card at every breakpoint.
const cq = (n) => `${n}cqw`;

function Frame({ children, className = '', style }) {
  return (
    <div className="w-full" style={{ containerType: 'inline-size' }}>
      <article
        className={`relative aspect-[1092/1481] w-full overflow-hidden rounded-[12px] shadow-[0_20px_40px_-22px_rgba(0,0,0,0.8)] ${className}`}
        style={{ padding: cq(8), ...style }}
      >
        {children}
      </article>
    </div>
  );
}

function Top({ tag, tone = 'light' }) {
  const dark = tone === 'dark';
  return (
    <div className="relative z-10 flex items-center justify-between" style={{ fontSize: cq(3.6) }}>
      <span
        className={`rounded-full font-semibold uppercase tracking-[0.12em] ${
          dark ? 'bg-ink/90 text-white' : 'bg-white/90 text-ink'
        }`}
        style={{ padding: `${cq(1.3)} ${cq(3.2)}` }}
      >
        {tag}
      </span>
      <span className={`font-bold ${dark ? 'text-ink' : 'text-white'}`} style={{ fontSize: cq(4.6) }}>
        Rudrix.
      </span>
    </div>
  );
}

function Title({ children, color = 'text-white', size = 11.5 }) {
  return (
    <p
      className={`relative z-10 font-semibold leading-[1.02] tracking-[-0.04em] ${color}`}
      style={{ fontSize: cq(size), marginTop: cq(7) }}
    >
      {children}
    </p>
  );
}

function PhotoPoster({ src, tag, title, cta, tint = 'rgba(0,0,0,0.78)' }) {
  return (
    <Frame className="bg-near-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${tint} 5%, rgba(0,0,0,0.15) 70%)` }} />
      <Top tag={tag} />
      <div className="absolute inset-x-0 bottom-0" style={{ padding: cq(8) }}>
        <Title size={10.5}>{title}</Title>
        <span
          className="relative z-10 inline-block rounded-full bg-white font-semibold text-ink"
          style={{ marginTop: cq(5), padding: `${cq(2)} ${cq(5)}`, fontSize: cq(3.6) }}
        >
          {cta}
        </span>
      </div>
    </Frame>
  );
}

const codeLines = [
  ['const', ' site', ' = ', 'build', '({'],
  ['  design', ': ', "'custom'", ','],
  ['  stack', ': ', "'Next.js'", ','],
  ['  speed', ': ', '100', ','],
  ['});', '', '', ''],
  ['site', '.', 'launch', '();'],
];
const codeColors = ['text-rudrix', 'text-white/80', 'text-[#9ad1a4]', 'text-white/60'];

export default function PosterCard({ kind }) {
  switch (kind) {
    case 'web':
      return (
        <Frame className="bg-rudrix">
          <Top tag="Web Design" tone="dark" />
          <Title>Websites that convert.</Title>
          <div
            className="absolute rounded-t-[10px] bg-white shadow-xl"
            style={{ left: cq(8), right: cq(8), bottom: 0, height: '38%' }}
          >
            <div className="flex items-center gap-[1.4cqw] bg-ink/90" style={{ padding: cq(2.2) }}>
              {[0, 1, 2].map((i) => (
                <span key={i} className="rounded-full bg-white/50" style={{ width: cq(1.8), height: cq(1.8) }} />
              ))}
            </div>
            <div style={{ padding: cq(4) }}>
              <div className="rounded bg-ink" style={{ height: cq(4), width: '55%' }} />
              <div className="rounded bg-ink/20" style={{ height: cq(2.4), width: '85%', marginTop: cq(3) }} />
              <div className="rounded bg-ink/20" style={{ height: cq(2.4), width: '70%', marginTop: cq(2) }} />
              <div className="rounded-full bg-rudrix" style={{ height: cq(5), width: '28%', marginTop: cq(4) }} />
            </div>
          </div>
        </Frame>
      );
    case 'shopify':
      return (
        <PhotoPoster
          src="/images/collage-3.webp"
          tag="E-commerce"
          title="Stores built to sell."
          cta="Shop now →"
        />
      );
    case 'code':
      return (
        <Frame className="bg-[#0b0b0b] ring-1 ring-white/10">
          <Top tag="Development" />
          <Title>Custom web apps.</Title>
          <pre
            className="relative z-10 font-mono leading-[1.7]"
            style={{ marginTop: cq(7), fontSize: cq(3.6) }}
            aria-hidden
          >
            {codeLines.map((line, i) => (
              <div key={i}>
                {line.map((t, j) => (
                  <span key={j} className={codeColors[j % codeColors.length]}>{t}</span>
                ))}
              </div>
            ))}
          </pre>
        </Frame>
      );
    case 'uiux':
      return (
        <Frame className="bg-[#efece1]">
          <Top tag="UI / UX" tone="dark" />
          <Title color="text-ink">Design users love.</Title>
          <div className="absolute flex items-end justify-between" style={{ left: cq(8), right: cq(8), bottom: cq(8) }}>
            <div className="flex">
              {['#FF4A00', '#111111', '#8A8A8A'].map((c, i) => (
                <span
                  key={c}
                  className="rounded-full border-2 border-[#efece1]"
                  style={{ background: c, width: cq(13), height: cq(13), marginLeft: i ? cq(-3.5) : 0 }}
                />
              ))}
            </div>
            <div className="rounded-[12px] border-2 border-ink bg-white" style={{ width: cq(22), height: cq(38), padding: cq(2.4) }}>
              <div className="rounded bg-ink/80" style={{ height: cq(2.4), width: '60%' }} />
              <div className="rounded bg-rudrix" style={{ height: cq(10), marginTop: cq(3) }} />
              <div className="rounded bg-ink/15" style={{ height: cq(2), marginTop: cq(3) }} />
              <div className="rounded bg-ink/15" style={{ height: cq(2), marginTop: cq(2), width: '70%' }} />
            </div>
          </div>
        </Frame>
      );
    case 'seo':
      return (
        <Frame className="bg-[#1b1b1b]">
          <Top tag="SEO" />
          <Title>Rank higher. Grow faster.</Title>
          <div className="absolute flex items-end" style={{ left: cq(8), right: cq(8), bottom: cq(8), height: '30%', gap: cq(3) }}>
            {[28, 42, 38, 60, 74, 100].map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-t-[6px] ${i === 5 ? 'bg-rudrix' : 'bg-white/20'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </Frame>
      );
    case 'launch':
      return (
        <PhotoPoster
          src="/images/hero-2.webp"
          tag="Delivery"
          title="Launch in weeks, not months."
          cta="See how we work →"
        />
      );
    case 'brand':
      return (
        <Frame className="bg-white">
          <Top tag="Branding" tone="dark" />
          <Title color="text-ink">Brands that stand out.</Title>
          <span className="absolute rounded-full bg-rudrix" style={{ width: cq(52), height: cq(52), right: cq(-8), bottom: cq(-10) }} />
          <span className="absolute rounded-full bg-ink mix-blend-multiply" style={{ width: cq(40), height: cq(40), right: cq(30), bottom: cq(2) }} />
        </Frame>
      );
    case 'cta':
      return (
        <PhotoPoster
          src="/images/hero-4.webp"
          tag="Let's talk"
          title="Got a project in mind?"
          cta="Start a Project →"
          tint="rgba(255,74,0,0.75)"
        />
      );
    default:
      return null;
  }
}
