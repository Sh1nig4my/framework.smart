import type { Metadata } from "next";

import { PageShell } from "@/app/components/layout/page-shell";
import { WikiBrowser } from "@/app/components/wiki-browser";
import packageJson from "@/package.json";

export const metadata: Metadata = {
  title: "Wiki",
  description:
    "Wiki SMART: guida ufficiale versionata con capitoli operativi, gate di qualita, regole canoniche e riferimenti tracciabili per Step 1-2-3.",
};

export default function WikiPage() {
  return (
    <PageShell>
      <header className="sf-hero space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="sf-eyebrow-badge">Wiki SMART</span>
          <span className="sf-eyebrow-badge">Doc v{packageJson.version}</span>
        </div>
        <h1 className="max-w-4xl text-4xl leading-tight font-semibold md:text-5xl">
          La guida professionale ufficiale del framework SMART
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
          Consulta capitoli e sottosezioni senza uscire dalla pagina. Ogni sezione include contesto, workflow
          step-by-step, gate di qualita, errori da evitare e riferimenti canonici.
        </p>
      </header>

      <WikiBrowser />
    </PageShell>
  );
}
