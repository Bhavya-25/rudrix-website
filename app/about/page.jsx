import { pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutBanner from '@/components/about/AboutBanner';
import StoryIntro from '@/components/about/StoryIntro';
import MilestonesSection from '@/components/about/MilestonesSection';
import ExpertiseSection from '@/components/about/ExpertiseSection';
import StandardsSection from '@/components/about/StandardsSection';
import ClientsSection from '@/components/about/ClientsSection';
import FAQSection from '@/components/FAQSection';
import ProjectInquirySection from '@/components/ProjectInquirySection';

export const metadata = pageMeta({
  title: 'About Rudrix | A Practical Software Development Team',
  description: 'Meet Rudrix, a software development agency that designs and builds digital products around real business problems. See how we work and what we believe.',
  alternates: { canonical: '/about' },
});

export default function AboutPage() {
  return (
    <>
      <main>
        <Header />
        <AboutBanner />
        <StoryIntro />
        <MilestonesSection />
        <ExpertiseSection />
        <StandardsSection />
        <ClientsSection />
        <FAQSection />
        <ProjectInquirySection />
      </main>
      <Footer />
    </>
  );
}
