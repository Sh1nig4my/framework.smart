import Link from "next/link";
import type { Metadata } from "next";

import { WorkflowStepActions } from "@/app/components/workflow-step-actions";

export const metadata: Metadata = {
  title: "Workflow",
  description:
    "Workflow SMART: storia operativa completa Step 1-2-3, vantaggi del metodo, link Wiki essenziali e accesso guidato a Create JSON Master.",
};

const stepCards = [
  {
    step: "Step 1",
    title: "Create JSON Master",
    body: "Compila il caso con schema SMART, salva il record e genera il JSON validato che governa gli step successivi.",
  },
  {
    step: "Step 2",
    title: "Folder Master",
    body: "Consolida l'output in una cartella modulare con contenuti, vincoli, cautele e struttura pronta alla derivazione.",
  },
  {
    step: "Step 3",
    title: "Output Tool",
    body: "Deriva materiali canale-specifici dalla cartella master validata, con gate provider-aware prima della pubblicazione.",
  },
];

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
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-8 md:space-y-10">
        <header className="rounded-3xl border border-[var(--line)] bg-white/92 p-8 shadow-[0_20px_60px_-30px_rgba(7,21,35,0.45)] md:p-12">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">Workflow SMART</p>
          <h1 className="mt-3 max-w-4xl text-4xl leading-tight font-semibold md:text-5xl">
            La storia standard del framework: da idea iniziale a output governabili
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[var(--ink-700)] md:text-lg">
            SMART nasce per evitare improvvisazione e ridurre rework: ogni step ha uno scopo preciso, un output
            verificabile e un gate prima del passaggio successivo. Questa pagina rende chiaro il perche della
            metodologia e cosa fare in ogni step.
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[var(--ink-600)] md:text-base">
            Obiettivo pratico: mantenere coerenza tra promessa, contenuto e pubblicazione, anche quando il lavoro viene
            accelerato da agenti AI.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          {stepCards.map((item) => (
            <article key={item.step} className="rounded-2xl border border-[var(--line)] bg-white/92 p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">{item.step}</p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--ink-900)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-[var(--line)] bg-white p-6 md:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Nuova storia standard</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--ink-900)]">Dal clone locale all&apos;esecuzione completa</h2>
          <ol className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
            <li>- 1) Clona il repository in locale e verifica i prerequisiti tecnici dal Wizard.</li>
            <li>- 2) Apri la Wiki per capire mappa step, precedenze e gate di qualita.</li>
            <li>- 3) Usa il Prompt Hub per scegliere prompt e categoria corretta per il task.</li>
            <li>- 4) Avvia Step 1 con Create JSON Master e consolida il case JSON validato.</li>
            <li>- 5) Prosegui con Step 2 e Step 3 solo quando i gate sono soddisfatti.</li>
          </ol>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <article className="rounded-2xl border border-[var(--line)] bg-[var(--surface-1)] p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Accesso operativo</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--ink-900)]">Avvia subito lo Step 1</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
              Se vuoi partire subito con un caso reale, usa Create JSON Master. Da questa pagina trovi il punto di
              accesso ufficiale alla compilazione del JSON.
            </p>
            <div className="mt-5">
              <Link href="/create-json-master" className="sf-button-primary">
                Vai a Create JSON Master
              </Link>
            </div>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Step 2 e Step 3</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--ink-900)]">Servizio temporaneamente non disponibile</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
              In questa versione i pulsanti Step 2 e Step 3 sono in aggiornamento. Al click mostriamo un avviso con
              il contatto diretto per supporto operativo.
            </p>
            <div className="mt-5">
              <WorkflowStepActions />
            </div>
          </article>
        </section>

        <section className="rounded-2xl border border-[var(--line)] bg-[var(--ink-900)] p-6 text-white md:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-white/75 uppercase">Link Wiki necessari</p>
          <h2 className="mt-2 text-2xl font-semibold">Riferimenti da consultare durante il workflow</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {wikiLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/35 px-4 py-2 text-sm font-medium text-white transition hover:border-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
