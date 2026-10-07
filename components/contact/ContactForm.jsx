'use client';
import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { contact } from '@/data/contact';

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const empty = { name: '', email: '', phone: '', company: '', service: '', budget: '', timeline: '', message: '', consent: false };
const inp = 'w-full rounded-[8px] border border-[#e2e2e0] bg-[#fafafa] px-4 text-[16px] text-ink outline-none transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-[#6b6b6b] hover:border-[#cfcfcc] focus:border-rudrix focus:bg-white focus:shadow-[0_0_0_3px_rgba(255,74,0,0.14)] disabled:opacity-60';

// Isolated submit handler: replace the body with a real API call (POST `values`) when a backend exists.
async function submitInquiry(values) {
  await new Promise((r) => setTimeout(r, 900));
  return { ok: true, values };
}

function Field({ id, label, required, error, children, className = '' }) {
  return (
    <div className={`pb-4 ${className}`}>
      <label htmlFor={id} className="mb-2 block text-[15px] font-medium text-ink">{label}{required && <span aria-hidden> *</span>}</label>
      {children}
      <p id={`${id}-err`} role={error ? 'alert' : undefined} className={`text-[13px] text-[#d12a00] ${error ? 'mt-1.5 animate-[err-in_0.25s_ease-out]' : 'min-h-[0px]'}`}>{error}</p>
    </div>
  );
}

function Select({ id, value, onChange, options, placeholder, disabled, invalid }) {
  return (
    <div className="relative">
      <select id={id} value={value} onChange={onChange} disabled={disabled} aria-invalid={invalid} aria-describedby={`${id}-err`} className={`${inp} h-[52px] appearance-none pr-11 ${value ? '' : 'text-[#6b6b6b]'}`}>
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#555]" aria-hidden />
    </div>
  );
}

export default function ContactForm() {
  const f = contact.form;
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };
  const validate = () => {
    const er = {};
    if (!v.name.trim()) er.name = 'Please enter your name.';
    if (!v.email.trim()) er.email = 'Please enter your work email.';
    else if (!emailOk(v.email)) er.email = 'Please enter a valid email address.';
    if (!v.service) er.service = 'Please choose what you need help with.';
    if (!v.message.trim()) er.message = 'Tell us a little about your project.';
    if (!v.consent) er.consent = 'Please accept the terms to continue.';
    return er;
  };
  const submit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(`cf-${Object.keys(er)[0]}`)?.focus();
      return;
    }
    setStatus('loading');
    try {
      const res = await submitInquiry(v);
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      setV(empty);
    } catch {
      setStatus('error');
    }
  };
  const loading = status === 'loading';
  const a = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': `cf-${k}-err` });

  if (status === 'success') {
    return (
      <div role="status" className="flex min-h-[420px] flex-col justify-center rounded-[12px] bg-[#fafafa] p-8 animate-[err-in_0.4s_ease-out]">
        <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-full bg-rudrix-strong text-white">✓</span>
        <p className="mt-6 text-[26px] font-medium leading-snug text-ink">{f.success}</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 w-fit text-[15px] text-rudrix-strong underline underline-offset-4">Send another inquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate aria-busy={loading}>
      <div className="grid gap-x-5 sm:grid-cols-2">
        <Field id="cf-name" label="Full name" required error={errors.name}><input id="cf-name" type="text" autoComplete="name" placeholder="Your name" value={v.name} onChange={set('name')} disabled={loading} className={`${inp} h-[52px]`} {...a('name')} /></Field>
        <Field id="cf-email" label="Work email" required error={errors.email}><input id="cf-email" type="email" autoComplete="email" placeholder="you@company.com" value={v.email} onChange={set('email')} disabled={loading} className={`${inp} h-[52px]`} {...a('email')} /></Field>
        <Field id="cf-phone" label="Phone number"><input id="cf-phone" type="tel" autoComplete="tel" placeholder="+1 000 000 0000" value={v.phone} onChange={set('phone')} disabled={loading} className={`${inp} h-[52px]`} /></Field>
        <Field id="cf-company" label="Company / business"><input id="cf-company" type="text" autoComplete="organization" placeholder="Company name" value={v.company} onChange={set('company')} disabled={loading} className={`${inp} h-[52px]`} /></Field>
        <Field id="cf-service" label="What do you need help with?" required error={errors.service} className="sm:col-span-2"><Select id="cf-service" value={v.service} onChange={set('service')} options={f.services} placeholder="Select a service" disabled={loading} invalid={!!errors.service} /></Field>
        <Field id="cf-budget" label="Project budget"><Select id="cf-budget" value={v.budget} onChange={set('budget')} options={f.budgets} placeholder="Select a range" disabled={loading} /></Field>
        <Field id="cf-timeline" label="Project timeline"><Select id="cf-timeline" value={v.timeline} onChange={set('timeline')} options={f.timelines} placeholder="Select a timeline" disabled={loading} /></Field>
        <Field id="cf-message" label="Tell us about your project" required error={errors.message} className="sm:col-span-2"><textarea id="cf-message" rows={5} placeholder="Tell us what you're building, what problem you're trying to solve, or what you'd like to improve..." value={v.message} onChange={set('message')} disabled={loading} className={`${inp} min-h-[130px] resize-y py-3.5`} {...a('message')} /></Field>
      </div>

      <label className="mt-1 flex cursor-pointer items-start gap-3.5 text-[14px] leading-[1.55] text-[#555]">
        <input type="checkbox" checked={v.consent} onChange={set('consent')} disabled={loading} aria-invalid={!!errors.consent} aria-describedby="cf-consent-err" className="mt-0.5 h-[22px] w-[22px] shrink-0 cursor-pointer accent-[#d63c00]" />
        <span>I agree to the <a href="/legal/terms" className="font-medium text-rudrix-strong underline underline-offset-2">Terms &amp; Conditions</a> and <a href="/legal/privacy" className="font-medium text-rudrix-strong underline underline-offset-2">Privacy Policy</a>.</span>
      </label>
      <p id="cf-consent-err" role={errors.consent ? 'alert' : undefined} className={`text-[13px] text-[#d12a00] ${errors.consent ? 'mt-1.5' : ''}`}>{errors.consent}</p>

      {status === 'error' && <p role="alert" className="mt-3 rounded-[8px] bg-[#fdeceb] px-4 py-3 text-[14px] text-[#9d1c0b]">Something went wrong sending your message. Please try again, or email us directly at {contact.email}.</p>}

      <button type="submit" disabled={loading} className="group mt-5 flex h-[60px] w-full items-center justify-center gap-3 rounded-[8px] bg-rudrix-strong text-[17px] font-medium text-white transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-[#b83300] active:translate-y-0 active:scale-[0.99] disabled:translate-y-0 disabled:opacity-80">
        {loading ? (<><span aria-hidden className="h-[18px] w-[18px] animate-spin rounded-full border-2 border-white/40 border-t-white" />Sending...</>) : (<>{f.cta}<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden /></>)}
      </button>
    </form>
  );
}
