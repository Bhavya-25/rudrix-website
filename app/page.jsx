import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import WorkSection from '@/components/WorkSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurProcess from '@/components/OurProcess';
import OurValues from '@/components/OurValues';
import ClientResults from '@/components/ClientResults';
import FAQSection from '@/components/FAQSection';
import ProjectInquirySection from '@/components/ProjectInquirySection';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { faq } from '@/data/faq';
import InquiryPopupLoader from '@/components/inquiry/InquiryPopupLoader';

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <CapabilitiesSection />
        <WhyChooseUs />
        <WorkSection />
        <OurProcess />
        <OurValues />
        <ClientResults />
        <FAQSection />
        <ProjectInquirySection />
      </main>
      <Footer />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: Object.values(faq.categories).flat().map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }} />
      <InquiryPopupLoader />
    </>
  );
}
