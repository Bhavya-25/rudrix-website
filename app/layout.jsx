import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import MotionProvider from '@/components/MotionProvider';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rudrix.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Software Development Agency for Startups & Growing Businesses | Rudrix',
  description:
    'Rudrix designs and builds custom software, web applications and digital products for startups and growing businesses. Talk to our team about your project.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Software Development Agency for Startups & Growing Businesses | Rudrix',
    description: 'Custom software, web applications and digital products, designed and built around real business problems.',
    type: 'website',
    siteName: 'Rudrix',
    url: '/',
  },
  twitter: { card: 'summary_large_image', title: 'Software Development Agency for Startups & Growing Businesses | Rudrix', description: 'Custom software, web applications and digital products, designed and built around real business problems.' },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Rudrix', url: siteUrl }} />
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Rudrix', url: siteUrl, email: 'info@rudrix.co.in', description: 'Software development agency building custom software, web applications and digital products.' }} />
      </body>
    </html>
  );
}
