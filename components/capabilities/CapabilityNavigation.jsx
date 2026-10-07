'use client';
import { capabilities } from '@/data/capabilities';

export default function CapabilityNavigation({ active, onSelect }) {
  return (
    <nav aria-label="Capabilities">
      <ul className="flex flex-col gap-[34px]">
        {capabilities.map((c, i) => {
          const on = i === active;
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-current={on ? 'true' : undefined}
                className="group relative flex min-h-[44px] w-full items-center gap-4 py-3 pl-8 text-left"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[2px] origin-center rounded-full transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ background: on ? c.color : 'rgba(0,0,0,0.08)', transform: on ? 'scaleY(1)' : 'scaleY(0.85)' }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.iconSrc}
                  alt=""
                  width={24}
                  height={24}
                  draggable={false}
                  className="h-[24px] w-[24px] shrink-0 transition-opacity duration-[450ms]"
                  style={{ opacity: on ? 1 : 0.85 }}
                />
                <span
                  className={`text-[18px] tracking-[-0.01em] transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    on ? 'translate-x-[3px] text-ink opacity-100' : 'text-slate2 opacity-60 group-hover:opacity-90'
                  }`}
                >
                  {c.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
