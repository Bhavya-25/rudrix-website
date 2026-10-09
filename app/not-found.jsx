import Cta from '@/components/Cta';

export const metadata = { title: 'Page not found — Rudrix', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white section-x text-center text-ink">
      <p className="text-[15px] font-medium text-rudrix-strong">404</p>
      <h1 className="mt-4 text-[clamp(34px,6vw,64px)] font-medium leading-[1.05] tracking-[-0.04em]">This page could not be found</h1>
      <p className="mt-4 max-w-[480px] text-[17px] leading-[1.6] text-slate2">The link may be broken or the page may have moved.</p>
      <Cta href="/" className="mt-8">Back to home</Cta>
    </main>
  );
}
