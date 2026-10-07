// Testimonials page hero. Mosaic tiles are decorative stock/brand visuals, not client claims.
export const testimonialsHero = {
  eyebrow: 'CLIENT FEEDBACK & PROOF',
  title: ['What It’s Like To', 'Build With Rudrix'],
  text: 'Real feedback from the people we work with — founders, product teams, and businesses building better digital experiences with Rudrix.',
  cta: { label: 'Ready to Build Your Next Digital Product With Rudrix', href: '/contact' },
};

// w = tile width as a multiple of the row height. i = image, l = Rudrix wordmark tile, c = colour tile.
const i = (src, w, pos = '50% 40%') => ({ type: 'image', src, w, pos });
const l = (w = 1.1) => ({ type: 'logo', w });
const c = (tone, w = 0.9) => ({ type: 'color', tone, w });

export const mosaicRows = [
  { dir: 'left', speed: 70, tiles: [i('/images/hero-6.webp', 1.25), l(), i('/images/collage-2.webp', 0.85, '50% 25%'), i('/images/values/02-build-with-purpose.webp', 0.8, '50% 25%'), i('/images/hero-7.webp', 1.2), c('orange'), i('/images/why-us-design.webp', 1.1), i('/images/collage-5.webp', 0.85, '50% 30%'), i('/images/hero-8.webp', 1.15), l(1)] },
  { dir: 'right', speed: 85, tiles: [l(1.2), i('/images/hero-3.webp', 1.2), i('/images/values/04-grow-together.webp', 0.8, '50% 25%'), i('/images/hero-2.webp', 1.15), c('dark', 1), i('/images/results/t1.webp', 1.2), l(1), i('/images/inquiry.webp', 0.85, '50% 40%'), i('/images/hero-5.webp', 1.2), i('/images/collage-2.webp', 0.85, '50% 25%')] },
  { dir: 'left', speed: 78, tiles: [i('/images/values/01-think-beyond-code.webp', 0.8, '50% 25%'), i('/images/hero-4.webp', 1.2), l(1.1), i('/images/why-us-results.webp', 1.1), i('/images/collage-5.webp', 0.85, '50% 30%'), c('orange', 1), i('/images/hero-1.webp', 0.9), l(1.2), i('/images/why-us-strategy.webp', 1.1), i('/images/values/03-obsess-over-quality.webp', 0.8, '50% 25%')] },
  { dir: 'right', speed: 92, tiles: [i('/images/why-us-engineering.webp', 1.1), c('dark', 0.9), i('/images/hero-6.webp', 1.2), i('/images/values/02-build-with-purpose.webp', 0.8, '50% 25%'), l(1.2), i('/images/results/t2.webp', 1.2), i('/images/hero-7.webp', 1.15), c('orange', 0.9), i('/images/hero-8.webp', 1.15), l(1)] },
];

// UPWORK REVIEWS — PLACEHOLDER DATA. No real Rudrix Upwork reviews or rating were supplied yet.
// Replace each entry with an approved review (and set `placeholder: false`). While `rating` is null the
// card shows no score, and the badge shows "Client Reviews" instead of a number.
export const upworkReviews = {
  eyebrow: 'UPWORK REVIEWS',
  title: ['Exceptional Work', 'Speaks For Itself'],
  // Switch to "Verified feedback from clients we've worked with on Upwork—" once real reviews are added.
  text: 'Client feedback from projects delivered through Upwork—focused on development quality, communication, reliability, and delivering work that solves real business problems.',
  rating: null, // e.g. '4.9' once Rudrix's real Upwork rating is confirmed
  initial: 4,
  items: [
    { id: 'u1', placeholder: true, title: 'Frontend Development Integration and Support', date: 'Project dates', rate: '$XX/hr', hours: null, earned: '$X,XXX earned', rating: null, client: 'Verified Upwork Client', review: 'Placeholder review — replace with the client’s actual approved feedback from Upwork.', tags: ['Professional', 'Clear Communicator', 'Committed to Quality', 'Reliable', 'Detail Oriented'] },
    { id: 'u2', placeholder: true, title: 'Shopify Development & Optimization', date: 'Project dates', rate: '$XX/hr', hours: 'XXX hours', earned: '$X,XXX earned', rating: null, client: 'E-commerce Business Owner', review: 'Placeholder review — replace with the client’s actual approved feedback from Upwork.', tags: ['Responsive', 'Reliable'] },
    { id: 'u3', placeholder: true, title: 'Full-Stack Web Application Build', date: 'Project dates', rate: '$XX/hr', hours: 'XXX hours', earned: '$X,XXX earned', rating: null, client: 'Founder, SaaS Company', review: 'Placeholder review — replace with the client’s actual approved feedback from Upwork.', tags: ['Professional', 'Quality Focused', 'Great Communicator', 'On Time'] },
    { id: 'u4', placeholder: true, title: 'Mobile App UI Design & Development', date: 'Project dates', rate: '$XX/hr', hours: null, earned: '$X,XXX earned', rating: null, client: 'Verified Upwork Client', review: 'Placeholder review — replace with the client’s actual approved feedback from Upwork.', tags: ['Creative', 'Detail Oriented', 'Reliable'] },
    { id: 'u5', placeholder: true, title: 'Website Redesign and Performance Fixes', date: 'Project dates', rate: '$XX/hr', hours: 'XXX hours', earned: '$X,XXX earned', rating: null, client: 'Verified Upwork Client', review: 'Placeholder review — replace with the client’s actual approved feedback from Upwork.', tags: ['Professional', 'Responsive', 'Quality Focused'] },
    { id: 'u6', placeholder: true, title: 'API Integration and Backend Support', date: 'Project dates', rate: '$XX/hr', hours: null, earned: '$X,XXX earned', rating: null, client: 'Founder, Startup', review: 'Placeholder review — replace with the client’s actual approved feedback from Upwork.', tags: ['Reliable', 'Clear Communicator', 'On Time', 'Professional', 'Detail Oriented', 'Flexible'] },
  ],
};

// CLIENT STORY — PLACEHOLDER CONTENT. No approved Rudrix client story/metric was supplied yet.
// Replace headline, paragraphs, client and metric with approved copy, then set `placeholder: false`.
// `metric` stays null until there is a real, verified number (then e.g. { value: '3.2x', label: ['Increase in', 'qualified leads'] }).
export const clientStory = {
  placeholder: true,
  eyebrow: 'A CLIENT STORY WORTH SHARING',
  headline: '“They Didn’t Just Build Our Product. They Helped Us Build What Our Business Actually Needed.”',
  paragraphs: [
    'Placeholder testimonial — replace with the client’s actual approved feedback.',
    'This area is designed for two or three short paragraphs about the process, the quality of the work, and how the team communicated throughout the project.',
    'Add the client’s real words here once they have approved them.',
  ],
  client: { name: 'Client Name', role: 'Role, Company' },
  metric: null,
  fallbackMetric: { value: 'Built for Growth', label: 'A product designed around real business needs' },
  cta: { label: 'Read Full Case Study', href: '/work' },
  image: '/images/hero-7.webp',
  imageAlt: 'A laptop showing a product analytics dashboard',
};
