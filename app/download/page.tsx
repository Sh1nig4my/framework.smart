import type { Metadata } from "next";

import { Fase1JsonForm } from "@/app/components/fase-1-json-form";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Compilazione guidata SMART Fase 1: salvataggio su database e download automatico del case JSON.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function DownloadPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-8">
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">Download</p>
          <h1 className="text-4xl leading-tight font-semibold md:text-5xl">Compila e scarica il case JSON</h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
            Qui avvii la Fase 1 operativa: compili il form SMART e, a salvataggio riuscito, ottieni subito il file
            JSON del caso.
          </p>
        </header>

        <Fase1JsonForm />
      </section>
    </div>
  );
}
