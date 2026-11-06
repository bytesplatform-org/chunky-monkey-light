"use client";

import { useRef } from "react";

export function MobileMenu({
  links,
  bookHref,
}: {
  links: { href: string; label: string; index: string }[];
  bookHref: string;
}) {
  const panel = useRef<HTMLDivElement>(null);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        popoverTarget="site-menu"
        className="t-pixel flex h-11 items-center gap-2 border-[3px] border-ink bg-cream px-3 text-sm text-ink"
      >
        Menu
      </button>
      <div
        ref={panel}
        id="site-menu"
        popover="auto"
        className="fixed inset-x-4 top-20 m-0 w-auto border-[3px] border-ink bg-lime p-5 text-ink shadow-[8px_8px_0_#0a0818]"
      >
        <p className="t-pixel mb-3 text-xs">Select stage</p>
        <ul className="space-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => panel.current?.hidePopover()}
                className="t-cond flex items-baseline gap-3 py-1.5 text-4xl [--focus:var(--ink)]"
              >
                <span className="t-pixel text-xs">{l.index}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={bookHref} target="_blank" rel="noreferrer" className="btn btn-orange mt-5 w-full [--focus:var(--ink)]">
          Book event
        </a>
      </div>
    </div>
  );
}
