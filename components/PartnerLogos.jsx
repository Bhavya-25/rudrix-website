import { Hexagon, Triangle, Plus, Circle, X, Star, Square } from 'lucide-react';
import Marquee from './inquiry/Marquee';
import { hero } from '@/data/site';

const marks = [Square, Triangle, Plus, Circle, X, Star, Hexagon, Circle];

// Endless row of names under the hero (here: the technology we build with).
export default function PartnerLogos() {
  return (
    <Marquee seconds={36} direction="left" className="mt-7 w-full">
      {hero.partners.map((name, i) => {
        const Mark = marks[i % marks.length];
        return (
          <li key={name} className="flex shrink-0 list-none items-center gap-2 px-7 text-[19px] font-semibold tracking-tight text-[#6b6b66]">
            <Mark className="h-5 w-5" strokeWidth={1.8} aria-hidden />
            {name}
          </li>
        );
      })}
    </Marquee>
  );
}
