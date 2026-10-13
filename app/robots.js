import { SITE_URL } from '@/lib/siteUrl';

// Everything public is crawlable; API routes are not useful to crawl. Sitemap uses the canonical origin.
export default function robots() {
  return { rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }], sitemap: `${SITE_URL}/sitemap.xml` };
}
