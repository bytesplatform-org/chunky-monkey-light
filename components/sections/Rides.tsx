import Image from "next/image";
import { ClippedPhoto } from "@/components/ui/ClippedPhoto";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PixelStar } from "@/components/ui/Sprite";
import { rideRoster } from "@/data/site";

function Meta({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`t-pixel flex flex-wrap gap-2 text-xs ${className}`}>
      {items.map((m) => (
        <li key={m} className="border-2 border-current px-2 py-1">{m}</li>
      ))}
    </ul>
  );
}

export function Rides() {
  return (
    <section id="rides" aria-labelledby="rides-title" className="relative overflow-hidden bg-cream text-ink [--focus:var(--ink)]">
      {/* Headline crossing a photo */}
      <div className="relative px-4 pt-20 sm:px-8 lg:px-10 lg:pt-28">
        <SectionLabel index="03" className="mb-5 text-purple">Featured rides</SectionLabel>
        <h2 id="rides-title" className="t-display relative z-10 text-[15.5vw] lg:text-[9vw]">
          <span className="block">Big thrills.</span>{" "}
          <span className="block text-purple">Bigger smiles.</span>
        </h2>
      </div>

      {/* R01: Flash Tower */}
      <article className="relative mt-10 grid gap-6 px-4 pb-16 sm:px-8 lg:mt-14 lg:grid-cols-12 lg:gap-0 lg:px-0 lg:pb-28">
        <div className="relative lg:col-span-7">
          <ClippedPhoto
            src="/media/rides/flash-tower-aerial.jpg"
            alt="The orange Flash Tower seen from high above, its shadow falling across the patterned park floor"
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="aspect-square w-full lg:w-[calc(100%+2.5rem)] lg:-translate-x-10 [--s:22px]"
            shadow="var(--purple)"
          />
        </div>
        <div className="relative flex flex-col lg:col-span-5 lg:pt-2 lg:pr-10 lg:pl-14">
          <div className="relative -mt-24 ml-auto w-[58%] lg:mt-0 lg:w-[56%]">
            <ClippedPhoto
              src="/media/rides/flash-tower-riders.jpg"
              alt="Two riders laughing and screaming as the Flash Tower climbs"
              sizes="(min-width: 1024px) 22vw, 56vw"
              className="aspect-square w-full rotate-3"
              shadow="var(--orange)"
            />
          </div>
          <p aria-hidden="true" className="t-display t-outline absolute top-2 left-0 text-[6rem] [--stroke:var(--ink)] max-lg:hidden lg:left-14 lg:text-[7.5rem]">01</p>
          <h3 className="t-display relative z-10 mt-6 text-[3.6rem] leading-[.9] lg:mt-auto lg:-ml-[46%] lg:text-[7rem]">
            <span className="block [text-shadow:.035em_.035em_0_var(--cream)]">Flash</span>
            <span className="block text-purple [text-shadow:.035em_.035em_0_var(--cream)]">Tower</span>
          </h3>
          <p className="relative z-10 mt-5 max-w-md text-xl leading-snug font-medium">
            A shoot-up, drop-down tower more than 40 metres tall. A great leg-dangling sensation for riders, and a great spectacle for everyone else.
          </p>
          <Meta items={["Age: Adult"]} className="relative z-10 mt-5" />
        </div>
      </article>

      {/* R02: Bumping Car, colour block */}
      <article className="relative bg-orange">
        <div className="grid items-center gap-8 px-4 py-14 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-0">
          <div className="relative z-10 lg:col-span-5 lg:py-16">
            <p className="t-display text-[5rem] leading-none lg:text-[9rem]">02</p>
            <h3 className="t-display mt-3 text-[3.6rem] leading-[.9] lg:mr-[-30%] lg:text-[7rem]">
              <span className="block">Bumping</span>
              <span className="mt-[.08em] inline-block -rotate-1 bg-ink px-[.14em] pt-[.08em] pb-[.1em] text-cream">Car</span>
            </h3>
            <p className="mt-6 max-w-sm text-xl leading-snug font-medium">
              One of the most iconic rides there is, and one of the most fun-filled. Grab a wheel. Nobody here is staying between the lines.
            </p>
            <Meta items={["Age: Adult + child"]} className="mt-5" />
          </div>
          <div className="relative lg:col-span-7 lg:-my-10">
            <ClippedPhoto
              src="/media/rides/bumping-car.jpg"
              alt="A child at the wheel of a shiny purple bumper car"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="ml-auto aspect-square w-full -rotate-2 lg:w-[78%]"
              shadow="var(--purple)"
            />
          </div>
        </div>
      </article>

      {/* R03: After dark */}
      <article className="relative bg-navy pt-20 text-cream [--focus:var(--lime)] lg:pt-32">
        <div className="grid gap-8 px-4 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pb-24">
          <div className="relative order-2 grid grid-cols-5 items-end gap-4 lg:order-1 lg:col-span-7">
            <ClippedPhoto
              src="/media/rides/frisbee-night.jpg"
              alt="The Frisbee ride lit up in neon green against the night sky"
              sizes="(min-width: 1024px) 36vw, 60vw"
              className="col-span-3 aspect-[4/5]"
              shadow="var(--lime)"
            />
            <ClippedPhoto
              src="/media/rides/action-arm-night.jpg"
              alt="Action Arm lit up red against the night sky"
              sizes="(min-width: 1024px) 24vw, 40vw"
              className="col-span-2 mb-10 aspect-square [--s:10px]"
              shadow="var(--orange)"
            />
          </div>
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-5 lg:pl-8">
            <p className="t-pixel text-sm text-lime">After dark</p>
            <p aria-hidden="true" className="t-display mt-3 text-[5rem] leading-none text-purple lg:text-[9rem]">03</p>
            <h3 className="t-display mt-2 text-[3.4rem] leading-[.9] lg:text-[5.6rem]">
              <span className="block text-lime">Frisbee</span>
              <span className="block text-[.62em]">+ Action Arm</span>
            </h3>
            <p className="mt-6 max-w-md text-xl leading-snug">
              A circular gondola that rotates as it swings. Hydraulic arms that turn, twist and swivel in every direction. Both look even better once the sun goes down.
            </p>
            <Meta items={["DHA Phase IV", "Age: Adult + child"]} className="mt-5 text-cream" />
          </div>
        </div>
      </article>

      {/* R04: Purple block with a cutout breaking out of it */}
      <article className="relative bg-purple text-cream [--focus:var(--lime)]">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 h-3 bg-[repeating-linear-gradient(90deg,var(--purple)_0_24px,transparent_24px_48px)]" />
        <div className="grid items-end gap-6 px-4 pt-14 sm:px-8 lg:grid-cols-12 lg:px-10 lg:pt-16">
          <div className="pb-4 lg:col-span-6 lg:pb-20">
            <p className="t-display text-[5rem] leading-none text-lime lg:text-[9rem]">04</p>
            <h3 className="t-display mt-2 text-[3.6rem] leading-[.9] lg:text-[7.4rem]">
              <span className="block">Time</span>
              <span className="block text-lime">Travel</span>
            </h3>
            <p className="mt-6 max-w-md text-xl leading-snug">
              A miniature giant wheel, built to give children a taste of real thrill without being half as scary.
            </p>
            <Meta items={["DHA Phase IV", "Age: Child"]} className="mt-5" />
          </div>
          <div className="relative lg:col-span-6 lg:-mt-32">
            <Image
              src="/media/cutouts/time-travel.webp"
              alt="The Time Travel miniature wheel with its bright boat-shaped gondolas"
              width={544}
              height={542}
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="relative z-10 ml-auto block w-full drop-shadow-[10px_0_0_var(--purple-deep)]"
            />
          </div>
        </div>
      </article>

      {/* Roster */}
      <div className="px-4 py-16 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-6 lg:px-10 lg:py-24">
        <div className="lg:col-span-4">
          <p className="t-pixel text-sm text-purple">Ride select</p>
          <h3 className="t-display mt-4 text-[3.4rem] leading-[.9] lg:text-[4.6rem]">
            Plenty more on the floor.
          </h3>
          <p className="mt-5 max-w-xs text-lg leading-snug">
            30+ rides, plus 100+ arcade machines. Here are the ones with names.
          </p>
        </div>
        <div className="mt-10 lg:col-span-8 lg:mt-0">
          <h4 className="t-cond flex items-center gap-2 border-b-[3px] border-ink pb-2 text-3xl">
            <PixelStar size={16} color="#ff6637" />
            On the floor
          </h4>
          <ul className="t-cond mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-[1.625rem] sm:grid-cols-3">
            {rideRoster.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
