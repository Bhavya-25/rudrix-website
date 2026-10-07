export const processHero = {
  title: ['Great Digital Products Start', 'With A Clear Conversation.'],
  text: 'From initial discovery to final deployment, every project runs on an open, reliable system you can track step-by-step. Let’s discuss your roadmap.',
  cta: { label: 'Book A Free Consultation', href: '/contact' },
  image: '/images/inquiry.webp',
  imageAlt: 'A product professional working on a laptop beside a window',
  initial: 'alignment-call',
  // reference ticker: ~1.4s per step, ~0.32s slide between steps
  interval: 1400,
  steps: [
    { id: 'alignment-call', title: 'Alignment Call', short: 'Alignment' },
    { id: 'mutual-nda-estimate', title: 'Mutual NDA & Estimate', short: 'NDA & Estimate' },
    { id: 'strategic-architecture', title: 'Strategic Architecture', short: 'Architecture' },
    { id: 'ux-ui-design', title: 'UX/UI Design', short: 'UX/UI Design' },
    { id: 'full-stack-engineering', title: 'Full-Stack Engineering', short: 'Engineering' },
    { id: 'deployment-scaling', title: 'Deployment & Scaling', short: 'Deployment' },
  ],
};

export const trust = {
  eyebrow: 'LONG-TERM TRUST',
  title: ['Why Great Products', 'Keep Getting Better', 'After Launch'],
  text: 'Great software is not finished when it goes live. We stay involved, listen to what changes, and keep improving the product as your users, business, and priorities evolve.',
  cta: { label: 'Let’s Build Together', href: '/contact' },
  closing: 'Built around the relationship, not just the deliverable.',
  principles: [
    { id: 'visibility', number: '01', label: 'TRANSPARENT COLLABORATION', title: 'Visibility By Default', description: 'You should never have to wonder what is happening with your project. We keep communication clear, decisions visible, and progress easy to follow from the first conversation through launch.', image: '/images/why-us-design.webp', alt: 'A designer and colleagues reviewing a product together at a table', pos: '50% 35%' },
    { id: 'momentum', number: '02', label: 'FOCUSED EXECUTION', title: 'Momentum Without Chaos', description: 'Moving quickly only matters when the work stays focused. We break complex projects into clear priorities, practical milestones, and steady iterations so progress never becomes noise.', image: '/images/hero-6.webp', alt: 'A product team working on laptops in a shared workspace', pos: '50% 40%' },
    { id: 'outcomes', number: '03', label: 'BUSINESS-FIRST THINKING', title: 'Outcomes Before Features', description: 'We don’t build features simply because they can be built. We ask what the business and the people using the product actually need, then shape the technology around that outcome.', image: '/images/why-us-strategy.webp', alt: 'Hands on a laptop showing a product dashboard during a planning session', pos: '50% 45%' },
    { id: 'beyond', number: '04', label: 'LONG-TERM PARTNERSHIP', title: 'Beyond The Launch', description: 'Launch is a milestone, not the finish line. We can stay involved through improvements, maintenance, optimization, and new product requirements as your business continues to evolve.', image: '/images/hero-4.webp', alt: 'An analytics dashboard on a laptop screen', pos: '50% 50%' },
  ],
};

export const milestones = {
  eyebrow: 'CLEAR MILESTONES',
  title: ['Predictable Progress.', 'Zero Guesswork.'],
  text: 'Every Rudrix project follows a clear path from the first conversation to launch. Each milestone has a purpose, a deliverable, and a decision point — so you always know what happens next.',
  items: [
    { number: '01', category: 'DISCOVER', title: 'Alignment Call', description: 'We start by understanding your business, users, goals, technical environment, and what success actually looks like.', deliverable: 'Clear project direction', question: 'What are we actually trying to solve?', input: 'Business goals', output: 'Project direction', tags: ['Goals', 'Users', 'Constraints'] },
    { number: '02', category: 'DEFINE', title: 'Mutual NDA & Estimate', description: 'We protect your ideas and turn the conversation into a transparent scope covering priorities, deliverables, assumptions, and estimated effort.', deliverable: 'Clear scope & estimate', question: 'What are we building and what will it take?', input: 'Requirements', output: 'Scope + Estimate', tags: ['NDA', 'Scope', 'Estimate'] },
    { number: '03', category: 'PLAN', title: 'Strategic Architecture', description: 'We map the product structure, technical architecture, integrations, user flows, and development priorities before production begins.', deliverable: 'Product & technical roadmap', question: 'How should everything work together?', input: 'Product requirements', output: 'Technical roadmap', tags: ['Architecture', 'Integrations', 'User flows'] },
    { number: '04', category: 'DESIGN', title: 'UX/UI Design', description: 'We turn requirements into intuitive user journeys, interfaces, design systems, and responsive experiences ready for engineering.', deliverable: 'Validated product experience', question: 'How should the product feel and behave?', input: 'User flows', output: 'UI system', tags: ['Journeys', 'Interfaces', 'Design system'] },
    { number: '05', category: 'BUILD', title: 'Full-Stack Engineering', description: 'Frontend, backend, APIs, databases, integrations, authentication, and business logic come together into production-ready software.', deliverable: 'Working product', question: 'Does it work reliably in the real world?', input: 'Approved designs', output: 'Working product', tags: ['Frontend', 'Backend', 'APIs', 'Database', 'Integrations'] },
    { number: '06', category: 'LAUNCH', title: 'Deployment & Scaling', description: 'We move the product into production, monitor its performance, resolve issues, and continue improving it as your business grows.', deliverable: 'Live & evolving product', question: 'What should we improve next?', input: 'Production build', output: 'Live product', tags: ['Deploy', 'Monitor', 'Improve'] },
  ],
};

export const finalCta = {
  eyebrow: 'READY WHEN YOU ARE',
  title: ['Let’s Build Something', 'Worth Shipping.'],
  text: 'Have an idea, an existing product that needs work, or a business problem that software could solve? Let’s talk through it, define the right path, and figure out what should happen next.',
  cta: { label: 'Discuss Your Project', href: '/contact' },
  secondary: { label: 'View Our Work', href: '/work' },
  micro: 'Bring the idea. We’ll help shape the next step.',
  note: 'No pressure. No complicated pitch. Just a direct conversation about your goals.',
  intents: ['Web', 'SaaS', 'eCommerce', 'Mobile', 'UI/UX', 'Custom software'],
  image: '/images/hero-6.webp',
  imageAlt: 'A product team working together around laptops',
  // Decorative, conceptual panel — not a real client project.
  status: { title: 'RUDRIX / BUILD STATUS', rows: [['Discovery', 'done'], ['Strategy', 'done'], ['Design', 'done'], ['Engineering', 'now'], ['Launch', 'next']], footer: 'YOUR NEXT BUILD', caption: 'Conceptual preview' },
  platforms: ['dribbble', 'behance', 'upwork'],
};

// Conceptual interface content only — none of this represents a real client project or tool.
export const visibility = {
  eyebrow: 'ALWAYS INFORMED',
  title: ['Clear Progress.', 'No Guesswork.'],
  text: 'You shouldn’t have to send a message just to find out where your project stands. We keep progress, priorities, decisions, and next steps visible throughout the build.',
  closing: 'Less chasing. More building.',
  system: 'CLIENT VISIBILITY SYSTEM',
  items: [
    { number: '01', category: 'WEEKLY SIGNAL', nav: 'Progress, every week', title: 'Weekly Progress Signals', description: 'Clear updates on what moved forward, what is currently being worked on, what comes next, and where we need your input.', label: 'PROGRESS / EVERY WEEK', signal: 'ON TRACK', kind: 'timeline' },
    { number: '02', category: 'DIRECT COLLABORATION', nav: 'People, directly', title: 'Direct Access To The Team', description: 'You communicate with the people actually shaping the product. Questions, feedback, and decisions stay close to the designers and developers doing the work.', label: 'PEOPLE / DIRECTLY', signal: 'READY FOR CLIENT INPUT', kind: 'people' },
    { number: '03', category: 'PROJECT VISIBILITY', nav: 'A clear view of the build', title: 'A Clear View Of The Build', description: 'Milestones, active priorities, deliverables, and important decisions are kept visible so you can understand progress without digging through messages.', label: 'PROJECT / VISIBLE', signal: 'DESIGN REVIEW', kind: 'board' },
    { number: '04', category: 'CLEAR COMMERCIALS', nav: 'Scope, discussed early', title: 'Transparent Scope & Billing', description: 'Project scope, milestones, and commercial changes are discussed clearly. If something changes, you know why before it becomes a surprise.', label: 'SCOPE / CLEAR', signal: 'SCOPE CLEAR', kind: 'scope' },
  ],
};

// Engagement models are ways a project CAN be structured — they describe the model, not contract terms.
// No pricing, rates, minimums or guarantees are stated. Confirm the exact structure in the first conversation.
export const engagement = {
  eyebrow: 'STAY FLEXIBLE',
  title: ['The Right Way To Build', 'Depends On What You’re Building.'],
  text: 'Some projects need a defined scope and clear finish line. Others need room to evolve. Choose the way of working that fits your product today — and adapt as the work changes.',
  note: 'These are ways we can structure a project. The practical details are agreed in the first conversation.',
  finderTitle: 'What best describes your project?',
  cta: { lead: 'NOT SURE WHERE YOU FIT?', title: 'Not sure which model fits?', text: 'Tell us what you’re building and where you’re at. We’ll help you choose the most practical way forward.', label: 'Discuss Your Project', href: '/contact' },
  models: [
    { number: '01', short: 'Fixed', category: 'DEFINED DELIVERY', title: 'Fixed-Scope Build', description: 'For projects where the requirements, deliverables, and outcome are clear enough to define before development begins.', bestFor: ['MVPs', 'Business websites', 'eCommerce builds', 'Defined features', 'Redesigns', 'Contained software projects'], gets: ['Clear scope', 'Defined milestones', 'Agreed deliverables', 'Predictable project structure'], ideal: 'You know what needs to be built.', finder: 'I know exactly what needs to be built.', traits: [['SCOPE CERTAINTY', 'High'], ['FLEXIBILITY', 'Medium'], ['CONTINUITY', 'Low']], visual: 'blueprint' },
    { number: '02', short: 'Flexible', category: 'EVOLVING ROADMAP', title: 'Flexible Product Development', description: 'For products where priorities may change as users, data, or business requirements reveal what should come next.', bestFor: ['SaaS products', 'Product iterations', 'Growing platforms', 'Continuous feature development', 'Discovery-led builds'], gets: ['Flexible priorities', 'Regular iterations', 'Continuous development', 'Room to adapt'], ideal: 'The product needs to evolve while we’re building it.', finder: 'The product will evolve as we build.', traits: [['SCOPE CERTAINTY', 'Medium'], ['FLEXIBILITY', 'High'], ['CONTINUITY', 'Medium']], visual: 'roadmap' },
    { number: '03', short: 'Dedicated', category: 'ONGOING CAPACITY', title: 'Dedicated Product Team', description: 'A focused team of designers and developers working continuously around your roadmap and product priorities.', bestFor: ['Long-term products', 'Startups', 'SaaS companies', 'Growing engineering needs', 'Ongoing product development'], gets: ['Consistent team', 'Deep product context', 'Continuous delivery', 'Flexible priorities'], ideal: 'You need a team that stays close to the product.', finder: 'I need a team for ongoing development.', traits: [['SCOPE CERTAINTY', 'Medium'], ['FLEXIBILITY', 'High'], ['CONTINUITY', 'High']], visual: 'pod' },
    { number: '04', short: 'Specialist', category: 'TARGETED EXPERTISE', title: 'Specialist Support', description: 'Bring in experienced specialists when you need focused help without committing to a full development engagement.', bestFor: ['UX audits', 'UI improvements', 'Code reviews', 'Technical architecture', 'Performance work', 'Specific engineering gaps'], gets: ['Focused expertise', 'Fast intervention', 'Technical guidance', 'Flexible involvement'], ideal: 'You know where the problem is — you just need the right expertise.', finder: 'I need a specific skill or expertise.', traits: [['SCOPE CERTAINTY', 'High'], ['FLEXIBILITY', 'High'], ['CONTINUITY', 'Low']], visual: 'specialist' },
  ],
};

// Assurance principles use soft, accurate language: no ownership %, warranty, fixed-price or timeline guarantees.
export const protection = {
  eyebrow: 'PROTECTED DELIVERY',
  title: ['Built To Protect', 'What You’re Building.'],
  text: 'Good software delivery is about more than writing code. We make the important parts of the engagement clear — from confidentiality and ownership to scope, quality, and what happens after launch.',
  statement: 'Clear expectations reduce unnecessary risk.',
  items: [
    { number: '01', category: 'CONFIDENTIALITY', title: 'Confidential From The Start', description: 'Sensitive product ideas and business information deserve clear confidentiality expectations before detailed project work begins.', visual: 'confidential' },
    { number: '02', category: 'OWNERSHIP', title: 'Your Product, Clearly Handed Over', description: 'Code, design assets, documentation, and agreed deliverables should have a clear ownership and handover path defined as part of the engagement.', visual: 'handover' },
    { number: '03', category: 'SCOPE', title: 'Scope Without Surprises', description: 'We define what is being built, what is included, and how changes are handled so decisions happen before surprises reach the final delivery.', visual: 'scope' },
    { number: '04', category: 'CONTINUITY', title: 'Quality Beyond Launch', description: 'Launch is a milestone, not the end of the product journey. Depending on the engagement, we can continue with maintenance, improvements, optimization, and future development.', visual: 'continuity' },
  ],
};

export const conversation = {
  eyebrow: 'READY WHEN YOU ARE',
  title: ['Your Next Build', 'Starts With A Conversation.'],
  text: 'Tell us what you’re building, where you’re stuck, or what you’d like to improve. We’ll talk through the problem and help you figure out the most practical next step.',
  cta: { label: 'Discuss Your Project', href: '/contact' },
  micro: 'Bring the idea. We’ll help shape the next step. No pressure — just a useful conversation.',
  image: '/images/why-us-engineering.webp',
  imageAlt: 'Colleagues working together over a laptop in a modern workspace',
  status: { title: 'RUDRIX / PROJECT 01', rows: [['Discovery', 'done'], ['Design', 'done'], ['Build', 'now'], ['Launch', 'next']], footer: 'MOVING FORWARD', caption: 'Conceptual preview — not a real client' },
  next: { lead: 'NEXT STEP', label: '01 / START A CONVERSATION', hover: 'START A CONVERSATION' },
};
