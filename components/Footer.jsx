import NewsletterFooter from './NewsletterFooter';
import FooterImageCollage from './FooterImageCollage';
import FooterTrustLogos from './FooterTrustLogos';
import FooterNavigation from './FooterNavigation';
import FooterSocials from './FooterSocials';
import Reveal from './Reveal';
import { footer } from '@/data/footer';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#151515] text-white">
      {/* barely-there accent glow behind the collage */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[800px] w-[800px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,74,0,0.06), transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-[1536px] section-x pt-16 md:pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-x-10 lg:gap-y-0">
          <div className="lg:row-start-1">
            <NewsletterFooter />
          </div>
          <div className="hidden md:block lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <FooterImageCollage />
          </div>
          <div className="lg:col-start-1 lg:row-start-2 lg:self-end lg:pb-6">
            <FooterTrustLogos />
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
          <Reveal>
            <a href="/" aria-label="Rudrix home" className="inline-block text-[40px] font-bold leading-none tracking-tight text-white">
              {site.name}<span className="text-rudrix">.</span>
            </a>
            <p className="mt-6 max-w-[340px] text-[16px] leading-[1.65] text-white/60">{footer.tagline}</p>
          </Reveal>
          <FooterNavigation />
        </div>

        <div className="mt-16 flex flex-col gap-6 pb-10 pt-2 text-[14px] text-white/60 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <span>{footer.copyright}</span>
          <span>{footer.credit}</span>
        </div>
        <div className="flex justify-center pb-10"><FooterSocials /></div>
      </div>
    </footer>
  );
}
