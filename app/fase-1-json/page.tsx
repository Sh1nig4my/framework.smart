import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fase 1 JSON",
  description:
    "Area SMART in preparazione per compilazione guidata e download del case.json della Fase 1.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Fase1JsonPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-8">
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">
            Fase 1 JSON
          </p>
          <h1 className="text-4xl leading-tight font-semibold md:text-5xl">
            Work in progress
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
            Questa area ospitera la compilazione guidata della Fase 1 e il
            download del JSON per facilitare la pipeline SMART.
          </p>
        </header>

        <section className="rounded-2xl border border-dashed border-[var(--line-strong)] bg-white/80 p-8">
          <h2 className="text-xl font-semibold">Cosa arrivera</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--ink-700)]">
            <li>- compilazione assistita dei campi di `case-schema.json`;</li>
            <li>- validazione minima pre-export;</li>
            <li>- esportazione file `case.json` pronto per la Fase 2;</li>
            <li>- integrazione futura opzionale per metriche d&apos;uso aggregate.</li>
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/wizard"
            className="rounded-full bg-[var(--ink-900)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--ink-700)]"
          >
            Torna al Wizard
          </Link>
          <a
            href="https://github.com/Sh1nig4my/framework.smart/blob/main/documentation/wizard/case-schema.json"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--line-strong)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-800)] transition hover:border-[var(--ink-900)]"
          >
            Apri case-schema.json
          </a>
        </div>
      </section>
    </div>
  );
}
