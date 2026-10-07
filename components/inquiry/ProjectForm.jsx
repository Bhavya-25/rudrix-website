'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { inquiry } from '@/data/inquiry';

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const empty = { name: '', email: '', phone: '', service: '', message: '', consent: false };

const field =
  'w-full rounded-[8px] border border-[#e2e2e2] bg-[#fafafa] px-4 text-[16px] text-ink outline-none transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-[#6b6b6b] hover:border-[#cfcfcf] focus:border-rudrix focus:bg-white focus:shadow-[0_0_0_3px_rgba(255,74,0,0.14)] disabled:opacity-60';

function Field({ id, label, required, error, className = '', compact = false, children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={`${compact ? 'mb-2' : 'mb-2.5'} block ${compact ? 'text-[15px]' : 'text-[16px]'} font-medium text-ink`}>
        {label}
        {required && <span aria-hidden>*</span>}
      </label>
      {children}
      <p id={`${id}-err`} role={error ? 'alert' : undefined} className={`text-[13px] text-[#d12a00] ${compact ? (error ? 'mt-1' : '') : 'mt-1.5 min-h-[18px]'}`}>
        {error}
      </p>
    </div>
  );
}

export default function ProjectForm({ idPrefix = '', compact = false }) {
  const px = idPrefix;
  const hh = compact ? 'h-[50px]' : 'h-[54px]';
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!v.name.trim()) er.name = 'Please enter your name.';
    if (!v.email.trim()) er.email = 'Please enter your email.';
    else if (!emailOk(v.email)) er.email = 'Please enter a valid email address.';
    if (!v.service) er.service = 'Please choose a service.';
    if (!v.consent) er.consent = 'Please accept the terms to continue.';
    return er;
  };

  const submit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;
    setStatus('loading');
    // Front-end only: replace this timeout with a real API call (POST the `v` object) when a backend exists.
    setTimeout(() => {
      setStatus('success');
      setV(empty);
    }, 900);
  };

  if (status === 'success') {
    return (
      <div role="status" className="flex min-h-[320px] flex-col justify-center rounded-[8px] bg-[#fafafa] p-8">
        <p className="text-[24px] font-medium text-ink">Thanks — your project details have been received.</p>
        <p className="mt-3 text-[16px] text-[#737373]">We&apos;ll get back to you shortly.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 w-fit text-[15px] text-rudrix-strong underline underline-offset-4">
          Send another request
        </button>
      </div>
    );
  }

  const loading = status === 'loading';
  const err = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': `${px}${k}-err` });

  return (
    <form onSubmit={submit} noValidate>
      <div className={`grid gap-x-5 sm:grid-cols-2 ${compact ? 'gap-y-4' : ''}`}>
        <Field compact={compact} id={`${px}name`} label="Name" required error={errors.name}>
          <input id={`${px}name`} type="text" autoComplete="name" placeholder="Jane Smith" value={v.name} onChange={set('name')} disabled={loading} className={`${field} ${hh}`} {...err('name')} />
        </Field>
        <Field compact={compact} id={`${px}email`} label="Email" required error={errors.email}>
          <input id={`${px}email`} type="email" autoComplete="email" placeholder="Example@gmail.com" value={v.email} onChange={set('email')} disabled={loading} className={`${field} ${hh}`} {...err('email')} />
        </Field>
        <Field compact={compact} id={`${px}phone`} label="Phone" error={errors.phone}>
          <input id={`${px}phone`} type="tel" autoComplete="tel" placeholder="Phone number" value={v.phone} onChange={set('phone')} disabled={loading} className={`${field} ${hh}`} {...err('phone')} />
        </Field>
        <Field compact={compact} id={`${px}service`} label="What service are you interested in?" required error={errors.service}>
          <div className="relative">
            <select id={`${px}service`} value={v.service} onChange={set('service')} disabled={loading} className={`${field} ${hh} appearance-none pr-11 ${v.service ? '' : 'text-[#6b6b6b]'}`} {...err('service')}>
              <option value="">Select...</option>
              {inquiry.services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#555]" aria-hidden />
          </div>
        </Field>
      </div>

      <div className={compact ? 'mt-4' : ''}><Field compact={compact} id={`${px}message`} label="How can we help?" error={errors.message}>
        <textarea id={`${px}message`} rows={4} placeholder="Tell us about your requirement..." value={v.message} onChange={set('message')} disabled={loading} className={`${field} ${compact ? 'min-h-[96px]' : 'min-h-[118px]'} resize-y py-3.5`} {...err('message')} />
      </Field></div>

      <div className="mt-2">
        <label className="flex cursor-pointer items-start gap-4 text-[14px] leading-[1.55] text-[#555]">
          <input
            type="checkbox"
            checked={v.consent}
            onChange={set('consent')}
            disabled={loading}
            aria-invalid={!!errors.consent}
            aria-describedby={`${px}consent-err`}
            className="mt-0.5 h-[24px] w-[24px] shrink-0 cursor-pointer appearance-none rounded-[6px] border border-[#d9d9d9] bg-[#fafafa] transition-colors checked:border-rudrix checked:bg-rudrix checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%223%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpath%20d=%22M5%2012l5%205L20%207%22/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat"
          />
          <span>
            I agree to the{' '}
            <a href="/legal/terms" className="font-medium text-rudrix-strong underline underline-offset-2">Terms &amp; Conditions</a> and{' '}
            <a href="/legal/privacy" className="font-medium text-rudrix-strong underline underline-offset-2">Privacy Policy</a>. By submitting this form, I agree that Rudrix may contact me regarding my project.
          </span>
        </label>
        <p id={`${px}consent-err`} role={errors.consent ? 'alert' : undefined} className={`text-[13px] text-[#d12a00] ${compact ? (errors.consent ? 'mt-1' : '') : 'mt-1.5 min-h-[18px]'}`}>
          {errors.consent}
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`${compact ? 'mt-3 h-[56px]' : 'mt-4 h-[62px]'} flex w-full items-center justify-center gap-3 rounded-[8px] bg-rudrix-strong text-[18px] font-medium text-white transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-[#b83300] disabled:translate-y-0 disabled:opacity-80`}
      >
        {loading && <span aria-hidden className="h-[18px] w-[18px] animate-spin rounded-full border-2 border-white/40 border-t-white" />}
        {loading ? 'Sending...' : 'Book Strategy Call'}
      </button>
    </form>
  );
}
