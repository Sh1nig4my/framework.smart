import type { Metadata } from "next";

import { Fase1JsonForm } from "@/app/components/fase-1-json-form";

export const metadata: Metadata = {
  title: "Fase 1 JSON",
  description:
    "Compilazione guidata della Fase 1 SMART: salvataggio su database e download del case.json.",
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
          <h1 className="text-4xl leading-tight font-semibold md:text-5xl">Compilazione operativa case.json</h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
            Compila il wizard completo della Fase 1: al submit la richiesta viene salvata su database e, se il
            salvataggio va a buon fine, scarichi subito il JSON generato.
          </p>
        </header>

        <Fase1JsonForm />
      </section>
    </div>
  );
}
