import type { ReactNode } from "react";

type Tone = "lime" | "orange" | "cream" | "purple" | "ink";

const tones: Record<Tone, string> = {
  lime: "",
  orange: "btn-orange",
  cream: "btn-cream",
  purple: "btn-purple",
  ink: "btn-ink",
};

export function ArcadeButton({
  href,
  children,
  tone = "lime",
  small = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  small?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn ${tones[tone]} ${small ? "btn-sm" : ""} ${className}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <Arrow />
    </a>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 7 7" aria-hidden="true" shapeRendering="crispEdges">
      <path fill="currentColor" d="M1 0h2v1h1v1h1v1h1v1H5v1H4v1H3v1H1V6h1V5h1V4H0V3h3V2H2V1H1z" />
    </svg>
  );
}
