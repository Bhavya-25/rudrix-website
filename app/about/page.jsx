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
  title: 'About Rudrix | Trusted Software & UI/UX Design Agency',
  description: 'Learn about Rudrix, our values, and how our expert team helps businesses grow with purpose-driven software development and modern digital solutions.',
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
