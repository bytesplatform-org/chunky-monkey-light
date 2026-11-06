import { ArcadeCabinet } from "@/components/cabinet/ArcadeCabinet";
import { ArcadeButton } from "@/components/ui/ArcadeButton";
import { PixelArrow, PixelStar } from "@/components/ui/Sprite";
import { Token } from "@/components/ui/Token";

function Sunburst({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 16 }, (_, i) => i * 22.5);
  return (
    <svg viewBox="-500 -500 1000 1000" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {rays.map((a) => {
        const r1 = (a * Math.PI) / 180;
        const r2 = ((a + 11.25) * Math.PI) / 180;
        return (
          <path
            key={a}
            d={`M0 0 L${Math.cos(r1) * 900} ${Math.sin(r1) * 900} L${Math.cos(r2) * 900} ${Math.sin(r2) * 900} Z`}
            fill="#5f1fe6"
          />
        );
      })}
    </svg>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy lg:min-h-[max(calc(100svh-4.5rem),760px)]"
    >
      {/* Purple stage, stepped along its left edge */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 hidden w-[47%] overflow-hidden bg-purple [clip-path:polygon(0_0,100%_0,100%_100%,6%_100%,6%_92%,3%_92%,3%_84%,0_84%)] lg:block"
      >
        <Sunburst className="absolute inset-0 size-full" />
      </div>
      <div aria-hidden="true" className="pixel-grid absolute inset-0 -z-20" />

      {/* HUD rail */}
      <div className="t-pixel relative flex items-start justify-between px-4 pt-5 text-xs text-cream sm:px-8 lg:px-10 lg:pt-6 lg:text-sm">
        <p className="flex items-center gap-3">
          <span className="text-orange">Player 01</span>
          <span className="blink text-lime">Ready?</span>
        </p>
        <p className="text-right lg:hidden">
          <span className="text-orange">Hi-score</span> Fun for all
        </p>
      </div>

      <div className="relative lg:grid lg:min-h-[inherit] lg:grid-cols-[53%_47%]">
        <div className="relative z-20 px-4 pt-6 sm:px-8 lg:pt-5 lg:pl-10 lg:pr-0 lg:pb-14">
          <h1
            id="hero-title"
            aria-label="Insert fun. Press start."
            className="t-display relative [--h:18.2vw] [--p:.56] sm:[--h:14vw] lg:[--h:min(8.7vw,13.2svh)] lg:[--p:.62]"
          >
            <span aria-hidden="true" className="block text-[length:var(--h)] text-cream">
              Insert
            </span>
            <span
              aria-hidden="true"
              className="relative -mt-[.04em] block text-[length:calc(var(--h)*1.72)] leading-[.84] text-lime"
            >
              Fun.
              <Token className="bob absolute top-[-4%] left-[3.02em] hidden w-[.5em] lg:block" />
            </span>
            <span aria-hidden="true" className="mt-[.12em] flex flex-wrap items-center gap-x-[.18em] text-[length:calc(var(--h)*var(--p))]">
              <span className="text-cream">Press</span>
              <span className="print-shadow inline-block -rotate-3 [--sx:6px] [--sy:7px]">
                <span className="block bg-orange px-[.2em] pt-[.1em] pb-[.14em] leading-[.9] text-ink">Start.</span>
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-[34rem] text-lg leading-snug text-cream sm:text-xl lg:mt-8">
            Your next adventure is just one play away. Rides, games, and unforgettable moments at Chunky Monkey.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 pb-3 sm:flex sm:gap-4 lg:mt-8">
            <ArcadeButton href="#adventure" className="max-sm:px-1 max-sm:text-[1.0625rem] max-sm:[&>svg]:hidden">Explore the fun</ArcadeButton>
            <ArcadeButton href="#playground" tone="cream" className="max-sm:px-1 max-sm:text-[1.0625rem] max-sm:[&>svg]:hidden">Plan your visit</ArcadeButton>
          </div>

          <div aria-hidden="true" className="t-pixel mt-9 hidden items-center gap-4 text-xs text-cream-dim lg:flex [@media(max-height:800px)]:hidden">
            <PixelArrow size={14} className="rotate-90 text-lime" />
            <span>Scroll to select game</span>
            <PixelStar size={12} />
            <span>1 token = 1 good time</span>
          </div>
        </div>

        {/* The cabinet */}
        <div className="relative z-10 mt-6 h-[116vw] overflow-hidden bg-purple sm:h-[92vw] lg:mt-0 lg:h-auto lg:overflow-visible lg:bg-transparent">
          <Sunburst className="absolute inset-0 size-full lg:hidden" />
          <PixelStar className="absolute top-[7%] left-[7%] hidden lg:block" size={22} />
          <PixelStar className="absolute top-[34%] right-[4%] hidden lg:block" size={16} color="#f6f0df" />
          <PixelStar className="absolute top-[14%] right-[9%] hidden lg:block" size={26} color="#ff6637" />
          <Token className="absolute right-[4%] bottom-[38%] hidden w-[5.5vw] rotate-12 lg:block" face="#f6f0df" />

          <ArcadeCabinet className="absolute top-3 left-1/2 w-[120vw] max-w-[860px] -translate-x-[55%] sm:w-[96vw] lg:top-auto lg:bottom-[-5.5%] lg:left-[-11%] lg:h-[106%] lg:w-auto lg:max-w-none lg:translate-x-0" />

          <p
            aria-hidden="true"
            className="t-pixel absolute top-[3%] right-5 hidden text-right text-sm text-cream xl:block"
          >
            <span className="block text-lime">High score</span>
            Fun for all
          </p>
        </div>
      </div>
    </section>
  );
}
