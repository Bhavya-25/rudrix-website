import { site } from './site';

// Content for the Contact page. Anything set to null/'' is hidden until you fill it in.
export const contact = {
  email: site.email,
  phone: '', // e.g. '+1 000 000 0000' (hidden while empty)
  hours: '', // e.g. 'Mon–Fri, 9:00–18:00 IST' (hidden while empty)
  location: 'Working remotely with clients worldwide',
  hero: {
    eyebrow: 'GET IN TOUCH',
    title: ['Let’s Build Something', 'Worth Building.'],
    text: "Have an idea, a product that needs improving, or a business problem that software could solve? Tell us what you're working on. We'll help you figure out the next step.",
    image: { src: '/images/why-us-strategy.webp', alt: 'Two Rudrix team members talking through a product plan with a notebook and laptop' },
  },
  benefits: [
    { title: 'Hands-On Team', text: 'You work directly with the people building your product.' },
    { title: 'Confidential Conversations', text: 'Need an NDA before you share details? Tell us and we’ll sign one first.' },
    { title: 'Clear Communication', text: 'Regular updates, direct contact, and no unnecessary layers.' },
    { title: 'Practical Advice', text: 'We focus on what your product actually needs, not what sounds impressive.' },
    { title: 'Flexible Engagement', text: 'A project, an MVP, ongoing development, or long-term support.' },
    { title: 'Post-Launch Support', text: 'We can keep improving and maintaining your product after launch.' },
  ],
  form: {
    heading: 'Let’s Talk About Your Project.',
    text: "You don't need to have everything figured out before reaching out. Tell us what you're trying to achieve, where you're stuck, or what you'd like to build. We'll take it from there.",
    cta: 'Start a Conversation',
    success: "Thanks for reaching out. We've received your project details and will get back to you shortly.",
    services: ['Custom Software Development', 'Web Development', 'SaaS Development', 'UI/UX Design', 'eCommerce Development', 'Shopify Development', 'WordPress Development', 'Mobile App Development', 'MVP Development', 'Maintenance & Support', 'Other'],
    budgets: ['Not sure yet', 'Under $5,000', '$5,000 – $10,000', '$10,000 – $25,000', '$25,000+', 'Prefer to discuss'],
    timelines: ['ASAP', 'Within 1 month', '1–3 months', '3–6 months', 'Flexible'],
  },
  trust: { heading: 'Built with tools we trust.', text: 'The technology we use most for websites, web apps, stores and products.', stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'GraphQL', 'Shopify', 'WordPress', 'Strapi'] },
  expertise: {
    eyebrow: 'WHAT WE DO',
    heading: 'Built Around What Your Product Actually Needs.',
    text: 'From product thinking and interface design to engineering and ongoing support, we bring the right capabilities together around one goal: building software that works for your business.',
    items: [
      { icon: 'layers', title: 'Product Strategy', text: 'Turning business problems into clear product direction.', href: '/services/mvp-development' },
      { icon: 'design', title: 'UI/UX Design', text: 'Designing interfaces that are simple, useful, and built around real users.', href: '/services/ui-ux-design' },
      { icon: 'code', title: 'Software Development', text: 'Building reliable frontend, backend, APIs, and integrations.', href: '/services/custom-software-development' },
      { icon: 'bag', title: 'eCommerce', text: 'Creating and improving Shopify, WooCommerce, and custom commerce experiences.', href: '/services/ecommerce-development' },
      { icon: 'cube', title: 'MVP Development', text: 'Turning early ideas into focused, usable products without unnecessary complexity.', href: '/services/saas-development' },
      { icon: 'phone', title: 'Growth & Support', text: 'Improving, maintaining, and evolving products after launch.', href: '/services/software-maintenance-and-support' },
    ],
  },
  visual: { src: '/images/why-us-design.webp', alt: 'A design team sharing ideas over a tablet', quote: 'Before we build anything, we make sure we’re solving the right problem.' },
  faq: {
    eyebrow: 'QUESTIONS?',
    heading: 'The Answers You’re Probably Looking For.',
    text: "Still figuring things out? That's completely fine. Here are some of the questions we hear most often.",
    items: [
      { q: 'Do I need to have the complete project specification ready?', a: "No. You can come to us with an idea, a business problem, an existing product, or even a rough concept. We'll help turn what you have into a clearer technical and product direction." },
      { q: 'What happens after I submit the form?', a: 'We review your project details and get back to you with the next step. Depending on the project, that may be a short call, a few clarification questions, or a deeper discussion about scope and priorities.' },
      { q: 'Can you work with an existing product or codebase?', a: "Yes. We can work with existing websites, applications, eCommerce stores, APIs, and codebases. We'll first understand the current setup before recommending changes." },
      { q: 'Can you sign an NDA?', a: 'If your project requires confidentiality, we can discuss an NDA before sharing sensitive information or beginning deeper project discussions.' },
      { q: 'Do you work with startups?', a: 'Yes. We work with early-stage teams as well as established businesses. For startups, we focus on building the smallest useful version of the product without sacrificing the foundation needed for future growth.' },
      { q: 'Can you provide ongoing support after launch?', a: 'Yes. Depending on your needs, we can continue with maintenance, improvements, new features, performance work, and ongoing development.' },
      { q: 'Do you work with international clients?', a: 'Yes. Rudrix can work remotely with businesses and teams across different locations and time zones.' },
    ],
  },
  cta: { heading: ['Ready to build', 'something better?'], text: "Tell us what you're working on. We'll help you figure out what comes next.", primary: { label: 'Start a Conversation', href: '#project-form' }, secondary: { label: 'View Our Work', href: '/#works' } },
};
