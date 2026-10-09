// Central, editable content for the Rudrix site.
export const site = {
  name: 'Rudrix',
  status: 'Available for New Projects',
  email: 'info@rudrix.co.in',
};

// Floating WhatsApp button. Set the business number in ONE place: either here or via NEXT_PUBLIC_WHATSAPP_NUMBER.
// International format, digits only: country code + number, no "+", spaces or brackets (e.g. 919876543210).
// While the number is empty the button is not rendered, so there is never a dead or fake link.
export const whatsapp = {
  number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919888792614',
  label: 'Chat with Rudrix Digital Solutions on WhatsApp',
  hint: 'Chat with us',
  message: 'Hi Rudrix Digital Solutions, I visited your website and would like to discuss a project.',
};

export const nav = [
  { label: 'Works', href: '/work' },
  { label: 'Services', href: '/services', mega: true },
  { label: 'Why Rudrix', href: '/about', why: true },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export const whyMenu = {
  heading: 'WHY RUDRIX',
  items: [
    { label: 'About Us', sub: 'Who we are', href: '/about', icon: 'users' },
    { label: 'Testimonials', sub: 'Trusted by clients', href: '/testimonials', icon: 'quote' },
    { label: 'Our Process', sub: 'From idea to launch', href: '/our-process', icon: 'process' },
  ],
  promo: { text: ['Let’s turn your idea into', 'a real product'], href: '/contact', image: '/images/why-us-design.webp' },
};

export const hero = {
  title: ['Software That Solves', 'Real Business Problems'],
  body:
    "We help startups and growing businesses design, build and improve digital products, from the first idea to a reliable product people actually want to use. One team handles the thinking, the design, the development and the support after launch.",
  secondary: { label: 'Explore Our Work', href: '#works' },
  primary: { label: "Let's Talk About Your Project", href: '#contact' },
  partnersLabel: 'Technology we build with',
  partners: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Shopify', 'WordPress', 'Tailwind CSS', 'GraphQL'],
  // Images ride a slowly rotating ring; the top arc peeks into the banner.
  ring: { count: 16, secondsPerTurn: 30 },
  images: [
    // Generic product visuals (dashboards, SaaS, custom websites): illustrative designs, not client work.
    { src: '/images/hero-ring/ring-1.webp', alt: 'SaaS analytics dashboard with revenue chart and key metrics' },
    { src: '/images/hero-ring/ring-2.webp', alt: 'Dark finance dashboard with balance chart, allocation and recent activity' },
    { src: '/images/hero-ring/ring-3.webp', alt: 'SaaS marketing website with headline, call-to-action buttons and a dashboard preview' },
    { src: '/images/hero-ring/ring-4.webp', alt: 'Project management timeline with tasks and progress' },
    { src: '/images/hero-ring/ring-5.webp', alt: 'Customer management table with status labels' },
    { src: '/images/hero-ring/ring-6.webp', alt: 'Custom agency website with a bold headline and project cards' },
    { src: '/images/hero-ring/ring-7.webp', alt: 'E-commerce admin dashboard with sales chart and recent orders' },
    { src: '/images/hero-ring/ring-8.webp', alt: 'Website editor with a block library and page preview' },
  ],
};

// Services mega menu: same three groups / items / one-line descriptions as the reference menu.
// Each item links to the closest existing Rudrix service page (confirm which of these Rudrix actually offers).
export const servicesMenu = [
  { name: 'DESIGN', items: [
    { label: 'Web App Design', sub: 'Scalable web interfaces', icon: 'AppWindow', href: '/services/web-app-design' },
    { label: 'Website Design', sub: 'Responsive modern websites', icon: 'LayoutPanelTop', href: '/services/website-design' },
    { label: 'UX Audit', sub: 'Identify UX Issues', icon: 'ScanSearch', href: '/services/ux-audit' },
    { label: 'Branding', sub: 'Memorable brand identities', icon: 'Palette', href: '/services/branding' },
    { label: 'App Design', sub: 'Intuitive mobile experiences', icon: 'Smartphone', href: '/services/app-design' },
    { label: 'UI/UX Design', sub: 'Seamless User Journeys', icon: 'Layers', href: '/services/ui-ux-design' },
  ] },
  { name: 'DEVELOPMENT', items: [
    { label: 'Shopify', sub: 'Custom Shopify stores', icon: 'ShoppingBag', href: '/services/shopify-development' },
    { label: 'WordPress', sub: 'Flexible WordPress solutions', icon: 'Globe', href: '/services/wordpress-development' },
    { label: 'Custom Plugin', sub: 'Tailored plugin solutions', icon: 'Puzzle', href: '/services/custom-plugin-development' },
    { label: 'No-Code Development', sub: 'Smart No-Code Solutions', icon: 'Blocks', href: '/services/no-code-development' },
    { label: 'Website Development', sub: 'Modern Web Solutions', icon: 'Laptop', href: '/services/website-development' },
  ] },
  { name: 'APP DEVELOPMENT', items: [
    { label: 'iOS App', sub: 'Native iPhone & iPad apps', icon: 'Apple', href: '/services/ios-app-development' },
    { label: 'Android App', sub: 'Native Android apps', icon: 'Tablet', href: '/services/android-app-development' },
    { label: 'Hybrid App', sub: 'End-to-end development', icon: 'TabletSmartphone', href: '/services/hybrid-app-development' },
  ] },
  { name: 'MARKETING', items: [
    { label: 'Digital Marketing', sub: 'Joined-up growth plans', icon: 'Megaphone', href: '/services/digital-marketing' },
    { label: 'SEO', sub: 'Sustainable search visibility', icon: 'Search', href: '/services/seo' },
    { label: 'PPC', sub: 'Smarter paid search', icon: 'MousePointerClick', href: '/services/ppc' },
    { label: 'Facebook Ads', sub: 'Reach the right audience', icon: 'Target', href: '/services/facebook-ads' },
    { label: 'Social Media', sub: 'Consistent brand presence', icon: 'Share2', href: '/services/social-media-marketing' },
  ] },
];
