import { footer } from '@/data/footer';

// Icon buttons (each SVG in /public/social already includes its dark rounded tile). Links are '#' until real profile URLs are added.
export default function FooterSocials() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3" aria-label="Social links">
      {footer.socials.map((s) => {
        const real = s.href && s.href !== '#';
        return (
          <li key={s.id}>
            <a
              href={s.href}
              {...(real ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={`Rudrix on ${s.label}`}
              className="block h-[52px] w-[52px] overflow-hidden rounded-[14px] transition-transform duration-[250ms] hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/social/${s.id}.svg`} alt="" width={52} height={52} draggable={false} className="h-full w-full" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
