import PartnerLogos from './PartnerLogos';
import { hero } from '@/data/site';

export default function GrowthPartners() {
  return (
    <div className="relative z-10 flex flex-col items-center pb-10 pt-8">
      <p className="hero-rise text-[17px] font-medium text-ink" style={{ '--d': '1s' }}>
        {hero.partnersLabel}
      </p>
      <PartnerLogos />
    </div>
  );
}
