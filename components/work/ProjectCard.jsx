import { m as motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export function ProjectArticle({ p }) {
  return (
    <article style={{ backgroundColor: p.color }} className="group grid gap-8 rounded-[12px] p-5 text-white sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-[5vw] lg:p-[26px] lg:pl-[38px]">
      <div className="flex flex-col py-1 lg:py-3">
        <h3 className="text-[clamp(26px,2.3vw,32px)] font-medium leading-tight tracking-[-0.02em]">{p.name}</h3>
        <p className="mt-4 max-w-[560px] text-[clamp(15px,1.3vw,18px)] leading-[1.5] text-white/95">{p.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Project highlights">
          {p.highlights.map((s) => <li key={s} className="rounded-[8px] bg-white/20 px-3.5 py-2 text-[14px] text-white">{s}</li>)}
        </ul>
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-[44px] w-fit items-center gap-2 text-[17px] font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          View project<span className="sr-only"> {p.name} (opens in a new tab)</span>
          <ChevronRight className="h-[18px] w-[18px] arw" aria-hidden />
        </a>
      </div>
      <div style={{ aspectRatio: `${p.width || 1024} / ${p.height || 683}` }} className="relative w-full overflow-hidden rounded-[12px] bg-black/25">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.cover} alt={`${p.name} project cover`} width={p.width || 1024} height={p.height || 683} loading="lazy" decoding="async" draggable={false} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none" style={{ objectPosition: p.position }} />
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

