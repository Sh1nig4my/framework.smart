import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/wizard", label: "Wizard" },
  { href: "/filosofia", label: "Filosofia" },
  { href: "/fase-1-json", label: "Fase 1 JSON" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link
          href="/"
          className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-medium tracking-[0.18em] text-[var(--ink-700)] uppercase"
        >
          SMART Framework
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[var(--ink-700)] transition hover:bg-[var(--surface-2)] hover:text-[var(--ink-900)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
