import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Come funziona",
  description:
    "Guida operativa SMART: workflow progressivo, uso pratico di agenti e prompt, vantaggi e best practice di adozione.",
};

const steps = [
  {
    title: "1. Definisci il caso",
    body: "Parti dai bisogni reali: obiettivo, pubblico, formato e limiti. In SMART non si improvvisa sui requisiti.",
  },
  {
    title: "2. Compila la Fase 1",
    body: "Usa il form Download per produrre un case JSON coerente con lo schema ufficiale del framework.",
  },
  {
    title: "3. Genera lo script master",
    body: "Dal case JSON passi al documento madre che governa tono, struttura, messaggi e confini operativi.",
  },
  {
    title: "4. Applica i gate",
    body: "Verifica coerenza, sicurezza comunicativa e aderenza alle policy prima di distribuire i materiali.",
  },
  {
    title: "5. Deriva gli output",
    body: "Solo dopo la validazione produci slide, pagine, email e altri asset, mantenendo tracciabilita e riusabilita.",
  },
];

const technologies = [
  "Agenti AI come supporto operativo, non come fonte di regole.",
  "Prompt guidati per compilazione, revisione e validazione.",
  "Pipeline documentale a fasi con gate espliciti.",
  "Schema chiuso per ridurre errori e garantire comparabilita.",
];

const advantages = [
  "Standardizzazione del processo",
  "Scalabilita dei workflow",
  "Qualita degli output piu stabile",
  "Customizzazione tramite agenti",
  "Riutilizzabilita dei materiali",
];

export default function HowToPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-10">
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">Come usare SMART</p>
          <h1 className="max-w-4xl text-4xl leading-tight font-semibold md:text-5xl">
            Un percorso progressivo: semplice all&apos;inizio, tecnico quando serve.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
            SMART ti aiuta a lavorare con metodo anche se non sei uno sviluppatore. Parti da scelte guidate, poi
            entri negli aspetti tecnici di prompt, agenti e pipeline in modo graduale.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-[var(--line)] bg-white/92 p-6">
              <h2 className="text-lg font-semibold text-[var(--ink-900)]">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">{step.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[var(--line)] bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Tecnologie coinvolte</p>
            <h2 className="mt-2 text-xl font-semibold">Come si lavora nel framework</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--ink-700)]">
              {technologies.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[var(--line)] bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Prompt usage</p>
            <h2 className="mt-2 text-xl font-semibold">Uso guidato ma non prescrittivo</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">
              I prompt servono a rendere ripetibile la qualita, non a irrigidire il lavoro. Puoi adattare il livello di
              dettaglio al contesto, mantenendo i vincoli essenziali del framework.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">
              Soft gating: SMART e ideale per team disposti a seguire fasi e validazioni minime; e meno adatto a
              scenari che richiedono output immediati senza controllo di processo.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-[var(--line)] bg-[var(--surface-1)] p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Vantaggi</p>
          <h2 className="mt-2 text-2xl font-semibold">Perche il framework scala bene</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => (
              <div key={item} className="rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium text-[var(--ink-800)]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[var(--line)] bg-[var(--ink-900)] p-6 text-white">
          <h2 className="text-2xl font-semibold">Passa alla pratica</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/80">
            Apri la Wiki per consultare standard, guide e best practice, oppure vai al Download per compilare subito la
            Fase 1.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/wiki"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-900)] transition hover:bg-[var(--surface-2)]"
            >
              Vai alla Wiki
            </Link>
            <Link href="/download" className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white">
              Apri Download
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
