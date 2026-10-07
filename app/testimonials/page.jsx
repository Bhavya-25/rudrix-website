import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialsHero from '@/components/testimonials/TestimonialsHero';
import UpworkReviews from '@/components/testimonials/UpworkReviews';
import ClientStory from '@/components/testimonials/ClientStory';
import FAQSection from '@/components/FAQSection';
import ProjectInquirySection from '@/components/ProjectInquirySection';

export const metadata = {
  title: 'Testimonials | Rudrix',
  description: 'Real feedback from founders, product teams and businesses building better digital experiences with Rudrix.',
  alternates: { canonical: '/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <>
      <main>
        <Header />
        <TestimonialsHero />
        <UpworkReviews />
        <ClientStory />
        <FAQSection />
        <ProjectInquirySection />
      </main>
      <Footer />
    </>
  );
}
