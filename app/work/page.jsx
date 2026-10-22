import { pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/work/PortfolioHero';
import WorkStats from '@/components/work/WorkStats';
import PortfolioCTA from '@/components/work/PortfolioCTA';
import Recognition from '@/components/work/Recognition';
import SelectedProjects from '@/components/work/SelectedProjects';
import WorkingProcess from '@/components/work/WorkingProcess';
import ClientsSection from '@/components/about/ClientsSection';
import FAQSection from '@/components/FAQSection';
import ProjectInquirySection from '@/components/ProjectInquirySection';

export const metadata = pageMeta({
  title: 'Our Work & Portfolio | Digital Products by Rudrix',
  description: 'Explore our recent projects. See how we have helped clients with SaaS platforms, custom CRM systems, high-performance web apps, and eCommerce stores.',
  alternates: { canonical: '/work' },
});

export default function WorkPage() {
  return (
    <>
      <main>
        <Header />
        <PortfolioHero />
        <WorkStats />
        <SelectedProjects />
        <PortfolioCTA />
        <Recognition />
        <WorkingProcess />
        <ClientsSection />
        <FAQSection />
        <ProjectInquirySection />
      </main>
      <Footer />
    </>
  );
}
