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
  title: 'Our Work | Rudrix Portfolio',
  description: 'Digital experiences crafted to solve problems, engage people, and move businesses forward. A look at the products, websites and apps Rudrix designs and builds.',
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
