'use client';
import { useEffect, useRef, useState } from 'react';
import { m as motion, useScroll } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import WorkCard from './work/WorkCard';
import { work, selectedProjects } from '@/data/work';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: true, margin: '-10% 0px' };

export default function WorkSection() {
  const reduce = useReducedMotion();
  const stack = useRef(null);
  const { scrollYProgress } = useScroll({ target: stack, offset: ['start start', 'end end'] });
  const projects = selectedProjects.projects.slice(0, work.count);
  const n = projects.length;
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (min-height: 821px)');
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  return (
    <section
      id="works"
      aria-labelledby="work-title"
      className="relative scroll-mt-[96px] overflow-x-clip bg-[#f3f0e8] section-x section-y text-ink"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* heading + intro */}
        <div className="work-head relative z-0 text-center">
          <motion.h2
            id="work-title"
            className="text-[clamp(38px,5vw,72px)] font-medium leading-[1.02] tracking-[-0.04em]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease }}
          >
            {work.heading}
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.6] text-[#6f6f6f] lg:text-[18px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.12, ease }}
          >
            {work.intro}
          </motion.p>
        </div>

        {/* the stack: every card is sticky, so each one pins while the next slides over it */}
        <div ref={stack} className="work-stack relative z-10 mt-10 lg:mt-16">
          {projects.map((p, i) => (
            <WorkCard key={p.id} project={p} index={i} total={n} progress={scrollYProgress} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}
