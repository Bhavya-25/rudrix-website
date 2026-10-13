import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';
import { SITE_URL as base } from '@/lib/siteUrl';

const legal = ['privacy', 'terms', 'cookies', 'accessibility'];

// lastModified is only given where a real date exists (blog posts). Other pages omit it rather than claim "today".
export default function sitemap() {
  const pages = ['', '/about', '/services', '/work', '/our-process', '/testimonials', '/blog', '/faq', '/contact'];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, changeFrequency: 'monthly', priority: 0.8 })),
    ...blogPosts.map((b) => ({ url: `${base}/blog/${b.slug}`, lastModified: b.date, changeFrequency: 'yearly', priority: 0.6 })),
    ...legal.map((l) => ({ url: `${base}/legal/${l}`, changeFrequency: 'yearly', priority: 0.3 })),
  ];
}
