import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageView from '@/components/ServicePageView';
import JsonLd from '@/components/JsonLd';
import { services, serviceBySlug } from '@/data/services';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return { title: 'Not found' };
  return { title: s.seoTitle, description: s.description, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.description, provider: { '@type': 'Organization', name: 'Rudrix' } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
  return (
    <>
      <main>
        <Header />
        <ServicePageView service={service} />
      </main>
      <Footer />
      <JsonLd data={ld} />
    </>
  );
}
