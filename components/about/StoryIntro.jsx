'use client';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';

const ease = [0.22, 1, 0.36, 1];

// "Who Rudrix is" / "Why we started": numbered editorial blocks directly under the About banner.
const blocks = [
  {
    number: '01',
    title: 'Who Rudrix is',
    lead: (
      <>
        We&apos;re a small, hands-on team of designers and developers. When you work with us,{' '}
        <mark className="story-mark">you talk to the people doing the work.</mark> There&apos;s no layer of account managers between your question and the answer.
      </>
    ),
    body: (
      <>
        Our work sits where product, design and engineering meet. Most of our clients come to us with a business problem, not a technical brief:{' '}
        <q>Our team spends hours on this every week,</q> <q>We have an idea but don&apos;t know where to start,</q> or <q>Our product works but nobody enjoys using it.</q>{' '}
        We help turn that into something concrete and then build it.
      </>
    ),
  },
  {
    number: '02',
    title: 'Why we started',
    lead: <>Too many projects fail in the gap between what a business needs and what gets built.</>,
    body: (
      <>
        A brief gets written, a team disappears for months, and the result technically matches the document but doesn&apos;t help anyone. We started Rudrix to close that gap:{' '}
        <mark className="story-mark">design and development in one conversation,</mark> regular working demos, and honest advice, including when the answer is <q>you don&apos;t need that yet.</q>
      </>
    ),
  },
];

export default function StoryIntro() {
  const reduce = useReducedMotion();
  const rise = (d = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -10% 0px' },
    transition: { duration: 0.7, delay: d, ease },
  });

  return (
    <section aria-labelledby="story-title" className="relative bg-[#f7f7f5] section-x pb-[clamp(72px,9vw,128px)] pt-[clamp(8px,2vw,24px)]">
      <div className="mx-auto max-w-[1200px] border-t border-black/10 pt-[clamp(56px,7vw,100px)]">
        <motion.div {...rise(0)} className="flex items-center gap-4">
          <p className="relative inline-block border border-[#15181c]/70 px-3.5 py-2 text-[12px] font-medium tracking-[0.2em] text-[#15181c]">
            {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h]) => (
              <span key={v + h} aria-hidden className="absolute h-[6px] w-[6px] bg-[#15181c]" style={{ [v]: -3, [h]: -3 }} />
            ))}
            WHO WE ARE
          </p>
          <span aria-hidden className="h-px flex-1 bg-black/10" />
        </motion.div>
        <h2 id="story-title" className="sr-only">Who Rudrix is and why we started</h2>

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-0">
          {blocks.map((b, i) => (
            <motion.article
              key={b.number}
              {...rise(0.1 + i * 0.12)}
              className={`story-block group relative ${i === 1 ? 'lg:border-l lg:border-black/10 lg:pl-[clamp(40px,5vw,80px)]' : 'lg:pr-[clamp(40px,5vw,80px)]'}`}
            >
              <span aria-hidden className="pointer-events-none absolute -top-6 select-none text-[clamp(120px,15vw,210px)] font-extrabold leading-none tracking-[-0.06em] text-black/[0.045] transition-colors duration-500 group-hover:text-rudrix/[0.12] lg:-top-10" style={{ [i === 1 ? 'right' : 'left']: 0 }}>
                {b.number}
              </span>
              <div className="relative pt-[clamp(40px,6vw,84px)]">
                <p aria-hidden className="text-[15px] font-semibold tabular-nums text-rudrix-strong">{b.number}</p>
                <h3 className="mt-3 text-[clamp(36px,4.6vw,64px)] font-medium leading-[1.02] tracking-[-0.035em] text-[#111]">{b.title}</h3>
                <span aria-hidden className="mt-6 block h-px w-14 bg-[#111] transition-[width] duration-500 ease-out group-hover:w-28" />
                <p className="mt-7 text-[clamp(19px,1.9vw,24px)] leading-[1.5] tracking-[-0.01em] text-[#1d1d1d]">{b.lead}</p>
                <p className="mt-6 max-w-[560px] text-[16px] leading-[1.7] text-[#5f5f5c] sm:text-[17px]">{b.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
