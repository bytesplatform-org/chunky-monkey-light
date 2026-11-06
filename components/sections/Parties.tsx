import Image from "next/image";
import { ArcadeButton } from "@/components/ui/ArcadeButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Token } from "@/components/ui/Token";
import { booking } from "@/data/site";

const occasions = [
  { no: "01", title: "Birthday", line: "Celebration", bg: "bg-lime" },
  { no: "02", title: "School", line: "Events", bg: "bg-cream" },
  { no: "03", title: "Corporate", line: "Events", bg: "bg-purple text-cream" },
];

const included = ["Music + entertainment", "Catering", "Decorations", "A tailor-made plan"];

function Stamp() {
  return (
    <svg viewBox="0 0 200 200" className="w-full" role="img" aria-label="Stamp reading: over 1200 guests">
      <defs>
        <path id="stamp-ring" d="M100 100m-72 0a72 72 0 1 1 144 0a72 72 0 1 1-144 0" />
      </defs>
      <g fill="none" stroke="#712dff">
        <circle cx="100" cy="100" r="94" strokeWidth="6" />
        <circle cx="100" cy="100" r="56" strokeWidth="3" />
      </g>
      <text fontSize="17.5" fill="#712dff" letterSpacing="1.2" style={{ fontFamily: "var(--font-silkscreen)" }}>
        <textPath href="#stamp-ring">FUN FOR ALL * NEXT LEVEL * FUN FOR ALL *</textPath>
      </text>
      <text x="100" y="108" textAnchor="middle" fontSize="33" fill="#712dff" style={{ fontFamily: "var(--font-dela)", letterSpacing: "-.05em" }}>1200+</text>
      <text x="100" y="128" textAnchor="middle" fontSize="13" fill="#712dff" style={{ fontFamily: "var(--font-silkscreen)" }}>GUESTS</text>
    </svg>
  );
}

export function Parties() {
  return (
    <section id="parties" aria-labelledby="parties-title" className="relative overflow-hidden bg-orange px-4 pt-20 pb-24 text-ink [--focus:var(--ink)] sm:px-8 lg:px-10 lg:pt-28 lg:pb-32">
      <SectionLabel index="04" className="mb-5">Bonus round</SectionLabel>
      <h2 id="parties-title" className="t-display relative z-20 text-[16vw] lg:text-[9.4vw]">
        <span className="block">Your party.</span>{" "}
        <span className="mt-[.1em] block lg:text-right">
          <span className="inline-block rotate-1 bg-ink px-[.14em] pt-[.08em] pb-[.1em] text-cream">Next level.</span>
        </span>
      </h2>

      <Token className="bob absolute top-[5%] right-[5%] z-10 hidden w-36 -rotate-12 lg:block" face="#f6f0df" rim="#712dff" />

      {/* Main ticket */}
      <div className="print-shadow relative z-10 mt-8 -rotate-1 [--sx:12px] [--sy:14px] lg:mt-12">
        <div className="ticket-edge grid bg-cream lg:grid-cols-[1.05fr_1.4fr_.55fr]">
          {/* Photo stub */}
          <div className="relative min-h-[22rem] overflow-hidden border-ink lg:min-h-[36rem]">
            <Image src="/media/events/event.jpg" alt="A birthday party set-up at Chunky Monkey with balloon arches and a decorated cake table" fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
          </div>

          {/* Print */}
          <div className="relative border-dashed border-ink p-6 sm:p-8 lg:border-x-[3px] lg:p-10 lg:pt-16">
            <p className="t-pixel text-sm text-purple">Admit everybody</p>
            <p aria-hidden="true" className="t-display mt-2 text-[6.5rem] leading-[.85] text-orange lg:text-[10.5rem]">1200+</p>
            <p className="t-cond mt-2 text-4xl lg:text-5xl">Comfortable space for over 1200 people.</p>
            <p className="mt-5 max-w-lg text-lg leading-snug font-medium">
              We specialise in corporate events and birthday parties people remember. Tell us the occasion, and our team will custom-tailor it around you, whether that&apos;s over the top or more subdued.
            </p>
            <ul className="t-pixel mt-5 grid gap-x-5 gap-y-2 text-xs sm:grid-cols-2">
              {included.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-2 bg-orange" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ArcadeButton href={booking.whatsapp} external tone="orange">Book your party</ArcadeButton>
            </div>
            <dl className="t-pixel mt-7 space-y-1 text-xs sm:text-sm">
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-purple">Call</dt>
                <dd><a href={booking.phone.href} className="underline decoration-2 underline-offset-4">{booking.phone.label}</a></dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-purple">Email</dt>
                <dd className="break-all"><a href={`mailto:${booking.email}`} className="underline decoration-2 underline-offset-4">{booking.email}</a></dd>
              </div>
            </dl>
          </div>

          {/* Tear-off */}
          <div className="relative hidden flex-col items-center justify-between bg-lime p-6 lg:flex">
            <p className="t-pixel text-sm [writing-mode:vertical-rl]">Ticket no. 0001</p>
            <div className="w-full -rotate-12"><Stamp /></div>
            <p className="t-display text-[3.4rem] leading-none [writing-mode:vertical-rl]">Play</p>
          </div>
        </div>
      </div>

      {/* Prize tickets */}
      <ul className="relative z-20 mt-10 grid gap-5 sm:grid-cols-3 lg:-mt-6 lg:px-[6%]">
        {occasions.map((o, i) => (
          <li key={o.title} className={`print-shadow lift [--sx:6px] [--sy:7px] ${["-rotate-2", "rotate-1 lg:translate-y-6", "-rotate-1"][i]}`}>
            <div className={`ticket-edge flex items-center gap-4 px-7 py-5 [--gap:20px] [--r:6px] ${o.bg}`}>
              <span className="t-display text-5xl">{o.no}</span>
              <span>
                <span className="t-cond block text-4xl">{o.title}</span>
                <span className="t-pixel block text-xs">{o.line}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
