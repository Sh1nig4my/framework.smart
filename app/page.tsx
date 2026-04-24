import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import smartLogo from "@/documentation/framework/logo/smart-img-text.png";

export const metadata: Metadata = {
  title: "Home",
  description:
    "SMART Framework: standard no-code e AI-native per progettare iniziative, governare la catena Fase 1-2-3 e produrre output tool provider-aware.",
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
    title: "Divulgazione",
    body: "Trasforma richieste vaghe in percorsi comprensibili, con messaggi coerenti e verificabili.",
  },
  {
    title: "Creazione eventi",
    body: "Organizza decisioni su obiettivi, pubblico, formato e limiti prima della produzione dei materiali.",
  },
  {
    title: "Contenuti strutturati",
    body: "Usa una catena unica che riduce contraddizioni e mantiene allineati case, cartella master e output tool di Fase 3.",
  },
];

const faqs = [
  {
    q: "Cos'e SMART Framework?",
    a: "E un framework operativo no-code che standardizza il passaggio da requisiti iniziali a output affidabili, mantenendo controllo umano e supporto agentico.",
  },
  {
    q: "Quale problema risolve?",
    a: "Elimina improvvisazione e frammentazione: pubblico, obiettivi, contenuti e promesse restano coerenti dalla progettazione alla diffusione.",
  },
  {
    q: "A chi si rivolge?",
    a: "A formatori, divulgatori, enti, aziende e team che vogliono processi ripetibili, scalabili e leggibili anche da agenti AI.",
  },
  {
    q: "Perche usarlo oggi?",
    a: "Perche gli agenti accelerano l'esecuzione, ma senza standard aumentano errori e incoerenze. SMART imposta confini, gate e qualita.",
  },
  {
    q: "Come funziona la Fase 3 aggiornata?",
    a: "Dopo la validazione della cartella master, SMART usa tool standardizzati per produrre output finali o prompt provider-specific, con default provider 'non specificato' quando la scelta non e ancora definita.",
  },
];

export default function HomePage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container flex flex-col gap-10 md:gap-14">
        <header className="grid gap-8 rounded-3xl border border-[var(--line)] bg-white/90 p-8 shadow-[0_20px_60px_-30px_rgba(7,21,35,0.45)] md:grid-cols-[1.2fr_1fr] md:p-12">
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-[var(--brand-700)] uppercase">SMART Framework</p>
            <h1 className="max-w-2xl text-4xl leading-tight font-semibold text-balance md:text-6xl">
              Lo standard operativo per progettare iniziative e contenuti con AI, senza perdere coerenza.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-700)] md:text-lg">
              SMART unisce metodo documentale, workflow guidato e customizzazione tramite agenti. In pratica: meno
              ambiguita, piu controllo, output riusabili e qualitativamente stabili tra Fase 1, Fase 2 e Fase 3.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/wizard" className="sf-button-primary">
                Apri Wizard
              </Link>
              <Link href="/wiki#what-is-smart" className="sf-button-secondary">
                Esplora la Wiki
              </Link>
              <Link href="/download" className="sf-button-secondary">
                Apri Download Fase 1
              </Link>
            </div>
          </div>

          <aside className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface-1)] p-6">
            <div className="inline-flex w-fit max-w-full rounded-2xl border border-[var(--line)] bg-white/95 p-3">
              <Image
                src={smartLogo}
                alt="Logo SMART Framework"
                priority
                className="block h-auto w-auto max-h-16 max-w-full object-contain"
              />
            </div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-700)] uppercase">Catena SMART</p>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-700)]">
              <li>1. Standardizza l&apos;intake con lo schema di Fase 1.</li>
              <li>2. Consolida un case JSON verificabile.</li>
              <li>3. Genera una cartella master governabile.</li>
              <li>4. Esegui tool Fase 3 per output coerenti (prompt/materiali).</li>
            </ol>
            <p className="text-xs leading-relaxed text-[var(--ink-600)]">
              Fase 3 provider-aware: preset consigliati, provider custom consentito, default `non specificato`.
            </p>
            <p className="text-sm leading-relaxed text-[var(--ink-700)]">
              Ogni passaggio ha regole, gate e criteri di validazione. Nella Wiki trovi la guida completa sezione per
              sezione, con riferimenti pratici per lavorare in modo conforme.
            </p>
            <p className="text-sm leading-relaxed text-[var(--ink-700)]">
              Parti dalla mappa delle fasi per capire il flusso generale e passa poi ai dettagli operativi in base al
              tuo obiettivo.
            </p>
            <Link
              href="/wiki#phase-map"
              className="mt-2 inline-flex text-sm font-medium text-[var(--brand-700)] hover:text-[var(--ink-900)]"
            >
              Approfondisci il metodo nella Wiki
            </Link>
          </aside>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          {standardAreas.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[var(--line)] bg-white/92 p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">SMART standard</p>
              <h2 className="mt-2 text-lg font-semibold text-[var(--ink-900)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Per chi</p>
            <h2 className="mt-2 text-2xl font-semibold">Team tecnici e non tecnici</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">
              SMART e pensato per chi deve progettare, comunicare o validare contenuti in modo professionale, anche
              senza sviluppo software custom.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Customizzazione agentica</p>
            <h2 className="mt-2 text-2xl font-semibold">Adatta il framework al contesto</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">
              Gli agenti non sostituiscono il metodo: lo eseguono entro confini chiari. Questo permette di scalare
              processi mantenendo tono, policy e qualita allineati al tuo scenario.
            </p>
          </article>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.q} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-1)] p-5">
              <h3 className="text-base font-semibold text-[var(--ink-900)]">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">{faq.a}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-[var(--line)] bg-[var(--ink-900)] px-6 py-8 text-white md:px-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Inizia dal percorso piu adatto alle tue esigenze</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
            Se vuoi configurare ambiente e strumenti parti dal Wizard. Se vuoi le regole complete vai in Wiki. Se vuoi
            applicarlo subito passa al Download della Fase 1.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/wizard"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-900)] transition hover:bg-[var(--surface-2)]"
            >
              Apri Wizard
            </Link>
            <Link href="/wiki#wizard-setup" className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white">
              Vai alla Wiki
            </Link>
            <Link
              href="/download"
              className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white"
            >
              Apri Download Fase 1
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
