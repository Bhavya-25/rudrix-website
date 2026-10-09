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

// VERIFIED CLIENT TESTIMONIALS (single source of truth).
// `screenshot` = original Upwork screenshot, shown ONLY on the Testimonials page. `review` = verbatim client text, shown as text
// everywhere else; null means the screenshot has no client comment, so no text card is made for it. Nothing here is invented.
export const clientTestimonials = [
  {
    id: 'riyaz-samad', name: 'Riyaz Samad', location: 'Germany', role: 'Germany',
    project: 'Full Stack Development for Cake Configurator', rating: 5,
    review: 'Very happy, Very fast communication and professional work',
    screenshot: '/images/testimonials/riyaz-samad-upwork.webp', width: 1492, height: 1418,
    alt: 'Upwork testimonial from Riyaz Samad for Cake Configurator development.',
  },
  {
    id: 'enrico', name: 'Enrico', location: 'Italy', role: 'Italy',
    project: 'UI/UX Designer & Front-End Specialist for AI Startup (React + Django)', rating: 5,
    // Verbatim second half of the client's review. The full review is visible in the screenshot.
    review: 'Bhavya was always professional, collaborative, and supportive throughout the project, and I would gladly consider working with him again for future developments under different conditions.',
    screenshot: '/images/testimonials/enrico-upwork.webp', width: 1486, height: 1080,
    alt: 'Upwork testimonial from Enrico for the UI/UX Designer and Front-End Specialist for AI Startup project.',
  },
  {
    id: 'vittorio', name: 'Vittorio', location: 'Italy', role: 'Italy',
    project: null, rating: 5,
    review: 'Great working with Bhavya, very proactive in trying to find concrete solutions.',
    screenshot: '/images/testimonials/vittorio-upwork.webp', width: 1292, height: 152,
    alt: 'Upwork testimonial from Vittorio: 5.0 rating, May 11, 2026.',
  },
  {
    id: 'cheyanne-harris', name: 'Cheyanne Harris', location: 'Texas, USA', role: 'Texas, USA',
    project: 'Web Designer/Developer', rating: 5,
    review: null, // the screenshot has the client's 5.0 rating but no written client comment (the comment shown there is the freelancer's)
    summary: 'Rated 5.0 on Upwork for Web Designer/Developer.',
    screenshot: '/images/testimonials/cheyanne-harris-upwork.webp', width: 1550, height: 1200,
    alt: 'Upwork testimonial from Cheyanne Harris for a web designer and developer project.',
  },
  {
    id: 'shubham-kukkar', name: 'Shubham Kukkar', location: null, role: 'CEO, OneUp Creatives',
    project: 'Logo Designing and Website Designing', rating: 5,
    review: 'I thoroughly enjoyed collaborating with Bhavya on our website redesign. His design skills are exceptional, and the final product exceeded my expectations.',
    screenshot: '/images/testimonials/shubham-kukkar-upwork.webp', width: 1502, height: 1596,
    alt: 'Upwork testimonial from Shubham Kukkar, CEO of OneUp Creatives, for logo and website design.',
  },
];

export const upworkReviews = {
  eyebrow: 'UPWORK REVIEWS',
  title: ['Exceptional Work', 'Speaks For Itself'],
  text: 'Verified feedback from clients we have worked with on Upwork, shown exactly as it appears on their review pages. Select a review to read it in full size.',
  rating: null,
  items: clientTestimonials,
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
