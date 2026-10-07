// 4-point sparkle used in the eyebrow.
export function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 0c.9 6.6 3.4 9.1 12 12-8.6 2.9-11.1 5.4-12 12-.9-6.6-3.4-9.1-12-12C8.6 9.1 11.1 6.6 12 0z" />
    </svg>
  );
}

// Pale 6-spoke asterisk used as the decorative element.
export function Asterisk({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="9" strokeLinecap="round">
        <path d="M50 6v88" />
        <path d="M12 28l76 44" />
        <path d="M12 72l76-44" />
      </g>
    </svg>
  );
}
