import Link from 'next/link';
import { serviceBySlug } from '@/data/services';
import { getServiceTemplate } from '@/data/serviceTemplate';
import CustomSoftwareHero from './service-hero/CustomSoftwareHero';
import ServiceStats from './service-hero/ServiceStats';
import CustomSoftwareWhy from './service-hero/CustomSoftwareWhy';
import IndustriesMarquee from './service-hero/IndustriesMarquee';
import CustomSoftwareCapabilities from './service-hero/CustomSoftwareCapabilities';
import TechGrid from './service-hero/TechGrid';
import SoftwareTour from './service-hero/SoftwareTour';
import ProblemsSection from './service-hero/ProblemsSection';
import CaseStudyShowcase from './service-hero/CaseStudyShowcase';
import BuildCTA from './service-hero/BuildCTA';
import ClientsSection from './about/ClientsSection';
import BuildSystem from './service-hero/BuildSystem';
import BuildJourney from './service-hero/BuildJourney';
import OtherServices from './service-hero/OtherServices';
import FAQSection from './FAQSection';
import ProjectInquirySection from './ProjectInquirySection';

// One shared service page. The URL slug picks the service (data/services.js); data/serviceTemplate.js maps it onto the
// sections below. Sections whose data a service does not have (tour, problems) are skipped instead of showing another service's copy.
export default function ServicePageView({ service }) {
  const t = getServiceTemplate(service);
  const related = service.related.map(serviceBySlug).filter(Boolean);
  return (
    <>
      <CustomSoftwareHero data={t.hero} />
      <ServiceStats />
      <CustomSoftwareWhy data={t.why} />
      <IndustriesMarquee data={t.industries} />
      <CustomSoftwareCapabilities data={t.capabilities} />
      <TechGrid data={t.tech} />
      {t.tour && <SoftwareTour data={t.tour} />}
      {t.problems && <ProblemsSection data={t.problems} />}
      <CaseStudyShowcase data={t.cases} />
      <BuildCTA data={t.cta} />
      <ClientsSection />
      <BuildSystem data={t.system} />
      <BuildJourney data={t.journey} />
      {t.faq && <FAQSection data={t.faq} />}
      <ProjectInquirySection />
      <section className="bg-white section-x pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] rounded-[12px] bg-near-black p-8 text-white lg:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[clamp(24px,2.8vw,36px)] font-medium leading-[1.15] tracking-[-0.02em]">{service.cta.heading}</p>
              <p className="mt-2 text-[16px] text-white/70">Tell us what you are working on. We will help you figure out the next practical step.</p>
            </div>
            <Link href="/contact" className="inline-flex min-h-[52px] w-fit shrink-0 items-center rounded-[8px] bg-rudrix-strong px-7 text-[16px] font-medium text-white">{service.cta.label}</Link>
          </div>
          <div className="mt-10 border-t border-white/15 pt-6">
            <p className="text-[13px] uppercase tracking-[0.08em] text-white/60">Related services</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {related.map((r) => (
                <li key={r.slug}><Link href={`/services/${r.slug}`} className="inline-flex min-h-[44px] items-center rounded-full bg-white/10 px-5 text-[15px] hover:bg-white/20">{r.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <OtherServices service={service} />
    </>
  );
}
