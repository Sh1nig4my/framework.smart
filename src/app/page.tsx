import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import smartLogo from "@/framework-documents/framework/logo/smart-img-text.png";

export const metadata: Metadata = {
  title: "Home",
  description:
    "SMART Framework: standard operativo no-code e AI-native con percorso Wizard, Workflow SMART, Wiki SMART e catena Step 1-2-3 governata da gate.",
  keywords: [
    "framework smart",
    "standard smart",
    "framework agentico",
    "eventi",
    "contenuti strutturati",
  ],
};

const standardAreas = [
  {
    title: "Interfaccia operativa",
    body: "La web app e il punto operativo unico: qui trovi percorso, strumenti e documentazione per lavorare con ordine.",
  },
  {
    title: "Adozione locale",
    body: "SMART puo essere clonato, avviato e sviluppato in locale, cosi il tuo team mantiene pieno controllo tecnico.",
  },
  {
    title: "Metodo agentico",
    body: "Gli agenti supportano l'esecuzione, ma le decisioni restano guidate da regole chiare e controllo umano.",
  },
];

const operatingScope = [
  {
    q: "Step 1 in app",
    a: "Disponibile subito con Create JSON Master: compili il caso, salvi i dati e scarichi il case JSON.",
  },
  {
    q: "Step 2 e Step 3",
    a: "Fanno parte del workflow SMART ma oggi sono gestiti tramite documentazione, workflow locale e supporto agentico operativo.",
  },
  {
    q: "Evoluzione prevista",
    a: "L'app e progettata per includere nuovi step in modo progressivo, mantenendo chiarezza e continuita operativa.",
  },
];

export default function HomePage() {
  return (
    <PageShell>
      <header className="sf-hero grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <span className="sf-eyebrow-badge">SMART Framework</span>
          <h1 className="max-w-2xl text-4xl leading-tight font-semibold text-balance md:text-6xl">
            SMART Framework: metodo operativo per progettare e pubblicare con coerenza.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-700)] md:text-lg">
            SMART unisce percorso guidato, regole condivise e strumenti pratici. La web app e il punto in cui il
            metodo prende forma e diventa operativo.
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--ink-600)] md:text-base">
            In questa versione puoi gestire direttamente lo Step 1. Step 2 e Step 3 restano disponibili tramite
            documentazione e workflow locale, con supporto operativo su richiesta.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/workflow" className="sf-button-primary">
              Apri Workflow
            </Link>
            <Link href="/wizard" className="sf-button-secondary">
              Apri Wizard
            </Link>
            <Link href="/wiki#step-map" className="sf-btn-ghost">
              Consulta Step Map
            </Link>
          </div>
        </div>

        <aside className="sf-card-muted h-full">
          <div className="inline-flex w-fit max-w-full rounded-2xl border border-[var(--line)] bg-white/95 p-3">
            <Image
              src={smartLogo}
              alt="Logo SMART Framework"
              priority
              className="block h-auto w-auto max-h-16 max-w-full object-contain"
            />
          </div>
          <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-[var(--ink-700)] uppercase">Catena SMART</p>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-700)]">
            <li>1. Step 1: schema -&gt; case JSON validato.</li>
            <li>2. Step 2: case JSON -&gt; cartella master strutturata.</li>
            <li>3. Step 3: cartella master validata -&gt; output tool.</li>
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-700)]">
            Puoi usare il framework in locale mantenendo allineati repository, regole e interfaccia: una base solida
            per lavorare oggi e crescere nel tempo.
          </p>
        </aside>
      </header>

      <section className="sf-grid-3">
        {standardAreas.map((item) => (
          <article key={item.title} className="sf-card-surface">
            <span className="sf-eyebrow-badge">SMART Standard</span>
            <h2 className="mt-3 text-lg font-semibold text-[var(--ink-900)]">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="sf-grid-2">
        {operatingScope.map((item) => (
          <article key={item.q} className="sf-card-muted">
            <h3 className="text-base font-semibold text-[var(--ink-900)]">{item.q}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">{item.a}</p>
          </article>
        ))}
      </section>

      <section className="sf-cta-block">
        <h2 className="text-2xl font-semibold md:text-3xl">Da dove iniziare in pratica</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/85 md:text-base">
          Se devi preparare l&apos;ambiente parti dal Wizard. Se vuoi seguire il percorso completo usa Workflow. Per regole
          e riferimenti ufficiali consulta la Wiki.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/wizard" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--ink-900)] transition hover:bg-[var(--surface-2)]">
            Setup con Wizard
          </Link>
          <Link href="/create-json-master" className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white">
            Avvia Step 1
          </Link>
          <Link href="/wiki" className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white">
            Apri Wiki SMART
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
