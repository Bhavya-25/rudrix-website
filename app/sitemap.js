import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';

// Replace with the real production domain via NEXT_PUBLIC_SITE_URL (https://rudrix.com is a placeholder default) [VERIFY BEFORE PUBLISHING]
const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://rudrix.com';
const legal = ['privacy', 'terms', 'cookies', 'accessibility'];

export default function sitemap() {
  const now = new Date();
  const pages = ['', '/about', '/services', '/work', '/our-process', '/testimonials', '/blog', '/faq', '/contact'];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })),
    ...blogPosts.map((b) => ({ url: `${base}/blog/${b.slug}`, lastModified: b.date, changeFrequency: 'yearly', priority: 0.6 })),
    ...legal.map((l) => ({ url: `${base}/legal/${l}`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 })),
  ];
}
