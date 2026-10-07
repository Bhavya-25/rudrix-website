import { pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurProcessHero from '@/components/process-page/OurProcessHero';
import ProcessStats from '@/components/process-page/ProcessStats';
import TrustArchitecture from '@/components/process-page/TrustArchitecture';
import MilestoneMap from '@/components/process-page/MilestoneMap';
import ClientVisibility from '@/components/process-page/ClientVisibility';
import EngagementModels from '@/components/process-page/EngagementModels';
import ProtectedDelivery from '@/components/process-page/ProtectedDelivery';
import ConversationCTA from '@/components/process-page/ConversationCTA';
import FAQSection from '@/components/FAQSection';
import ProjectInquirySection from '@/components/ProjectInquirySection';

export const metadata = pageMeta({
  title: 'Our Process | Rudrix',
  description: 'From the first conversation to final deployment, every Rudrix project runs on an open, reliable process you can track step by step.',
  alternates: { canonical: '/our-process' },
});

export default function OurProcessPage() {
  return (
    <>
      <main>
        <Header />
        <OurProcessHero />
        <ProcessStats />
        <TrustArchitecture />
        <MilestoneMap />
        <ClientVisibility />
        <EngagementModels />
        <ProtectedDelivery />
        <ConversationCTA />
        <FAQSection />
        <ProjectInquirySection />
      </main>
      <Footer />
    </>
  );
}
