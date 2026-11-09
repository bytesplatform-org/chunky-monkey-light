import { DotMatrix } from "@/components/ui/DotMatrix";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stats } from "@/data/site";

function Rivet({ className }: { className: string }) {
  return <span aria-hidden="true" className={`absolute size-3 rounded-full border-2 border-ink bg-[#8f89a8] ${className}`} />;
}

export function Scoreboard() {
  return (
    <section id="records" aria-labelledby="records-title" className="relative bg-night px-4 pt-20 pb-20 sm:px-8 lg:px-10 lg:pt-28 lg:pb-32">
      <SectionLabel index="02" className="mb-5 text-lime">High scores</SectionLabel>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 id="records-title" className="t-display text-[15.5vw] lg:text-[7.4vw]">
          <span className="block text-lime">Game on.</span>{" "}
          <span className="block text-cream lg:whitespace-nowrap">All night long.</span>
        </h2>
        <p className="max-w-[20rem] text-lg leading-snug text-cream-dim lg:max-w-[16rem] lg:pb-2 lg:text-base">
          Doors open at 4PM and the lights stay on until midnight, seven days a week.
        </p>
      </div>

      {/* The board */}
      <div className="relative mt-12 border-[3px] border-ink bg-purple-deep p-3 shadow-[0_0_0_3px_var(--purple),10px_12px_0_3px_var(--purple)] sm:p-5 lg:mt-16">
        <Rivet className="top-1 left-1" />
        <Rivet className="top-1 right-1" />
        <Rivet className="bottom-1 left-1" />
        <Rivet className="right-1 bottom-1" />

        <div className="border-[3px] border-ink bg-[#26214f]">
          <p className="t-pixel flex justify-between gap-4 bg-lime px-4 py-2 text-xs text-ink sm:text-sm">
            <span>Chunky Monkey high scores</span>
            <span className="max-sm:hidden">Fun for all</span>
          </p>

          <dl className="grid grid-cols-2 gap-[3px] lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col justify-between gap-5 bg-[#0b0a1a] p-4 sm:p-6 lg:p-7">
                <dt className="t-pixel order-2 text-xs text-cream sm:text-sm">
                  {s.label}
                  <span className="mt-1 block text-[.6875rem] text-cream-dim sm:text-xs">{s.note}</span>
                </dt>
                <dd className="order-1">
                  <DotMatrix value={s.value} color={s.color} className="h-[clamp(3.25rem,7vw,7.5rem)] max-w-full" />
                </dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-4 border-t-[3px] border-[#26214f] bg-[#0b0a1a] p-5 sm:grid-cols-2 lg:px-7">
            <div className="flex items-center gap-5">
              <DotMatrix value="4PM-12AM" label="4PM to midnight" color="#dfff38" className="h-9 max-w-full sm:h-11" />
              <p className="t-pixel text-xs text-cream">Mon to Sun</p>
            </div>
            <div className="flex items-center gap-5 sm:justify-end">
              <DotMatrix value="1200+" label="Over 1200 guests" color="#ff6637" className="h-9 sm:h-11" />
              <p className="t-pixel text-xs text-cream">Guests at<br />one event</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
