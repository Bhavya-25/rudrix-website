import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://rudrix.com';

export default function sitemap() {
  const pages = ['', '/about', '/services', '/blog', '/faq', '/contact', '/testimonials', '/our-process'];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, changeFrequency: 'monthly', priority: 0.8 })),
    ...blogPosts.map((b) => ({ url: `${base}/blog/${b.slug}`, lastModified: b.date, changeFrequency: 'yearly', priority: 0.6 })),
  ];
}
