import { site } from './site';

export const footer = {
  trust: 'Trusted by startups and growing businesses',
  headline: ['Stay Ahead With', 'Rudrix Insights'],
  description:
    'Get practical insights on design, development, e-commerce, and digital growth delivered straight to your inbox.',
  placeholder: 'name@email.com',
  trustedLabel: 'Built with',
  logos: ['React', 'Next.js', 'Node.js', 'MongoDB'],
  tagline: 'Software, web and product design for startups and growing businesses.',
  // Footer columns. Every href is an existing route.
  columns: [
    { title: 'Solutions', links: [
      { label: 'Custom Software', href: '/services/custom-software-development' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Shopify Development', href: '/services/shopify-development' },
      { label: 'WordPress Development', href: '/services/wordpress-development' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development' },
      { label: 'UX Audit', href: '/services/ux-audit' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'SEO', href: '/services/seo' },
    ] },
    { title: 'Company', links: [
      { label: 'About us', href: '/about' },
      { label: 'Our Process', href: '/our-process' },
      { label: 'Work', href: '/work' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' },
    ] },
    { title: 'Resources', links: [
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
      { label: 'All services', href: '/services' },
    ] },
    { title: 'Legal', links: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Use', href: '/legal/terms' },
      { label: 'Cookies', href: '/legal/cookies' },
      { label: 'Accessibility', href: '/legal/accessibility' },
    ] },
  ],
  contact: ['Working with clients worldwide', site.email],
  // Social buttons (icon files in /public/social). href '#' = placeholder: replace with the real Rudrix profile URL.
  socials: [
    { id: 'facebook', label: 'Facebook', href: '#' },
    { id: 'x', label: 'X', href: '#' },
    { id: 'linkedin', label: 'LinkedIn', href: '#' },
    { id: 'instagram', label: 'Instagram', href: '#' },
    { id: 'upwork', label: 'Upwork', href: '#' },
    { id: 'clutch', label: 'Clutch', href: '#' },
    { id: 'goodfirms', label: 'GoodFirms', href: '#' },
    { id: 'dribbble', label: 'Dribbble', href: '#' },
    { id: 'behance', label: 'Behance', href: '#' },
  ],
  copyright: '© 2026 Rudrix. All rights reserved.',
  credit: 'Rudrix — Digital Design & Development',
  // Two vertical tickers (like the reference): column A drifts up, column B drifts down.
  // Each entry is a demo poster rendered by components/PosterCard.jsx.
  collage: {
    secondsPerLoop: 60,
    columnA: ['web', 'shopify', 'code', 'uiux'],
    columnB: ['seo', 'launch', 'brand', 'cta'],
  },
};
