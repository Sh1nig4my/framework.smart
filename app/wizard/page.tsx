import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wizard",
  description:
    "Wizard SMART: orientamento e setup tecnico per iniziare, senza sostituire la guida metodologica completa del workflow.",
};

const softwareChecklist = [
  "Node.js LTS + npm",
  "Git (ForkGit consigliato per avere maggiore gestione a livello grafico)",
  "Editor codice (WebStorm consigliato)",
  "Accesso a MongoDBAtlas",
  "Browser moderno aggiornato (consigliato Brave)",
  "IDE agentico: OpenCode consigliato, con possibilita di usare agenti open anche senza abbonamento provider",
];

export default function WizardPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-10">
        <header className="rounded-3xl border border-[var(--line)] bg-white/92 p-8 shadow-[0_20px_60px_-30px_rgba(7,21,35,0.45)] md:p-12">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">Wizard SMART</p>
          <h1 className="mt-3 max-w-4xl text-4xl leading-tight font-semibold md:text-5xl">
            Il punto di partenza per attivare l&apos;ecosistema SMART nel modo giusto
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-700)] md:text-lg">
            Questa pagina ti orienta su cosa serve davvero per iniziare: strumenti, ambiente e metodo operativo.
            L&apos;obiettivo e metterti nelle condizioni di lavorare in modo ordinato, evitando setup improvvisati che poi
            rallentano il workflow.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--ink-600)] md:text-base">
            Nota di perimetro: questa pagina copre setup e avvio. La procedura completa Fase 1 -&gt; Fase 2 -&gt; Fase 3 e
            gestita nella Wiki e nella documentazione canonica.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/wiki#wizard-setup" className="sf-button-primary">
              Apri guida completa in Wiki
            </Link>
            <Link href="/download" className="sf-button-secondary">
              Apri Download Fase 1
            </Link>
          </div>
        </header>

        <section className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Come operare con SMART</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--ink-900)]">Prima stabilita, poi velocita</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
              SMART funziona meglio quando il team parte con un contesto chiaro: ambiente allineato, strumenti
              condivisi e regole comuni. Dopo questa fase di setup, tutta la parte operativa viene guidata in dettaglio
              dalla Wiki interna, con percorso completo fase per fase.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
              In pratica: questa pagina ti aiuta ad accendere il motore; la Wiki governa i gate e i passaggi
              metodologici; Download ti permette di avviare subito la compilazione della Fase 1.
            </p>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-1)] p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Setup rapido</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--ink-900)]">Verifica minima consigliata</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--ink-700)]">
              <li>- Installa dipendenze: `npm install`</li>
              <li>- Avvia locale: `npm run dev`</li>
              <li>- Controllo qualita: `npm run lint`</li>
              <li>- Controllo build: `npm run build`</li>
            </ul>
          </article>
        </section>

        <section className="rounded-2xl border border-[var(--line)] bg-white p-6 md:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Checklist software</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--ink-900)]">Cosa deve essere pronto prima di partire</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
            {softwareChecklist.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-[var(--line)] bg-[var(--ink-900)] p-6 text-white md:p-8">
          <h2 className="text-2xl font-semibold">Passo successivo consigliato</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
            Se l&apos;ambiente e pronto, apri la Wiki per il wizard operativo dettagliato e la guida completa al workflow.
            Quando vuoi iniziare subito con dati reali, passa a Download e avvia la Fase 1.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/wiki#phase-one-guide"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-900)] transition hover:bg-[var(--surface-2)]"
            >
              Vai alla Wiki
            </Link>
            <Link
              href="/download"
              className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white"
            >
              Apri Download Fase 1
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
