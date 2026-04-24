import type { Metadata } from "next";

import { WikiBrowser } from "@/app/components/wiki-browser";

export const metadata: Metadata = {
  title: "Wiki",
  description:
    "Wiki interna SMART: guida professionale con workflow Fase 1-2-3, gate di qualita e standard Fase 3 provider-aware tracciabili.",
};

export default function WikiPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-8">
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">Wiki SMART</p>
          <h1 className="max-w-4xl text-4xl leading-tight font-semibold md:text-5xl">
            La guida professionale ufficiale del framework SMART
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
            Consulta capitoli e sottosezioni senza uscire dalla pagina. Ogni sezione include contesto, workflow passo-passo,
            quality gate, errori da evitare e riferimenti canonici per lavorare con standard enterprise.
          </p>
        </header>

        <WikiBrowser />
      </section>
    </div>
  );
}
