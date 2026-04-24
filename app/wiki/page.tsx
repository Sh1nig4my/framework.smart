import type { Metadata } from "next";

import { WikiBrowser } from "@/app/components/wiki-browser";

export const metadata: Metadata = {
  title: "Wiki",
  description:
    "Wiki interna SMART: riferimento documentale ufficiale con navigazione gerarchica, contenuti modulari e link interni.",
};

export default function WikiPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-8">
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">Wiki SMART</p>
          <h1 className="max-w-4xl text-4xl leading-tight font-semibold md:text-5xl">
            La documentazione interna ufficiale del framework
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
            Consulta capitoli e sottosezioni senza uscire dalla pagina. La Wiki e pensata come base unica per onboarding,
            applicazione operativa e evoluzione futura dello standard SMART.
          </p>
        </header>

        <WikiBrowser />
      </section>
    </div>
  );
}
