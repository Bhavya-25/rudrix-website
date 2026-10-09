import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CountUp from './CountUp';
import { about } from '@/data/about';
import Cta from '@/components/Cta';

// About Us banner: dotted paper background, breadcrumb, big headline, intro + CTAs, dotted world map with pulsing pins.
export default function AboutBanner() {
  return (
    <section aria-labelledby="about-title" className="about-banner relative overflow-clip border-b border-[rgba(21,24,28,0.1)] bg-[#f7f7f5] pb-[clamp(48px,min(6vw,9.17vh),88px)] pt-[calc(118px+clamp(40px,min(5vw,7.5vh),72px))]">
      <div className="relative z-[1] mx-auto max-w-[1280px] px-[22px]">
        <nav aria-label="Breadcrumb" className="about-rise mb-[clamp(14px,1.6vw,20px)] text-[13px] font-semibold leading-[1.4] text-[#15181c]" style={{ '--d': '0s' }}>
          <ol className="flex flex-wrap items-center gap-y-0.5">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex min-h-[24px] items-center opacity-75 underline-offset-[3px] hover:underline hover:opacity-100">Home</Link>
            </li>
            <li aria-current="page" className="inline-flex items-center before:mx-[10px] before:font-normal before:opacity-45 before:content-['/']">About Us</li>
          </ol>
        </nav>

        <div className="grid gap-[clamp(22px,3vw,36px)] min-[1080px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] min-[1080px]:items-end min-[1080px]:gap-x-[clamp(48px,6vw,104px)]">
          <div>
            <p className="about-rise mb-[18px] inline-flex items-center gap-[10px] text-[16px] font-semibold text-[#5b6068] before:h-[2px] before:w-[28px] before:bg-rudrix-strong before:content-['']" style={{ '--d': '0.1s' }}>
              {about.kicker}
            </p>
            <h1 id="about-title" className="about-title max-w-[18ch] text-balance text-[clamp(2.25rem,min(4.4vw,6.52vh),3.75rem)] font-extrabold leading-[0.97] tracking-[-0.04em] text-[#15181c]">
              {about.title}
            </h1>
          </div>

          <div>
            <p className="about-rise max-w-[46ch] text-[1.125rem] leading-[1.6] text-[#5b6068]" style={{ '--d': '0.24s' }}>{about.lede}</p>
            <div className="about-rise mt-6 flex flex-wrap items-center gap-x-[26px] gap-y-[14px]" style={{ '--d': '0.3s' }}>
              <Cta href={about.primary.href}>{about.primary.label}</Cta>
              <Link
                href={about.secondary.href}
                className="group inline-flex min-h-[44px] items-center gap-2 border-b border-[rgba(21,24,28,0.32)] text-[16px] font-bold text-[#15181c] transition-colors hover:border-[#15181c] hover:text-rudrix-strong"
              >
                {about.secondary.label}
                <ArrowRight className="h-4 w-4 arw" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <figure className="about-rise mt-[clamp(36px,4.4vw,60px)] grid gap-[18px]" style={{ '--d': '0.45s' }}>
          <div className="relative mx-auto w-full max-w-[1120px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/world-dots.svg" alt="" width={1120} height={434} draggable={false} className="block h-auto w-full opacity-75" />
            {about.offices.map((o) => (
              <span key={o.name} aria-hidden className="about-pin" style={{ '--x': `${o.x}%`, '--y': `${o.y}%` }} />
            ))}
          </div>
        </figure>

        <dl className="about-rise mt-8 grid grid-cols-2 border-t border-[#d3d1ca] min-[760px]:mt-12 min-[760px]:grid-cols-4" style={{ '--d': '0.6s' }}>
          {about.stats.map((st, i) => (
            <div key={st.label} className={`flex flex-col-reverse gap-[6px] pt-[18px] min-[760px]:pt-7 ${i > 0 ? 'min-[760px]:border-l min-[760px]:border-[#d3d1ca] min-[760px]:pl-7' : ''}`}>
              <dt className="text-[16px] leading-[1.4] text-[#5b6068]">{st.label}</dt>
              <dd className="text-[clamp(2.25rem,min(4.4vw,6.52vh),3.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#15181c]"><CountUp value={st.value} /></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
