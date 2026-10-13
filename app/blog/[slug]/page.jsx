import { pageMeta } from '@/lib/seo';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import { serviceBySlug } from '@/data/services';
import JsonLd from '@/components/JsonLd';
import { breadcrumb } from '@/lib/schema';
import { abs } from '@/lib/siteUrl';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return { title: 'Not found', robots: { index: false } };
  return pageMeta({ title: `${p.title} — Rudrix`, description: p.excerpt, alternates: { canonical: `/blog/${slug}` }, ogType: 'article' });
}

const fmt = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((x) => x.slug === slug);
  if (!post) notFound();
  const more = blogPosts.filter((x) => x.slug !== slug).slice(0, 4);
  const service = post.service ? serviceBySlug(post.service) : null;

  const ld = [
    { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.excerpt, datePublished: post.date, image: abs(post.image), mainEntityOfPage: abs(`/blog/${slug}`), author: { '@type': 'Organization', name: 'Rudrix' }, publisher: { '@type': 'Organization', name: 'Rudrix', url: abs('/') } },
    breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${slug}` }]),
    ...(post.faq ? [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: post.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }] : []),
  ];
  return (
    <>
      <JsonLd data={ld} />
      <main>
        <Header />
        <article className="bg-white section-x pb-16 pt-[170px] md:pb-24 md:pt-[190px]">
          <div className="mx-auto max-w-[760px]">
            <Link href="/blog" className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-rudrix-strong underline underline-offset-2">← All articles</Link>
            <p className="mt-6 text-[14px] text-[#6b6b6b]">{post.category} · {fmt(post.date)} · {post.read}</p>
            <h1 className="mt-3 text-[clamp(32px,4.6vw,56px)] font-medium leading-[1.08] tracking-[-0.035em] text-ink">{post.title}</h1>
            <div className="mt-10 aspect-[16/9] overflow-hidden rounded-[12px] bg-[#eee]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt="" width={1200} height={675} className="h-full w-full object-cover" />
            </div>
            <div className="mt-10 space-y-6 text-[18px] leading-[1.75] text-[#333]">
              {post.body.map((para, i) => (typeof para === 'string' ? <p key={i}>{para}</p> : <h2 key={i} className="pt-4 text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">{para.h}</h2>))}
              {post.faq && (
                <>
                  <h2 className="pt-4 text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">Frequently asked questions</h2>
                  {post.faq.map((f) => (
                    <div key={f.q}>
                      <h3 className="text-[19px] font-semibold text-ink">{f.q}</h3>
                      <p className="mt-2">{f.a}</p>
                    </div>
                  ))}
                </>
              )}
              {service && (
                <p className="rounded-[12px] bg-[#f7f7f5] p-6 text-[17px]">Related service: <Link href={`/services/${service.slug}`} className="font-semibold text-rudrix-strong underline underline-offset-2">{service.name}</Link>. {service.short}</p>
              )}
            </div>
          </div>
        </article>
        <section className="bg-[#f7f7f5] section-x section-y">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[clamp(26px,3vw,38px)] font-medium tracking-[-0.03em] text-ink">More from the blog</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="block rounded-[12px] bg-white p-6 transition-shadow hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.15)]">
                    <p className="text-[13px] text-[#6b6b6b]">{p.category} · {p.read}</p>
                    <h3 className="mt-2 text-[20px] font-semibold leading-[1.25] text-ink">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.55] text-slate2">{p.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
