import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sicurezza Dati",
  description:
    "Misure e principi di sicurezza dati adottati da SMART Framework: minimizzazione, controllo umano e aggiornamento preventivo delle policy.",
  keywords: ["sicurezza dati", "data security", "smart framework"],
};

export default function SicurezzaDatiPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-6">
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">
            Sicurezza Dati
          </p>
          <h1 className="text-4xl leading-tight font-semibold md:text-5xl">
            Principi di sicurezza e protezione operativa
          </h1>
          <p className="text-sm text-[var(--ink-600)]">Ultimo aggiornamento: 22/04/2026</p>
        </header>

        <article className="rounded-2xl border border-[var(--line)] bg-white/90 p-6 text-sm leading-relaxed text-[var(--ink-700)]">
          <p>
            SMART applica il principio di minimizzazione del dato: raccogliere e
            trattare esclusivamente informazioni strettamente necessarie alla
            continuita operativa del framework.
          </p>

          <h2 className="mt-5 text-base font-semibold text-[var(--ink-900)]">Misure attive</h2>
          <ul className="mt-2 space-y-2">
            <li>- Nessun database attivo nella versione corrente.</li>
            <li>- Nessuna profilazione individuale o finalita commerciali sul dato.</li>
            <li>- Controllo umano sulle decisioni di processo e sulle pubblicazioni.</li>
            <li>- Tracciabilita documentale delle regole operative del framework.</li>
          </ul>

          <h2 className="mt-5 text-base font-semibold text-[var(--ink-900)]">Principio di evoluzione controllata</h2>
          <p className="mt-2">
            Eventuali integrazioni future con raccolta dati saranno introdotte
            con approccio privacy-by-design, con aggiornamento preventivo di
            policy, consenso e limiti di conservazione.
          </p>

          <h2 className="mt-5 text-base font-semibold text-[var(--ink-900)]">Contatto</h2>
          <p className="mt-2">dev.emanuele.ienna@gmail.com</p>
        </article>
      </section>
    </div>
  );
}
