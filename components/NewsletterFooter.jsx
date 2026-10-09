'use client';
import { useState } from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';
import { footer } from '@/data/footer';
import Reveal from './Reveal';
import { postJson } from '@/lib/submitForm';

const ease = [0.22, 1, 0.36, 1];
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export default function NewsletterFooter() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | loading | success | error (invalid email) | failed (server)
  const [hp, setHp] = useState('');

  const [message, setMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (state === 'loading') return;
    if (!emailOk(email)) return setState('error');
    setState('loading');
    const res = await postJson('/api/newsletter', { email, website: hp });
    if (!res.ok) {
      setMessage(res.error);
      return setState('failed');
    }
    setMessage(res.status === 'subscribed' ? "You're on the list ✓" : res.status === 'duplicate' ? "You're already on our list ✓" : "Thanks, we've received your email ✓");
    setState('success');
    setEmail('');
  };

  return (
    <div className="text-center lg:text-left">
      <Reveal delay={0} className="flex items-center justify-center gap-3 text-[15px] text-white/70 lg:justify-start">
        <span className="flex gap-1 text-rudrix" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.svg
              key={i}
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              initial={{ opacity: 0, scale: reduce ? 1 : 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease }}
            >
              <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.8 5.7 21.5l1.7-7.3L2 9.5l7.1-.6z" />
            </motion.svg>
          ))}
        </span>
        <span>{footer.trust}</span>
      </Reveal>

      <Reveal delay={0.1} as="h2" className="mt-6 text-[clamp(34px,9.6vw,48px)] font-medium leading-[1.02] tracking-[-0.04em] text-white md:text-[clamp(48px,6vw,72px)]">
        {footer.headline.map((l) => (
          <span key={l} className="block">{l}</span>
        ))}
      </Reveal>

      <Reveal delay={0.2} as="p" className="mx-auto mt-6 max-w-[550px] text-[16px] leading-[1.55] text-[#999] lg:mx-0 lg:mt-8 lg:text-[17px]">
        {footer.description}
      </Reveal>

      <Reveal delay={0.3} className="mt-8 lg:mt-10">
        <form onSubmit={submit} noValidate className="relative mx-auto max-w-[540px] lg:mx-0">
          <input type="text" name="website" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <div className="flex gap-1.5 rounded-lg border border-[#4a4a4a] bg-[#242424] p-[3px] transition-[border-color,box-shadow] duration-300 focus-within:border-rudrix/80 focus-within:shadow-[0_0_0_4px_rgba(255,74,0,0.14)]">
            <input
              id="newsletter-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (state !== 'idle') setState('idle');
              }}
              placeholder={footer.placeholder}
              aria-invalid={state === 'error'}
              aria-describedby="newsletter-status"
              disabled={state === 'loading'}
              className="h-12 w-full min-w-0 flex-1 rounded-lg border-0 bg-transparent px-4 text-[16px] text-white outline-none placeholder:text-[#a0a0a0]"
            />
            <button
              type="submit"
              disabled={state === 'loading' || state === 'success'}
              className="h-12 min-w-[104px] shrink-0 rounded-[8px] sm:min-w-[124px] bg-rudrix px-5 text-[16px] font-medium text-[#050505] transition-all duration-300 hover:-translate-y-px hover:bg-[#ff6a2a] hover:shadow-[0_10px_22px_-10px_rgba(255,74,0,0.7)] active:scale-[0.98] disabled:translate-y-0 disabled:opacity-90"
            >
              {state === 'loading' ? 'Sending…' : state === 'success' ? 'Done ✓' : 'Subscribe'}
            </button>
          </div>
          <p
            id="newsletter-status"
            role="status"
            aria-live="polite"
            className={`mt-3 min-h-[20px] text-sm ${state === 'error' || state === 'failed' ? 'text-[#ff8a5c]' : 'text-[#999]'}`}
          >
            {state === 'error' && 'Please enter a valid email address.'}
            {state === 'failed' && message}
            {state === 'success' && message}
          </p>
        </form>
      </Reveal>
    </div>
  );
}
