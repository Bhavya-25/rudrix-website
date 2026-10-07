import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { icons } from '@/components/capabilities/icons';
import { services } from '@/data/services';

export const metadata = {
  title: 'Software Development Services: Custom Software, Web, SaaS & Design | Rudrix',
  description: 'Custom software, web development, SaaS, UI/UX design, eCommerce, mobile apps, MVPs and ongoing support from one practical team. Explore Rudrix services.',
  alternates: { canonical: '/services' },
};

const steps = [
  ['Understand', 'the business and users'],
  ['Plan', 'scope and technical direction'],
  ['Build', 'with regular demos'],
  ['Test and refine', 'before launch'],
];

export default function ServicesPage() {
  return (
    <>
      <main>
        <Header />
        <section className="bg-[#f7f7f5] section-x pb-16 pt-[170px] md:pb-24 md:pt-[190px]">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-[15px] font-medium text-rudrix-strong">Services</p>
            <h1 className="mt-3 max-w-[900px] text-[clamp(34px,5vw,64px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-ink">Software development services for startups and growing businesses</h1>
            <p className="mt-6 max-w-[720px] text-[18px] leading-[1.6] text-slate2">Whether you need a product designed and built from scratch, an existing application improved, or a team that can support what you have already launched, we can help. We cover the full path: product thinking, design, development, testing and ongoing support.</p>
            <p className="mt-4 max-w-[720px] text-[18px] leading-[1.6] text-slate2">Most clients start with one service and add others as the product grows. Here is what each one covers and when it is the right fit.</p>
          </div>
        </section>

        <section className="bg-white section-x section-y">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[clamp(28px,3.4vw,44px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">The problem we solve</h2>
            <p className="mt-5 max-w-[760px] text-[18px] leading-[1.6] text-slate2">Businesses rarely struggle because they lack ideas. They struggle because the tools they have do not match how they work, their website does not help them sell, or the product they launched is slow to change. Good software removes friction. Bad software adds it.</p>

            <h2 className="mt-16 text-[clamp(28px,3.4vw,44px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">Our services</h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => {
                const Icon = icons[s.icon];
                return (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="group flex h-full flex-col rounded-[12px] border border-black/[0.08] bg-[#fafafa] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-[3px] hover:border-black/[0.2]">
                      <Icon className="h-6 w-6 text-ink" strokeWidth={1.6} aria-hidden />
                      <h3 className="mt-8 text-[19px] font-semibold leading-tight text-ink">{s.name}</h3>
                      <p className="mt-2 flex-1 text-[15px] leading-[1.55] text-slate2">{s.short}</p>
                      <span className="mt-5 text-[14px] font-semibold text-rudrix-strong group-hover:underline">Learn more →</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="bg-[#f7f7f5] section-x section-y">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-[clamp(26px,3vw,38px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">How we work on any service</h2>
              <ol className="mt-6 space-y-3 text-[17px] leading-[1.55] text-slate2">
                {steps.map(([a, b], i) => (
                  <li key={a}><span className="mr-3 text-rudrix-strong tabular-nums">{String(i + 1).padStart(2, '0')}</span><strong className="text-ink">{a}</strong> {b}</li>
                ))}
              </ol>
              <p className="mt-6 text-[17px] leading-[1.6] text-slate2">After launch, we can stay involved to keep improving the product.</p>
            </div>
            <div>
              <h2 className="text-[clamp(26px,3vw,38px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">Technology</h2>
              <p className="mt-6 text-[17px] leading-[1.6] text-slate2">We choose technology to fit the product. Our most-used tools are React, Next.js, JavaScript and Tailwind CSS on the front end; Node.js and REST or GraphQL APIs on the back end; MongoDB and other databases as needed; WordPress and Strapi for content; Shopify and WooCommerce for online stores.</p>
              <h2 className="mt-10 text-[clamp(26px,3vw,38px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">Who this is for</h2>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-[17px] leading-[1.55] text-slate2">
                <li>Founders turning an idea into a product</li>
                <li>Small and medium businesses replacing manual work or old systems</li>
                <li>SaaS and product teams that need more design or engineering capacity</li>
                <li>Online stores that want a smoother buying experience</li>
                <li>Companies with an existing product that needs fixing or growing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white section-x section-y">
          <div className="mx-auto max-w-[1200px] rounded-[12px] bg-near-black p-8 text-white lg:p-12">
            <h2 className="text-[clamp(26px,3vw,40px)] font-medium leading-[1.15] tracking-[-0.02em]">Why Rudrix</h2>
            <p className="mt-4 max-w-[760px] text-[17px] leading-[1.6] text-white/80">You get one team that covers design and engineering, explains things in plain language and shows real progress regularly. We would rather recommend a smaller, cheaper route than sell you something you do not need.</p>
            <Link href="/contact" className="mt-8 inline-flex min-h-[52px] items-center rounded-[8px] bg-rudrix-strong px-7 text-[16px] font-medium text-white">Tell us what you&apos;re building</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
