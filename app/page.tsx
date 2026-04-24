import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "SMART Framework: standard no-code e AI-native per progettare iniziative divulgative, creare eventi e generare contenuti strutturati personalizzabili.",
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
    body: "Usa una catena unica che riduce contraddizioni e mantiene allineati script, derivati e comunicazione.",
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
              ambiguita, piu controllo, output riusabili e qualitativamente stabili.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/how-to" className="sf-button-primary">
                Come funziona
              </Link>
              <Link href="/wiki" className="sf-button-secondary">
                Esplora la Wiki
              </Link>
              <Link href="/download" className="sf-button-secondary">
                Vai al Download
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-[var(--line)] bg-[var(--surface-1)] p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-700)] uppercase">Catena SMART</p>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-700)]">
              <li>1. Standardizza l&apos;intake con lo schema di Fase 1.</li>
              <li>2. Consolida un case JSON verificabile.</li>
              <li>3. Genera uno script master governabile.</li>
              <li>4. Deriva materiali coerenti e personalizzati.</li>
            </ol>
            <Link href="/wiki" className="mt-5 inline-flex text-sm font-medium text-[var(--brand-700)] hover:text-[var(--ink-900)]">
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
          <h2 className="text-2xl font-semibold md:text-3xl">Inizia dal percorso piu adatto al tuo livello</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
            Se vuoi una guida progressiva parti da Come funziona. Se vuoi le regole complete vai in Wiki. Se vuoi
            applicarlo subito passa al Download della Fase 1.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/how-to"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-900)] transition hover:bg-[var(--surface-2)]"
            >
              Apri Come funziona
            </Link>
            <Link href="/wiki" className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white">
              Vai alla Wiki
            </Link>
            <Link
              href="/download"
              className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white"
            >
              Apri Download
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
