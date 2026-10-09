'use client';
import Link from 'next/link';
import { m as motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { ArrowRight, MapPin, Bell, Calendar, UtensilsCrossed, Smile, ShoppingBasket, ChevronDown } from 'lucide-react';
import { portfolioCta as c } from '@/data/work';

const ease = [0.22, 1, 0.36, 1];

// HTML/CSS phone with a generic demo app screen (not a real client).
function Phone() {
  return (
    <div className="pcta-phone relative aspect-[1/2.07] w-full rounded-[13%/6.4%] bg-[#1c2a33] p-[2.6%] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.65),0_0_0_2px_#8fa3ad_inset]" role="img" aria-label="Demo mobile app screen">
      <div className="relative h-full w-full overflow-hidden rounded-[11%/5.4%] bg-[#fbeee6] text-[#1d1d1d]">
        <div aria-hidden className="absolute left-1/2 top-[2%] z-10 h-[3.3%] w-[28%] -translate-x-1/2 rounded-full bg-black" />
        <div className="absolute inset-0 flex flex-col px-[5%] pt-[4.4%] text-[clamp(5px,0.78vw,10px)]" aria-hidden>
          <div className="flex items-center justify-between font-semibold"><span>9:41</span><span className="flex gap-1"><i className="h-[0.8em] w-[1.5em] rounded-[2px] bg-black" /></span></div>
          <div className="mt-[7%] flex items-center justify-between">
            <div><p className="text-[0.85em] text-black/50">Your city</p><p className="flex items-center gap-1 font-semibold"><MapPin className="h-[1.2em] w-[1.2em] text-[#ff5a00]" />Downtown <ChevronDown className="h-[1em] w-[1em]" /></p></div>
            <div className="flex items-center gap-[0.8em]"><Bell className="h-[1.6em] w-[1.6em]" /><span className="h-[2.6em] w-[2.6em] rounded-full bg-[#e8742a]" /></div>
          </div>
          <div className="mt-[5%] flex h-[24%] flex-col items-center justify-center rounded-[1em] bg-[linear-gradient(135deg,#1b1210,#4a2412)] text-center text-white">
            <p className="text-[0.85em] tracking-wide text-white/70">TODAY’S PICK</p>
            <p className="mt-[0.3em] text-[2.2em] font-extrabold leading-none">Fresh &amp; Fast</p>
          </div>
          <div className="mt-[4%] grid grid-cols-3 gap-[3%]">
            {['Dine in', 'Pickup', 'Delivery'].map((t) => <div key={t} className="rounded-[0.8em] bg-white py-[1.4em] text-center text-[0.95em] font-semibold text-[#d3560f] shadow-sm">{t}</div>)}
          </div>
          <div className="mt-[4%] flex items-center justify-between rounded-full bg-[linear-gradient(90deg,#ff7a1a,#ff5a00)] px-[1em] py-[0.9em] font-semibold text-white"><span>Got a group coming?</span><span className="rounded-full bg-white/90 px-[0.8em] py-[0.3em] text-[0.85em] text-[#d3560f]">Plan it</span></div>
          <div className="mt-[4%] rounded-[1em] bg-white p-[4%] shadow-sm">
            <div className="flex items-center justify-between text-[0.9em]"><span className="text-black/60">Menu · Call</span><span className="text-[#d3560f]">Details →</span></div>
            <div className="mt-[0.8em] flex items-center justify-between rounded-[0.7em] border border-black/10 px-[0.8em] py-[0.9em] font-semibold"><span>Downtown <span className="font-normal text-black/40">, City</span></span><ChevronDown className="h-[1.1em] w-[1.1em]" /></div>
            <div className="mt-[0.9em] rounded-[0.8em] bg-[#ff5a00] py-[1em] text-center text-[1.05em] font-bold text-white">Reserve Table</div>
          </div>
          <p className="mt-[4%] text-[0.95em] font-semibold">Upcoming reservations</p>
          <div className="absolute inset-x-[4%] bottom-[2.5%] flex items-center justify-around rounded-[1.2em] bg-white py-[0.9em] text-[0.7em] shadow-md">
            {[[Calendar, 'Reserve', true], [UtensilsCrossed, 'Catering'], [Smile, 'Rewards'], [ShoppingBasket, 'Delivery']].map(([I, t, on]) => (
              <span key={t} className={`flex flex-col items-center gap-[0.3em] ${on ? 'text-[#ff5a00]' : 'text-black/70'}`}><I className="h-[2em] w-[2em]" />{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioCTA() {
  const reduce = useReducedMotion();
  const rise = (d = 0) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -10% 0px' }, transition: { duration: 0.8, delay: d, ease } });
  return (
    <section aria-labelledby="pcta-title" className="bg-white section-x pb-[clamp(110px,14vw,200px)] pt-[clamp(40px,6vw,90px)]">
      <div className="pcta relative mx-auto max-w-[1260px]">
        <motion.div
          {...rise(0)}
          className="pcta-banner relative rounded-[8px] bg-[#3a120c] bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(90deg, rgba(10,4,8,0.15), rgba(10,4,8,0.35)), url('/images/cta-silk.webp')" }}
        >
          <div className="relative z-10 flex h-full flex-col justify-between gap-8 p-7 pr-7 sm:p-10 lg:w-[62%] lg:p-[clamp(32px,4.6vw,64px)]">
            <div>
              <h2 id="pcta-title" className="text-[clamp(32px,3.9vw,56px)] font-normal leading-[1.15] tracking-[-0.03em] text-white">
                {c.title.map((l) => <span key={l} className="block">{l}</span>)}
              </h2>
              <p className="mt-6 max-w-[520px] text-[clamp(15px,1.25vw,18px)] leading-[1.6] text-white/90">{c.text}</p>
            </div>
            <Link href={c.cta.href} className="group inline-flex min-h-[58px] w-fit items-center gap-4 rounded-[4px] bg-[#fafafa] px-6 text-[17px] font-medium text-[#111] shadow-[0_1px_2px_rgba(0,0,0,0.12)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)] active:translate-y-0 active:scale-[0.98]">
              {c.cta.label}
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </motion.div>

        {/* the phone sits over the banner and runs past its top and bottom edges */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="pcta-phone-wrap relative z-20 mx-auto lg:absolute"
        >
          <div className="pcta-float"><Phone /></div>
        </motion.div>
      </div>
    </section>
  );
}
