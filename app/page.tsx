import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "SMART v1.0.0: framework agentico no-code per progettare eventi e workflow AI in modo sicuro, standardizzato e riusabile.",
  keywords: [
    "framework smart",
    "framework agentico",
    "no-code",
    "eventi AI",
    "governance AI",
  ],
};

export default function Home() {
  return (
    <div className="page-wrap">
      <div className="page-glow" />
      <section className="page-container flex flex-col gap-14">
        <header className="grid gap-8 rounded-3xl border border-[var(--line)] bg-white/88 p-8 shadow-[0_20px_60px_-30px_rgba(7,21,35,0.5)] md:grid-cols-[1.25fr_1fr] md:p-12">
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.24em] text-[var(--brand-700)] uppercase">
              SMART v1.0.0
            </p>
            <h1 className="max-w-2xl text-4xl leading-tight font-semibold text-balance md:text-6xl">
              Il framework agentico no-code per progettare eventi in modo
              sicuro, standardizzato e riusabile.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-700)] md:text-lg">
              SMART unisce metodo documentale e web app operativa: dalla raccolta
              requisiti alla derivazione dei materiali, con guardrail per agenti
              AI e controllo umano in ogni fase critica.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/wizard"
                className="rounded-full bg-[var(--ink-900)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--ink-700)]"
              >
                Vai al Wizard
              </Link>
              <a
                href="https://github.com/Sh1nig4my/framework.smart/blob/main/HOW_TO.md"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--line-strong)] bg-white px-6 py-3 text-sm font-medium text-[var(--ink-800)] transition hover:border-[var(--ink-700)]"
              >
                Apri HOW_TO
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-1)] p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--ink-600)] uppercase">
              Catena SMART
            </p>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-700)]">
              <li>1. `case-schema.json` definisce il perimetro del caso.</li>
              <li>2. `case.json` consolida le decisioni verificabili.</li>
              <li>3. `script-master.md` governa struttura, tono e limiti.</li>
              <li>4. I derivati nascono solo dopo i gate di validazione.</li>
            </ol>
            <a
              href="https://github.com/Sh1nig4my/framework.smart/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-sm font-medium text-[var(--brand-700)] transition hover:text-[var(--ink-900)]"
            >
              Apri README completo
            </a>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-[var(--line)] bg-white/90 p-6">
            <h2 className="text-lg font-semibold">Perche sceglierlo</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">
              Riduce incoerenze tra briefing, materiali e comunicazione, grazie
              a una sorgente unica e a passaggi documentali tracciabili.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-white/90 p-6">
            <h2 className="text-lg font-semibold">Perche oggi</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">
              Gli agenti accelerano il lavoro, ma senza governance possono
              introdurre errori. SMART fornisce standard e confini operativi.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--line)] bg-white/90 p-6">
            <h2 className="text-lg font-semibold">Vantaggio no-code</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">
              Permette anche a team non tecnici di costruire pipeline agentiche
              robuste senza dipendere da sviluppo software custom.
            </p>
          </article>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <Link
            href="/wizard"
            className="rounded-2xl border border-[var(--line)] bg-white p-6 transition hover:border-[var(--line-strong)]"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">
              Guida operativa
            </p>
            <h3 className="mt-2 text-xl font-semibold">Wizard SMART</h3>
            <p className="mt-2 text-sm text-[var(--ink-700)]">
              Passaggi dettagliati per usare il framework in pratica.
            </p>
          </Link>

          <a
            href="https://github.com/Sh1nig4my/framework.smart/blob/main/documentation/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-[var(--line)] bg-white p-6 transition hover:border-[var(--line-strong)]"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">
              Documentazione
            </p>
            <h3 className="mt-2 text-xl font-semibold">SMART Docs</h3>
            <p className="mt-2 text-sm text-[var(--ink-700)]">
              Percorso completo di adozione, metodo e artefatti canonici.
            </p>
          </a>
        </section>

        <section className="grid gap-5 md:grid-cols-1">
          <Link
            href="/fase-1-json"
            className="rounded-2xl border border-[var(--line)] bg-white p-6 transition hover:border-[var(--line-strong)]"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">
              Pipeline utente
            </p>
            <h3 className="mt-2 text-xl font-semibold">Fase 1 JSON (WIP)</h3>
            <p className="mt-2 text-sm text-[var(--ink-700)]">
              Area predisposta per compilazione e download assistito del file.
            </p>
          </Link>
        </section>

        <section className="rounded-3xl border border-[var(--line)] bg-[var(--ink-900)] px-6 py-8 text-white md:px-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            SMART integra framework e applicazione nella stessa governance.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
            Le prossime pagine supporteranno onboarding, download guidati e
            diffusione del metodo mantenendo standard comuni tra documentazione,
            processo e interfaccia web.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/wizard"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-900)] transition hover:bg-[var(--surface-2)]"
            >
              Esplora il Wizard
            </Link>
            <Link
              href="/fase-1-json"
              className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white"
            >
              Fase 1 JSON
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
