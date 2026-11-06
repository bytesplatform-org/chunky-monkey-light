import Image from "next/image";
import { ArcadeButton } from "@/components/ui/ArcadeButton";
import { booking } from "@/data/site";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "#adventure", label: "Games", index: "01" },
  { href: "#records", label: "Records", index: "02" },
  { href: "#rides", label: "Rides", index: "03" },
  { href: "#parties", label: "Parties", index: "04" },
  { href: "#playground", label: "Parks", index: "05" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-navy">
      <a
        href="#main"
        className="t-pixel absolute top-2 left-2 z-10 -translate-y-20 bg-lime px-3 py-2 text-sm text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="flex h-[4.5rem] items-center justify-between gap-4 px-4 sm:px-8 lg:px-10">
        <a href="#main" aria-label="Chunky Monkey, back to top" className="flex items-center gap-3">
          <Image src="/media/brand/logo.png" alt="" width={84} height={60} preload className="h-[3.75rem] w-auto" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="t-pixel flex items-center gap-8 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group flex items-center gap-2 py-2 text-cream transition-colors hover:text-lime">
                  <span className="text-xs text-orange">{l.index}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <p className="t-pixel hidden text-right text-xs leading-tight text-cream-dim xl:block">
            Open daily
            <span className="block text-lime">4PM to midnight</span>
          </p>
          <ArcadeButton href={booking.whatsapp} external small tone="orange" className="max-lg:hidden">
            Book event
          </ArcadeButton>
          <MobileMenu links={links} bookHref={booking.whatsapp} />
        </div>
      </div>
    </header>
  );
}
