import { CabinetScreen } from "./CabinetScreen";
import { MONKEY, spriteRects } from "@/components/ui/Sprite";

const INK = "#0a0818";
const LIME = "#dfff38";
const ORANGE = "#ff6637";
const PURPLE = "#712dff";
const DEEP = "#3a12a8";
const CREAM = "#f6f0df";

/* The silhouette is built from a front profile: marquee proud, screen recessed,
   control deck thrust forward, body set back. The side panel follows that same
   line, which is what makes the object read as a real cabinet. */
const SIDE =
  "M210 40 L72 88 L72 1096 L190 1176 L190 746 L222 738 L222 700 L176 588 L176 206 L210 196 Z";

const TICKET = "M431 976 V1030 C431 1092 492 1102 560 1098 C640 1092 700 1112 742 1196";

function PushButton({ cx, cy, color, rx = 27 }: { cx: number; cy: number; color: string; rx?: number }) {
  const ry = rx * 0.68;
  return (
    <g>
      <ellipse cx={cx} cy={cy + 8} rx={rx + 5} ry={ry + 5} fill={INK} />
      <ellipse cx={cx} cy={cy + 3} rx={rx + 2} ry={ry + 2} fill={INK} />
      <ellipse cx={cx} cy={cy + 2} rx={rx} ry={ry} fill={color} />
      <ellipse cx={cx} cy={cy + 6} rx={rx} ry={ry} fill={INK} opacity=".28" />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={color} />
      <ellipse cx={cx} cy={cy} rx={rx - 6} ry={ry - 4} fill="none" stroke={INK} strokeOpacity=".22" strokeWidth="3" />
      <path
        d={`M${cx - rx * 0.6} ${cy - ry * 0.2} A ${rx * 0.65} ${ry * 0.6} 0 0 1 ${cx - rx * 0.05} ${cy - ry * 0.62}`}
        fill="none"
        stroke="#fff"
        strokeOpacity=".8"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </g>
  );
}

function Bolt({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="6" fill="#8f89a8" stroke={INK} strokeWidth="2.5" />
      <path d={`M${x - 3} ${y}h6`} stroke={INK} strokeWidth="2" />
    </g>
  );
}

function CoinMech({ x, label }: { x: number; label: string }) {
  return (
    <g>
      <rect x={x} y="796" width="82" height="110" rx="4" fill="#2a2553" stroke={INK} strokeWidth="4" />
      <rect x={x + 8} y="804" width="66" height="50" rx="3" fill={ORANGE} stroke={INK} strokeWidth="4" />
      <rect x={x + 8} y="804" width="66" height="14" fill="#fff" opacity=".35" />
      <rect x={x + 36} y="812" width="10" height="34" rx="2" fill={INK} />
      <text x={x + 41} y="873" textAnchor="middle" fontSize="13" fill={LIME} style={{ fontFamily: "var(--font-silkscreen)" }}>
        {label}
      </text>
      <rect x={x + 22} y="882" width="38" height="14" rx="2" fill={INK} />
    </g>
  );
}

export function ArcadeCabinet({ className = "" }: { className?: string }) {
  const grille = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 12; col++) {
      grille.push(<rect key={`l${row}-${col}`} x={198 + col * 8} y={222 + row * 8} width="4.5" height="4.5" fill={INK} />);
      grille.push(<rect key={`r${row}-${col}`} x={540 + col * 8} y={222 + row * 8} width="4.5" height="4.5" fill={INK} />);
    }
  }

  return (
    <svg
      viewBox="0 0 760 1250"
      className={className}
      role="img"
      aria-label="A retro arcade cabinet in Chunky Monkey colours. Its screen shows a pixel-art monkey in front of a park at dusk, with the words Press Start."
    >
      <defs>
        <clipPath id="cab-side"><path d={SIDE} /></clipPath>
        <clipPath id="cab-marquee"><rect x="222" y="52" width="456" height="132" /></clipPath>
        <clipPath id="cab-glass"><rect x="214" y="268" width="404" height="296" rx="20" /></clipPath>
        <clipPath id="cab-deck"><path d="M176 588 L656 588 L704 700 L222 700 Z" /></clipPath>
        <clipPath id="cab-body"><rect x="190" y="746" width="482" height="384" /></clipPath>
        <pattern id="cab-scan" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="1.3" fill="#000" opacity=".2" />
        </pattern>
        <radialGradient id="cab-vignette" cx="50%" cy="50%" r="72%">
          <stop offset="62%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity=".34" />
        </radialGradient>
        <linearGradient id="cab-marquee-light" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".5" />
          <stop offset=".45" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Floor shadow: hard edged, like a print layer */}
      <path d="M72 1096 L190 1176 L672 1176 L760 1120 L760 1250 L20 1250 Z" fill={INK} opacity=".55" />

      {/* ---------- Side panel ---------- */}
      <path d={SIDE} fill={DEEP} stroke={INK} strokeWidth="7" strokeLinejoin="round" />
      <g clipPath="url(#cab-side)">
        <path d="M60 300 L240 240 L240 410 L60 480 Z" fill={ORANGE} />
        <path d="M60 480 L240 410 L240 470 L60 546 Z" fill={LIME} />
        <path d="M60 546 L240 470 L240 500 L60 582 Z" fill={PURPLE} />
        <path d="M60 180 L240 110 L240 136 L60 208 Z" fill={PURPLE} />
        <path d="M60 720 L240 720 L240 1200 L60 1200 Z" fill="#2c0d86" />
        <path d="M60 760 L240 800 L240 830 L60 790 Z" fill={LIME} />
        <path d="M60 806 L240 846 L240 860 L60 820 Z" fill={ORANGE} />
        <g transform="translate(158 1066) rotate(-90)">
          <text fontSize="68" fill={CREAM} style={{ fontFamily: "var(--font-dela)", letterSpacing: "-.03em" }}>
            FUN
          </text>
        </g>
        <path d="M82 94 L82 1088" stroke="#fff" strokeOpacity=".1" strokeWidth="10" />
      </g>
      {/* T-molding, running along the front profile */}
      <path
        d="M210 40 L210 196 L176 206 L176 588 L222 700 L222 738 L190 746 L190 1176"
        fill="none"
        stroke={LIME}
        strokeWidth="9"
        strokeLinejoin="round"
      />
      <path
        d="M210 40 L210 196 L176 206 L176 588 L222 700 L222 738 L190 746 L190 1176"
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
        transform="translate(-6 0)"
      />

      {/* ---------- Bezel ---------- */}
      <rect x="176" y="196" width="480" height="392" fill="#1b1740" stroke={INK} strokeWidth="7" />
      <path d="M176 196 L656 196 L656 214 L176 214 Z" fill={INK} opacity=".7" />
      {grille}
      <text x="416" y="242" textAnchor="middle" fontSize="16" fill={LIME} style={{ fontFamily: "var(--font-silkscreen)" }}>
        FUN FOR ALL
      </text>
      <Bolt x={188} y={576} />
      <Bolt x={644} y={576} />

      {/* Monitor well */}
      <path d="M198 256 H634 V576 H198 Z" fill={INK} />
      <path d="M198 256 H634 L618 268 H214 Z" fill="#332c6c" />
      <path d="M198 256 V576 L214 564 V268 Z" fill="#26205a" />

      <g clipPath="url(#cab-glass)">
        <CabinetScreen x={214} y={268} width={404} height={296} />
        <rect x="214" y="268" width="404" height="296" fill="url(#cab-scan)" />
        <rect x="214" y="268" width="404" height="296" fill="url(#cab-vignette)" />
        <path d="M214 268 H420 L300 564 H214 Z" fill="#fff" opacity=".055" />
      </g>
      <rect x="214" y="268" width="404" height="296" rx="20" fill="none" stroke={INK} strokeWidth="7" />

      {/* ---------- Marquee ---------- */}
      <path d="M210 196 L690 196 L656 214 L176 214 Z" fill={INK} />
      <rect x="210" y="40" width="480" height="156" fill={INK} stroke={INK} strokeWidth="7" />
      <g clipPath="url(#cab-marquee)">
        <rect x="222" y="52" width="456" height="132" fill={LIME} />
        {Array.from({ length: 13 }, (_, i) => {
          const a = -90 + i * 15 - 90;
          const r1 = (a * Math.PI) / 180;
          const r2 = ((a + 7.5) * Math.PI) / 180;
          return (
            <path
              key={i}
              d={`M450 210 L${450 + Math.cos(r1) * 420} ${210 + Math.sin(r1) * 420} L${450 + Math.cos(r2) * 420} ${210 + Math.sin(r2) * 420} Z`}
              fill="#c5ec00"
            />
          );
        })}
        <rect x="222" y="52" width="456" height="132" fill="url(#cab-marquee-light)" />
        <g style={{ fontFamily: "var(--font-dela)" }} fontSize="53" letterSpacing="-2" textAnchor="middle">
          <text x="481" y="114" fill={ORANGE}>CHUNKY</text>
          <text x="478" y="111" fill={INK}>CHUNKY</text>
          <text x="481" y="168" fill={ORANGE}>MONKEY</text>
          <text x="478" y="165" fill={INK}>MONKEY</text>
        </g>
        <g shapeRendering="crispEdges">{spriteRects(MONKEY, 232, 66, 4)}</g>
      </g>
      {/* Bulbs */}
      {Array.from({ length: 16 }, (_, i) => (
        <circle
          key={`t${i}`}
          className={i % 2 ? "bulb" : "bulb-alt"}
          cx={226 + i * 29.8}
          cy="46"
          r="4.5"
          fill={i % 2 ? ORANGE : CREAM}
        />
      ))}
      {Array.from({ length: 16 }, (_, i) => (
        <circle
          key={`b${i}`}
          className={i % 2 ? "bulb-alt" : "bulb"}
          cx={226 + i * 29.8}
          cy="190"
          r="4.5"
          fill={i % 2 ? ORANGE : CREAM}
        />
      ))}

      {/* ---------- Body ---------- */}
      <rect x="190" y="738" width="482" height="392" fill={PURPLE} stroke={INK} strokeWidth="7" />
      <path d="M190 738 H672 V760 H190 Z" fill={INK} opacity=".55" />
      <g clipPath="url(#cab-body)">
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={`cl${i}`} d={`M200 ${812 + i * 58} l56 34 l-56 34 v-22 l22 -12 l-22 -12 z`} fill={i % 2 ? LIME : ORANGE} />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={`cr${i}`} d={`M662 ${812 + i * 58} l-56 34 l56 34 v-22 l-22 -12 l22 -12 z`} fill={i % 2 ? ORANGE : LIME} />
        ))}
        <path d="M190 760 L260 760 L190 1000 Z" fill="#fff" opacity=".07" />
      </g>

      {/* Coin door */}
      <rect x="284" y="778" width="294" height="326" rx="6" fill="#1b1740" stroke={INK} strokeWidth="6" />
      <rect x="284" y="778" width="294" height="10" fill="#fff" opacity=".12" />
      {[[296, 790], [566, 790], [296, 1092], [566, 1092]].map(([bx, by]) => (
        <Bolt key={`${bx}-${by}`} x={bx} y={by} />
      ))}
      <CoinMech x={310} label="TOKEN" />
      <CoinMech x={470} label="TOKEN" />
      <rect x="406" y="796" width="50" height="110" fill={INK} opacity=".4" />
      <g style={{ fontFamily: "var(--font-silkscreen)" }} fontSize="12" fill={CREAM} textAnchor="middle">
        <text x="431" y="838">P</text>
        <text x="431" y="852">L</text>
        <text x="431" y="866">A</text>
        <text x="431" y="880">Y</text>
      </g>

      {/* Ticket dispenser and strip */}
      <rect x="310" y="934" width="242" height="60" rx="4" fill="#2a2553" stroke={INK} strokeWidth="4" />
      <text x="431" y="958" textAnchor="middle" fontSize="13" fill={LIME} style={{ fontFamily: "var(--font-silkscreen)" }}>
        TICKETS
      </text>
      <path id="cab-ticket" d={TICKET} fill="none" stroke={INK} strokeWidth="58" />
      <path d={TICKET} fill="none" stroke={CREAM} strokeWidth="47" />
      <path d={TICKET} fill="none" stroke={INK} strokeWidth="47" strokeDasharray="2.5 52" strokeDashoffset="-20" />
      <text fontSize="19" fill={ORANGE} dy="7" style={{ fontFamily: "var(--font-dela)" }}>
        <textPath href="#cab-ticket" startOffset="30">CM 01 &#8201; CM 02 &#8201; CM 03 &#8201; CM 04</textPath>
      </text>
      <rect x="332" y="970" width="198" height="12" rx="2" fill={INK} />

      {/* Kick plate */}
      <rect x="190" y="1130" width="482" height="46" fill={INK} stroke={INK} strokeWidth="7" />
      {Array.from({ length: 16 }, (_, i) => (
        <path key={i} d={`M${196 + i * 30} 1170 l18 -34 h14 l-18 34 z`} fill={LIME} />
      ))}

      {/* ---------- Control deck ---------- */}
      <path d="M176 588 L656 588 L704 700 L222 700 Z" fill={ORANGE} stroke={INK} strokeWidth="7" strokeLinejoin="round" />
      <g clipPath="url(#cab-deck)">
        <path d="M176 588 L656 588 L662 602 L182 602 Z" fill="#fff" opacity=".28" />
        <path d="M410 588 L520 588 L610 700 L470 700 Z" fill="#ff8a55" />
        <path d="M212 588 L256 588 L310 700 L262 700 Z" fill={INK} opacity=".12" />
      </g>
      {/* Printed direction arrows around the stick */}
      <g fill={INK} opacity=".78">
        <path d="M212 640 l18 -12 v24 z" />
        <path d="M356 640 l-18 -12 v24 z" />
        <path d="M284 598 l-14 10 h28 z" />
      </g>

      {/* Joystick */}
      <ellipse cx="284" cy="662" rx="46" ry="23" fill={INK} />
      <ellipse cx="284" cy="656" rx="40" ry="20" fill="#2a2553" />
      <ellipse cx="284" cy="654" rx="20" ry="9" fill={INK} />
      <path d="M277 654 L275 590 H293 L291 654 Z" fill="#b9b4cc" stroke={INK} strokeWidth="5" strokeLinejoin="round" />
      <path d="M282 648 L281 594 H285 L285 648 Z" fill="#fff" opacity=".85" />
      <circle cx="284" cy="566" r="34" fill={INK} />
      <circle cx="284" cy="566" r="28" fill={LIME} />
      <path d="M312 566 A 28 28 0 0 1 262 584 A 34 34 0 0 0 312 566 Z" fill="#9fc400" />
      <ellipse cx="274" cy="555" rx="9" ry="6" fill="#fff" transform="rotate(-28 274 555)" />

      {/* Six fire buttons */}
      <PushButton cx={426} cy={622} color={LIME} />
      <PushButton cx={488} cy={620} color={CREAM} />
      <PushButton cx={550} cy={622} color={PURPLE} />
      <PushButton cx={436} cy={668} color={CREAM} rx={28} />
      <PushButton cx={502} cy={666} color={PURPLE} rx={28} />
      <PushButton cx={568} cy={668} color={LIME} rx={28} />

      {/* Start buttons */}
      <rect x="610" y="606" width="34" height="26" rx="4" fill={CREAM} stroke={INK} strokeWidth="4" />
      <text x="627" y="624" textAnchor="middle" fontSize="12" fill={INK} style={{ fontFamily: "var(--font-silkscreen)" }}>1P</text>
      <rect x="622" y="644" width="34" height="26" rx="4" fill={CREAM} stroke={INK} strokeWidth="4" />
      <text x="639" y="662" textAnchor="middle" fontSize="12" fill={INK} style={{ fontFamily: "var(--font-silkscreen)" }}>2P</text>

      {/* Deck lip */}
      <rect x="222" y="700" width="482" height="38" fill="#c9401a" stroke={INK} strokeWidth="7" />
      <rect x="226" y="704" width="474" height="7" fill="#fff" opacity=".22" />
      <text x="463" y="729" textAnchor="middle" fontSize="15" fill={CREAM} letterSpacing="3" style={{ fontFamily: "var(--font-silkscreen)" }}>
        PLAYER 01 READY
      </text>
    </svg>
  );
}
