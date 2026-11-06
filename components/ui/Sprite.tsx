/** Draws pixel art from rows of characters, merging runs into single rects. */

const palette: Record<string, string> = {
  K: "#0a0818", B: "#a2552b", D: "#6d3417", T: "#f7c48f", W: "#f6f0df",
  L: "#dfff38", O: "#ff6637", P: "#712dff", Y: "#ffc83d", G: "#2ee58e", C: "#4fd8ff", R: "#ff3f5e",
};

export function spriteRects(rows: string[], x = 0, y = 0, scale = 1, colors = palette) {
  const rects = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    let c = 0;
    while (c < row.length) {
      const ch = row[c];
      let end = c + 1;
      while (end < row.length && row[end] === ch) end++;
      if (ch !== "." && colors[ch]) {
        rects.push(
          <rect key={`${r}-${c}`} x={x + c * scale} y={y + r * scale} width={(end - c) * scale} height={scale} fill={colors[ch]} />,
        );
      }
      c = end;
    }
  }
  return rects;
}

export const MONKEY = [
  "......KK................",
  ".....KLLK...............",
  "....KLLLLKKKKKKK........",
  "....KLLLKBBBBBBBK.......",
  ".....KKKBBBBBBBBBK......",
  ".......KBBBBBBBBBK..KKK.",
  ".KKK..KBTTTBBTTTBK.KTTTK",
  "KTTTK.KBTTTTTTTTBK.KTDTK",
  "KTDTKKKTTWWTTWWTTKKKTTTK",
  ".KTTKDKTTWKTTWKTTKDKTTK.",
  "..KKK.KTTTTTTTTTTK.KKK..",
  ".......KTTTKKTTTK.......",
  ".......KTKTTTTKTK.......",
  "........KTKKKKTK........",
  ".KKK.....KKKKKK.....KKK.",
  "KTTTKKKKBBBBBBBBKKKKTTTK",
  ".KKBBBBBBTTTTTTBBBBBBKK.",
  "...KKKKKBTTTTTTBKKKKK...",
  ".......KBTTTTTTBK...KK..",
  ".......KBBBBBBBBK..KBK..",
  ".......KBBBKKBBBKKKBK...",
  "......KTTTK..KTTTKKK....",
  "......KKKKK..KKKKK......",
];

export const STAR = ["..W..", "..W..", "WWWWW", "..W..", "..W.."];

export function PixelStar({ className = "", color = "#dfff38", size = 20 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 5 5" width={size} height={size} className={className} aria-hidden="true" shapeRendering="crispEdges">
      <path fill={color} d="M2 0h1v2h2v1H3v2H2V3H0V2h2z" />
    </svg>
  );
}

export function PixelArrow({ className = "", size = 24, color = "currentColor" }: { className?: string; size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 7 7" width={size} height={size} className={className} aria-hidden="true" shapeRendering="crispEdges">
      <path fill={color} d="M1 0h2v1h1v1h1v1h1v1H5v1H4v1H3v1H1V6h1V5h1V4H0V3h3V2H2V1H1z" />
    </svg>
  );
}

export function MonkeySprite({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 23" className={className} aria-hidden="true" shapeRendering="crispEdges">
      {spriteRects(MONKEY)}
    </svg>
  );
}
