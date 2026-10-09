'use client';
import Button from './Button';
import { hero } from '@/data/site';

export default function HeroCTA() {
  return (
    <div
      className="hero-rise mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4"
      style={{ '--d': '0.6s' }}
    >
      <Button variant="secondary" href={hero.secondary.href} className="whitespace-nowrap px-5 text-[15px] sm:px-6">
        {hero.secondary.label}
      </Button>
      <Button href={hero.primary.href} className="whitespace-nowrap px-5 text-[15px] sm:px-6">
        {hero.primary.label}
      </Button>
    </div>
  );
}
