import { pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { faq } from '@/data/faq';
import Cta from '@/components/Cta';

export const metadata = pageMeta({
  title: 'Software Development FAQ: Costs, Timelines, Process | Rudrix',
  description: 'Honest answers to common questions about software development: cost, timelines, MVPs, working with an existing team, NDAs and how to get started.',
  alternates: { canonical: '/faq' },
});

export default function FaqPage() {
  const all = Object.values(faq.categories).flat();
  const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: all.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
  return (
    <>
      <main>
        <Header />
        <section className="bg-[#f7f7f5] section-x pb-12 pt-[170px] md:pb-16 md:pt-[190px]">
          <div className="mx-auto max-w-[1000px]">
            <p className="text-[15px] font-medium text-rudrix-strong">FAQ</p>
            <h1 className="mt-3 text-[clamp(34px,5vw,60px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-ink">Software development questions, answered honestly</h1>
            <p className="mt-6 max-w-[680px] text-[18px] leading-[1.6] text-slate2">{faq.intro}</p>
          </div>
        </section>
        <section className="bg-white section-x section-y">
          <div className="mx-auto max-w-[1000px] space-y-16">
            {Object.entries(faq.categories).map(([cat, items]) => (
              <div key={cat}>
                <h2 className="text-[clamp(24px,2.6vw,34px)] font-medium tracking-[-0.03em] text-ink">{cat}</h2>
                <dl className="mt-6 divide-y divide-black/10 border-y border-black/10">
                  {items.map((f) => (
                    <div key={f.question} className="py-6">
                      <dt className="text-[19px] font-semibold leading-snug text-ink">{f.question}</dt>
                      <dd className="mt-2 text-[16px] leading-[1.7] text-slate2">{f.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
            <div className="rounded-[12px] bg-near-black p-8 text-white">
              <p className="text-[clamp(22px,2.6vw,32px)] font-medium leading-[1.2]">Still have a question?</p>
              <p className="mt-2 text-white/70">Tell us what you&apos;re working on and we&apos;ll point you to the next step.</p>
              <Cta href="/contact" className="mt-6">Start a Conversation</Cta>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={ld} />
    </>
  );
}
