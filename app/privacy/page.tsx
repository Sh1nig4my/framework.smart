import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa privacy SMART Framework: finalita, perimetro trattamento dati attuale e condizioni di aggiornamento in caso di future integrazioni.",
  keywords: ["privacy smart", "privacy policy", "trattamento dati"],
};

export default function PrivacyPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-6">
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">
            Privacy
          </p>
          <h1 className="text-4xl leading-tight font-semibold md:text-5xl">
            Informativa sul trattamento dei dati
          </h1>
          <p className="text-sm text-[var(--ink-600)]">Ultimo aggiornamento: 22/04/2026</p>
        </header>

        <article className="rounded-2xl border border-[var(--line)] bg-white/90 p-6 text-sm leading-relaxed text-[var(--ink-700)]">
          <h2 className="text-base font-semibold text-[var(--ink-900)]">Titolare del progetto</h2>
          <p className="mt-2">
            SMART Framework. Contatto ufficiale: dev.emanuele.ienna@gmail.com
          </p>

          <h2 className="mt-5 text-base font-semibold text-[var(--ink-900)]">Stato attuale del trattamento</h2>
          <p className="mt-2">
            Alla data di questo aggiornamento, l&apos;applicazione raccoglie e
            salva su database i dati inviati nel flusso `/download` per
            finalita di manutenzione, tracciabilita operativa e miglioramento
            del framework. Non sono attivi strumenti analytics e non viene
            svolta profilazione.
          </p>

          <h2 className="mt-5 text-base font-semibold text-[var(--ink-900)]">Dati tecnici gestiti</h2>
          <p className="mt-2">
            L&apos;applicazione memorizza esclusivamente una preferenza tecnica
            locale, necessaria a registrare la presa visione del banner cookie
            obbligatorio. Tale informazione resta nel browser dell&apos;utente.
          </p>

          <h2 className="mt-5 text-base font-semibold text-[var(--ink-900)]">Evoluzione futura del servizio</h2>
          <p className="mt-2">
            Il salvataggio attuale include dati di contatto, contenuto della
            richiesta e JSON completo della Fase 1. Il sistema evita il
            salvataggio di duplicati quando email e JSON sono identici.
          </p>
          <p className="mt-2">
            Eventuali estensioni future del trattamento verranno comunque
            comunicate preventivamente, con aggiornamento puntuale di finalita,
            tempi di conservazione e diritti degli interessati.
          </p>

          <h2 className="mt-5 text-base font-semibold text-[var(--ink-900)]">Limitazioni d&apos;uso del dato</h2>
          <p className="mt-2">
            Eventuali dati raccolti in futuro non saranno destinati a vendita,
            cessione commerciale o uso pubblicitario, ma esclusivamente a
            finalita tecniche connesse alla manutenzione del framework.
          </p>
        </article>
      </section>
    </div>
  );
}
