"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/wizard", label: "Wizard" },
  { href: "/workflow", label: "Workflow" },
  { href: "/wiki", label: "Wiki" },
];

export function SiteHeader() {
  const pathname = usePathname();

  const handleWikiClick = (event: MouseEvent<HTMLAnchorElement>) => {
    window.sessionStorage.setItem("wiki-nav-scroll", "top");

    if (pathname !== "/wiki") {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", "/wiki");
    window.dispatchEvent(new CustomEvent("wiki:reset-view"));
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--surface-1)] shadow-[0_10px_24px_-20px_rgba(0,0,0,0.5)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link href="/" className="sf-eyebrow-badge hover:border-[var(--brand-500)] hover:text-[var(--ink-900)]">
          SMART Framework
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm" aria-label="Navigazione principale">
          {navigation.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={
                  item.href === "/wiki"
                    ? handleWikiClick
                    : undefined
                }
                className={`sf-btn-ghost ${isActive ? "border-[var(--brand-500)] bg-[var(--surface-3)] text-[var(--ink-900)]" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
