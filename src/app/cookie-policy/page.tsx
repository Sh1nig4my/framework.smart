import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy SMART Framework: utilizzo esclusivo di cookie tecnici necessari e condizioni di aggiornamento in caso di nuove categorie.",
  keywords: ["cookie policy", "cookie necessari", "privacy smart"],
};

export default function CookiePolicyPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-6">
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">
            Cookie Policy
          </p>
          <h1 className="text-4xl leading-tight font-semibold md:text-5xl">
            Informativa cookie
          </h1>
          <p className="text-sm text-[var(--ink-600)]">Ultimo aggiornamento: 22/04/2026</p>
        </header>

        <article className="rounded-2xl border border-[var(--line)] bg-white/90 p-6 text-sm leading-relaxed text-[var(--ink-700)]">
          <p>
            SMART Framework utilizza esclusivamente strumenti tecnici necessari
            al funzionamento dell&apos;applicazione. Non sono attive categorie di
            cookie analytics, marketing o profilazione.
          </p>

          <h2 className="mt-5 text-base font-semibold text-[var(--ink-900)]">Dettaglio tecnico</h2>
          <ul className="mt-2 space-y-2">
            <li>- Finalita: registrare la presa visione del banner cookie obbligatorio.</li>
            <li>- Tecnologia: localStorage lato browser.</li>
            <li>- Tipo: preferenza tecnica necessaria.</li>
            <li>- Durata: fino a cancellazione manuale da parte dell&apos;utente.</li>
          </ul>

          <h2 className="mt-5 text-base font-semibold text-[var(--ink-900)]">Aggiornamenti futuri</h2>
          <p className="mt-2">
            Qualora il progetto introduca strumenti analytics o ulteriori
            categorie di cookie, questa policy verra aggiornata prima
            dell&apos;attivazione e saranno introdotti i relativi meccanismi di
            consenso conforme.
          </p>

          <p className="mt-5 font-medium text-[var(--ink-900)]">
            Contatto di riferimento: dev.emanuele.ienna@gmail.com
          </p>
        </article>
      </section>
    </div>
  );
}
