import Link from "next/link";
import type { Metadata } from "next";

import { PageShell } from "@/app/components/layout/page-shell";
import { WorkflowStepCard } from "@/app/components/workflow/workflow-step-card";

export const metadata: Metadata = {
  title: "Workflow",
  description:
    "Workflow SMART: storia operativa completa Step 1-2-3, vantaggi del metodo, link Wiki essenziali e accesso guidato a Create JSON Master.",
};

const wikiLinks = [
  { href: "/wiki#step-map", label: "Mappa degli step" },
  { href: "/wiki#step-one-guide", label: "Guida Step 1" },
  { href: "/wiki#step-two-guide", label: "Guida Step 2" },
  { href: "/wiki#step-three-guide", label: "Guida Step 3" },
  { href: "/wiki#prompt-method", label: "Prompt Hub e metodo agentico" },
  { href: "/wiki#quality-gates", label: "Gate di qualita" },
];

export default function WorkflowPage() {
  return (
    <PageShell>
      <header className="sf-hero">
        <span className="sf-eyebrow-badge">Workflow SMART</span>
        <h1 className="sf-hero-title">Un percorso chiaro dall&apos;idea iniziale ai materiali finali</h1>
        <p className="sf-hero-copy">
          Ogni step ha uno scopo preciso e un risultato verificabile. In questo modo il progetto avanza con coerenza,
          senza salti e senza perdite di informazioni.
        </p>
        <p className="sf-hero-note">
          La pagina ti aiuta a capire dove sei nel percorso, cosa fare adesso e quale passaggio viene dopo.
        </p>
      </header>

      <section className="sf-section">
        <span className="sf-eyebrow-badge">Nuova storia standard</span>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--ink-900)]">Dal clone locale all&apos;esecuzione step-by-step</h2>
        <ul className="sf-checklist">
          <li className="sf-checklist-item">
            <span className="sf-checklist-icon">1</span>
            <span>Clona il repository in locale e verifica i prerequisiti dal Wizard.</span>
          </li>
          <li className="sf-checklist-item">
            <span className="sf-checklist-icon">2</span>
            <span>Consulta la Wiki per mappa step, precedenze e gate di qualita.</span>
          </li>
          <li className="sf-checklist-item">
            <span className="sf-checklist-icon">3</span>
            <span>Usa Prompt Hub per scegliere il prompt giusto in base all&apos;attivita da svolgere.</span>
          </li>
          <li className="sf-checklist-item">
            <span className="sf-checklist-icon">4</span>
            <span>Avvia Step 1 con Create JSON Master e consolida il case JSON validato.</span>
          </li>
          <li className="sf-checklist-item">
            <span className="sf-checklist-icon">5</span>
            <span>Prosegui con Step 2 e Step 3 solo dopo verifica dei gate richiesti.</span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <WorkflowStepCard
          step="Step 1"
          title="Create JSON Master"
          subtitle="Compilazione guidata del caso con schema SMART"
          status="Disponibile in app"
          summary="Compili il caso una sola volta, lo salvi su database e scarichi subito il case JSON pronto per i passaggi successivi."
          defaultOpen
          details={
            <div className="space-y-4 pt-4">
              <p className="text-sm leading-relaxed text-[var(--ink-700)]">
                Qui puoi lavorare direttamente in app con una procedura completa: compilazione guidata, controllo dei
                dati, salvataggio e download immediato del file.
              </p>
              <div>
                <Link href="/create-json-master" className="sf-button-primary">
                  Vai a Create JSON Master
                </Link>
              </div>
            </div>
          }
        />

        <WorkflowStepCard
          step="Step 2"
          title="Cartella Master"
          subtitle="Consolidamento dei contenuti e dei vincoli operativi"
          status="Gestione documentale e locale"
          summary="Lo Step 2 e parte essenziale del metodo, ma oggi non e ancora eseguibile direttamente in app."
          details={
            <div className="space-y-4 pt-4">
              <p className="text-sm leading-relaxed text-[var(--ink-700)]">
                Oggi questo passaggio viene gestito tramite documentazione ufficiale, workflow locale e supporto
                operativo dedicato.
              </p>
              <p className="sf-alert-note">
                Se vuoi essere affiancato su questo passaggio nel tuo contesto, puoi contattarci a
                <a href="mailto:dev.emanuele.ienna@gmail.com" className="ml-1 font-semibold underline underline-offset-2">
                  dev.emanuele.ienna@gmail.com
                </a>
                .
              </p>
              <Link href="/wiki#step-two-guide" className="sf-button-secondary">
                Apri guida Step 2 in Wiki
              </Link>
            </div>
          }
        />

        <WorkflowStepCard
          step="Step 3"
          title="Output Tool"
          subtitle="Derivazione finale da cartella master validata"
          status="Gestione documentale e locale"
          summary="Lo Step 3 fa parte del workflow SMART, ma non e ancora automatizzato nell&apos;interfaccia web."
          details={
            <div className="space-y-4 pt-4">
              <p className="text-sm leading-relaxed text-[var(--ink-700)]">
                In questa versione, Step 3 viene gestito con linee guida documentali e workflow locale, con verifica
                finale prima della pubblicazione.
              </p>
              <p className="sf-alert-note">
                Per supporto operativo su Step 3 e per valutare una collaborazione tecnica, scrivi a
                <a href="mailto:dev.emanuele.ienna@gmail.com" className="ml-1 font-semibold underline underline-offset-2">
                  dev.emanuele.ienna@gmail.com
                </a>
                .
              </p>
              <Link href="/wiki#step-three-guide" className="sf-button-secondary">
                Apri guida Step 3 in Wiki
              </Link>
            </div>
          }
        />
      </section>

      <section className="sf-cta-block">
        <span className="text-xs font-semibold tracking-[0.16em] text-white/75 uppercase">Link Wiki necessari</span>
        <h2 className="mt-2 text-2xl font-semibold">Riferimenti essenziali durante il workflow</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {wikiLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition hover:border-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
