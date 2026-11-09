import Image from "next/image";
import type { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PixelStar } from "@/components/ui/Sprite";

type Game = {
  no: string;
  title: [string, string];
  blurb: string;
  rides: string[];
  players: string;
  bg: string;
  fg: string;
  accent: string;
  src: string;
  alt: string;
  position?: string;
  art: ReactNode;
  offset: string;
};

function Bolts({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 60" className="absolute inset-x-0 top-0 w-full" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 0h200v22l-22 16-20-16-22 16-22-16-22 16-20-16-22 16-22-16-28 16z" fill={color} />
    </svg>
  );
}

function Checker({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 8 3" className="absolute inset-x-0 top-0 w-full" aria-hidden="true" shapeRendering="crispEdges">
      <path fill={color} d="M0 0h1v1H0zM2 0h1v1H2zM4 0h1v1H4zM6 0h1v1H6zM1 1h1v1H1zM3 1h1v1H3zM5 1h1v1H5zM7 1h1v1H7z" />
    </svg>
  );
}

function Rings({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 110" className="absolute inset-x-0 top-0 w-full" aria-hidden="true">
      {[150, 118, 86, 54].map((r, i) => (
        <circle key={r} cx="200" cy="0" r={r} fill="none" stroke={color} strokeWidth="10" opacity={1 - i * 0.12} />
      ))}
    </svg>
  );
}

const games: Game[] = [
  {
    no: "01",
    title: ["Thrill", "Rides"],
    blurb: "Shoot up, drop down, spin out. The ones you dare each other to ride.",
    rides: ["Flash Tower", "Action Arm", "Frisbee", "Octopus"],
    players: "Adult + child",
    bg: "bg-orange",
    fg: "text-ink",
    accent: "#ff8a5c",
    src: "/media/rides/flash-tower-riders.jpg",
    alt: "Two riders on the Flash Tower, seen from above with their feet dangling",
    art: <Bolts color="#e6461a" />,
    offset: "lg:mt-20 lg:-rotate-2",
  },
  {
    no: "02",
    title: ["Arcade", "Games"],
    blurb: "More than 100 arcade machines, indoors and ready for your next high score.",
    rides: ["Arcade machines", "Redemption games", "Fun City", "7D Cinema"],
    players: "All players",
    bg: "bg-lime",
    fg: "text-ink",
    accent: "#c5ec00",
    src: "/media/rides/arcade-hoops.jpg",
    alt: "A boy in a backwards cap lining up a shot on an arcade basketball machine",
    position: "object-top",
    art: <Checker color="#c5ec00" />,
    offset: "lg:mt-0 lg:rotate-1",
  },
  {
    no: "03",
    title: ["Kids'", "Rides"],
    blurb: "Gentle wheels, little pirate ships and a carousel, with indoor play for ages 1 to 5.",
    rides: ["Time Travel", "Caterpillar", "Merry Go Round", "Pirate Party"],
    players: "Little ones",
    bg: "bg-cream",
    fg: "text-ink",
    accent: "#e6dcc0",
    src: "/media/rides/merry-go-round.jpg",
    alt: "Children on a brightly decorated merry-go-round",
    art: (
      <div className="absolute top-14 right-5 grid grid-cols-4 gap-3">
        {Array.from({ length: 8 }, (_, i) => (
          <PixelStar key={i} size={15} color={i % 3 ? "#712dff" : "#ff6637"} />
        ))}
      </div>
    ),
    offset: "lg:mt-28 lg:rotate-2",
  },
  {
    no: "04",
    title: ["Family", "Fun"],
    blurb: "One ride, everybody on board. Coasters, carpets and big spinning cups.",
    rides: ["Family Coaster", "Flying Carpet", "Tea Cups", "Bumping Car"],
    players: "Whole family",
    bg: "bg-purple",
    fg: "text-cream",
    accent: "#8a50ff",
    src: "/media/rides/flying-carpet.jpg",
    alt: "A full row of guests riding the Flying Carpet high above the park",
    art: <Rings color="#8a50ff" />,
    offset: "lg:mt-8 lg:-rotate-1",
  },
];

function Cartridge({ game, inset }: { game: Game; inset: string }) {
  return (
    <li className={inset}>
      <div className={`lift relative ${game.offset}`}>
      <a href="#rides" className="print-shadow block [--sx:10px] [--sy:12px] [--focus:var(--lime)]">
        <article className={`cartridge relative overflow-hidden ${game.bg} ${game.fg}`}>
          {game.art}
          {/* Grip ridges */}
          <div className="relative flex items-start justify-between px-5 pt-5">
            <div>
              <p className="t-pixel text-xs">Game</p>
              <p className="t-display text-[3.4rem] leading-none">{game.no}</p>
            </div>
            <p className="t-pixel max-w-[7rem] text-right text-xs">{game.players}</p>
          </div>

          <h3 className="t-display relative z-10 mt-3 px-5 text-[clamp(2.5rem,3.3vw,3.25rem)] leading-[.96]">
            <span className="block">{game.title[0]}</span>
            <span className="block">{game.title[1]}</span>
          </h3>

          <div className="relative mx-5 mt-4 aspect-[5/4] overflow-hidden border-[3px] border-ink">
            <Image src={game.src} alt={game.alt} fill sizes="(min-width: 1024px) 22vw, 86vw" className={`object-cover ${game.position ?? ""}`} />
          </div>

          <div className="relative px-5 pt-4 pb-7">
            <p className="text-[1.0625rem] leading-snug font-medium">{game.blurb}</p>
            <ul className="t-pixel mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-[.6875rem]">
              {game.rides.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          {/* Edge connector */}
          <div aria-hidden="true" className="flex h-7 justify-center gap-[5px] border-t-[3px] border-ink bg-ink px-6 pt-1">
            {Array.from({ length: 22 }, (_, i) => (
              <span key={i} className="h-full w-full bg-[#ffc83d]" />
            ))}
          </div>
        </article>
      </a>
      </div>
    </li>
  );
}

export function Adventure() {
  return (
    <section id="adventure" aria-labelledby="adventure-title" className="pixel-grid relative overflow-hidden bg-navy px-4 pt-20 pb-20 sm:px-8 lg:px-10 lg:pt-28 lg:pb-28">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <SectionLabel index="01" className="mb-5 text-orange">Select game</SectionLabel>
          <h2 id="adventure-title" className="t-display text-[11.4vw] lg:text-[8.5vw]">
            <span className="block text-cream lg:whitespace-nowrap">Choose your</span>{" "}
            <span className="block text-lime [text-shadow:.04em_.04em_0_var(--purple)]">Adventure.</span>
          </h2>
        </div>
        <p className="max-w-xs text-lg leading-snug text-cream lg:max-w-[15rem] lg:pb-3 lg:text-right">
          Four ways to play. Pick a cartridge, then come and find it at the park.
        </p>
      </div>

      <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6 xl:gap-8">
        {games.map((g, i) => (
          <Cartridge key={g.no} game={g} inset={i % 2 ? "pl-6 sm:pl-0" : "pr-6 sm:pr-0"} />
        ))}
      </ul>
    </section>
  );
}
