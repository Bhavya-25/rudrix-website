import Cta from '@/components/Cta';

// Light "Work With Us →" button on dark sections: same shared CTA, plus the looping arrow at rest.
export default function RollCta({ href, label, size = 'lg', className = '' }) {
  return (
    <Cta href={href} variant="light" size={size === 'lg' ? 'md' : 'sm'} className={className}>
      {label}
    </Cta>
  );
}
