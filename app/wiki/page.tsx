import type { Metadata } from "next";

import { WikiBrowser } from "@/app/components/wiki-browser";
import packageJson from "@/package.json";

export const metadata: Metadata = {
  title: "Wiki",
  description:
    "Wiki SMART: guida ufficiale versionata con capitoli operativi, gate di qualita, regole canoniche e riferimenti tracciabili per Step 1-2-3.",
};

export default function WikiPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-8">
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">Wiki SMART</p>
            <span className="rounded-full border border-[var(--line-strong)] bg-white px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[var(--ink-700)] uppercase">
              Doc v{packageJson.version}
            </span>
          </div>
          <h1 className="max-w-4xl text-4xl leading-tight font-semibold md:text-5xl">
            La guida professionale ufficiale del framework SMART
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
            Consulta capitoli e sottosezioni senza uscire dalla pagina. Ogni sezione include contesto, workflow passo-passo,
            gate di qualita, errori da evitare e riferimenti canonici per lavorare con standard enterprise.
          </p>
        </header>

        <WikiBrowser />
      </section>
    </div>
  );
}
