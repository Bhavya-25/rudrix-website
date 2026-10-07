// Outlined UI frame used for the nested mock-ups inside each process card.
export default function Frame({ className = '', children, ...props }) {
  return (
    <div
      className={`rounded-[12px] border border-white/[0.09] bg-white/[0.012] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
