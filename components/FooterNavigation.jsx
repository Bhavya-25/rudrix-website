import Link from 'next/link';
import { footer } from '@/data/footer';
import { site } from '@/data/site';
import Reveal from './Reveal';

const linkCls = 'inline-flex min-h-[44px] items-center text-[16px] text-white/90 transition-colors duration-200 hover:text-rudrix focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:min-h-[32px]';

// Four link columns (Solutions / Company / Resources / Legal); Legal also carries the "Get in touch" email.
export default function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-x-10">
      {footer.columns.map((col, i) => (
        <Reveal key={col.title} delay={i * 0.06}>
          <nav aria-label={col.title}>
            <h3 className="text-[18px] font-normal text-white/50">{col.title}</h3>
            <ul className="mt-4 flex flex-col gap-0.5 lg:mt-5 lg:gap-2.5">
              {col.links.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          {col.title === 'Legal' && (
            <div className="mt-10">
              <h3 className="text-[18px] font-normal text-white/50">Get in touch</h3>
              <a href={`mailto:${site.email}`} className={`${linkCls} mt-3 break-all`}>{site.email}</a>
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
