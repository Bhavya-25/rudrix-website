'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PAGE = 6;
const fmt = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

function Tag({ children }) {
  return <span className="rounded-[2px] bg-[#111] px-2.5 py-1 text-[13px] leading-none text-white">{children}</span>;
}

function Card({ p }) {
  return (
    <li>
      <Link href={`/blog/${p.slug}`} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4a00]">
        <div className="aspect-[3/2] overflow-hidden rounded-[4px] bg-[#eee]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt="" width={1200} height={800} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none" />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="text-[15px] text-[#777]">{fmt(p.date)}</span>
          <Tag>{p.category}</Tag>
        </div>
        <h2 className="mt-4 line-clamp-2 text-[clamp(21px,1.9vw,27px)] font-normal leading-[1.3] tracking-[-0.01em] text-[#1d1d1d] transition-colors group-hover:text-[#d63c00]">{p.title}</h2>
      </Link>
    </li>
  );
}

export default function BlogIndex({ posts }) {
  const sorted = useMemo(() => [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)), [posts]);
  const [latest, ...rest] = sorted;
  const cats = useMemo(() => ['All', ...new Set(sorted.map((p) => p.category))], [sorted]);
  const [cat, setCat] = useState('All');
  const [shown, setShown] = useState(PAGE);
  const list = rest.filter((p) => cat === 'All' || p.category === cat);
  const visible = list.slice(0, shown);

  return (
    <>
      <section className="bg-[#f7f7f7] section-x pb-14 pt-[150px] md:pb-20 md:pt-[180px]">
        <div className="mx-auto max-w-[1245px]">
          <h1 className="text-[clamp(44px,6vw,80px)] font-normal leading-[1.05] tracking-[-0.04em] text-[#1d1d1d]">Blog &amp; News</h1>
          <p className="mt-5 max-w-[430px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-[#8a8a8a]">Practical advice and lessons on product, engineering and e-commerce from the Rudrix team.</p>
          <div aria-hidden className="mt-10 h-px w-full bg-black/[0.08] md:mt-14" />

          {latest && (
            <article className="group mt-10 grid items-stretch gap-8 md:mt-14 lg:grid-cols-[1.28fr_1fr] lg:gap-14">
              <Link href={`/blog/${latest.slug}`} className="relative block overflow-hidden rounded-[4px] bg-[#111] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4a00]" aria-label={`Read: ${latest.title}`}>
                <span className="absolute left-0 top-0 z-10 bg-[#5b2c1b] px-5 py-3.5 text-[16px] text-white">Latest Blog</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={latest.image} alt="" width={1400} height={900} className="aspect-[3/2] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none lg:aspect-auto lg:min-h-[420px]" />
              </Link>
              <div className="flex flex-col justify-end pb-2 lg:pb-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[16px] text-[#777]">{fmt(latest.date)}</span>
                  <Tag>{latest.category}</Tag>
                </div>
                <h2 className="mt-5 text-[clamp(26px,2.9vw,40px)] font-normal leading-[1.2] tracking-[-0.02em] text-[#1d1d1d]">{latest.title}</h2>
                <Link href={`/blog/${latest.slug}`} className="group/b mt-8 inline-flex h-[60px] w-fit items-center gap-3 rounded-[2px] bg-[#ff4a00] px-8 text-[17px] text-white transition-colors hover:bg-[#e04100] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#171717]">
                  Read Blog<ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover/b:translate-x-1" aria-hidden />
                </Link>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="bg-[#fafafa] section-x pb-[clamp(56px,7vw,100px)] pt-10">
        <div className="mx-auto max-w-[1245px]">
          <h2 className="text-[clamp(24px,2.2vw,30px)] font-normal text-[#1d1d1d]">Category Filter:</h2>
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4" role="group" aria-label="Filter posts by category">
            {cats.map((c) => (
              <button key={c} type="button" onClick={() => { setCat(c); setShown(PAGE); }} aria-pressed={cat === c}
                className={`min-h-[56px] rounded-[2px] border px-[clamp(16px,2vw,28px)] text-[clamp(15px,1.3vw,19px)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4a00] ${cat === c ? 'border-[#ff4a00] bg-[#ff4a00] text-white' : 'border-black/[0.06] bg-[#f4f4f4] text-[#1d1d1d] hover:bg-[#ececec]'}`}>
                {c}
              </button>
            ))}
          </div>

          <p className="sr-only" role="status" aria-live="polite">{list.length} {list.length === 1 ? 'post' : 'posts'} shown</p>
          <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-9">
            {visible.map((p) => <Card key={p.slug} p={p} />)}
          </ul>
          {list.length === 0 && <p className="mt-12 text-[18px] text-[#555]">No posts in this category yet.</p>}

          {list.length > shown && (
            <div className="mt-14 flex justify-center">
              <button type="button" onClick={() => setShown((n) => n + PAGE)} className="min-h-[60px] rounded-[2px] bg-[#f0f0f0] px-12 text-[18px] text-[#1d1d1d] transition-colors hover:bg-[#e6e6e6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4a00]">Load More</button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#fafafa] section-x pb-[clamp(72px,9vw,130px)]">
        <div className="relative mx-auto max-w-[1245px] overflow-hidden rounded-[4px] bg-[#111] text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/why-us-design.webp" alt="" width={1600} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.35))]" />
          <div className="relative px-[clamp(24px,4.2vw,58px)] py-[clamp(48px,6vw,80px)]">
            <h2 className="max-w-[640px] text-[clamp(32px,4vw,56px)] font-normal leading-[1.2] tracking-[-0.02em]">Let’s Create Something That Matters</h2>
            <p className="mt-6 max-w-[660px] text-[clamp(16px,1.3vw,19px)] leading-[1.65] text-white/90">Have a project in mind or looking for the right digital solution? Let’s talk about how we can turn your ideas into meaningful digital experiences.</p>
            <Link href="/contact" className="group/t mt-[clamp(40px,6vw,90px)] inline-flex h-[56px] items-center gap-3 rounded-[2px] bg-white px-6 text-[18px] text-[#1d1d1d] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white">
              Talk To Us<ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover/t:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Link href="/contact" className="group/p fixed bottom-[max(20px,env(safe-area-inset-bottom))] left-1/2 z-[55] flex max-w-[calc(100vw-110px)] -translate-x-1/2 items-center gap-4 rounded-[6px] bg-[#111] py-3 pl-4 pr-3 text-white shadow-[0_14px_40px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#ff4a00]">
        <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-[6px] bg-[#ff4a00] text-[18px] font-bold leading-none">R</span>
        <span className="min-w-0 truncate text-[clamp(14px,1.3vw,18px)]">Ready to build your next product?</span>
        <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 transition-colors group-hover/p:bg-white/25"><ArrowRight className="h-4 w-4 -rotate-45" /></span>
      </Link>
    </>
  );
}
