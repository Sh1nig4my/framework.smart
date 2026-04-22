import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wizard",
  description:
    "Guida operativa SMART: passaggi strutturati dalla Fase 1 alla derivazione dei materiali con controlli di coerenza e sicurezza.",
  keywords: ["wizard smart", "fase 1", "script master", "framework operativo"],
};

const steps = [
  {
    title: "1. Definisci il caso",
    body: "Parti da case-schema.json e raccogli i requisiti senza inventare campi o scorciatoie fuori standard.",
  },
  {
    title: "2. Valida il case.json",
    body: "Controlla obiettivo, pubblico, formato, limiti e conflitti logici prima di passare oltre.",
  },
  {
    title: "3. Genera lo script master",
    body: "Compila script-master.md usando il case.json come fonte primaria e dichiarando assunzioni o nodi aperti.",
  },
  {
    title: "4. Applica i gate",
    body: "Verifica coerenza, sicurezza comunicativa e aderenza al framework prima della derivazione dei materiali.",
  },
  {
    title: "5. Deriva gli output",
    body: "Produci slide, email, pagina evento e asset secondari solo dallo script master validato.",
  },
];

export default function WizardPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-10">
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">
            Wizard SMART
          </p>
          <h1 className="max-w-3xl text-4xl leading-tight font-semibold md:text-5xl">
            Procedura guidata per usare il framework in modo affidabile
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
            Questa pagina traduce il metodo SMART in passaggi operativi chiari,
            adatti sia a team umani sia a workflow con agenti AI.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-[var(--line)] bg-white/90 p-6"
            >
              <h2 className="text-lg font-semibold text-[var(--ink-900)]">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <section className="rounded-2xl border border-[var(--line)] bg-[var(--surface-1)] p-6">
          <h2 className="text-xl font-semibold">Risorse collegate</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/fase-1-json"
              className="rounded-full bg-[var(--ink-900)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--ink-700)]"
            >
              Fase 1 JSON (WIP)
            </Link>
            <a
              href="https://github.com/Sh1nig4my/framework.smart/blob/main/HOW_TO.md"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line-strong)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-800)] transition hover:border-[var(--ink-900)]"
            >
              HOW_TO completo
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}
