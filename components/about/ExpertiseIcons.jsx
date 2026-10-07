// One family of thin line icons (same stroke, size and colour) for the Expertise cards.
const common = { viewBox: '0 0 120 120', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

const paths = {
  design: (
    <>
      <rect x="14" y="26" width="76" height="54" rx="4" />
      <path d="M52 80v12M38 94h28" />
      <path d="M28 62c10 0 8-18 18-18s2 22 12 14" />
      <path d="M86 28l14 14-24 24-16 2 2-16z" />
      <path d="M92 36l8 8" />
    </>
  ),
  code: (
    <>
      <path d="M40 34L14 60l26 26" />
      <path d="M80 34l26 26-26 26" />
      <path d="M68 24L52 96" />
    </>
  ),
  layers: (
    <>
      <path d="M60 18l44 22-44 22-44-22z" />
      <path d="M16 62l44 22 44-22" />
      <path d="M16 82l44 22 44-22" />
    </>
  ),
  cube: (
    <>
      <path d="M60 14l40 22v48L60 106 20 84V36z" />
      <path d="M20 36l40 22 40-22" />
      <path d="M60 58v48" />
    </>
  ),
  bag: (
    <>
      <path d="M24 38h72l6 62H18z" />
      <path d="M44 50V32a16 16 0 0 1 32 0v18" />
    </>
  ),
  phone: (
    <>
      <rect x="34" y="12" width="52" height="96" rx="8" />
      <path d="M52 22h16" />
      <circle cx="60" cy="96" r="3" />
      <path d="M46 48h28M46 62h18M46 76h24" />
    </>
  ),
};

export default function ExpertiseIcon({ name, className = '' }) {
  return (
    <svg {...common} className={className}>
      {paths[name]}
    </svg>
  );
}
