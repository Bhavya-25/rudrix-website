import { projects as realProjects } from './projects';

export const work = {
  heading: 'Recent work',
  intro:
    'A selection of real websites and platforms we have built, from CRMs and trading platforms to pharmacy and agency sites.',
  // Home shows the first projects of the shared list (data/projects.js).
  count: 4,
};

// Work page hero: four layered project visuals (back to front), each with its own outline colour.
// Swap the images for real project screenshots whenever you have them.
export const portfolioHero = {
  word: 'PORTFOLIO',
  title: 'Digital Work. Real Outcomes.',
  text: 'Digital experiences crafted to solve problems, engage people, and move businesses forward.',
  stack: [
    { src: '/images/work/04-nexaflow.webp', alt: 'Workflow software interface on a screen', color: '#4a6cff' },
    { src: '/images/work/03-scalecommerce.webp', alt: 'Online store product page on a laptop', color: '#ff5a00' },
    { src: '/images/work/02-healthsync.webp', alt: 'Healthcare app on a phone held by a doctor', color: '#b3a6ff' },
    { src: '/images/work/01-finora.webp', alt: 'Mobile banking app shown on a smartphone', color: '#1d4a2a' },
  ],
};

// Work page stats strip: only facts from the company brief (no invented results).
export const workStats = [
  { value: 4, suffix: '+', label: 'Years Building Products' },
  { value: 8, suffix: '', label: 'Services Offered' },
  { value: 4, suffix: '', label: 'Core Markets' },
  { value: 5, suffix: '', label: 'Steps From Call To Launch' },
];

// Selected Projects (Work page). These four are CONCEPT projects (not real clients): replace the copy, images and
// links with approved case studies as they become available. No results or metrics are claimed.
export const conceptCases = {
  eyebrow: 'SELECTED PROJECTS',
  title: 'Work That Speaks for Itself.',
  text: "Explore digital experiences we've crafted across industries, from e-commerce to enterprise.",
  empty: 'No projects match these filters yet.',
};

// Work page closing CTA. The phone shows a generic DEMO interface (no real client).
export const portfolioCta = {
  title: ['Let’s Build Your', 'Next Success Story'],
  text: "We're ready to help you create impactful digital experiences.",
  cta: { label: 'Book Free Consultation', href: '/contact' },
};

// "Trusted & Recognized": Rudrix's presence on design/freelance platforms. No awards, ratings or follower
// counts are claimed. Add the real profile URL to make a card a link (empty = card is not a link).
export const recognition = {
  eyebrow: 'TRUSTED & RECOGNIZED.',
  title: ['Find Our Work Across Leading ', 'Design & Freelance Platforms, ', 'Where We Share Thoughtful Design, Reliable Development And Digital Products.'],
  profiles: {
    dribbble: { url: '', label: 'Design Portfolio', text: 'Selected digital product and UI/UX work.', accent: '#ea4c89', logo: '/platforms/dribbble.svg' },
    behance: { url: '', label: 'Creative Portfolio', text: 'Selected creative and digital experiences.', accent: '#1769ff', logo: '/platforms/behance.svg' },
    upwork: { url: '', label: 'Freelance Profile', text: 'Software development, design and eCommerce services.', accent: '#14a800', logo: '/platforms/upwork.svg' },
  },
  // Fan of 7 cards, left → right. `k` links to a profile; plain cards are decorative service tiles.
  fan: [{ k: 'dribbble' }, { k: 'upwork', center: true }, { k: 'behance' },{ k: 'dribbble' }, { k: 'upwork', center: true }, { k: 'behance' }],

};

export const workingProcess = {
  eyebrow: 'WORKING PROCESS',
  title: ['From First Thought', 'To Final Launch'],
  text: 'A clear, collaborative process that keeps your project moving—and you in the loop.',
  image: '/images/why-us-design.webp',
  alt: 'A Rudrix team member smiling during a planning conversation with colleagues',
  cta: { lead: ['Let’s Start', 'with a free call'], label: 'Book Free Consultation', href: '/contact' },
  steps: [
    { number: '01', title: 'Discovery', description: 'We learn what you’re solving, who you’re solving it for, and what success looks like.' },
    { number: '02', title: 'Strategy & Scope', description: 'We define the right direction, deliverables, timeline, and priorities before design begins.' },
    { number: '03', title: 'Design', description: 'We turn the strategy into high-fidelity experiences, shaped by your feedback.' },
    { number: '04', title: 'Development', description: 'We bring the approved designs to life with clean, reliable development.' },
    { number: '05', title: 'QA & Testing', description: 'We test across devices, browsers, and key user journeys before launch.' },
    { number: '06', title: 'Launch & Support', description: 'We launch with care, then stay close for improvements, fixes, and ongoing support.' },
  ],
};

// Work page "Selected Projects": real projects from data/projects.js (shared with the Home work stack).
export const selectedProjects = {
  eyebrow: conceptCases.eyebrow,
  title: conceptCases.title,
  text: 'A selection of the websites and platforms we have built.',
  empty: conceptCases.empty,
  projects: realProjects,
};
