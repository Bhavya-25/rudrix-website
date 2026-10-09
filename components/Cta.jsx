import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * Shared call-to-action. Variants: primary (orange), dark, outline, light (for dark backgrounds).
 * Sizes: md (56px) and sm (48px, for cards and compact rows). Renders a Next Link, a plain <a> (hash/mailto/external)
 * or a <button> (forms). The label rolls to a duplicate line on hover and the arrow turns diagonal (see app/globals.css).
 * `loading` shows a spinner and `loadingLabel` instead of the label and blocks repeat clicks.
 */
export default function Cta({ href, variant = 'primary', size = 'md', full = false, arrow, ripple = true, loading = false, loadingLabel = 'Sending...', className = '', children, ...props }) {
  const cls = `cta cta-${variant}${size === 'sm' ? ' cta-sm' : ''}${full ? ' cta-full' : ''}${className ? ` ${className}` : ''}`;
  // arrow only where the CTA navigates (links); in-page buttons such as form submits have none
  const showArrow = arrow ?? href != null;
  const icon = showArrow ? <span className="cta-ico" style={ripple ? undefined : { animation: 'none' }}><ArrowRight className="cta-arrow" strokeWidth={2.4} aria-hidden /></span> : null;
  const content = loading ? (
    <>
      <span aria-hidden className="cta-spinner" />
      {loadingLabel}
    </>
  ) : (
    <>
      {typeof children === 'string' ? (
        <span className="cta-label">
          <span className="cta-track">
            <span>{children}</span>
            <span aria-hidden>{children}</span>
          </span>
        </span>
      ) : (
        children
      )}
      {icon}
    </>
  );

  if (href == null) {
    const { type = 'button', ...rest } = props;
    return (
      <button type={type} className={cls} aria-busy={loading || undefined} {...rest} disabled={rest.disabled || loading}>
        {content}
      </button>
    );
  }
  const internal = href.startsWith('/') && !href.startsWith('//');
  const External = internal ? Link : 'a';
  return (
    <External href={href} className={cls} {...props}>
      {content}
    </External>
  );
}
