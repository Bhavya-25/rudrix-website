import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Light "Work With Us →" button: looping arrow ripple at rest; label rolls and arrow turns to ↗ on hover/focus.
export default function RollCta({ href, label, size = 'lg', className = '' }) {
  const lg = size === 'lg';
  return (
    <Link
      href={href}
      className={`cta-roll inline-flex items-center gap-4 rounded-[4px] bg-[#fafafa] text-[#111] shadow-[0_1px_2px_rgba(0,0,0,0.08)] ${lg ? 'min-h-[58px] px-6 text-[16px]' : 'min-h-[46px] px-4 text-[15px]'} font-medium ${className}`}
    >
      {/* two identical lines stacked; the track slides up by half its height */}
      <span className={`block overflow-hidden ${lg ? 'h-[24px]' : 'h-[22px]'}`}>
        <span className="cta-track block">
          <span className={`block ${lg ? 'h-[24px] leading-[24px]' : 'h-[22px] leading-[22px]'}`}>{label}</span>
          <span aria-hidden className={`block ${lg ? 'h-[24px] leading-[24px]' : 'h-[22px] leading-[22px]'}`}>{label}</span>
        </span>
      </span>
      <span className="cta-ripple relative flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-[#fafafa]">
        <ArrowRight className="cta-arrow h-[14px] w-[14px]" strokeWidth={2.2} aria-hidden />
      </span>
    </Link>
  );
}
