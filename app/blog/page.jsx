import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';

export const metadata = {
  title: 'Blog — Rudrix',
  description: 'Practical writing on product, engineering and e-commerce from the Rudrix team.',
};

const fmt = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default function BlogPage() {
  return (
    <>
      <main>
        <Header />
        <section className="bg-[#f7f7f5] section-x pb-16 pt-[170px] md:pb-24 md:pt-[190px]">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-[15px] font-medium text-rudrix-strong">Blog</p>
            <h1 className="mt-3 text-[clamp(38px,5.4vw,72px)] font-medium leading-[1.04] tracking-[-0.04em] text-ink">Tips, trends &amp; stories</h1>
            <p className="mt-5 max-w-[640px] text-[18px] leading-[1.6] text-slate2">Practical writing on product, engineering and e-commerce from the Rudrix team.</p>
          </div>
        </section>
        <section className="bg-white section-x section-y">
          <ul className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden rounded-[12px] bg-[#eee]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mt-5 text-[13px] text-[#6b6b6b]">{p.category} · {fmt(p.date)} · {p.read}</p>
                  <h2 className="mt-2 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink group-hover:text-rudrix-strong">{p.title}</h2>
                  <p className="mt-2 text-[16px] leading-[1.55] text-slate2">{p.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
