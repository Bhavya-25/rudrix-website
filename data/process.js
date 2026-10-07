// Copy for the "Our process" section.
export const process = {
  heading: ['Our', 'process'],
  steps: [
    {
      n: '01.',
      title: "Understand",
      body:
        "We learn about your business, users, goals and constraints. We read what exists, ask a lot of questions and tell you what we think, before anything gets designed or built.",
    },
    {
      n: '02.',
      title: "Plan",
      body:
        "We define the scope, priorities, user flows and technical direction. You'll see what's in, what's out and why, with a realistic timeline.",
    },
    {
      n: '03.',
      title: "Build",
      body:
        "Design and development move together, so decisions get tested early. You see working software regularly, not just at the end.",
    },
    {
      n: '04.',
      title: "Test & refine",
      body:
        "We test across devices and real situations, fix what we find and polish the experience until it's ready to ship.",
    },
    {
      n: '05.',
      title: "Grow",
      body:
        "After launch we keep improving the product based on real feedback and business needs, so it keeps working as your business changes.",
    },
  ],
  code: [
    "import { ship } from 'rudrix';",
    '',
    'const app = ship({',
    "  design: 'custom',",
    "  stack: 'Next.js',",
    '  tests: true,',
    '});',
    '',
    'app.launch();',
  ],
  // rest = resting fill width (% of the track); each bar fills to 100% while hovered (as in the reference).
  metrics: [
    { label: 'Performance', rest: 71 },
    { label: 'Security', rest: 82 },
    { label: 'Accessibility', rest: 52 },
  ],
};
