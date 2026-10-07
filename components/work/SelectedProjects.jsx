'use client';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Card from './ProjectCard';
import { selectedProjects as sp } from '@/data/work';

const ease = [0.22, 1, 0.36, 1];

function Filter({ id, label, value, onChange, options }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[16px] font-semibold text-[#555]">{label}</label>
      <div className="relative mt-3">
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="h-[48px] w-[min(216px,calc(50vw-28px))] cursor-pointer appearance-none rounded-[10px] border border-black/[0.07] bg-[#f4f4f3] pl-4 pr-10 text-[15px] text-[#222] outline-none transition-colors hover:bg-[#eeeeec] focus-visible:ring-2 focus-visible:ring-rudrix">
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#777]" aria-hidden />
      </div>
    </div>
  );
}

export default function SelectedProjects() {
  const reduce = useReducedMotion();
  const [industry, setIndustry] = useState('All');
  const [service, setService] = useState('All');
  const industries = useMemo(() => ['All', ...new Set(sp.projects.map((p) => p.industry))], []);
  const services = useMemo(() => ['All', ...new Set(sp.projects.flatMap((p) => p.services))], []);
  const list = sp.projects.filter((p) => (industry === 'All' || p.industry === industry) && (service === 'All' || p.services.includes(service)));
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: 0.7, delay: d, ease } });

  return (
    <section id="works" aria-labelledby="projects-title" className="bg-white section-x pb-[clamp(64px,8vw,120px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <motion.div {...rise(0)} className="relative inline-block p-[6px]">
              {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((k) => { const [v, h] = k.split('-'); return <span key={k} aria-hidden className="absolute h-[7px] w-[7px] bg-[#ff4a00]" style={{ [v]: 0, [h]: 0 }} />; })}
              <p className="border border-[#ff4a00] px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] text-rudrix-strong sm:text-[13px]">{sp.eyebrow}</p>
            </motion.div>
            <motion.h2 id="projects-title" {...rise(0.08)} className="mt-6 text-[clamp(34px,4.2vw,58px)] font-normal leading-[1.05] tracking-[-0.035em] text-[#1d1d1d]">{sp.title}</motion.h2>
          </div>
          <motion.p {...rise(0.16)} className="max-w-[440px] text-[clamp(15px,1.25vw,17px)] leading-[1.7] text-[#5f5f5c] lg:pb-3">{sp.text}</motion.p>
        </div>

        <motion.div {...rise(0.1)} className="mt-10 flex flex-wrap gap-5 sm:gap-6" role="group" aria-label="Filter projects">
          <Filter id="f-industry" label="Industries" value={industry} onChange={setIndustry} options={industries} />
          <Filter id="f-service" label="Services" value={service} onChange={setService} options={services} />
        </motion.div>

        <p className="sr-only" role="status" aria-live="polite">{list.length} {list.length === 1 ? 'project' : 'projects'} shown</p>
        <ul className="mt-9 flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {list.map((p) => <Card key={p.id} p={p} reduce={reduce} />)}
          </AnimatePresence>
        </ul>
        {list.length === 0 && (
          <div className="mt-9 rounded-[16px] border border-dashed border-black/20 py-16 text-center">
            <p className="text-[18px] text-[#444]">{sp.empty}</p>
            <button type="button" onClick={() => { setIndustry('All'); setService('All'); }} className="mt-4 min-h-[44px] text-[15px] font-semibold text-rudrix-strong underline underline-offset-4">Reset filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
