// Central, editable content for the Rudrix site.
export const site = {
  name: 'Rudrix',
  status: 'Available for New Projects',
  email: 'info@rudrix.co.in',
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
    { src: '/images/hero-1.webp', alt: 'Engineer reviewing a tablet beside a server room' },
    { src: '/images/hero-2.webp', alt: 'Laptop showing source code on a clean desk' },
    { src: '/images/hero-3.webp', alt: 'Developers collaborating at laptops in an office' },
    { src: '/images/hero-4.webp', alt: 'Analytics dashboard with performance charts' },
    { src: '/images/hero-5.webp', alt: 'Engineer working on a laptop in a hardware lab' },
    { src: '/images/hero-6.webp', alt: 'Team working together around laptops' },
    { src: '/images/hero-7.webp', alt: 'Designer workspace with a laptop and notebook' },
    { src: '/images/hero-8.webp', alt: 'Close-up of code on a monitor' },
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
];
