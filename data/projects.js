// Real projects, taken from OneUp_Upwork_Portfolio (Full Stack sheet) in the sheet's order.
// name / url / description / highlights are copied from the sheet; covers are the supplied mockup images.
// Mobile sheet rows were added the same way. Only projects with a verified cover are listed. Sheet rows with no cover image yet (Bybit, Aristocrat Interactive,
// Happy Techies and all WordPress / Shopify / Figma rows) are intentionally left out until their covers arrive.
export const projects = [
  {
    id: 'oneup-creatives', services: ['custom-software-development', 'web-development', 'website-development'], name: 'OneUp Creatives', category: 'Full Stack', url: 'https://oneupcreatives.com/',
    description: 'A sleek, high-performance creative agency website built with modern full-stack technologies. Features dynamic service showcases, animated UI components, contact workflows, and a CMS-backed portfolio — designed to convert visitors into clients.',
    highlights: ['CMS Portfolio', 'Animated UI', 'Lead Gen', 'SEO Optimised'],
    cover: '/images/projects/oneup-creatives.webp', color: '#d3560f', position: '50% 50%',
  },
  {
    id: 'brokerpad', services: ['custom-software-development', 'saas-development', 'web-development'], name: 'BrokerPad', category: 'Full Stack', url: 'https://brokerpad.in/',
    description: 'A comprehensive broker management dashboard for financial professionals. Enables real-time portfolio tracking, client onboarding automation, commission management, and regulatory reporting — built for speed and reliability.',
    highlights: ['Portfolio Tracker', 'Client Onboarding', 'Commission Mgmt'],
    cover: '/images/projects/brokerpad.webp', color: '#3b1650', position: '50% 50%',
  },
  {
    id: 'ts-trading-academy', services: ['custom-software-development', 'saas-development', 'web-development'], name: 'TS Trading Academy', category: 'Full Stack', url: 'https://tstradingacademy.com/',
    description: 'Full-featured online trading education platform with live and recorded course delivery, student progress tracking, subscription billing, webinar integrations, and a community forum — purpose-built for financial educators.',
    highlights: ['LMS', 'Subscription Billing', 'Webinar', 'Community Forum'],
    cover: '/images/projects/ts-trading-academy.webp', color: '#1c3a7d', position: '50% 50%',
  },
  {
    id: 'pocketpills', services: ['custom-software-development', 'web-development'], name: 'Pocketpills', category: 'Full Stack', url: 'https://www.pocketpills.com/',
    description: 'Described as a PIPEDA/HIPAA-compliant Canadian online pharmacy with e-prescribing, pharmacist chat, drug interaction checks, and auto refills.',
    highlights: ['E-Prescribing', 'PIPEDA Compliant', 'Pharmacist Chat', 'Auto Refills', 'Drug Interaction Check'],
    cover: '/images/projects/pocketpills.webp', color: '#4b2a8c', position: '50% 50%',
  },
  {
    id: 'autowerkstatt-krieter', services: ['web-development', 'website-development'], name: 'autowerkstatt-krieter', category: 'Full Stack', url: 'https://autowerkstatt-krieter.vercel.app/',
    description: 'Described as a Next.js/Vercel automotive workshop site with service booking, multi-language support, and optimized Core Web Vitals.',
    highlights: ['Next.js', 'Vercel Deploy', 'Service Booking', 'Multi-language', 'Core Web Vitals', 'Auto Workshop'],
    cover: '/images/projects/autowerkstatt-krieter.webp', color: '#0f2a5c', position: '50% 50%',
  },
    {
    id: 'matemart', services: ['mobile-app-development', 'ios-app-development'], name: 'MatemArt – Interior Design Hub', category: 'Mobile', url: 'https://apps.apple.com/in/app/matemart-interior-design-hub/id6468481096',
    description: 'iOS interior design marketplace app connecting homeowners with verified designers and premium furniture brands. Features AR room preview, mood board builder, instant quote requests, and in-app project collaboration tools.',
    highlights: ['AR Room Preview', 'Mood Board', 'Instant Quote', 'iOS Native'],
    cover: '/images/projects/matemart.webp', color: '#0f4a47', position: '50% 50%', width: 1200, height: 900,
  },
  {
    id: 'shopetell', services: ['mobile-app-development', 'ios-app-development'], name: 'Shopetell', category: 'Mobile', url: 'https://apps.apple.com/in/app/shopetell/id1662867235',
    description: 'Social commerce iOS app where users discover, share, and purchase products through short video reviews. Includes influencer storefronts, affiliate earnings dashboard, live shopping events, and integrated Stripe checkout.',
    highlights: ['Social Commerce', 'Video Reviews', 'Influencer Store', 'Live Shopping'],
    cover: '/images/projects/shopetell.webp', color: '#c2410c', position: '50% 50%', width: 1200, height: 900,
  },
  {
    id: 'whaot-snt', services: ['mobile-app-development', 'android-app-development'], name: 'Whaot SNT', category: 'Mobile', url: 'https://play.google.com/store/apps/details?id=ai.whaot.snt',
    description: 'AI-powered Android social networking and trading app. Combines community-driven investment insights, real-time market signals, portfolio sharing, and gamified leaderboard features — designed for the Gen-Z investor community.',
    highlights: ['AI Signals', 'Community Insights', 'Portfolio Share', 'Android'],
    cover: '/images/projects/whaot-snt.webp', color: '#4a1550', position: '50% 50%', width: 1504, height: 1003,
  },
  {
    id: 'buzzexpress', services: ['mobile-app-development', 'ios-app-development'], name: 'BuzzExpress – eGreeting Poster Maker', category: 'Mobile', url: 'https://apps.apple.com/us/app/buzzexpress-egreeting-poster/id6443772339',
    description: 'iOS app for creating stunning digital greeting cards and business marketing posters. Offers 1000+ customisable templates, branded content tools, WhatsApp/social sharing, and a subscription model for premium design assets.',
    highlights: ['1000+ Templates', 'Brand Tools', 'WhatsApp Share', 'Subscription'],
    cover: '/images/projects/buzzexpress.webp', color: '#1d5bbf', position: '50% 50%', width: 1504, height: 1003,
  }
];

// Every service page shows all projects. The ones that genuinely match the service (from the sheet descriptions, see `services`)
// come first, followed by the rest in sheet order.
export const projectsForService = (slug) => [
  ...projects.filter((p) => p.services.includes(slug)),
  ...projects.filter((p) => !p.services.includes(slug)),
];
