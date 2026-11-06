import { DotMatrix } from "@/components/ui/DotMatrix";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { parks } from "@/data/site";

const headline = [
  { value: "03", label: "Parks to play", note: "Karachi and Hyderabad", color: "#dfff38" },
  { value: "1996", label: "DHA Phase IV established", note: "Still open, still spinning", color: "#ff6637" },
  { value: "1200+", label: "Guests at one event", note: "Birthday, school or corporate", color: "#f6f0df" },
];

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
          Doors open at 4PM and the lights stay on until midnight, seven days a week. The park records below come straight from Chunky Monkey.
        </p>
      </div>

      {/* The board */}
      <div className="relative mt-12 border-[3px] border-ink bg-purple-deep p-3 shadow-[0_0_0_3px_var(--purple),10px_12px_0_3px_var(--purple)] sm:p-5 lg:mt-16">
        <Rivet className="top-1 left-1" />
        <Rivet className="top-1 right-1" />
        <Rivet className="bottom-1 left-1" />
        <Rivet className="right-1 bottom-1" />

        <div className="border-[3px] border-ink bg-[#0b0a1a]">
          <p className="t-pixel flex justify-between gap-4 bg-lime px-4 py-2 text-xs text-ink sm:text-sm">
            <span>Chunky Monkey park records</span>
            <span className="max-sm:hidden">Fun for all</span>
          </p>

          <dl className="grid divide-y-[3px] divide-[#26214f] lg:grid-cols-[1fr_1.45fr_1.8fr] lg:divide-x-[3px] lg:divide-y-0">
            {headline.map((h) => (
              <div key={h.label} className="flex flex-col justify-between gap-5 p-5 lg:p-7">
                <dt className="t-pixel order-2 text-sm text-cream">
                  {h.label}
                  <span className="mt-1 block text-xs text-cream-dim">{h.note}</span>
                </dt>
                <dd className="order-1">
                  <DotMatrix value={h.value} color={h.color} className="h-[clamp(4.5rem,9vw,8.5rem)] max-w-full" />
                </dd>
              </div>
            ))}
          </dl>

          {/* Records table */}
          <div className="border-t-[3px] border-[#26214f]">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Chunky Monkey parks: year established, size and number of rides</caption>
              <thead className="t-pixel text-xs text-orange max-md:sr-only">
                <tr>
                  <th scope="col" className="px-7 pt-5 pb-2 font-normal">Player</th>
                  <th scope="col" className="px-3 pt-5 pb-2 font-normal">Est.</th>
                  <th scope="col" className="px-3 pt-5 pb-2 font-normal">Size</th>
                  <th scope="col" className="px-3 pt-5 pb-2 font-normal">Rides</th>
                  <th scope="col" className="px-7 pt-5 pb-2 font-normal">Includes</th>
                </tr>
              </thead>
              <tbody>
                {parks.map((p, i) => (
                  <tr key={p.id} className="grid grid-cols-[auto_1fr_auto] gap-x-5 gap-y-1 border-t-2 border-dashed border-[#26214f] px-5 py-4 first:border-t-0 md:table-row md:p-0">
                    <th scope="row" className="col-span-3 font-normal md:px-7 md:py-3">
                      <span className="t-cond flex items-baseline gap-3 text-[2rem] text-lime md:text-[2.75rem]">
                        <span className="t-pixel text-sm text-orange">P{i + 1}</span>
                        {p.name}
                      </span>
                    </th>
                    <td className="t-cond text-2xl text-cream md:px-3 md:py-3 md:text-[2.25rem]">{p.established}</td>
                    <td className="t-cond text-2xl text-cream md:px-3 md:py-3 md:text-[2.25rem]">{p.area}</td>
                    <td className="t-cond text-2xl text-orange md:px-3 md:py-3 md:text-[2.25rem]">{p.rides}</td>
                    <td className="t-pixel col-span-3 text-xs text-cream-dim md:px-7 md:py-3 md:text-sm">{p.ridesNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-2 grid gap-4 border-t-[3px] border-[#26214f] p-5 sm:grid-cols-2 lg:px-7">
            <div className="flex items-center gap-5">
              <DotMatrix value="4PM-12AM" label="4PM to midnight" color="#dfff38" className="h-9 max-w-full sm:h-11" />
              <p className="t-pixel text-xs text-cream">Mon to Sun</p>
            </div>
            <div className="flex items-center gap-5 sm:justify-end">
              <DotMatrix value="40M+" label="Over 40 metres" color="#ff6637" className="h-9 sm:h-11" />
              <p className="t-pixel text-xs text-cream">Flash Tower<br />height, Sea View</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
