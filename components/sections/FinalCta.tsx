import Image from "next/image";
import { ArcadeButton } from "@/components/ui/ArcadeButton";
import { ClippedPhoto } from "@/components/ui/ClippedPhoto";
import { MonkeySprite, PixelStar } from "@/components/ui/Sprite";
import { Token } from "@/components/ui/Token";
import { booking, brand, parks } from "@/data/site";

export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="relative overflow-hidden bg-lime px-4 pt-20 text-ink [--focus:var(--ink)] sm:px-8 lg:px-10 lg:pt-28">
        <p className="t-pixel text-sm">06 / Continue?</p>
        <h2 id="final-title" className="t-display relative z-10 mt-5 text-[21vw] lg:text-[15.4vw]">
          <span className="block">Ready,</span>{" "}
          <span className="block mt-[.08em] text-[.71em] text-purple">Player one?</span>
        </h2>

        <Token className="bob absolute top-[12%] right-[7%] w-[22vw] rotate-12 lg:top-[9%] lg:right-[9%] lg:w-[17vw]" face="#f6f0df" />
        <PixelStar className="absolute top-[6%] right-[34%] hidden lg:block" size={34} color="#0a0818" />

        <div className="relative z-10 mt-8 grid items-end gap-10 pb-10 lg:mt-12 lg:grid-cols-2 lg:pb-0">
          <div className="lg:pb-20">
            <p className="max-w-md text-2xl leading-tight font-medium lg:text-[1.75rem]">
              The fun is waiting. Your next adventure starts here.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-5 pb-2">
              <ArcadeButton href="#playground" tone="ink">Find your park</ArcadeButton>
              <ArcadeButton href={booking.whatsapp} external tone="orange">Book an event</ArcadeButton>
            </div>
          </div>
          <ClippedPhoto
            src="/media/park/dusk.jpg"
            alt="The Chunky Monkey building lit up at dusk, with the giant logo above the entrance"
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="relative aspect-[16/10] w-full rotate-1 lg:-mb-6 [--s:18px]"
            shadow="var(--purple)"
          />
        </div>
      </section>
  );
}

export function Footer() {
  return (
      <footer className="relative bg-navy text-cream">
        <div aria-hidden="true" className="hazard h-5 border-y-[3px] border-ink" />
        <div className="grid gap-10 px-4 py-14 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:py-16">
          <div className="lg:col-span-4">
            <Image src="/media/brand/logo.png" alt="Chunky Monkey, Fun For All" width={128} height={91} />
            <p className="mt-5 max-w-xs leading-snug text-cream-dim">
              A nationwide brand from {brand.owner}.
            </p>
            {/* Coin slot sign-off */}
            <div aria-hidden="true" className="mt-7 inline-flex items-center gap-4 border-[3px] border-ink bg-navy-2 px-4 py-3">
              <span className="block h-9 w-2.5 rounded-sm bg-ink shadow-[0_0_0_3px_var(--orange)]" />
              <span className="t-pixel text-xs text-lime">Insert coin<br /><span className="text-cream">to continue</span></span>
              <MonkeySprite className="w-10" />
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="t-pixel text-sm text-orange">Select</h2>
            <ul className="t-cond mt-3 space-y-1 text-2xl">
              <li><a className="hover:text-lime" href="#adventure">Games</a></li>
              <li><a className="hover:text-lime" href="#rides">Rides</a></li>
              <li><a className="hover:text-lime" href="#parties">Parties</a></li>
              <li><a className="hover:text-lime" href="#playground">Parks</a></li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="t-pixel text-sm text-orange">Parks</h2>
            <ul className="mt-3 space-y-3">
              {parks.map((p) => (
                <li key={p.id}>
                  <a href={p.directions} target="_blank" rel="noreferrer" className="t-cond block text-2xl hover:text-lime">{p.name}</a>
                  {p.phone ? (
                    <a href={p.phone.href} className="text-sm text-cream-dim hover:text-cream">{p.phone.label}</a>
                  ) : (
                    <p className="text-sm text-cream-dim">{p.tag}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="t-pixel text-sm text-orange">Say hi</h2>
            <ul className="mt-3 space-y-2">
              <li><a className="break-all underline decoration-2 underline-offset-4 hover:text-lime" href={`mailto:${brand.email}`}>{brand.email}</a></li>
              <li><a className="underline decoration-2 underline-offset-4 hover:text-lime" href={brand.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a className="underline decoration-2 underline-offset-4 hover:text-lime" href={brand.social.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a className="underline decoration-2 underline-offset-4 hover:text-lime" href={brand.social.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
            <p className="t-pixel mt-5 text-xs text-cream-dim">Open {brand.hours.days}<br /><span className="text-lime">{brand.hours.time}</span></p>
          </div>
        </div>
        <div className="t-pixel flex flex-wrap justify-between gap-2 border-t-2 border-navy-2 px-4 py-5 text-xs text-cream-dim sm:px-8 lg:px-10">
          <p>&copy; 2026 Chunky Monkey. All rights reserved.</p>
          <p>Fun for all</p>
        </div>
      </footer>
  );
}
