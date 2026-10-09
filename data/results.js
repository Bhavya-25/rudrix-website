import { clientTestimonials } from './testimonials';

// Stats are placeholders (verify before launch); testimonials are the verified client reviews.
export const results = {
  eyebrow: '(Why clients choose Rudrix)',
  heading: 'Client Results',
  statsImage: '/images/results/stats.webp',
  stats: [
    { value: '4+', label: 'Years Building Products' },
    { value: '8', label: 'Services Under One Roof' },
    { value: '4', label: 'Core Markets Served' },
  ],
  // Verified client reviews (text only) from data/testimonials.js. Photos are decorative backgrounds, not the clients.
  testimonials: ['riyaz-samad', 'enrico', 'vittorio', 'cheyanne-harris', 'shubham-kukkar'].map((id, i) => {
    const c = clientTestimonials.find((t) => t.id === id);
    const bg = [
      { image: '/images/results/t1.webp', position: '50% 40%' },
      { image: '/images/results/t2.webp', position: '50% 45%' },
      { image: '/images/results/t3.webp', position: '50% 50%' },
    ][i % 3];
    return { ...bg, alt: '', quote: c.review || c.summary, quoted: !!c.review, name: c.name, role: c.role };
  }),
};
