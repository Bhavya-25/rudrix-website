import { clientTestimonials } from './testimonials';
// Copy for the About Us page and banner. Map pins mark the markets we work in (positions are % of the dotted map).
export const about = {
  kicker: 'About Rudrix',
  title: 'We Build Software Around Real Business Problems',
  lede:
    "Four years of building digital products has taught us something simple: the best software isn't the software with the most features. It's the software that makes the right things easier.",
  primary: { label: "Let's talk about your project", href: '/contact' },
  secondary: { label: 'See our work', href: '/#works' },
  // Facts from the company brief only: years of experience, services offered, markets served.
  stats: [
    { value: '4+', label: 'Years building digital products' },
    { value: '8', label: 'Services, from idea to support' },
    { value: '4', label: 'Core markets: USA, Canada, UK, Australia' },
    { value: '5', label: 'Steps from first call to launch' },
  ],
  offices: [
    { name: 'USA', x: 20.0, y: 31.22 },
    { name: 'Canada', x: 19.44, y: 19.38 },
    { name: 'United Kingdom', x: 46.81, y: 21.89 },
    { name: 'Australia', x: 84.44, y: 78.22 }
  ],
};

// "Predictable milestones" section: five-step process shown beside the intro and image card.
export const milestones = {
  eyebrow: 'PREDICTABLE MILESTONES',
  title: ['Strategy Before Syntax.', 'Purpose Before Pixel.'],
  text: 'Four years of building digital products has taught us that great software starts with understanding the problem, not writing the code.',
  image: { src: '/images/why-us-results.webp', alt: 'Rudrix software professional discussing a digital product with a client in a bright office' },
  quote: ["We don't build in isolation.", 'We build for how your business actually works.'],
  cta: { label: 'Work With Us', href: '/contact' },
  steps: [
    { number: '01', label: 'RESEARCH', title: 'DEEP UNDERSTANDING.', description: 'We understand your business, users, goals, and constraints before deciding what needs to be built.' },
    { number: '02', label: 'AUDIT', title: 'FINDING WHAT HOLDS YOU BACK.', description: 'We identify workflow gaps, UX friction, technical limitations, and opportunities to make the product work better.' },
    { number: '03', label: 'DESIGN', title: 'DESIGNED AROUND PEOPLE.', description: 'We turn product requirements into clear user flows and interfaces that are simple to understand and easy to use.' },
    { number: '04', label: 'BUILD', title: 'PRODUCTION-READY SOFTWARE.', description: 'We bring design and engineering together to build reliable frontend, backend, integrations, and scalable digital products.' },
    { number: '05', label: 'SCALE', title: 'IMPROVEMENT THAT CONTINUES.', description: 'After launch, we monitor, refine, and improve the product as users, requirements, and the business evolve.' },
  ],
};

// "Our expertise" section: six service areas, each linking to its service page.
export const expertise = {
  eyebrow: 'OUR EXPERTISE',
  title: ['Integrated Expertise.', 'Singular Focus.'],
  text: 'Cross-disciplinary teams building software that performs.',
  cta: { label: 'Work With Us', href: '/contact' },
  items: [
    { icon: 'design', title: 'UI/UX & Product Design', text: 'Research, user flows, prototypes and interfaces that are clear to use.', href: '/services/ui-ux-design' },
    { icon: 'code', title: 'Web Development', text: 'Fast, maintainable websites and web apps with React, Next.js and Node.js.', href: '/services/web-development' },
    { icon: 'layers', title: 'Custom Software', text: 'Dashboards, internal tools and portals built around how you work.', href: '/services/custom-software-development' },
    { icon: 'cube', title: 'SaaS & MVP Development', text: 'The smallest useful product first, on a foundation that can grow.', href: '/services/saas-development' },
    { icon: 'bag', title: 'eCommerce Development', text: 'Shopify, WooCommerce and custom stores that are easier to run.', href: '/services/ecommerce-development' },
    { icon: 'phone', title: 'Mobile App Development', text: 'iOS and Android apps designed together with the backend they need.', href: '/services/mobile-app-development' },
  ],
};

// "Our standards" accordion (four principles) with a wide image below.
export const standards = {
  eyebrow: 'OUR STANDARDS',
  title: ['Real Standards, Not', 'Corporate Buzzwords'],
  image: { src: '/images/why-us-engineering.webp', alt: 'Rudrix designers and developers working together on a product at a shared table' },
  banner: {
    title: 'Have a problem worth solving?',
    text: "Don't worry if you don't have the perfect brief yet. Tell us what's not working, what you're trying to build, or where you want to go next. We'll help you figure out what comes next.",
    cta: { label: 'Start a Conversation', href: '/contact' },
  },
  items: [
    { title: 'Problem-First Thinking', thumb: '/images/standards/01-problem-first.webp', description: 'We understand user friction and business goals before touching a single line of code.' },
    { title: 'Design + Technology Under One Roof', thumb: '/images/standards/02-one-roof.webp', description: 'Strategists, designers and developers work together, so what gets designed is what gets built.' },
    { title: 'Built Around Business Outcomes', thumb: '/images/standards/03-outcomes.webp', description: 'We build digital products around the results your business needs: faster work, happier customers and room to grow.' },
    { title: 'Long-Term Partnership', thumb: '/images/standards/04-partnership.webp', description: 'We stay involved after launch to keep your software updated, secure and improving.' },
  ],
};

// "Clients love" section: verified text testimonials from data/testimonials.js.
export const clients = {
  eyebrow: 'CLIENTS LOVE!!!',
  title: ['Trusted by businesses', 'across the globe'],
  text: "Don't just take our word for it — hear from the teams we've worked with.",
  link: { label: 'Explore Client Stories', href: '/#results' },
  // Countries shown in the ticker (UK and Canada removed; Germany, Brazil, Italy, India added).
  markets: [
    { name: 'Australia', flag: '/flags/au.svg' },
    { name: 'United States', flag: '/flags/us.svg' },
    { name: 'Germany', flag: '/flags/de.svg' },
    { name: 'Brazil', flag: '/flags/br.svg' },
    { name: 'Italy', flag: '/flags/it.svg' },
    { name: 'India', flag: '/flags/in.svg' },
  ],

  testimonials: clientTestimonials.map((t) => ({ type: 'text', quote: t.review || t.summary, quoted: !!t.review, name: t.name, role: t.role })),
};
