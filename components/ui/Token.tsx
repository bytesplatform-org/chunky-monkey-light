/** The park token: a screen-printed coin stamped CM. */
export function Token({
  className = "",
  face = "#dfff38",
  rim = "#ff6637",
}: {
  className?: string;
  face?: string;
  rim?: string;
}) {
  const ticks = Array.from({ length: 24 }, (_, i) => i * 15);
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="66" cy="66" r="52" fill="#0a0818" />
      <circle cx="58" cy="58" r="54" fill="#0a0818" />
      <circle cx="58" cy="58" r="49" fill={rim} />
      {ticks.map((a) => (
        <rect key={a} x="55.5" y="10" width="5" height="9" fill="#0a0818" transform={`rotate(${a} 58 58)`} />
      ))}
      <circle cx="58" cy="58" r="36" fill={face} stroke="#0a0818" strokeWidth="4" />
      <path d="M31 44a32 32 0 0 1 22-18" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".75" />
      <text x="58" y="70" textAnchor="middle" fontSize="33" fill="#0a0818" style={{ fontFamily: "var(--font-dela)", letterSpacing: "-0.06em" }}>
        CM
      </text>
    </svg>
  );
}
