// Home "What we build" section. Tabs group the eight services (see data/services.js); cards are the capabilities in each.
export const capabilitiesIntro = ['What we build,', 'from first idea to support'];

export const cta = { label: "Have a product in mind? Let's talk", href: '#contact' };

export const custom = { title: 'Not sure where to start?', label: 'Start a conversation', href: '#contact' };

// Technology Rudrix actually works with (logo files in /public/tools, official brand colours).
export const toolCatalog = {
  react: { name: 'React', src: '/tools/react.svg' },
  next: { name: 'Next.js', src: '/tools/nextdotjs.svg' },
  node: { name: 'Node.js', src: '/tools/nodedotjs.svg' },
  mongodb: { name: 'MongoDB', src: '/tools/mongodb.svg' },
  graphql: { name: 'GraphQL', src: '/tools/graphql.svg' },
  tailwind: { name: 'Tailwind CSS', src: '/tools/tailwindcss.svg' },
  javascript: { name: 'JavaScript', src: '/tools/javascript.svg' },
  shopify: { name: 'Shopify', src: '/tools/shopify.svg' },
  wordpress: { name: 'WordPress', src: '/tools/wordpress.svg' },
  strapi: { name: 'Strapi', src: '/tools/strapi.svg' },
  figma: { name: 'Figma', src: '/tools/figma.svg' },
};

export const capabilities = [
  {
    id: 'software',
    title: 'Custom Software',
    icon: 'Bot',
    iconSrc: '/icons/tab-ai.svg',
    color: '#2fb36d',
    heading: 'Software built around how you work',
    description: 'We build software around the way your business actually works, not the other way around.',
    tools: ['react', 'next', 'node', 'mongodb', 'graphql'],
    services: [
      { icon: 'LayoutDashboard', title: 'Dashboards and reporting', text: 'Bring your data into one place so decisions stop depending on spreadsheets.' },
      { icon: 'UserCog', title: 'Internal tools', text: 'Software for operations, sales, support or finance teams.' },
      { icon: 'AppWindow', title: 'Customer and partner portals', text: 'Secure areas where each user sees the right information.' },
      { icon: 'Layers', title: 'Workflow systems', text: 'Move work between people without anyone chasing.' },
      { icon: 'Plug', title: 'Integrations and automation', text: 'Connect your tools and remove repetitive manual steps.' },
      { icon: 'Cpu', title: 'Maintenance and support', text: 'Bug fixes, updates and steady improvements after launch.' },
    ],
  },
  {
    id: 'web',
    title: 'Web & eCommerce',
    icon: 'Smartphone',
    iconSrc: '/icons/tab-apps.svg',
    color: '#e04fb4',
    heading: 'Websites and stores people enjoy using',
    description: 'Fast, responsive websites, web applications and online stores built with React, Next.js, Node.js, Shopify or WordPress.',
    tools: ['react', 'next', 'node', 'tailwind', 'shopify', 'wordpress', 'strapi'],
    services: [
      { icon: 'Globe', title: 'Business websites', text: 'Clear marketing sites that make it easy to get in touch.' },
      { icon: 'CodeXml', title: 'Web applications', text: 'Logged-in products with accounts, dashboards and real workflows.' },
      { icon: 'MonitorSmartphone', title: 'Website redesigns', text: 'Refresh an outdated site without losing the search traffic you have earned.' },
      { icon: 'ShoppingBag', title: 'Shopify and WooCommerce stores', text: 'Stores that are easier to buy from and easier to run.' },
      { icon: 'MousePointerClick', title: 'Product pages and checkout', text: 'Clear layouts and fewer steps between interest and purchase.' },
      { icon: 'Blocks', title: 'Performance and integrations', text: 'Fast pages, connected to the tools your business already uses.' },
    ],
  },
  {
    id: 'saas',
    title: 'SaaS & MVP',
    icon: 'PenTool',
    iconSrc: '/icons/tab-design.svg',
    color: '#f08a24',
    heading: 'From product idea to a working platform',
    description: 'We help founders turn product ideas into usable platforms, starting with the smallest useful version.',
    tools: ['react', 'next', 'node', 'mongodb', 'graphql', 'tailwind'],
    services: [
      { icon: 'Brain', title: 'Product discovery', text: 'Decide who it is for, what it solves first and what can wait.' },
      { icon: 'Cpu', title: 'MVP development', text: 'Build the smallest useful product and learn from real users.' },
      { icon: 'UserCog', title: 'Accounts and roles', text: 'Authentication, teams and permissions done properly from the start.' },
      { icon: 'LayoutDashboard', title: 'Dashboards and admin tools', text: 'The screens your users and your team rely on every day.' },
      { icon: 'Plug', title: 'Billing and integrations', text: 'Subscriptions, payment providers, email and the APIs around them.' },
      { icon: 'ArrowUpRight', title: 'Ongoing improvements', text: 'Release updates based on usage and customer feedback.' },
    ],
  },
  {
    id: 'design',
    title: 'Design & Mobile',
    icon: 'Laptop',
    iconSrc: '/icons/tab-web.svg',
    color: '#e5484d',
    heading: 'Design that helps people get things done',
    description: "Good UX isn't decoration. It reduces confusion, removes unnecessary steps and helps people get things done.",
    tools: ['figma', 'react', 'tailwind', 'javascript'],
    services: [
      { icon: 'SearchCheck', title: 'UX research and review', text: 'Find the points where people get stuck, and fix those first.' },
      { icon: 'Layers', title: 'User flows', text: 'Map the path from "I need something" to "done".' },
      { icon: 'MousePointerClick', title: 'Wireframes and prototypes', text: 'Test ideas cheaply before anyone writes code.' },
      { icon: 'Shapes', title: 'UI design and design systems', text: 'Clear, consistent interfaces that developers can build faster.' },
      { icon: 'Smartphone', title: 'Mobile apps (iOS and Android)', text: 'Designed and built together with the backend they need.' },
      { icon: 'TabletSmartphone', title: 'Developer handoff', text: 'Organised files and a designer available during the build.' },
    ],
  },
];
