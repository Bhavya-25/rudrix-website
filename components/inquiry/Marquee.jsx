// Seamless endless marquee: two identical copies side by side, track moves exactly one copy's width.
export default function Marquee({ children, seconds = 36, direction = 'right', className = '' }) {
  return (
    <div className={`marquee-mask overflow-hidden ${className}`} aria-hidden="true">
      <div className={`${direction === 'left' ? 'marquee-left' : 'marquee-right'} flex w-max`} style={{ '--marquee': `${seconds}s` }}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
