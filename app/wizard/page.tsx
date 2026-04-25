import Link from "next/link";
import type { Metadata } from "next";

import { PageShell } from "@/app/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Wizard",
  description:
    "Wizard SMART: setup tecnico e orientamento iniziale per preparare l'ambiente prima dell'esecuzione operativa in Workflow SMART e Wiki SMART.",
};

const softwareChecklist = [
  {
    group: "Runtime",
    items: ["Node.js LTS", "npm"],
  },
  {
    group: "Versionamento",
    items: ["Git", "ForkGit consigliato per gestione visuale"],
  },
  {
    group: "Editor / IDE",
    items: ["Editor codice", "WebStorm consigliato"],
  },
  {
    group: "Database",
    items: ["Accesso a MongoDB Atlas"],
  },
  {
    group: "Browser",
    items: ["Browser moderno aggiornato", "Brave consigliato"],
  },
  {
    group: "Agentic tooling",
    items: [
      "IDE agentico: OpenCode consigliato",
      "Possibile usare agenti open anche senza abbonamento provider",
    ],
  },
  {
    group: "Qualita e validazione",
    items: ["npm run lint", "npm run build"],
  },
];

export default function WizardPage() {
  return (
    <PageShell>
      <header className="sf-hero">
        <span className="sf-eyebrow-badge">Wizard SMART</span>
        <h1 className="sf-hero-title">Il punto di partenza per attivare l&apos;ecosistema SMART in modo ordinato</h1>
        <p className="sf-hero-copy">
          Questa pagina ti aiuta a preparare ambiente e strumenti prima di iniziare il lavoro operativo.
        </p>
        <p className="sf-hero-note">
          Il Wizard copre avvio e preparazione. Il percorso completo Step 1 -&gt; Step 2 -&gt; Step 3 viene poi gestito in
          Workflow SMART e nella Wiki.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/wiki#wizard-setup" className="sf-button-primary">
            Apri guida completa in Wiki
          </Link>
          <Link href="/workflow" className="sf-button-secondary">
            Apri Workflow
          </Link>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <article className="sf-card-surface">
          <span className="sf-eyebrow-badge">Come operare con SMART</span>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--ink-900)]">Prima stabilita, poi velocita</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
            SMART funziona al meglio quando il team parte con un contesto chiaro, strumenti condivisi e regole comuni.
            Dopo il setup, il lavoro prosegue nel Workflow SMART step dopo step.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
            In pratica: qui prepari il terreno, poi passi al workflow operativo e avvii lo Step 1 con Create JSON
            Master.
          </p>
        </article>

        <article className="sf-card-muted">
          <span className="sf-eyebrow-badge">Setup rapido</span>
          <h2 className="mt-3 text-xl font-semibold text-[var(--ink-900)]">Verifica minima consigliata</h2>
          <ul className="sf-checklist">
            <li className="sf-checklist-item">
              <span className="sf-checklist-icon">1</span>
              <span>Installa dipendenze: `npm install`</span>
            </li>
            <li className="sf-checklist-item">
              <span className="sf-checklist-icon">2</span>
              <span>Avvia locale: `npm run dev`</span>
            </li>
            <li className="sf-checklist-item">
              <span className="sf-checklist-icon">3</span>
              <span>Controllo qualita: `npm run lint`</span>
            </li>
            <li className="sf-checklist-item">
              <span className="sf-checklist-icon">4</span>
              <span>Controllo build: `npm run build`</span>
            </li>
          </ul>
        </article>
      </section>

      <section className="sf-section">
        <span className="sf-eyebrow-badge">Checklist software</span>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--ink-900)]">Prerequisiti organizzati per gruppo operativo</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {softwareChecklist.map((group) => (
            <article key={group.group} className="rounded-xl border border-[var(--line)] bg-white/85 p-4">
              <p className="text-sm font-semibold text-[var(--ink-900)]">{group.group}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--ink-700)]">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-700)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="sf-cta-block">
        <h2 className="text-2xl font-semibold">Step successivo consigliato</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/82 md:text-base">
          Se l&apos;ambiente e pronto, passa al Workflow per la storia operativa completa e avvia lo Step 1 quando lavori
          su un caso reale.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/wiki#step-one-guide" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--ink-900)] transition hover:bg-[var(--surface-2)]">
            Vai alla Wiki
          </Link>
          <Link href="/workflow" className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white">
            Apri Workflow
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
