import { whatsapp } from '@/data/site';

// Floating WhatsApp click-to-chat button, mounted once in app/layout.jsx so it appears on every page.
// Plain link (no client JS): opens WhatsApp with an editable prefilled message; nothing is sent automatically.
export default function WhatsAppButton() {
  const number = String(whatsapp.number || '').replace(/\D/g, '');
  if (number.length < 8) return null;
  const href = `https://wa.me/${number}?text=${encodeURIComponent(whatsapp.message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsapp.label}
      className="group fixed bottom-[max(20px,env(safe-area-inset-bottom))] right-[max(20px,env(safe-area-inset-right))] z-[60] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-[0_14px_30px_-8px_rgba(37,211,102,0.6)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-3 focus-visible:outline-[#128c4a] motion-reduce:transition-none sm:h-[60px] sm:w-[60px]"
    >
      <span aria-hidden className="pointer-events-none absolute right-[calc(100%+12px)] hidden whitespace-nowrap rounded-[8px] bg-[#111] px-3.5 py-2 text-[14px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 lg:block">
        {whatsapp.hint}
      </span>
      <svg viewBox="0 0 32 32" aria-hidden className="h-[30px] w-[30px] fill-current sm:h-[32px] sm:w-[32px]">
        <path d="M16.003 3C8.83 3 3 8.83 3 16.003c0 2.29.6 4.52 1.74 6.49L3 29l6.68-1.72a13 13 0 0 0 6.32 1.62h.003C23.17 28.9 29 23.07 29 15.9 29 12.43 27.65 9.17 25.2 6.72A12.9 12.9 0 0 0 16.003 3zm0 23.7h-.003a10.7 10.7 0 0 1-5.45-1.5l-.39-.23-3.97 1.02 1.06-3.87-.25-.4a10.67 10.67 0 0 1-1.64-5.7C5.36 10.1 10.12 5.34 16 5.34c2.85 0 5.52 1.11 7.53 3.13a10.58 10.58 0 0 1 3.12 7.54c0 5.88-4.78 10.69-10.65 10.69zm5.84-7.99c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.26-.19.21-.37.24-.7.08-.32-.16-1.35-.5-2.58-1.6-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.1 1.31 3.32.16.21 2.27 3.46 5.5 4.85.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </a>
  );
}
