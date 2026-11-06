import { MONKEY, spriteRects } from "@/components/ui/Sprite";

const COIN = [".KKKK.", "KYYYYK", "KYWYYK", "KYWYYK", "KYYYYK", ".KKKK."];

const TOWER_RUNGS = [28, 36, 44, 52, 60, 68, 76, 84];
const WHEEL_SPOKES = [0, 45, 90, 135, 180, 225, 270, 315];

/** A static title screen drawn on a 196 by 142 pixel grid. Original artwork. */
export function CabinetScreen({ x, y, width, height }: { x: number; y: number; width: number; height: number }) {
  return (
    <svg x={x} y={y} width={width} height={height} viewBox="0 0 196 142" shapeRendering="crispEdges">
      {/* Banded dusk sky */}
      <rect width="196" height="142" fill="#120c36" />
      <rect y="24" width="196" height="16" fill="#241058" />
      <rect y="40" width="196" height="14" fill="#431a8c" />
      <rect y="54" width="196" height="12" fill="#712dff" />
      <rect y="66" width="196" height="10" fill="#c13fd0" />
      <rect y="76" width="196" height="8" fill="#ff5f7e" />
      <rect y="84" width="196" height="12" fill="#ff6637" />

      {/* Dither between bands */}
      {[40, 54, 66, 76, 84].map((row, band) =>
        Array.from({ length: 49 }, (_, i) => (
          <rect
            key={`${row}-${i}`}
            x={i * 4 + (band % 2) * 2}
            y={row - 1}
            width="2"
            height="1"
            fill={["#431a8c", "#712dff", "#c13fd0", "#ff5f7e", "#ff6637"][band]}
          />
        )),
      )}

      {/* Stars */}
      {[[12, 28], [34, 20], [58, 32], [146, 24], [172, 34], [186, 18], [122, 36], [8, 44], [181, 48]].map(([sx, sy]) => (
        <rect key={`${sx}-${sy}`} x={sx} y={sy} width="1" height="1" fill="#f6f0df" />
      ))}

      {/* Stepped sun */}
      <path
        fill="#dfff38"
        d="M86 54h24v2h6v2h4v3h3v4h2v5h2v26H73V70h2v-5h2v-4h3v-3h4v-2h2z"
      />
      <rect x="71" y="74" width="54" height="2" fill="#ff6637" />
      <rect x="71" y="80" width="54" height="3" fill="#ff6637" />
      <rect x="71" y="87" width="54" height="4" fill="#ff6637" />

      {/* Drop tower */}
      <rect x="20" y="24" width="10" height="72" fill="#0a0818" />
      <rect x="22" y="24" width="2" height="72" fill="#ff6637" />
      <rect x="26" y="24" width="2" height="72" fill="#ff6637" />
      {TOWER_RUNGS.map((ry) => (
        <rect key={ry} x="22" y={ry} width="6" height="1" fill="#ff6637" />
      ))}
      <rect x="17" y="20" width="16" height="4" fill="#dfff38" />
      <rect x="23" y="16" width="4" height="4" fill="#f6f0df" />
      <rect x="14" y="52" width="22" height="6" fill="#0a0818" />
      <rect x="15" y="53" width="20" height="4" fill="#dfff38" />
      <rect x="17" y="54" width="2" height="2" fill="#0a0818" />
      <rect x="21" y="54" width="2" height="2" fill="#0a0818" />
      <rect x="27" y="54" width="2" height="2" fill="#0a0818" />
      <rect x="31" y="54" width="2" height="2" fill="#0a0818" />

      {/* Big wheel */}
      <g>
        <path fill="#0a0818" d="M146 96l10-34h4l10 34h-4l-8-27-8 27z" />
        {WHEEL_SPOKES.map((a) => {
          const r = (a * Math.PI) / 180;
          const ex = Math.round(158 + Math.cos(r) * 22);
          const ey = Math.round(62 + Math.sin(r) * 22);
          const steps = 11;
          return (
            <g key={a}>
              {Array.from({ length: steps }, (_, i) => (
                <rect
                  key={i}
                  x={Math.round(158 + (ex - 158) * (i / steps))}
                  y={Math.round(62 + (ey - 62) * (i / steps))}
                  width="1"
                  height="1"
                  fill="#f6f0df"
                />
              ))}
              <rect x={ex - 3} y={ey - 2} width="6" height="5" fill="#0a0818" />
              <rect x={ex - 2} y={ey - 1} width="4" height="3" fill={a % 90 === 0 ? "#dfff38" : "#4fd8ff"} />
            </g>
          );
        })}
        <rect x="156" y="60" width="4" height="4" fill="#dfff38" />
      </g>

      {/* Skyline tents */}
      <path fill="#0a0818" d="M44 96V88h2v-2h2v-2h2v-2h2v-2h4v2h2v2h2v2h2v2h2v8zM126 96v-6h2v-2h6v2h2v6z" />
      <rect x="53" y="76" width="2" height="4" fill="#f6f0df" />
      <rect x="55" y="76" width="4" height="2" fill="#ff6637" />

      {/* Ground: receding checker */}
      <rect y="96" width="196" height="46" fill="#0a0818" />
      <rect y="96" width="196" height="2" fill="#dfff38" />
      {[
        { row: 98, h: 5, w: 14 },
        { row: 103, h: 7, w: 14 },
        { row: 110, h: 9, w: 14 },
        { row: 119, h: 11, w: 14 },
        { row: 130, h: 12, w: 14 },
      ].map(({ row, h, w }, band) =>
        Array.from({ length: 8 }, (_, i) => (
          <rect key={`${row}-${i}`} x={i * w * 2 + (band % 2) * w} y={row} width={w} height={h} fill="#3a12a8" />
        )),
      )}

      {/* Platform */}
      <rect x="66" y="112" width="64" height="8" fill="#0a0818" />
      <rect x="67" y="113" width="62" height="3" fill="#dfff38" />
      <rect x="67" y="116" width="62" height="3" fill="#8fb100" />
      {[70, 84, 98, 112, 124].map((px) => (
        <rect key={px} x={px} y="113" width="2" height="6" fill="#0a0818" opacity=".55" />
      ))}

      {/* Hero: the monkey mid-jump, token in reach */}
      <g>{spriteRects(MONKEY, 74, 66, 2)}</g>
      <g>{spriteRects(COIN, 42, 74, 2)}</g>
      <g>{spriteRects(COIN, 136, 88, 2)}</g>
      <g>{spriteRects(COIN, 152, 88, 2)}</g>

      {/* HUD */}
      <rect width="196" height="15" fill="#0a0818" />
      <g style={{ fontFamily: "var(--font-silkscreen)" }} shapeRendering="auto">
        <text x="5" y="6.8" fontSize="5.4" fill="#ff6637">1UP</text>
        <text x="5" y="12.6" fontSize="5.4" fill="#f6f0df">004990</text>
        <text x="98" y="6.8" fontSize="5.4" fill="#dfff38" textAnchor="middle">HI-SCORE</text>
        <text x="98" y="12.6" fontSize="5.4" fill="#f6f0df" textAnchor="middle">FUN FOR ALL</text>
        <text x="191" y="6.8" fontSize="5.4" fill="#ff6637" textAnchor="end">TOKENS</text>
        <text x="191" y="12.6" fontSize="5.4" fill="#f6f0df" textAnchor="end">x03</text>

        {/* Title lockup */}
        <g style={{ fontFamily: "var(--font-dela)" }}>
          <text x="99.5" y="36.5" fontSize="17" textAnchor="middle" fill="#0a0818" letterSpacing="-.6">CHUNKY</text>
          <text x="98" y="35" fontSize="17" textAnchor="middle" fill="#dfff38" letterSpacing="-.6">CHUNKY</text>
          <text x="99.5" y="52.5" fontSize="17" textAnchor="middle" fill="#0a0818" letterSpacing="-.6">MONKEY</text>
          <text x="98" y="51" fontSize="17" textAnchor="middle" fill="#ff6637" letterSpacing="-.6">MONKEY</text>
        </g>

        <rect x="53" y="125" width="90" height="12" fill="#0a0818" />
        <text className="blink" x="98" y="133.4" fontSize="7" fill="#dfff38" textAnchor="middle">PRESS START</text>
      </g>
    </svg>
  );
}
