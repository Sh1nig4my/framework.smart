const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/sicurezza-dati", label: "Sicurezza Dati" },
];

export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-[var(--line)] bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.4fr_1fr] md:px-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--ink-900)]">SMART Framework</p>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--ink-700)]">
            Framework agentico no-code per progettazione, diffusione e gestione di
            iniziative formative con standard metodologici, sicurezza operativa e
            collaborazione uomo-AI.
          </p>
          <a
            href="mailto:dev.emanuele.ienna@gmail.com"
            className="inline-flex text-sm font-medium text-[var(--brand-700)] transition hover:text-[var(--ink-900)]"
          >
            dev.emanuele.ienna@gmail.com
          </a>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--ink-900)]">Privacy e Dati</p>
          <ul className="space-y-2 text-sm text-[var(--ink-700)]">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--ink-900)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/wiki" className="transition hover:text-[var(--ink-900)]">
                Wiki SMART
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
