import Cta from './Cta';

// Header / hero pill buttons now use the shared CTA system ("primary" = dark, "secondary" = outline).
export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <Cta variant={variant === 'secondary' ? 'outline' : 'dark'} size="sm" className={className} {...props}>
      {children}
    </Cta>
  );
}
