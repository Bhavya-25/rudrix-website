export const work = {
  heading: 'Recent work',
  intro:
    'Concept projects that show how we approach product design and development. Client case studies are added as projects are approved.',
  projects: [
    {
      number: '01',
      title: 'Finora',
      description:
        'A complete digital banking experience designed to make everyday financial management simpler, faster, and easier to understand across web and mobile.',
      client: 'Finora',
      services: ['Product Design', 'Web Development', 'Mobile Development'],
      image: '/images/work/01-finora.webp',
      alt: 'Mobile banking app on a smartphone held in one hand',
      position: '50% 50%',
      href: '#contact',
    },
    {
      number: '02',
      title: 'HealthSync',
      description:
        'A connected healthcare platform that brings patients, providers, and essential health information into one simple and intuitive digital experience.',
      client: 'HealthSync',
      services: ['UI/UX Design', 'Web Development', 'Backend Development'],
      image: '/images/work/02-healthsync.webp',
      alt: 'Doctor in a white coat using a healthcare app on a phone',
      position: '50% 50%',
      href: '#contact',
    },
    {
      number: '03',
      title: 'ScaleCommerce',
      description:
        'A scalable commerce platform built to streamline product management, improve customer journeys, and give growing brands a stronger foundation for digital sales.',
      client: 'ScaleCommerce',
      services: ['Shopify Development', 'Custom Development', 'Conversion Optimization'],
      image: '/images/work/03-scalecommerce.webp',
      alt: 'Customer paying with a phone at a modern retail counter',
      position: '60% 50%',
      href: '#contact',
    },
    {
      number: '04',
      title: 'NexaFlow',
      description:
        'A workflow platform that replaces fragmented processes with a faster, clearer and more connected experience for modern teams.',
      client: 'NexaFlow',
      services: ['Product Design', 'SaaS Development', 'Cloud Integration'],
      image: '/images/work/04-nexaflow.webp',
      alt: 'SaaS analytics dashboard open on a laptop',
      position: '50% 45%',
      href: '#contact',
    },
  ],
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
export const selectedProjects = {
  eyebrow: 'SELECTED PROJECTS',
  title: 'Work That Speaks for Itself.',
  text: "Explore digital experiences we've crafted across industries, from e-commerce to enterprise.",
  empty: 'No projects match these filters yet.',
  projects: [
    {
      id: 'finora', color: '#d3560f', title: 'Finora', industry: 'FinTech',
      description: 'Finora is a digital banking concept designed to make everyday money management simpler across web and mobile.',
      services: ['Product Design', 'Web Development', 'Mobile Development'],
      image: '/images/work/01-finora.webp', alt: 'Mobile banking app on a smartphone held in one hand', position: '50% 50%',
      challenge: 'Banking apps often bury everyday tasks behind long menus, so simple actions like checking a balance or sending money take too many steps.',
      solution: 'A clearer home screen built around the most common tasks, with consistent navigation across the web and mobile apps.',
      cta: { label: 'Discuss a similar project', href: '/contact' },
    },
    {
      id: 'healthsync', color: '#1666d9', title: 'HealthSync', industry: 'Healthcare',
      description: 'HealthSync is a connected healthcare platform concept that brings patients, providers and health information into one place.',
      services: ['UI/UX Design', 'Web Development', 'Backend Development'],
      image: '/images/work/02-healthsync.webp', alt: 'Doctor in a white coat using a healthcare app on a phone', position: '50% 40%',
      challenge: 'Patient information often lives in separate systems, which makes it hard for people and providers to see the full picture.',
      solution: 'One simple, role-based experience for patients and providers, backed by a structure that connects the underlying data.',
      cta: { label: 'Discuss a similar project', href: '/contact' },
    },
    {
      id: 'scalecommerce', color: '#1d3520', title: 'ScaleCommerce', industry: 'E-commerce',
      description: 'ScaleCommerce is an online store concept built to be easy to shop and easy for a small team to manage.',
      services: ['Shopify Development', 'Custom Development', 'Conversion Optimization'],
      image: '/images/work/03-scalecommerce.webp', alt: 'Online store product page on a laptop', position: '50% 50%',
      challenge: 'Product pages and checkout added friction, and the store was awkward for the team to update and keep in sync with inventory.',
      solution: 'Clearer product pages, a shorter checkout and custom Shopify sections that let the team manage content without a developer.',
      cta: { label: 'Discuss a similar project', href: '/contact' },
    },
    {
      id: 'nexaflow', color: '#132f63', title: 'NexaFlow', industry: 'SaaS',
      description: 'NexaFlow is a workflow software concept that helps teams plan, track and connect their day-to-day work.',
      services: ['Product Design', 'SaaS Development', 'Cloud Integration'],
      image: '/images/work/04-nexaflow.webp', alt: 'Workflow software interface on screen', position: '50% 50%',
      challenge: 'Teams juggled several tools and spreadsheets, so work status was scattered and hard to trust.',
      solution: 'A focused product with accounts, dashboards and integrations that bring status and tasks into one clear view.',
      cta: { label: 'Discuss a similar project', href: '/contact' },
    },
  ],
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
