import type { ReactNode } from "react";
import { ArcadeButton } from "@/components/ui/ArcadeButton";
import { ClippedPhoto } from "@/components/ui/ClippedPhoto";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MonkeySprite, PixelStar } from "@/components/ui/Sprite";
import { brand, facilities, parks, type Park, rules } from "@/data/site";

const levelArt: Record<string, { src: string; alt: string } | null> = {
  seaview: { src: "/media/rides/speedy-car.jpg", alt: "Guests riding a Speedy Car at Sea View under a bright blue sky" },
  "phase-iv": { src: "/media/rides/ride-friends.jpg", alt: "Two friends on a swinging ride at DHA Phase IV, one taking a selfie" },
  hyderabad: null,
};

const steps = ["lg:mt-44", "lg:mt-20", "lg:mt-0"];
const accents = ["#dfff38", "#ff6637", "#712dff"];

/** Hyderabad has no verified photograph yet, so it gets level art rather than a borrowed picture. */
function HyderabadArt() {
  return (
    <div className="print-shadow aspect-[5/4] w-full [--shadow:var(--purple)]">
      <div className="crop-steps relative size-full overflow-hidden bg-purple">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#5f1fe6_0_16px,transparent_16px_32px)]" />
        <div className="absolute inset-x-0 bottom-0 h-[24%] border-t-4 border-ink bg-lime" />
        <MonkeySprite className="absolute bottom-[21%] left-1/2 w-[44%] -translate-x-1/2" />
        <PixelStar className="absolute top-[14%] left-[14%]" size={24} />
        <PixelStar className="absolute top-[26%] right-[16%]" size={18} color="#ff6637" />
        <p className="t-pixel absolute inset-x-0 bottom-[6%] text-center text-sm text-ink">Indoor world</p>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[4.5rem_1fr] gap-2 border-t-2 border-dashed border-[#373065] py-2.5">
      <dt className="t-pixel pt-0.5 text-xs text-cream-dim">{label}</dt>
      <dd className="text-[1.0625rem] leading-snug">{children}</dd>
    </div>
  );
}

function LevelCard({ park, index }: { park: Park; index: number }) {
  const art = levelArt[park.id];
  return (
    <li className={`relative ${steps[index]}`}>
      <article>
        <header className="mb-4 flex items-end justify-between">
          <p className="t-pixel text-sm" style={{ color: index === 2 ? "#a884ff" : accents[index] }}>
            Level {park.level}
          </p>
          <p aria-hidden="true" className="flex gap-1">
            {[0, 1, 2].map((s) => (
              <PixelStar key={s} size={14} color={s <= 2 - index ? "#dfff38" : "#373065"} />
            ))}
          </p>
        </header>
        {art ? (
          <ClippedPhoto src={art.src} alt={art.alt} sizes="(min-width: 1024px) 30vw, 100vw" className="aspect-[5/4] w-full" shadow={accents[index]} />
        ) : (
          <HyderabadArt />
        )}
        <h3 className="t-display mt-7 text-[2.75rem] leading-[.92] xl:text-[3.4rem]">{park.name}</h3>
        {park.city !== park.name && <p className="t-pixel mt-2 text-xs text-orange">{park.city}</p>}
        <dl className="mt-4">
          <Row label="Where">{park.address}</Row>
          <Row label="Hours">{brand.hours.days}, {brand.hours.time}</Row>
          <Row label="Call"><a href={park.phone.href} className="underline decoration-2 underline-offset-4">{park.phone.label}</a></Row>
          <Row label="Rides">{park.rides} &middot; {park.ridesNote}</Row>
        </dl>
        <ArcadeButton href={park.directions} external small className="mt-4" tone={index === 1 ? "orange" : index === 2 ? "cream" : "lime"}>
          Directions to {park.name}
        </ArcadeButton>
      </article>
    </li>
  );
}

export function Playground() {
  return (
    <section id="playground" aria-labelledby="playground-title" className="pixel-grid relative overflow-hidden bg-navy px-4 pt-20 pb-20 sm:px-8 lg:px-10 lg:pt-28 lg:pb-28">
      <div>
        <SectionLabel index="05" className="mb-5 text-lime">Level select</SectionLabel>
        <h2 id="playground-title" className="t-display text-[10.4vw] lg:text-[8.4vw]">
          <span className="block">Choose your</span>{" "}
          <span className="block text-orange">Playground.</span>
        </h2>
      </div>

      <div className="relative mt-12 lg:mt-14">
        {/* The route climbing from level to level, drawn in the gaps above the cards */}
        <svg aria-hidden="true" viewBox="0 0 100 176" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-0 hidden h-44 w-full lg:block">
          <path d="M16 168V96H32.4M50 72V10H66.4" fill="none" stroke="#dfff38" strokeWidth="4" strokeDasharray="12 12" vectorEffect="non-scaling-stroke" />
        </svg>
        <ol className="relative grid gap-16 lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {parks.map((p, i) => (
            <LevelCard key={p.id} park={p} index={i} />
          ))}
        </ol>
      </div>

      {/* How to play */}
      <div className="mt-20 grid border-[3px] border-ink bg-navy-2 shadow-[10px_12px_0_var(--purple)] lg:mt-24 lg:grid-cols-[1.1fr_1.6fr_1.1fr]">
        <div className="bg-lime p-6 text-ink lg:p-8">
          <p className="t-pixel text-xs">Plan your visit</p>
          <h3 className="t-display mt-3 text-[2.9rem] leading-[.92]">How to play</h3>
          <p className="mt-3 text-lg leading-snug font-medium">Every park, every day, {brand.hours.time.toLowerCase().replace("pm", "PM")}.</p>
        </div>
        <div className="p-6 lg:p-8">
          <h4 className="t-pixel text-sm text-lime">Power-ups</h4>
          <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {facilities.map((f) => (
              <li key={f.name}>
                <span className="t-cond block text-2xl">{f.name}</span>
                <span className="block text-sm text-cream-dim">{f.note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t-[3px] border-ink p-6 lg:border-t-0 lg:border-l-[3px] lg:p-8">
          <h4 className="t-pixel text-sm text-orange">House rules</h4>
          <ul className="mt-4 space-y-1.5">
            {rules.map((r) => (
              <li key={r} className="t-cond text-2xl">{r}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-snug text-cream-dim">You&apos;re responsible for your belongings. Please cooperate with our staff.</p>
        </div>
      </div>
    </section>
  );
}
