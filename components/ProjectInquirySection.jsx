'use client';
import { m as motion } from 'framer-motion';
import VisualPanel from './inquiry/VisualPanel';
import ProjectForm from './inquiry/ProjectForm';
import { inquiry } from '@/data/inquiry';

const ease = [0.22, 1, 0.36, 1];

export default function ProjectInquirySection() {
  return (
    <section id="contact" aria-labelledby="inquiry-title" className="bg-[#f7f7f5] section-x section-y">
      <div className="mx-auto grid max-w-[1360px] overflow-hidden rounded-[12px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.03)] lg:grid-cols-[0.92fr_1.08fr]">
        <h2 id="inquiry-title" className="sr-only">Have a product in mind?</h2>
        <VisualPanel />
        <motion.div
          className="px-6 py-9 sm:px-10 lg:px-[44px] lg:py-[50px]"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
        >
          <p className="text-[clamp(26px,2.5vw,34px)] font-medium leading-[1.15] tracking-[-0.03em] text-ink" aria-hidden>
            {inquiry.formHeading}
          </p>
          <div className="mt-9">
            <ProjectForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
