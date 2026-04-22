import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filosofia",
  description:
    "Principi SMART: governance no-code, controllo umano, sicurezza operativa e standardizzazione per l'uso di agenti AI.",
  keywords: ["filosofia smart", "principi AI", "no-code governance"],
};

export default function FilosofiaPage() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container space-y-8">
        <header className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--brand-700)] uppercase">
            Filosofia SMART
          </p>
          <h1 className="max-w-3xl text-4xl leading-tight font-semibold md:text-5xl">
            No-code non significa meno rigore: significa piu governance
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-700)]">
            SMART nasce per trasformare la potenza degli agenti di coding in un
            processo trasparente, verificabile e sostenibile nel tempo.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-[var(--line)] bg-white/90 p-6">
            <h2 className="text-lg font-semibold">Sorgente unica</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">
              Prima si costruisce il documento madre, poi si derivano i
              materiali. Cosi si riduce il rumore e aumenta la coerenza.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-white/90 p-6">
            <h2 className="text-lg font-semibold">Controllo umano</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">
              L&apos;AI supporta l&apos;esecuzione, ma la responsabilita resta umana su
              obiettivi, promesse, limiti e impatto comunicativo.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-white/90 p-6">
            <h2 className="text-lg font-semibold">Sicurezza operativa</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">
              Ogni output deve attraversare gate di validazione. Nessuna
              automazione puo bypassare i confini del framework.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-white/90 p-6">
            <h2 className="text-lg font-semibold">Standardizzazione utile</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">
              Schemi, lessico e processi canonici permettono evoluzioni
              continue senza perdere affidabilita o tracciabilita.
            </p>
          </article>
        </div>

        <section className="rounded-2xl border border-[var(--line)] bg-[var(--ink-900)] p-6 text-white">
          <h2 className="text-xl font-semibold">Approfondisci il manifesto</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/80">
            La filosofia completa resta disponibile anche nei documenti
            ufficiali del repository, utili per contributi e governance.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://github.com/Sh1nig4my/framework.smart/blob/main/documentation/manifesto/filosofia.md"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[var(--ink-900)] transition hover:bg-[var(--surface-2)]"
            >
              Documento filosofia
            </a>
            <Link
              href="/wizard"
              className="rounded-full border border-white/35 px-5 py-2 text-sm font-medium text-white transition hover:border-white"
            >
              Vai al Wizard
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
