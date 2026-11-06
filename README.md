# Chunky Monkey V2

The Arcade After Dark: a design-led homepage for Chunky Monkey amusement parks, built with Next.js (App Router), TypeScript and Tailwind CSS.

```bash
npm run dev    # local development
npm run lint   # ESLint
npm run build  # production build, includes type checking
```

## Where things live

| Path | What it holds |
| --- | --- |
| `data/site.ts` | Every fact on the page (parks, hours, phones, ride lists), with its source noted at the top |
| `app/globals.css` | Colour tokens, type classes and the arcade component styles (buttons, stepped crops, tickets, cartridges) |
| `components/cabinet/` | The hero cabinet and its screen, hand-drawn as inline SVG |
| `components/sections/` | One file per homepage section |
| `components/ui/` | Shared parts: arcade button, token, LED readout, pixel sprites, stepped photo frame |
| `public/media/` | Optimised brand, ride, park and event photography |

Motion is CSS only and switches off under `prefers-reduced-motion`. The only client component is the mobile menu.
