// The eight service pages. Copy follows RUDRIX_WEBSITE_CONTENT.md.
export const services = [
  {
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    menuLabel: 'Custom Software',
    group: 'Software',
    icon: 'Laptop',
    short: 'Dashboards, internal tools and portals built around how your business works.',
    seoTitle: 'Custom Software Development Company | Rudrix',
    description: 'Rudrix builds custom software around the way your business works: dashboards, internal tools, portals and integrations. Talk to our team about your project.',
    h1: 'Custom software development, built around how your business works',
    intro: ['We build software around the way your business actually works, not the other way around.'],
    problem: {
      heading: 'When off-the-shelf software stops fitting',
      text: 'Ready-made tools are a good starting point. But there is usually a moment when they start getting in the way:',
      points: [
        'Your team works around the tool instead of with it.',
        'Data lives in five places and nobody trusts any of them.',
        'People copy information between systems by hand.',
        'You need a process the tool simply does not support.',
        'It worked for ten customers and struggles with a hundred.',
        'Different people need to see and do different things, and the tool treats everyone the same.',
      ],
      after: "That's usually when custom software starts to pay for itself.",
    },
    offer: {
      heading: 'What we build',
      items: [
        { title: 'Dashboards and reporting', text: 'Pull your data into one place so decisions stop depending on spreadsheets.' },
        { title: 'Internal tools', text: 'Software for operations, sales, support or finance teams.' },
        { title: 'Customer and partner portals', text: 'Secure areas where each user sees the right information.' },
        { title: 'Workflow systems', text: 'Move work between people without anyone chasing.' },
        { title: 'Integrations and APIs', text: 'Connect the tools you already use so data moves on its own.' },
        { title: 'Automation', text: 'Remove repetitive manual steps and the mistakes that come with them.' },
        { title: 'Role-based systems', text: 'People only see and do what they should.' },
      ],
    },
    process: {
      heading: 'How a custom software project works',
      steps: [
        { title: 'We start with the work, not the software', text: 'We talk through how the process runs today: who does what, where it slows down, what goes wrong. Often the biggest gains come from simplifying the process before any code is written.' },
        { title: 'We scope the smallest useful version', text: 'Instead of a long wish list, we agree on the first release that makes a real difference, and plan what follows.' },
        { title: 'We build in short cycles', text: 'You see working software every couple of weeks, so changes happen while they are cheap.' },
        { title: 'We hand it over properly', text: 'Clean code, documentation and training, so you are never dependent on us to understand your own system.' },
      ],
    },
    tech: { heading: 'Technology', text: 'We usually build with React or Next.js on the front end, Node.js for the back end and APIs, and MongoDB or another database that fits your data. We will explain any choice in plain language and say so if another option suits you better.' },
    who: { heading: 'Is custom software right for you?', text: 'It is probably a good fit if your process is specific to your business, off-the-shelf tools need constant workarounds, and you expect to use the system for years. It may not be if a ready-made tool already covers 90% of what you need. We will tell you if that is the case.' },
    why: { heading: 'Why Rudrix for custom software', text: 'We start with your business, not a feature list. We design and build together, which avoids the gap between what was specified and what works. And we build things the next developer can understand, so you keep control of what you own.' },
    deliverables: 'Requirements and scope · User flows and interface designs · Working application · Integrations · Testing and fixes · Deployment · Documentation and handover · Optional ongoing support',
    faq: [
      { q: 'How much does custom software cost?', a: 'It depends on scope, complexity and integrations. A focused internal tool is a very different project from a multi-role platform. After an initial conversation we will give you a range and explain what drives it.' },
      { q: 'Can you connect it to our current tools?', a: 'Usually, yes. If the tools have APIs, we can integrate them. If they do not, we will tell you the options.' },
      { q: 'Who owns the code?', a: 'You do, once the work is paid for. We will document it clearly.' },
      { q: 'Can you improve software we already have?', a: 'Yes. We can review it, fix the biggest problems and keep building on it.' },
    ],
    cta: { heading: "Tell us what's slowing your team down", label: 'Start a Conversation' },
    related: ['web-development', 'ui-ux-design', 'software-maintenance-and-support'],
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    menuLabel: 'Web Development',
    group: 'Web & eCommerce',
    icon: 'Globe',
    short: 'Fast, maintainable websites and web applications with React, Next.js and Node.js.',
    seoTitle: 'Web Development Company: React & Next.js Websites and Apps | Rudrix',
    description: 'Rudrix builds fast, scalable websites and web applications with React, Next.js and Node.js. Responsive, SEO-friendly and easy to maintain.',
    h1: 'Web development for businesses that rely on their website',
    intro: ['Your website or web app is often the first and busiest place customers meet your business. We build ones that load quickly, work on every screen, and do not need a developer every time you want to change a headline.'],
    problem: {
      heading: 'What good web development looks like',
      text: '',
      points: [
        'Fast: pages that load quickly, because people leave slow sites.',
        'Responsive: built for phones first, then larger screens.',
        'Maintainable: clean code and a structure other developers can work with.',
        'Easy to find: semantic markup, sensible page structure and fast loading give search engines what they need.',
        'Connected: forms, payments, CRMs and other tools wired in properly.',
        'Ready to grow: add pages, features and users without a rebuild.',
      ],
      after: '',
    },
    offer: {
      heading: 'What we build',
      items: [
        { title: 'Business websites', text: 'Marketing sites that explain what you do clearly and make it easy to get in touch.' },
        { title: 'Web applications', text: 'Logged-in products with accounts, dashboards and real workflows.' },
        { title: 'Website redesigns', text: 'Updating an outdated site without losing the search traffic you have already earned.' },
        { title: 'Integrations and APIs', text: 'Connecting your site to the systems your business already uses.' },
      ],
    },
    process: {
      heading: 'How we approach a web project',
      steps: [
        { title: 'Plan the structure first', text: 'Before design, we map pages, content and what each page needs to do.' },
        { title: 'Design and build together', text: 'Designers and developers work side by side, so the design that is approved is the one that ships.' },
        { title: 'Build for performance from the start', text: 'Image handling, code splitting and caching are planned, not patched in later.' },
        { title: 'Test on real devices', text: 'Phones, tablets, different browsers and slower connections.' },
        { title: 'Launch and look after it', text: 'Deployment, monitoring and a plan for updates.' },
      ],
    },
    tech: { heading: 'The technology, and why', text: 'We build most projects with React and Next.js: React for interactive interfaces, Next.js for fast page loads, good search visibility and flexible routing. On the back end we use Node.js, with MongoDB or another database depending on your data, and REST or GraphQL APIs to connect everything. For content-heavy sites we can add a CMS like WordPress or Strapi so your team can edit pages themselves. If your project would be better served by a different stack, we will say so.' },
    who: { heading: "Who it's for", text: 'Businesses with an outdated or slow website, companies launching a new product online, product teams that need extra front-end and full-stack capacity, and agencies that need a dependable development partner.' },
    why: { heading: 'Why Rudrix for web development', text: 'We care about the things users feel: speed, clarity and ease of use. We will explain trade-offs in plain English, and we leave you with code and documentation you can hand to any competent developer.' },
    deliverables: 'Site structure and content plan · Responsive front end · APIs and integrations · CMS setup (if needed) · Performance and SEO basics · Deployment · Documentation',
    faq: [
      { q: 'Can you redesign our website without hurting our SEO?', a: 'Yes. We keep a record of your current pages and URLs, set up redirects where needed and keep what is already working.' },
      { q: 'Do you build with WordPress or custom code?', a: 'Both. WordPress suits many content sites. We use custom React or Next.js builds when you need more speed, flexibility or application features.' },
      { q: 'How long does a website take?', a: 'A focused marketing site can take a few weeks. Web applications take longer depending on features. We will give you an honest estimate after scoping.' },
      { q: 'Will we be able to update the site ourselves?', a: 'If you want that, yes. We will set up a CMS and show your team how to use it.' },
    ],
    cta: { heading: 'Talk to us about your website or web app', label: 'Start a Conversation' },
    related: ['ui-ux-design', 'custom-software-development', 'ecommerce-development'],
  },
  {
    slug: 'saas-development',
    name: 'SaaS Development',
    menuLabel: 'SaaS Development',
    group: 'Software',
    icon: 'Layers',
    short: 'From product idea to a working platform with accounts, billing and dashboards.',
    seoTitle: 'SaaS Development Company: From Idea to Working Product | Rudrix',
    description: 'We help founders and businesses turn SaaS ideas into usable platforms: product discovery, UX, architecture, MVP, billing, APIs and ongoing improvements.',
    h1: 'SaaS development, from first idea to a product people can use',
    intro: ['We help founders and businesses turn product ideas into usable SaaS platforms. That means more than writing code. It means deciding what the product needs to do first, designing it so people understand it, and building it on a foundation that can grow.'],
    problem: {
      heading: 'What makes SaaS different',
      text: 'A SaaS product is never finished. You will add features, change pricing, onboard bigger customers and fix things you did not expect. So the early decisions (architecture, user roles, data structure, how billing works) matter more than the first set of screens.',
      points: [],
      after: 'We help you make those decisions with the next two years in mind, not just launch day.',
    },
    offer: {
      heading: 'What we cover',
      items: [
        { title: 'Product discovery', text: 'Who is it for? What problem does it solve first? What can wait? We turn a big idea into a focused first release.' },
        { title: 'UX and interface design', text: 'Sign-up, onboarding, dashboards and the daily workflow, designed so new users get value quickly.' },
        { title: 'Architecture', text: 'How accounts, teams and data are structured, and how the system will handle more customers.' },
        { title: 'Core platform features', text: 'Authentication, user roles, dashboards, notifications, admin tools, subscriptions and billing.' },
        { title: 'APIs and integrations', text: "Connect to payment providers, email, analytics, CRMs and your customers' tools." },
        { title: 'Deployment and monitoring', text: 'Getting the product live reliably, with the visibility to know when something breaks.' },
        { title: 'Ongoing improvement', text: 'Releasing updates based on usage and customer feedback.' },
      ],
    },
    process: {
      heading: 'How we work with SaaS founders',
      steps: [
        { title: 'Short discovery phase', text: 'We agree on the first release before anything is built.' },
        { title: 'Design and build in short cycles', text: 'Working software you can put in front of real users early.' },
        { title: 'Launch', text: 'Deployment, monitoring and a plan for the first weeks of real usage.' },
        { title: 'Continue or hand over', text: 'We can continue as your product team, or hand over to your own developers with documentation that makes it smooth.' },
      ],
    },
    tech: { heading: 'Technology', text: 'We typically use React and Next.js for the interface, Node.js and APIs for the back end, and MongoDB or another database based on your data and reporting needs. For billing we integrate established payment providers rather than building payments from scratch. We do not promise a launch date before we understand the scope. Timelines depend on what is being built, and we would rather give you an honest range.' },
    who: { heading: 'Is a SaaS MVP the right first step?', text: 'For most new products, yes. Shipping a focused first version lets you test demand before investing in every feature.' },
    why: { heading: 'Why Rudrix for SaaS', text: 'We design and build together, which keeps the product coherent. We think about the business model as well as the screens. And we build the first version so you are not forced to rebuild it when you start to grow.' },
    deliverables: 'Product scope · UX and UI design · Architecture · MVP or full build · Billing and integrations · Admin tools · Deployment · Ongoing improvements',
    faq: [
      { q: 'How much does it cost to build a SaaS platform?', a: 'It depends on the number of user roles, the complexity of the workflow, integrations and billing needs. A focused first version costs far less than a full platform. We will help you scope the first release to a range that works.' },
      { q: 'Do you build multi-tenant SaaS?', a: 'Yes. We design for multiple customer accounts with separate data from the start, when your product needs it.' },
      { q: 'Can you take over a SaaS product that is already live?', a: 'Yes. We start with a review of the code, infrastructure and open issues, and then agree a plan.' },
      { q: 'Will I own the product?', a: 'Yes. The code and the product are yours.' },
    ],
    cta: { heading: 'Tell us about your SaaS idea', label: 'Start a Conversation' },
    related: ['mvp-development', 'ui-ux-design', 'software-maintenance-and-support'],
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX & Product Design',
    menuLabel: 'UI/UX Design',
    group: 'Design & Mobile',
    icon: 'PenTool',
    short: 'Research, user flows, prototypes and interfaces that help people get things done.',
    seoTitle: 'UI/UX Design Agency for Web & Product Design | Rudrix',
    description: 'Rudrix designs websites, web apps and SaaS products people can actually use: research, user flows, wireframes, UI design and developer-ready handoff.',
    h1: 'UI/UX design that helps people get things done',
    intro: ["Good UX isn't decoration. It reduces confusion, removes unnecessary steps and helps people get things done. We design websites, web applications and digital products that are clear to use and practical to build."],
    problem: {
      heading: 'Where UX problems show up',
      text: '',
      points: [
        "Visitors land on a page and don't know what to do next.",
        'New users sign up and never come back.',
        'Support gets the same questions every week.',
        'A form loses half the people who start it.',
        'The product has grown feature by feature, and now nothing quite fits together.',
      ],
      after: 'These are usually design problems, not marketing problems, and they are fixable.',
    },
    offer: {
      heading: 'What we do',
      items: [
        { title: 'UX research and review', text: 'We talk to users where we can, study how people move through the product and find the points where they get stuck.' },
        { title: 'User flows', text: 'We map the path from "I need something" to "done", and remove steps that do not earn their place.' },
        { title: 'Wireframes and prototypes', text: 'Low-cost sketches and clickable prototypes so ideas can be tested before anyone writes code.' },
        { title: 'UI design', text: 'Clear layouts, readable typography and consistent components, designed for the real content and real screens.' },
        { title: 'Design systems', text: 'A shared set of components and rules, so the product stays consistent as it grows and developers build faster.' },
        { title: 'Responsive design', text: 'Every screen planned for phones, tablets and desktops, not just scaled down.' },
        { title: 'Developer handoff', text: 'Organised files, specifications and a designer available to answer questions during the build.' },
      ],
    },
    process: {
      heading: 'How we work',
      steps: [
        { title: 'Start with the problem and the users', text: 'We agree who the design is for and what they need to get done.' },
        { title: 'Sketch the flows', text: 'Structure first, before colours and typography.' },
        { title: 'Test the riskiest idea early', text: 'A prototype in front of a few real people beats a long internal debate.' },
        { title: 'Move into UI design', text: 'Once the structure works, we design the interface and components.' },
        { title: 'Hand off and stay involved', text: 'Our designers sit alongside our developers, so what you approve is what gets built.' },
      ],
    },
    tech: { heading: 'Product design and web design', text: 'Product design covers web apps, dashboards and SaaS products, where usability and consistency matter most. Web design covers business websites, landing pages and stores, where clarity and trust matter most. The approach is similar. The priorities differ, and we adapt.' },
    who: { heading: "Who it's for", text: 'Founders defining a first product, product teams with a confusing interface, businesses with an outdated website, and development teams that need a designer who understands engineering.' },
    why: { heading: 'Why Rudrix for design', text: 'Our designers work with developers every day, so designs are realistic about what can be built and clear about what matters. We would rather design something simple that works than something complicated that impresses on a portfolio.' },
    deliverables: 'User flows · Wireframes · Interactive prototypes · Final UI designs · Component library or design system · Organised developer files',
    faq: [
      { q: 'Do you only design, or can you build it too?', a: 'Both. You can hire us for design only and hand it to your own developers, or have us design and build together.' },
      { q: 'Can you redesign an existing product?', a: 'Yes. We usually start with a UX review to find the biggest problems, then redesign in stages so the product keeps working.' },
      { q: 'What do I receive at the end?', a: 'Depending on scope: user flows, wireframes, interactive prototypes, final UI designs, a component library or design system, and organised files for developers.' },
      { q: 'Do you test designs with users?', a: 'Where possible. Even five short conversations can reveal problems that no amount of internal review will.' },
    ],
    cta: { heading: 'Talk to us about your design project', label: 'Start a Conversation' },
    related: ['web-development', 'saas-development', 'mvp-development'],
  },
  {
    slug: 'ecommerce-development',
    name: 'eCommerce Development',
    menuLabel: 'eCommerce',
    group: 'Web & eCommerce',
    icon: 'ShoppingBag',
    short: 'Shopify, WooCommerce and custom stores that are easier to buy from and easier to run.',
    seoTitle: 'eCommerce Development: Shopify, WooCommerce & Custom Stores | Rudrix',
    description: 'We build and improve online stores with Shopify, WooCommerce and custom development: clear product pages, simple checkout, solid integrations and fast performance.',
    h1: 'eCommerce development for stores that are easy to buy from and easy to run',
    intro: ['An online store has two audiences: the customer trying to buy, and the team trying to run the business. We build stores that work well for both.'],
    problem: {
      heading: 'What usually holds a store back',
      text: '',
      points: [
        "Product pages that don't answer the questions people have before they buy",
        'A slow store, especially on mobile',
        'A checkout with extra steps, surprises or confusing errors',
        'Stock, orders and customer data living in different tools that do not sync',
        'A theme that looks fine but cannot do what the business needs',
        'A back office that is painful for your team to use',
      ],
      after: 'None of these are mysteries. They are the things we look for first.',
    },
    offer: {
      heading: 'What we do',
      items: [
        { title: 'Shopify development', text: 'New stores, theme customisation, custom sections and apps, and migrations from other platforms.' },
        { title: 'WooCommerce development', text: 'Stores on WordPress for businesses that want more control and flexibility.' },
        { title: 'Custom eCommerce', text: "When a platform's limits get in the way (unusual pricing, subscriptions, complex catalogues), we build the missing pieces or a tailored store." },
        { title: 'Product and collection pages', text: 'Clear layouts, useful information, and photography and content placed where people look.' },
        { title: 'Checkout experience', text: 'Fewer steps, clear costs, sensible error messages and mobile-friendly payment.' },
        { title: 'Integrations', text: 'Inventory, shipping, accounting, email, CRM and marketing tools, connected so data moves on its own.' },
        { title: 'Performance and responsive design', text: 'Fast loading, optimised images and layouts built for phones first.' },
        { title: 'Content management', text: 'Make it easy for your team to add products, update pages and run promotions without a developer.' },
      ],
    },
    process: {
      heading: 'How we work',
      steps: [
        { title: 'Review', text: 'We look at your current store or plan and list the biggest friction points.' },
        { title: 'Agree what matters most', text: 'We pick the changes that will make the biggest difference first.' },
        { title: 'Design, build and test in short cycles', text: 'You see working pages as they come together.' },
        { title: 'Launch carefully', text: 'So orders are not disrupted. We do not promise sales increases. We improve the things within our control: clarity, speed and ease of use.' },
      ],
    },
    tech: { heading: 'Choosing between Shopify, WooCommerce and custom', text: 'Shopify is often the right start: it handles hosting, payments and security, so budget goes into the shopping experience. WooCommerce suits businesses that already use WordPress or want deeper control. Custom makes sense when your catalogue, pricing or workflow genuinely does not fit a platform. We will tell you which we would choose and why.' },
    who: { heading: "Who it's for", text: 'Store owners with a slow or hard-to-manage store, brands moving to a new platform, and businesses that need their shop connected to inventory, shipping or accounting tools.' },
    why: { heading: 'Why Rudrix for eCommerce', text: "We combine design and engineering, so product pages, checkout and back office are considered together. We'll recommend the simplest approach that meets your needs, not the biggest one." },
    deliverables: 'Store build or redesign · Theme or custom front end · Product and checkout design · Integrations · Performance work · Training for your team',
    faq: [
      { q: 'Can you migrate our store to Shopify?', a: 'Yes. We migrate products, customers and content, and set up redirects so you keep search visibility.' },
      { q: 'Can you add features to our existing store?', a: 'Yes, from small theme changes to custom functionality and integrations.' },
      { q: 'Will you guarantee more sales?', a: 'No one honestly can. We improve usability, speed and clarity, which gives your store the best chance to convert the traffic it already has.' },
      { q: 'Can you connect the store to our inventory system?', a: 'Often, yes. It depends on whether the system provides an API. We will check during scoping.' },
    ],
    cta: { heading: 'Tell us about your store', label: 'Start a Conversation' },
    related: ['ui-ux-design', 'web-development', 'software-maintenance-and-support'],
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    menuLabel: 'Mobile Apps',
    group: 'Design & Mobile',
    icon: 'Smartphone',
    short: 'iOS and Android apps designed together with the backend and APIs they need.',
    seoTitle: 'Mobile App Development Company: iOS & Android Apps | Rudrix',
    description: 'Rudrix plans, designs and builds mobile apps with the APIs and backend they need. From product strategy to testing and app store release.',
    h1: 'Mobile app development, planned around your product and your users',
    intro: ['A mobile app is only one part of a product. It needs a backend, an account system, sensible design for small screens and a plan for updates. We handle the whole picture so the app works well in the real world, not just in a demo.'],
    problem: {
      heading: 'First, do you need an app?',
      text: 'Sometimes the answer is yes: you need notifications, offline access, camera or location features, or your users live on their phones. Sometimes a well-built responsive web app does the job faster and cheaper.',
      points: [],
      after: 'We will help you decide before you commit.',
    },
    offer: {
      heading: 'What we cover',
      items: [
        { title: 'Product strategy', text: 'Who uses the app, what they do first, and what belongs in version one.' },
        { title: 'Mobile UX and interface design', text: 'Navigation, gestures and screens designed for thumbs and small displays.' },
        { title: 'App development', text: 'iOS, Android or both, using a cross-platform approach where it fits and native where it matters.' },
        { title: 'Backend and API integration', text: 'Connecting the app to your database, services and third-party tools.' },
        { title: 'Authentication and accounts', text: 'Secure sign-in, password reset, roles and permissions.' },
        { title: 'Push notifications', text: 'Useful, well-timed messages, not noise.' },
        { title: 'Testing', text: 'On real devices and operating system versions, including awkward network conditions.' },
        { title: 'Release and maintenance', text: 'App store submissions, updates and fixes after launch.' },
      ],
    },
    process: {
      heading: 'How we work',
      steps: [
        { title: 'Define the core journey', text: 'The one thing users must be able to do.' },
        { title: 'Prototype and test', text: 'We test it with a few people before building.' },
        { title: 'Build with working builds', text: 'You install working builds on your own phone throughout the project, so you are never guessing what the app feels like.' },
        { title: 'Test, release and support', text: 'App store submission and updates after launch.' },
      ],
    },
    tech: { heading: 'Technology', text: 'We choose between native development and cross-platform frameworks based on what the app needs: performance, device features, budget and team skills. On the backend we typically use Node.js with APIs and a database like MongoDB. We will explain the trade-offs in plain language.' },
    who: { heading: "Who it's for", text: 'Founders launching a first app, businesses adding a mobile experience to an existing product, and companies replacing a slow or outdated app.' },
    why: { heading: 'Why Rudrix for mobile apps', text: "We consider the backend and the app together, so there are fewer surprises later. We're honest about what's worth building first. And we don't disappear after the app store submission." },
    deliverables: 'Product scope · App design · iOS and/or Android build · API integration · Testing · App store submission · Maintenance',
    faq: [
      { q: 'Should I build iOS, Android or both?', a: 'It depends on where your users are. Many products start with one platform, or use a cross-platform approach to cover both. We will recommend based on your audience and budget.' },
      { q: 'Can you build the app for our existing web product?', a: 'Yes. We can reuse your existing APIs, or build the ones the app needs.' },
      { q: 'Do you handle app store submission?', a: 'Yes. We prepare the build, assets and submission, and help with review feedback.' },
      { q: 'What does an app cost?', a: 'It depends on features, platforms and backend work. We will give you a range after scoping a first version.' },
    ],
    cta: { heading: 'Tell us about your app idea', label: 'Start a Conversation' },
    related: ['mvp-development', 'ui-ux-design', 'saas-development'],
  },
  {
    slug: 'mvp-development',
    name: 'MVP Development',
    menuLabel: 'MVP Development',
    group: 'Software',
    icon: 'Cpu',
    short: 'The smallest useful version of your product, built so you can learn from real users.',
    seoTitle: 'MVP Development for Startups: Build the Right First Version | Rudrix',
    description: "An MVP isn't a smaller version of everything. Rudrix helps you find the smallest useful product, build it and learn from real users.",
    h1: 'MVP development: build the smallest useful version of your product',
    intro: ["An MVP shouldn't mean building a smaller version of everything. It means identifying the smallest useful product that can answer the biggest business questions."],
    problem: {
      heading: 'Why most MVPs go wrong',
      text: '',
      points: [
        'The "minimum" quietly grows until it is a full product with a long timeline.',
        'The team builds what is easy rather than what is riskiest to test.',
        'There is no plan for how to learn from the launch.',
        'It is built so quickly that it is not pleasant to use, and early users leave before they can give feedback.',
      ],
      after: 'A good MVP is small, focused and well-made enough that people actually use it.',
    },
    offer: {
      heading: 'How we scope an MVP',
      items: [
        { title: 'Define the question', text: 'What do you most need to learn? Will people pay? Will they come back? Can a certain workflow work?' },
        { title: 'Choose the core journey', text: 'The one path that proves the idea, from first visit to the moment the user gets value.' },
        { title: 'Decide what waits', text: 'We create a "later" list so ideas are not lost, just scheduled.' },
        { title: 'Agree success measures', text: 'Two or three signals you will review after launch, set before we build.' },
      ],
    },
    process: {
      heading: 'How it works',
      steps: [
        { title: 'Align', text: 'A short scoping session to agree the question, journey and scope.' },
        { title: 'Design and prototype', text: 'A clickable prototype you can show to potential users.' },
        { title: 'Build in short cycles', text: 'Working software you can review regularly.' },
        { title: 'Launch', text: 'Put it in front of real users.' },
        { title: 'Learn and iterate', text: 'Decide together what to improve, extend or drop.' },
      ],
    },
    tech: { heading: 'What we deliver', text: 'Product scope (what is in, what is out and why) · User flows and UI/UX design · A working, deployable product · Testing so first users do not hit obvious bugs · Launch support with basic analytics · A feedback review. We do not promise a fixed timeline before scoping. MVPs vary, but the discipline of small scope usually keeps them to weeks or a few months, not a year.' },
    who: { heading: "Who it's for", text: 'Founders testing a new product idea, businesses validating an internal tool before rolling it out, and teams that need to show something real to investors or customers.' },
    why: { heading: 'Why Rudrix for MVPs', text: 'We will push back on scope, because that is what protects your budget. We build the MVP on a structure that can grow, so a successful launch does not mean starting over.' },
    deliverables: 'Product scope · User flows and UI/UX · Working MVP · Testing · Launch support · Feedback review',
    faq: [
      { q: 'Should I build an MVP first?', a: 'Usually yes if you are testing a new idea or have a limited budget. If you already have paying customers and a clear roadmap, you may be past that stage.' },
      { q: 'Is an MVP just a prototype?', a: 'No. A prototype shows how something might work. An MVP is real software people can use.' },
      { q: 'Can we build on the MVP later?', a: 'Yes. That is the intent. We structure it so features can be added without a rewrite.' },
      { q: 'How much does an MVP cost?', a: 'It depends on the core journey and integrations. Because the scope is deliberately small, it is typically a fraction of a full product. We will give you a range after scoping.' },
    ],
    cta: { heading: "Let's scope your MVP", label: 'Start a Conversation' },
    related: ['saas-development', 'ui-ux-design', 'mobile-app-development'],
  },
  {
    slug: 'software-maintenance-and-support',
    name: 'Software Maintenance & Support',
    menuLabel: 'Maintenance & Support',
    group: 'Software',
    icon: 'Plug',
    short: 'Bug fixes, security updates, performance work and new features for live products.',
    seoTitle: 'Software Maintenance & Support Services | Rudrix',
    description: 'Keep your website or application secure, fast and improving. Rudrix provides bug fixes, security updates, performance work and feature development.',
    h1: 'Software maintenance and support for products that need to keep working',
    intro: ['Launching a product is the start of its life, not the end. Frameworks update, browsers change, users ask for things and small problems turn into big ones if nobody is watching. We help keep your product healthy and still improving.'],
    problem: {
      heading: 'Signs you need support',
      text: '',
      points: [
        'Nobody is sure who to call when something breaks.',
        'Updates have been postponed for months because "it might break something".',
        'Pages have slowed down and nobody knows why.',
        'The developer who built it has moved on.',
        'You have a long list of small fixes and improvements that never get done.',
      ],
      after: '',
    },
    offer: {
      heading: "What's included",
      items: [
        { title: 'Bug fixing', text: 'Reproduce, fix and test issues, with clear communication about cause and prevention.' },
        { title: 'Security updates', text: 'Keeping frameworks, libraries and plugins up to date and patched.' },
        { title: 'Monitoring', text: 'Watching uptime and errors so we notice problems before your customers do.' },
        { title: 'Performance improvements', text: 'Finding and fixing slow pages, heavy images and inefficient queries.' },
        { title: 'Feature development', text: 'New functionality, planned and delivered in small, regular releases.' },
        { title: 'Integrations', text: 'Connecting new tools or updating old connections.' },
        { title: 'UI and UX improvements', text: 'Small design changes that remove friction.' },
        { title: 'Technical clean-up', text: 'Reducing the code debt that makes every change slower.' },
      ],
    },
    process: {
      heading: 'How support works with us',
      steps: [
        { title: 'Review', text: 'A short review of your product: the code, hosting, dependencies and open issues.' },
        { title: 'Recommend', text: 'A support arrangement that fits: a monthly block of hours, a priority-based plan or one-off help.' },
        { title: 'Report and respond', text: 'A clear way to report issues, with response expectations agreed in writing.' },
        { title: 'Keep you informed', text: 'We tell you what we found and fixed in plain language.' },
      ],
    },
    tech: { heading: 'Taking over a product we did not build', text: 'Yes, we do that regularly. We begin with a technical review and tell you honestly what shape it is in, what is risky and what to fix first, before we change anything.' },
    who: { heading: "Who it's for", text: 'Businesses with a live website or application, startups that no longer have a development team, and agencies needing back-up for client products.' },
    why: { heading: 'Why Rudrix for support', text: 'We treat maintenance as engineering, not box-ticking. We document what we change, we keep you informed and we will tell you when something is not worth fixing.' },
    deliverables: 'Product review · Bug fixes · Updates and security patches · Monitoring · Performance work · New features',
    faq: [
      { q: 'Do you maintain websites you did not build?', a: 'Yes, after a review of the code and hosting.' },
      { q: 'Can I pay monthly?', a: 'Support is typically offered as a monthly arrangement, and one-off help is possible.' },
      { q: 'How quickly can you respond to urgent problems?', a: 'Response times depend on the support plan we agree. We will set those expectations in writing.' },
      { q: 'Can you also add new features?', a: 'Yes. Many clients use support time for steady improvement as well as fixes.' },
    ],
    cta: { heading: 'Talk to us about support', label: 'Start a Conversation' },
    related: ['custom-software-development', 'web-development', 'saas-development'],
  },
];

import { extraServices } from './serviceCatalog';
services.push(...extraServices);

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);

// Groups used by the mega menu.
export const serviceGroups = ['Software', 'Web & eCommerce', 'Design & Mobile'].map((name) => ({
  name,
  items: services.filter((s) => s.group === name),
}));

// Custom Software Development hero (service page). Proof row = capability labels only: no ratings, awards or client logos are claimed.
export const customSoftwareHero = {
  eyebrow: 'CUSTOM SOFTWARE DEVELOPMENT',
  title: ['Custom Software', 'Built Around Your', 'Business.'],
  text: 'We design and develop custom software around your workflows, users, and business goals — from internal platforms and dashboards to SaaS products, integrations, and full digital products.',
  primary: { label: 'Let’s Build Together', href: '/contact' },
  secondary: { label: 'Explore Our Work', href: '/work' },
  proof: ['Custom Software', 'UI/UX', 'Web Applications', 'Product Engineering'],
  image: '/images/why-us-strategy.webp',
  imageAlt: 'A laptop showing a business software dashboard during a working session',
  strip: ['Product', 'E-commerce', 'Healthcare', 'FinTech', 'SaaS', 'Enterprise', 'Startups', 'Web Apps', 'Mobile'],
};

// "Why custom software" section (Custom Software Development page). Qualitative only — no statistics or client claims.
export const customSoftwareWhy = {
  eyebrow: 'WHY CUSTOM SOFTWARE',
  title: ['Software Should Fit Your Business.', 'Not The Other Way Around.'],
  text: 'Off-the-shelf tools often make teams change the way they work. Custom software lets the product work around your people, processes, and goals — making complex tasks simpler and everyday work more efficient.',
  cta: { label: 'Discuss Your Idea', href: '/contact' },
  label: 'CUSTOM-BUILT / 01—04',
  outcomes: [
    { number: '01', title: 'Remove Friction', visual: 'friction', description: 'Replace unnecessary steps, repetitive work, and disconnected tools with workflows designed around how your team actually operates.', caption: 'LESS FRICTION' },
    { number: '02', title: 'Fit The Workflow', visual: 'workflow', description: 'Your business has its own rules, roles, approvals, and processes. The software should reflect them instead of forcing everyone into a generic system.', caption: 'SOFTWARE ADAPTS' },
    { number: '03', title: 'Make Complexity Clear', visual: 'clarity', description: 'Powerful software does not have to feel complicated. We turn complex data, systems, and workflows into interfaces people can understand quickly.', caption: 'ONE CLEAR VIEW' },
    { number: '04', title: 'Design For What’s Next', visual: 'evolve', description: 'Build beyond today’s requirement with a foundation that can evolve as your users, operations, integrations, and business grow.', caption: 'READY TO EVOLVE' },
  ],
};

// Industries marquee (Custom Software Development page). The four core markets Rudrix already lists; images are the site's concept-project visuals.
export const customSoftwareIndustries = {
  title: 'Industries We Build For',
  text: 'Every industry has unique challenges — our approach turns them into software people can use with confidence.',
  items: [
    { label: 'FinTech', image: '/images/work/01-finora.webp', position: '50% 40%' },
    { label: 'Healthcare', image: '/images/work/02-healthsync.webp', position: '50% 40%' },
    { label: 'E-commerce', image: '/images/work/03-scalecommerce.webp', position: '50% 40%' },
    { label: 'SaaS', image: '/images/work/04-nexaflow.webp', position: '50% 40%' },
  ],
};

// "What we build" capability canvas (Custom Software Development). Capabilities follow the page's existing offer list;
// no AI, cloud/DevOps, certification or specific-integration claims are made.
export const customSoftwareCapabilities = {
  eyebrow: 'WHAT WE BUILD',
  title: ['Everything Your Software Needs', 'To Work In The Real World.'],
  text: 'We bring product thinking, architecture, design, and engineering together to build software around your workflows, users, systems, and long-term goals.',
  cta: { label: 'Discuss Your Idea', href: '/contact' },
  label: 'BUILD SYSTEM / 01—06',
  closing: { text: 'Not sure what your product needs yet?', label: 'Let’s Figure It Out', href: '/contact' },
  items: [
    { number: '01', category: 'PRODUCT', title: 'Product Discovery & Workflow Mapping', description: 'Understand the business problem before deciding what the software should do.', points: ['Business workflows', 'User roles', 'Requirements', 'Product scope'], visual: 'workflow' },
    { number: '02', category: 'ARCHITECTURE', title: 'Software Architecture', description: 'Turn requirements into a technical foundation that can support the product as it grows.', points: ['System architecture', 'Database design', 'API structure', 'Technical planning'], visual: 'layers' },
    { number: '03', category: 'ENGINEERING', title: 'Custom Application Development', description: 'Build web applications, SaaS products, internal platforms and customer-facing systems around your actual workflow.', points: ['Web applications', 'SaaS platforms', 'Internal tools', 'Customer portals'], visual: 'app', featured: true },
    { number: '04', category: 'INTEGRATION', title: 'Integrations & APIs', description: 'Connect the software your business already depends on, so data moves on its own.', points: ['APIs', 'GraphQL', 'Third-party tools'], visual: 'connect' },
    { number: '05', category: 'AUTOMATION', title: 'Workflow Automation', description: 'Turn repetitive business processes into reliable software workflows.', points: ['Approvals', 'Notifications', 'Automated tasks', 'Role-based rules'], visual: 'automation' },
    { number: '06', category: 'DATA', title: 'Dashboards & Reporting', description: 'Pull your data into one place so decisions stop depending on spreadsheets.', points: ['Business dashboards', 'Reporting', 'Data-driven workflows'], visual: 'data' },
  ],
};

// "A look inside the software we build" gallery (Custom Software Development). Images are the site's existing visuals.
export const customSoftwareTour = {
  title: ['A Look Inside', 'The Software We Build'],
  text: 'From internal platforms and SaaS products to customer portals, marketplaces, and workflow systems, we build custom software around the people, processes, and goals that make your business unique.',
  cta: { label: 'Discuss Your Project', href: '/contact' },
  types: [
    { id: 'business', title: 'Business Management Platforms', description: 'Centralize operations, automate repetitive tasks, and give teams one clear system for managing the workflows that keep the business moving.', image: '/images/why-us-engineering.webp', alt: 'A colleague using a business management application on a laptop', position: '50% 78%' },
    { id: 'saas', title: 'SaaS & Multi-Tenant Products', description: 'Build scalable products with role-based access, subscriptions, dashboards, and experiences designed for different types of users.', image: '/images/work/04-nexaflow.webp', alt: 'A SaaS analytics dashboard on a laptop screen', position: '50% 45%' },
    { id: 'portals', title: 'Customer & Partner Portals', description: 'Create secure digital workspaces where customers, vendors, and partners can access information, submit requests, and manage interactions.', image: '/images/work/02-healthsync.webp', alt: 'A portal interface on a laptop', position: '50% 40%' },
    { id: 'marketplace', title: 'Marketplace & Multi-Vendor Platforms', description: 'Bring buyers, sellers, products, orders, and operations together inside one connected marketplace.', image: '/images/work/03-scalecommerce.webp', alt: 'A marketplace storefront being used on a phone', position: '50% 40%' },
      ],
};

// "Problems we fix" interactive section (Custom Software Development). Copy is generic positioning — no claims or statistics.
export const customSoftwareProblems = {
  title: ['Built Around The Problems', 'Your Business Actually Has'],
  text: 'Most businesses don’t need more software for the sake of it. They need better systems for the work that already matters — fewer manual steps, clearer workflows, and tools that fit the way their teams operate.',
  cta: { label: 'Discuss Your Idea', href: '/contact' },
  items: [
    { id: 'manual', icon: 'Repeat', title: 'Your Team Is Stuck In Manual Work', description: 'Too much time is lost moving information between spreadsheets, emails, documents, and disconnected tools.', image: '/images/inquiry.webp', alt: 'A team member working through tasks by hand at a laptop', position: '50% 45%', overlay: ['Your team is doing the work.', 'Your software should do more of it.'] },
    { id: 'fit', icon: 'Puzzle', title: 'Your Tools Don’t Fit The Workflow', description: 'Your team has adapted its process around software that was never designed for the way your business actually operates.', image: '/images/why-us-results.webp', alt: 'Two colleagues working through a process at a table', position: '50% 45%', overlay: ['The process works.', 'The software is getting in the way.'] },
    { id: 'connect', icon: 'Unplug', title: 'Your Systems Don’t Talk To Each Other', description: 'Important information lives across different platforms, creating duplicate work, inconsistent data, and unnecessary handoffs.', image: '/images/hero-6.webp', alt: 'A team working on several laptops in a shared workspace', position: '50% 50%', overlay: ['Your systems shouldn’t make your team', 'move the same information twice.'] },
    { id: 'growth', icon: 'TrendingUp', title: 'Growth Is Making Operations Harder', description: 'Processes that worked for a small team start breaking down as customers, users, data, and internal complexity increase.', image: '/images/why-us-design.webp', alt: 'A growing team discussing how to manage busier operations', position: '50% 40%', overlay: ['What worked at ten users', 'doesn’t always work at a hundred.'] },
    { id: 'outgrown', icon: 'TriangleAlert', title: 'You’ve Outgrown The Software You Started With', description: 'The product may still work, but its architecture, experience, or workflow limitations are starting to hold the business back.', image: '/images/why-us-strategy.webp', alt: 'A reporting dashboard on a laptop during a review', position: '50% 45%', overlay: ['Sometimes the next stage of growth', 'needs a system built for it.'] },
  ],
};

// Case-study showcase header (projects come from selectedProjects in data/work.js — concept projects, not real clients).
export const customSoftwareCases = {
  title: ['Digital Products.', 'Real Business Problems.'],
  text: 'A closer look at the software experiences we’ve designed and built for businesses that needed better workflows, stronger digital products, and technology that could grow with them.',
  cta: { label: 'See All Case Studies', href: '/work' },
};

// Technology grid (Custom Software Development). Tool names/logos come from toolCatalog in data/capabilities.js (technology Rudrix actually works with).
export const customSoftwareTech = {
  title: 'The Technology Behind Every Product We Build',
  text: 'We choose tools that help us design, build, integrate, and scale digital products efficiently — from the first interface concept to production-ready software.',
  tools: ['react', 'next', 'node', 'mongodb', 'graphql', 'tailwind', 'javascript', 'figma'],
};

export const customSoftwareCta = {
  eyebrow: 'READY TO BUILD?',
  title: 'Let’s Build Something Powerful',
  text: 'Whether you’re starting from scratch, improving an existing product, or solving a workflow that’s holding your business back, we’ll help you turn the idea into reliable software that works.',
  cta: { label: 'Discuss Your Project', href: '/contact' },
};

// "Build system" principles + build-journey phases (Custom Software Development). Qualitative only — no statistics.
export const buildSystem = {
  eyebrow: 'HOW WE THINK',
  title: ['Software Built With', 'The Bigger Picture In Mind'],
  text: 'Good software is not just about writing clean code. It needs to fit the business, make sense to the people using it, and stay reliable as everything around it changes.',
  principles: [
    { number: '01', node: 'discover', title: 'Understand Before We Build', description: 'We start by understanding the business, users, existing systems, and the problem you’re actually trying to solve. Technology comes after clarity.' },
    { number: '02', node: 'design', title: 'Design Around The Real Workflow', description: 'We shape the experience around how people actually work — not around what a generic software template says the workflow should look like.' },
    { number: '03', node: 'build', title: 'Engineer For What Comes Next', description: 'We build with maintainability, integrations, performance, and future changes in mind so the product does not become harder to manage as it grows.' },
    { number: '04', node: 'improve', title: 'Improve After Launch', description: 'Launch is not the end of the relationship. We use feedback, usage, and changing business requirements to keep the product moving forward.' },
  ],
};

export const buildJourney = {
  eyebrow: 'OUR APPROACH',
  title: ['From A Business Problem', 'To Software That Works.'],
  text: 'We bring product thinking, design, engineering, and ongoing improvement into one clear process — so every stage has a purpose before the next one begins.',
  cta: { label: 'Discuss Your Software Idea', href: '/contact' },
  phases: [
    { number: '01', title: 'Discover', lead: 'Understand the business before deciding what needs to be built.', text: 'We explore the business model, users, current workflows, pain points, existing technology, and the outcome the product needs to create.', deliverable: 'Clear problem definition + project direction', image: '/images/why-us-strategy.webp', alt: 'Colleagues planning around a laptop', position: '50% 45%', overlay: 'Understanding the problem before solving it.' },
    { number: '02', title: 'Define', lead: 'Turn the problem into a clear product plan.', text: 'We define priorities, user journeys, functionality, integrations, technical requirements, and the first version of the product.', deliverable: 'Product scope + feature priorities + technical direction', image: '/images/why-us-results.webp', alt: 'Two colleagues mapping a product plan', position: '50% 45%', overlay: 'A plan everyone can point to.' },
    { number: '03', title: 'Design', lead: 'Make the product understandable before we make it production-ready.', text: 'We map flows, create wireframes, design interfaces, establish reusable components, and validate important interactions before development.', deliverable: 'User flows + UI design + reusable design system', image: '/images/why-us-design.webp', alt: 'A designer reviewing interface work with a colleague', position: '50% 35%', overlay: 'See it before it’s built.' },
    { number: '04', title: 'Build', lead: 'Turn the approved experience into reliable software.', text: 'Our frontend and backend development brings the product to life with clean architecture, APIs, databases, integrations, authentication, and the required business logic.', deliverable: 'Working software', image: '/images/hero-6.webp', alt: 'A developer working at a laptop', position: '50% 45%', overlay: 'Clean code behind a clear interface.' },
    { number: '05', title: 'Validate', lead: 'Test the product before users have to.', text: 'We review functionality, responsiveness, workflows, edge cases, performance, and usability before the product moves toward launch.', deliverable: 'Tested and refined product', image: '/images/work/04-nexaflow.webp', alt: 'An analytics dashboard being reviewed', position: '50% 45%', overlay: 'Find the problems before launch day.' },
    { number: '06', title: 'Launch & Improve', lead: 'Launch with a product that can continue evolving.', text: 'We deploy the product, monitor what happens after launch, collect feedback, address issues, and continue improving the software as business needs change.', deliverable: 'Production-ready software + ongoing improvement path', image: '/images/hero-4.webp', alt: 'A reporting view on a laptop screen', position: '50% 50%', overlay: 'Launch is where learning starts.' },
  ],
};
