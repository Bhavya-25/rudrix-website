import Link from 'next/link';
import { m as motion } from 'framer-motion';
import { ChevronRight, TriangleAlert, CircleCheck } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

function Note({ icon: Icon, title, text, tone }) {
  return (
    <div className="rounded-[10px] bg-white p-5 text-[#1d1d1d] sm:p-6">
      <p className="flex items-center gap-2.5 text-[15px] font-semibold"><Icon className={`h-[18px] w-[18px] ${tone}`} aria-hidden />{title}</p>
      <p className="mt-4 text-[14.5px] leading-[1.7] text-[#6b6b68]">{text}</p>
    </div>
  );
}

export function ProjectArticle({ p }) {
  return (
    <article style={{ backgroundColor: p.color }} className="group grid gap-8 rounded-[12px] p-5 text-white sm:p-8 lg:grid-cols-2 lg:gap-[5vw] lg:p-[26px] lg:pl-[38px]">
        <div className="flex flex-col py-1 lg:py-3">
          <h3 className="text-[clamp(26px,2.3vw,32px)] font-medium leading-tight tracking-[-0.02em]">{p.title}</h3>
          <p className="mt-4 max-w-[560px] text-[clamp(16px,1.4vw,20px)] leading-[1.45] text-white/95">{p.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Services provided">
            {p.services.map((s) => <li key={s} className="rounded-[8px] bg-white/20 px-3.5 py-2 text-[14px] text-white">{s}</li>)}
          </ul>
          <Link href={p.cta.href} className="mt-8 inline-flex min-h-[44px] w-fit items-center gap-2 text-[17px] font-semibold text-white">
            {p.cta.label}
            <ChevronRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-auto lg:pt-10">
            <Note icon={TriangleAlert} title="Challenge" text={p.challenge} tone="text-[#e5311d]" />
            <Note icon={CircleCheck} title="Solution" text={p.solution} tone="text-[#1db954]" />
          </div>
        </div>
        <div className="relative min-h-[300px] overflow-hidden rounded-[12px] bg-black/25 sm:min-h-[380px] lg:min-h-[480px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.alt} width={1400} height={1250} loading="lazy" draggable={false} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none" style={{ objectPosition: p.position }} />
          <span className="absolute right-3 top-3 rounded-[8px] bg-white px-4 py-2.5 text-[16px] text-[#1d1d1d] sm:right-3.5 sm:top-3.5">{p.industry}</span>
        </div>
      </article>
  );
}

export default function ProjectCard({ p, reduce }) {
  return (
    <motion.li
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.6, ease }}
    >
      <ProjectArticle p={p} />
    </motion.li>
  );
}

