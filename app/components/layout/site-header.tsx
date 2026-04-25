import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/wizard", label: "Wizard" },
  { href: "/workflow", label: "Workflow" },
  { href: "/wiki", label: "Wiki" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link href="/" className="sf-eyebrow-badge hover:border-[var(--brand-500)] hover:text-[var(--ink-900)]">
          SMART Framework
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm" aria-label="Navigazione principale">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="sf-btn-ghost">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
