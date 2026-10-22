import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import WhatsAppButton from '@/components/WhatsAppButton';
import MotionProvider from '@/components/MotionProvider';
import GoogleTagManager from '@/components/GoogleTagManager';
import { SITE_URL } from '@/lib/siteUrl';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = SITE_URL;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Rudrix | Custom Software & Web Development Company',
  description:
    'Rudrix helps startups and growing businesses design, build, and scale digital products. We specialize in custom software, SaaS, and web development.',
  alternates: { canonical: '/' },
  // Google Search Console HTML-tag verification (optional; a DNS TXT record on the domain is the preferred method)
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } } : {}),
  openGraph: {
    title: 'Rudrix | Custom Software & Web Development Company',
    description: 'Rudrix helps startups and growing businesses design, build, and scale digital products. We specialize in custom software, SaaS, and web development.',
    type: 'website',
    siteName: 'Rudrix',
    url: '/',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Rudrix: software that solves real business problems' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-default.png'], title: 'Rudrix | Custom Software & Web Development Company', description: 'Custom software, web applications and digital products, designed and built around real business problems.' },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <noscript><style>{'[style*="opacity: 0"]{opacity:1!important;transform:none!important}'}</style></noscript>
        <MotionProvider>{children}</MotionProvider>
        <WhatsAppButton />
        <GoogleTagManager />
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Rudrix', url: siteUrl }} />
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Rudrix', url: siteUrl, email: 'info@rudrix.co.in', description: 'Software development agency building custom software, web applications and digital products.' }} />
      </body>
    </html>
  );
}
