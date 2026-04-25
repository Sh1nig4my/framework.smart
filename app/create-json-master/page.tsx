import type { Metadata } from "next";

import { PageShell } from "@/app/components/layout/page-shell";
import { Step1JsonForm } from "@/app/components/step-1-json-form";

export const metadata: Metadata = {
  title: "Create JSON Master",
  description:
    "Compilazione guidata SMART Step 1: salvataggio su database e download automatico del case JSON master.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CreateJsonMasterPage() {
  return (
    <PageShell>
      <header className="sf-hero space-y-4">
        <span className="sf-eyebrow-badge">Create JSON Master</span>
        <h1 className="text-4xl leading-tight font-semibold md:text-5xl">Compila e genera il case JSON master</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
          Qui avvii lo Step 1 operativo: compili il form SMART e, a salvataggio riuscito, ottieni subito il file JSON
          del caso.
        </p>
      </header>

      <Step1JsonForm />
    </PageShell>
  );
}
