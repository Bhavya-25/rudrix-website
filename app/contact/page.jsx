import { pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactPageContent from '@/components/contact/ContactPageContent';

export const metadata = pageMeta({
  title: "Contact Rudrix | Let's Talk About Your Project",
  description: 'Ready to build or improve your digital product? Contact the Rudrix team today for expert custom software, web development, and design solutions.',
  alternates: { canonical: '/contact' },
});

export default function ContactPage() {
  return (
    <>
      <main>
        <Header />
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
