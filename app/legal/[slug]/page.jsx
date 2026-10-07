import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/data/site';

const PAGES = {
  terms: { title: 'Terms & Conditions', intro: 'The terms that apply when you work with or use the website of Rudrix.' },
  privacy: { title: 'Privacy Policy', intro: 'How Rudrix collects, uses and protects the information you share with us.' },
  cookies: { title: 'Cookie Policy', intro: 'How this website uses cookies and similar technologies.' },
  accessibility: { title: 'Accessibility', intro: 'Our commitment to making this website usable by everyone.' },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = PAGES[slug];
  return { title: page ? `${page.title} — Rudrix` : 'Not found' };
}

export default async function LegalPage({ params }) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();

  return (
    <main className="min-h-screen bg-white section-x section-y">
      <div className="mx-auto max-w-[760px]">
        <Link href="/" className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-rudrix-strong underline underline-offset-2">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-[clamp(34px,5vw,56px)] font-medium leading-[1.05] tracking-[-0.04em] text-ink">{page.title}</h1>
        <p className="mt-5 text-[18px] leading-[1.6] text-[#444]">{page.intro}</p>
        <p className="mt-8 rounded-[12px] border border-black/10 bg-[#faf7f2] p-5 text-[15px] leading-[1.6] text-[#444]">
          The full text of this page is being finalised. Until it is published, questions about this topic can be sent to{' '}
          <a className="font-medium text-rudrix-strong underline underline-offset-2" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </main>
  );
}
