// Shared pill button — "primary" is identical to the header Contact button.
const base =
  'inline-flex min-h-[52px] items-center justify-center rounded-full px-6 text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5';

const variants = {
  primary:
    'bg-slate2 text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.45)] hover:bg-ink',
  secondary:
    'border border-rudrix/70 text-ink hover:border-rudrix hover:bg-rudrix/10',
};

export default function Button({ variant = 'primary', className = '', ...props }) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
