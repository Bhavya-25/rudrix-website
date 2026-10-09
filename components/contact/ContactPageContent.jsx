'use client';
import Link from 'next/link';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight, Mail, Phone, Clock, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactFAQ from './ContactFAQ';
import ExpertiseIcon from '@/components/about/ExpertiseIcons';
import RollCta from '@/components/about/RollCta';
import { contact } from '@/data/contact';
import Cta from '@/components/Cta';

const ease = [0.22, 1, 0.36, 1];

function Eyebrow({ children, dark = false }) {
  const c = dark ? '#fff' : '#ff4a00';
  return (
    <div className="relative inline-block p-[6px]">
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((p) => {
        const [v, h] = p.split('-');
        return <span key={p} aria-hidden className="absolute h-[7px] w-[7px]" style={{ background: c, [v]: 0, [h]: 0 }} />;
      })}
      <p className={`border px-4 py-2.5 text-[12px] font-medium tracking-[0.2em] sm:text-[13px] ${dark ? 'border-white/80 text-white' : 'border-[#ff4a00] text-rudrix-strong'}`}>{children}</p>
    </div>
  );
}

export default function ContactPageContent() {
  const reduce = useReducedMotion();
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' }, transition: { duration: 0.7, delay: d, ease } });
  const h = contact.hero;
  const details = [
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    contact.phone && { icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    contact.hours && { icon: Clock, label: 'Business hours', value: contact.hours },
    contact.location && { icon: MapPin, label: 'Location', value: contact.location },
  ].filter(Boolean);
  const stack = contact.trust.stack;
  const strip = stack.map((s) => <span key={s} className="mr-3 flex h-[56px] shrink-0 items-center border border-black/[0.08] bg-[#fafafa] px-6 text-[16px] font-medium text-[#222]">{s}</span>);
  const x = contact.expertise;

  return (
    <>
      {/* 01 hero */}
      <section aria-labelledby="contact-title" className="about-banner relative overflow-clip border-b border-black/10 pb-[clamp(48px,7vw,96px)] pt-[calc(118px+clamp(40px,5vw,72px))]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-[22px] sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.div {...rise(0)}><Eyebrow>{h.eyebrow}</Eyebrow></motion.div>
            <h1 id="contact-title" className="about-title mt-6 text-[clamp(36px,4.7vw,66px)] font-extrabold leading-[1.0] tracking-[-0.04em] text-[#15181c]">
              {h.title.map((l) => <span key={l} className="block">{l}</span>)}
            </h1>
            <motion.p {...rise(0.15)} className="mt-6 max-w-[560px] text-[18px] leading-[1.6] text-[#5b6068]">{h.text}</motion.p>
            <motion.div {...rise(0.25)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Cta href="#project-form">Tell us about your project</Cta>
              <a href={`mailto:${contact.email}`} className="inline-flex min-h-[44px] items-center border-b border-black/30 text-[16px] font-bold text-[#15181c] hover:text-rudrix-strong">{contact.email}</a>
            </motion.div>
          </div>
          <motion.div {...rise(0.2)} className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-[#e9e9e6] lg:aspect-[5/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={h.image.src} alt={h.image.alt} width={1200} height={1500} className="absolute inset-0 h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 02 benefits */}
      <section aria-label="Why talk to Rudrix" className="bg-white section-x pt-[clamp(56px,7vw,96px)]">
        <ul className="mx-auto grid max-w-[1280px] gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {contact.benefits.map((b, i) => (
            <motion.li key={b.title} {...rise(i * 0.05)} className="group bg-white p-7 transition-colors duration-300 hover:bg-[#fafaf8]">
              <p aria-hidden className="text-[14px] tabular-nums text-rudrix-strong">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="mt-4 text-[20px] font-semibold leading-tight text-ink">{b.title}</h2>
              <p className="mt-2 text-[15.5px] leading-[1.6] text-slate2">{b.text}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* 03 details + form */}
      <section id="project-form" aria-labelledby="form-title" className="scroll-mt-[90px] bg-white section-x section-y">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div {...rise(0)} className="lg:sticky lg:top-[120px] lg:self-start">
            <h2 id="form-title" className="text-[clamp(32px,3.8vw,52px)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">{contact.form.heading}</h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.65] text-slate2">{contact.form.text}</p>
            <dl className="mt-10 space-y-6 border-t border-black/10 pt-8">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-black/10 bg-[#fafafa]"><Icon className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden /></span>
                  <div>
                    <dt className="text-[13px] uppercase tracking-[0.12em] text-[#6b6b68]">{label}</dt>
                    <dd className="mt-1 text-[17px] text-ink">{href ? <a href={href} className="underline-offset-4 hover:text-rudrix-strong hover:underline">{value}</a> : value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </motion.div>
          <motion.div {...rise(0.1)} className="rounded-[12px] border border-black/[0.08] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] sm:p-9">
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* 04 trusted-by: the technology we use (no client logos are claimed) */}
      <section aria-labelledby="trust-title" className="bg-[#f7f7f5] section-y">
        <div className="mx-auto max-w-[1280px] px-[22px] sm:px-8">
          <h2 id="trust-title" className="text-[clamp(26px,3vw,40px)] font-medium tracking-[-0.03em] text-ink">{contact.trust.heading}</h2>
          <p className="mt-3 max-w-[560px] text-[16px] text-slate2">{contact.trust.text}</p>
        </div>
        <div aria-hidden className="marquee-mask mt-8 overflow-hidden">
          <div className="marquee-left flex w-max" style={{ '--marquee': '34s' }}>
            <div className="flex shrink-0">{strip}</div>
            <div className="flex shrink-0">{strip}</div>
          </div>
        </div>
        <p className="sr-only">{stack.join(', ')}</p>
      </section>

      {/* 05 expertise */}
      <section aria-labelledby="exp-title" className="bg-white section-x section-y">
        <div className="mx-auto max-w-[1280px]">
          <motion.div {...rise(0)}><Eyebrow>{x.eyebrow}</Eyebrow></motion.div>
          <motion.h2 id="exp-title" {...rise(0.08)} className="mt-6 max-w-[860px] text-[clamp(32px,4.4vw,60px)] font-normal leading-[1.04] tracking-[-0.03em] text-ink">{x.heading}</motion.h2>
          <motion.p {...rise(0.14)} className="mt-5 max-w-[680px] text-[17px] leading-[1.65] text-slate2">{x.text}</motion.p>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {x.items.map((it, i) => (
              <motion.li key={it.title} {...rise((i % 3) * 0.07)}>
                <Link href={it.href} className="group relative flex min-h-[300px] flex-col justify-between border border-black/[0.12] bg-[#fafafa] p-7 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-[3px] hover:border-black/30 hover:bg-white">
                  <div className="flex items-start justify-between">
                    <ExpertiseIcon name={it.icon} className="h-[64px] w-[64px] text-black/30 transition-colors duration-300 group-hover:text-rudrix-strong" />
                    <span aria-hidden className="text-[14px] tabular-nums text-black/40">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="text-[22px] font-semibold leading-tight text-ink">{it.title}</h3>
                    <p className="mt-2 min-h-[72px] max-w-[320px] text-[15.5px] leading-[1.55] text-slate2">{it.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-rudrix-strong">Learn more <ArrowRight className="h-4 w-4 arw" aria-hidden /></span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 editorial image */}
      <section aria-label="Our approach" className="bg-white section-x pb-[clamp(56px,8vw,112px)]">
        <motion.div initial={reduce ? false : { opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '0px 0px -10% 0px' }} transition={{ duration: 0.9, ease }} className="group relative mx-auto aspect-[4/5] max-w-[1280px] overflow-hidden rounded-[16px] bg-[#e9e9e6] sm:aspect-[16/9] lg:aspect-[2.3/1]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={contact.visual.src} alt={contact.visual.alt} width={1200} height={1500} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0.05)_60%)]" />
          <p className="absolute bottom-0 left-0 max-w-[620px] p-6 text-[clamp(22px,2.8vw,38px)] font-normal leading-[1.2] tracking-[-0.02em] text-white sm:p-10">{contact.visual.quote}</p>
        </motion.div>
      </section>

      {/* 07 FAQ */}
      <section aria-labelledby="cfaq-title" className="bg-[#f7f7f5] section-x section-y">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <motion.div {...rise(0)}><Eyebrow>{contact.faq.eyebrow}</Eyebrow></motion.div>
            <motion.h2 id="cfaq-title" {...rise(0.08)} className="mt-6 text-[clamp(32px,3.8vw,52px)] font-normal leading-[1.05] tracking-[-0.03em] text-ink">{contact.faq.heading}</motion.h2>
            <motion.p {...rise(0.14)} className="mt-5 max-w-[420px] text-[17px] leading-[1.6] text-slate2">{contact.faq.text}</motion.p>
          </div>
          <ContactFAQ />
        </div>
      </section>

      {/* 08 final CTA */}
      <section aria-labelledby="ccta-title" className="relative overflow-hidden bg-[#050505] text-white section-x section-y">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto max-w-[1280px]">
          <motion.h2 id="ccta-title" {...rise(0)} className="text-[clamp(40px,7vw,104px)] font-normal leading-[0.98] tracking-[-0.045em]">
            {contact.cta.heading.map((l) => <span key={l} className="block">{l}</span>)}
          </motion.h2>
          <motion.p {...rise(0.12)} className="mt-6 max-w-[520px] text-[18px] leading-[1.6] text-white/70">{contact.cta.text}</motion.p>
          <motion.div {...rise(0.2)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <RollCta href={contact.cta.primary.href} label={contact.cta.primary.label} />
            <Link href={contact.cta.secondary.href} className="group inline-flex min-h-[44px] items-center gap-2 border-b border-white/40 text-[16px] font-semibold text-white hover:border-white">{contact.cta.secondary.label}<ArrowRight className="h-4 w-4 arw" aria-hidden /></Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
