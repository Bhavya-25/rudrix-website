import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactPageContent from '@/components/contact/ContactPageContent';

export const metadata = {
  title: "Contact Rudrix | Let's Build Your Digital Product",
  description: 'Have a software, web, SaaS, eCommerce, or product idea? Talk to Rudrix about building, improving, or scaling your digital product.',
  alternates: { canonical: '/contact' },
};

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
