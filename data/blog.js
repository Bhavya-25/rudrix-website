// Sample articles for the Blog. Replace titles/body with your real posts.
export const blogPosts = [
  {
    slug: 'scope-an-mvp-without-wasting-budget',
    title: 'How to scope an MVP without wasting budget',
    excerpt: 'A practical way to decide what ships in version one, what waits, and what never needs building.',
    category: 'Product',
    date: '2026-09-18',
    read: '5 min read',
    image: '/images/why-us-strategy.webp',
    body: [
      'Most MVPs go over budget for one reason: the first list of features is really a wish list. The fastest way to fix that is to start from a single user outcome and work backwards.',
      'Write down the one thing a new customer must be able to do on day one. Every feature that does not help with that outcome moves to a "later" list. It still gets designed, but it does not get built yet.',
      'Next, put a rough time box on each remaining item. If something takes longer than a week, split it. Small pieces make progress visible, and they make it obvious when a feature is quietly growing out of control.',
      'Finally, agree how you will know the MVP worked. Pick two or three numbers, such as sign-ups, completed orders or repeat visits, and review them a month after launch. The next build cycle should be decided by those numbers, not by opinions.',
    ],
  },
  {
    slug: 'shopify-or-custom-storefront',
    title: 'Shopify or a custom storefront: how to choose',
    excerpt: 'The questions that matter when you are deciding between a hosted platform and a bespoke build.',
    category: 'E-commerce',
    date: '2026-08-27',
    read: '6 min read',
    image: '/images/why-us-engineering.webp',
    body: [
      'For most growing brands, Shopify is the right starting point. It handles payments, tax, inventory and security, so your budget goes into the experience customers actually see.',
      'A custom storefront starts to make sense when your catalogue, pricing or checkout rules are unusual enough that a platform keeps getting in the way. Subscriptions with complex bundles, B2B quotes and heavy personalisation are common examples.',
      'Before you commit, list the three things your store must do that competitors cannot copy. If a theme and a few apps can cover them, stay on the platform. If each one needs a workaround, a custom build will probably pay for itself.',
      'Whichever route you take, keep your product data clean and portable. Good data makes a later move from one approach to the other far less painful.',
    ],
  },
  {
    slug: 'what-a-good-sprint-demo-looks-like',
    title: 'What a good sprint demo looks like',
    excerpt: 'Weekly demos are only useful if they show real progress. Here is how we run ours.',
    category: 'Engineering',
    date: '2026-07-30',
    read: '4 min read',
    image: '/images/why-us-design.webp',
    body: [
      'A sprint demo is not a presentation. It is a short, honest look at working software, shown by the people who built it.',
      'We keep ours to thirty minutes. Each person demonstrates what they finished on a real environment, not slides or screenshots, and we say clearly what is done and what is not.',
      'Questions and change requests are collected as they come up, then sorted at the end into three groups: fix now, plan next, or park. Nothing is promised in the room that has not been estimated.',
      'The result is that clients are never surprised. They see the product take shape every week and can steer it while changes are still cheap.',
    ],
  },
];
