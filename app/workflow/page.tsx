import Link from "next/link";
import type { Metadata } from "next";

import { PageShell } from "@/app/components/layout/page-shell";
import { WorkflowStepCard } from "@/app/components/workflow/workflow-step-card";

export const metadata: Metadata = {
  title: "Workflow",
  description:
    "Workflow SMART: storia operativa completa Step 1-2-3, vantaggi del metodo, link Wiki essenziali e accesso guidato a Create JSON Master.",
};

const wikiLinks = [
  { href: "/wiki#step-map", label: "Mappa degli step" },
  { href: "/wiki#step-one-guide", label: "Guida Step 1" },
  { href: "/wiki#step-two-guide", label: "Guida Step 2" },
  { href: "/wiki#step-three-guide", label: "Guida Step 3" },
  { href: "/wiki#prompt-method", label: "Prompt Hub e metodo agentico" },
  { href: "/wiki#quality-gates", label: "Gate di qualita" },
];

export default function WorkflowPage() {
  return (
    <PageShell>
      <header className="sf-hero">
        <span className="sf-eyebrow-badge">Workflow SMART</span>
        <h1 className="sf-hero-title">Un percorso chiaro dall&apos;idea iniziale ai materiali finali</h1>
        <p className="sf-hero-copy">
          Ogni step ha uno scopo preciso e un risultato verificabile. In questo modo il progetto avanza con coerenza,
          senza salti e senza perdite di informazioni.
        </p>
        <p className="sf-hero-note">
          La pagina ti aiuta a capire dove sei nel percorso, cosa fare adesso e quale passaggio viene dopo.
        </p>
      </header>

      <section className="sf-section">
        <span className="sf-eyebrow-badge">Nuova storia standard</span>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--ink-900)]">Dal clone locale all&apos;esecuzione step-by-step</h2>
        <ul className="sf-checklist">
          <li className="sf-checklist-item">
            <span className="sf-checklist-icon">1</span>
            <span>Clona il repository in locale e verifica i prerequisiti dal Wizard.</span>
          </li>
          <li className="sf-checklist-item">
            <span className="sf-checklist-icon">2</span>
            <span>Consulta la Wiki per mappa step, precedenze e gate di qualita.</span>
          </li>
          <li className="sf-checklist-item">
            <span className="sf-checklist-icon">3</span>
            <span>Usa Prompt Hub per scegliere il prompt giusto in base all&apos;attivita da svolgere.</span>
          </li>
          <li className="sf-checklist-item">
            <span className="sf-checklist-icon">4</span>
            <span>Avvia Step 1 con Create JSON Master e consolida il case JSON validato.</span>
          </li>
          <li className="sf-checklist-item">
            <span className="sf-checklist-icon">5</span>
            <span>Prosegui con Step 2 e Step 3 solo dopo verifica dei gate richiesti.</span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <WorkflowStepCard
          step="Step 1"
          title="Create JSON Master"
          subtitle="Compilazione guidata del caso con schema SMART"
          status="Disponibile in app"
          summary="Raccogli decisioni guidate con schema SMART, produci un case.json validato e costruisci la base strutturata che rende robusti Step 2 e Step 3."
          defaultOpen
          details={
            <div className="sf-step-details">
              <div className="sf-step-detail-grid">
                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Input</h3>
                  <ul className="sf-step-detail-list">
                    <li>Decisioni guidate dell&apos;utente tramite schema SMART a opzioni chiuse.</li>
                    <li>Requisiti reali dell&apos;iniziativa tradotti in valori ammessi e tracciabili.</li>
                    <li>Eventuali nodi aperti esplicitati senza inventare campi o categorie.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Output</h3>
                  <ul className="sf-step-detail-list">
                    <li>`case.json` validato, coerente e pronto per lo Step 2.</li>
                    <li>Salvataggio e storicizzazione del JSON nel flusso applicativo.</li>
                    <li>Download immediato del file per riuso locale e handoff operativo.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Perche l&apos;output e strutturato cosi</h3>
                  <ul className="sf-step-detail-list">
                    <li>Riduce ambiguita in ingresso e rende confrontabili i casi nel tempo.</li>
                    <li>Stabilizza lessico e confini prima della generazione della cartella master.</li>
                    <li>Permette ad agenti e team di lavorare senza introdurre regole implicite.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Decisioni critiche</h3>
                  <ul className="sf-step-detail-list">
                    <li>Obiettivo reale dell&apos;iniziativa e promessa sostenibile verso il pubblico.</li>
                    <li>Profilo pubblico, maturita digitale e livello di complessita ammesso.</li>
                    <li>Tono, policy, limiti e ampiezza della derivazione autorizzata.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Come prepara lo step successivo</h3>
                  <ul className="sf-step-detail-list">
                    <li>Il `case.json` diventa la fonte strutturata unica per generare `cartella-master/`.</li>
                    <li>Ogni scelta iniziale condiziona agenda, conduzione, limiti e handoff Step 3.</li>
                    <li>Uno Step 1 debole rende Step 2 e Step 3 piu fragili e meno affidabili.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Gate di qualita</h3>
                  <ul className="sf-step-detail-list">
                    <li>Tutti i campi obbligatori compilati con soli valori ammessi.</li>
                    <li>Assenza di conflitti logici tra obiettivo, pubblico, design e vincoli.</li>
                    <li>Policy e limiti espliciti prima del passaggio a Step 2.</li>
                  </ul>
                </section>
              </div>

              <section className="sf-step-detail-card">
                <h3 className="sf-step-detail-title">Capitoli chiave del case JSON</h3>
                <div className="sf-step-mini-grid">
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">Identita iniziativa</span>
                    <p>Tipologia, obiettivo, dominio, contesto applicativo, modalita di erogazione.</p>
                  </div>
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">Pubblico</span>
                    <p>Target, esperienza, maturita digitale, dimensione, bisogni e resistenze.</p>
                  </div>
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">Progettazione esperienza</span>
                    <p>Durata, interazione, stile didattico, direzione narrativa, pratica, verifica.</p>
                  </div>
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">Contenuti</span>
                    <p>Profondita, macro temi, priorita, esempi, ruolo dei tool, uso responsabile AI.</p>
                  </div>
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">Vincoli e limiti</span>
                    <p>Tono, complessita, policy, accessibilita comunicativa, elementi da evitare.</p>
                  </div>
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">Output attesi</span>
                    <p>Cartella master, brief derivabili e ampiezza della generazione autorizzata.</p>
                  </div>
                </div>
              </section>

              <p className="sf-step-note">
                Step 1 e operativo in app: compili il caso, ottieni il controllo formale dello schema, salvi e
                storicizzi i dati, poi scarichi il JSON pronto per i passaggi successivi.
              </p>

              <div>
                <Link href="/create-json-master" className="sf-button-primary">
                  Vai a Create JSON Master
                </Link>
              </div>
            </div>
          }
        />

        <WorkflowStepCard
          step="Step 2"
          title="Cartella Master"
          subtitle="Consolidamento dei contenuti e dei vincoli operativi"
          status="Gestione documentale e locale"
          summary="Trasforma il case.json validato in una cartella-master strutturata per domini logici, handoff operativo e derivazione controllata verso Step 3."
          details={
            <div className="sf-step-details">
              <div className="sf-step-detail-grid">
                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Input</h3>
                  <ul className="sf-step-detail-list">
                    <li>`case.json` validato dallo Step 1 come fonte primaria.</li>
                    <li>Template, schema e checklist ufficiali della cartella master.</li>
                    <li>Eventuali assunzioni dichiarate quando il caso non copre un dettaglio.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Output</h3>
                  <ul className="sf-step-detail-list">
                    <li>`cartella-master/` completa e tracciabile, non un file monolitico.</li>
                    <li>Sezioni modulari pronte per uso umano, uso agentico e validazione.</li>
                    <li>Handoff `09_step_3_handoff/` pronto per attivare i tool Step 3.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Perche non e monolitica</h3>
                  <ul className="sf-step-detail-list">
                    <li>Separa i domini logici per evitare duplicazioni e contraddizioni.</li>
                    <li>Facilita handoff operativo tra progettista, divulgatore e agente.</li>
                    <li>Permette revisioni puntuali senza rigenerare tutto da zero.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Decisioni critiche</h3>
                  <ul className="sf-step-detail-list">
                    <li>Cosa esplicitare subito in overview e cosa dettagliare nelle sezioni specialistiche.</li>
                    <li>Come gestire dipendenze tra giornate, blocchi e continuita narrativa.</li>
                    <li>Quali derivati autorizzare in handoff Step 3 e con quali vincoli.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Come prepara lo step successivo</h3>
                  <ul className="sf-step-detail-list">
                    <li>Definisce tool autorizzati, provider target e scope filters.</li>
                    <li>Rende chiari limiti brand, policy e condizioni di pubblicazione.</li>
                    <li>Riduce errori in Step 3 mantenendo una fonte canonica unica.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Gate di qualita</h3>
                  <ul className="sf-step-detail-list">
                    <li>Presenza completa delle directory canoniche `00`-`09`.</li>
                    <li>Coerenza cross-file con `case.json`, limiti e policy espliciti.</li>
                    <li>Handoff Step 3 completo con metadati minimi e stato approvato.</li>
                  </ul>
                </section>
              </div>

              <section className="sf-step-detail-card">
                <h3 className="sf-step-detail-title">Struttura canonica di cartella-master</h3>
                <div className="sf-step-mini-grid">
                  <div className="sf-step-mini-card"><span className="sf-step-pill">00_index</span><p>`README.md`, `manifest.json`, mappa generale, completezza, stato file.</p></div>
                  <div className="sf-step-mini-card"><span className="sf-step-pill">01_overview</span><p>Identita iniziativa, sintesi strategica, pubblico, promessa e perimetro.</p></div>
                  <div className="sf-step-mini-card"><span className="sf-step-pill">02_event_structure</span><p>Agenda generale, logica narrativa, conduzione, cautele AI.</p></div>
                  <div className="sf-step-mini-card"><span className="sf-step-pill">03_daily_events</span><p>Piani giornata singola con blocchi, tempi, output e transizioni.</p></div>
                  <div className="sf-step-mini-card"><span className="sf-step-pill">04_multi_day_events</span><p>Piani multi-giorno, dipendenze tra giornate, continuita narrativa.</p></div>
                  <div className="sf-step-mini-card"><span className="sf-step-pill">05_collections</span><p>Collezioni contenuti/sessioni, criteri di riuso, relazioni tra asset.</p></div>
                  <div className="sf-step-mini-card"><span className="sf-step-pill">06_seminars</span><p>Adattamenti per seminari su tono, profondita e ritmo.</p></div>
                  <div className="sf-step-mini-card"><span className="sf-step-pill">07_content_types</span><p>Adattamento formati e varianti senza cambiare significato.</p></div>
                  <div className="sf-step-mini-card"><span className="sf-step-pill">08_agent_ready_files</span><p>File sintetici machine-friendly con blocchi, limiti e punti chiave.</p></div>
                  <div className="sf-step-mini-card"><span className="sf-step-pill">09_step_3_handoff</span><p>Tool autorizzati, provider target, vincoli brand, scope filters, checklist.</p></div>
                </div>
              </section>

              <p className="sf-step-note">
                Oggi lo Step 2 non e ancora eseguibile direttamente in app: si gestisce tramite documentazione ufficiale,
                workflow locale e supporto agentico.
              </p>

              <p className="sf-alert-note">
                Se vuoi valutare supporto operativo o collaborazione su questo step nel tuo contesto, puoi contattarci a
                <a href="mailto:dev.emanuele.ienna@gmail.com" className="ml-1 font-semibold underline underline-offset-2">
                  dev.emanuele.ienna@gmail.com
                </a>
                .
              </p>
              <Link href="/wiki#step-two-guide" className="sf-button-secondary">
                Apri guida Step 2 in Wiki
              </Link>
            </div>
          }
        />

        <WorkflowStepCard
          step="Step 3"
          title="Output Tool"
          subtitle="Derivazione finale da cartella master validata"
          status="Gestione documentale e locale"
          summary="Attiva i tool v1 partendo dalla cartella master validata per produrre materiali finali diretti oppure prompt strutturati provider-aware pronti all&apos;esecuzione."
          details={
            <div className="sf-step-details">
              <div className="sf-step-detail-grid">
                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Input</h3>
                  <ul className="sf-step-detail-list">
                    <li>Cartella master validata con gate Step 2 superato.</li>
                    <li>Handoff completo da `09_step_3_handoff/`.</li>
                    <li>Richiesta utente aggiuntiva e vincoli SMART applicabili.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Output</h3>
                  <ul className="sf-step-detail-list">
                    <li>Materiali finali diretti quando il tool puo generarli in modo affidabile.</li>
                    <li>Prompt provider-specific o provider-neutral per output complessi/multimediali.</li>
                    <li>Tracciabilita tra sorgenti cartella master e risultato del tool.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Materiale diretto vs prompt eseguibile</h3>
                  <ul className="sf-step-detail-list">
                    <li>Per output complessi, lo step genera spesso un prompt strutturato e non il file finale.</li>
                    <li>Esempio: `genera-powerpoint` produce un deck brief per provider slide compatibile.</li>
                    <li>Stessa logica per immagini, video, pagine web e altri output provider-aware.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">provider_target</h3>
                  <ul className="sf-step-detail-list">
                    <li><strong>preset</strong>: provider consigliato dallo standard o dall&apos;handoff.</li>
                    <li><strong>custom</strong>: provider scelto dall&apos;utente con vincoli esplicitati.</li>
                    <li><strong>non specificato</strong>: default ammesso, output adattabile e provider-neutral.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Decisioni critiche</h3>
                  <ul className="sf-step-detail-list">
                    <li>Se generare materiale finale diretto o prompt eseguibile su provider esterno.</li>
                    <li>Quale porzione trattare con scope filters (giorni, blocchi, sezioni).</li>
                    <li>Come rispettare limiti brand, policy e promessa senza introdurre nuovi claim.</li>
                  </ul>
                </section>

                <section className="sf-step-detail-card">
                  <h3 className="sf-step-detail-title">Gate di qualita</h3>
                  <ul className="sf-step-detail-list">
                    <li>Coerenza semantica con cartella master, unica fonte canonica.</li>
                    <li>Dichiarazione esplicita di tool usato e provider target.</li>
                    <li>Revisione finale umana prima di pubblicazione o distribuzione.</li>
                  </ul>
                </section>
              </div>

              <section className="sf-step-detail-card">
                <h3 className="sf-step-detail-title">Tool disponibili Step 3 standardizzati v1</h3>
                <div className="sf-step-mini-grid">
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">genera-proposte-naming</span>
                    <p>Genera almeno 10 proposte naming con razionale sintetico, allineate all&apos;evento.</p>
                  </div>
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">genera-immagine</span>
                    <p>Usa palette e vincoli evento per produrre prompt o materiali di generazione immagini.</p>
                  </div>
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">genera-documenti-riassuntivi</span>
                    <p>Produce riassunti operativi su giorno singolo, range giorni o blocchi specifici.</p>
                  </div>
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">genera-powerpoint</span>
                    <p>Produce prompt per provider slide: deck grandi, multi-giorno, seminari brevi, micro-deck.</p>
                  </div>
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">genera-pagina-web-statica</span>
                    <p>Produce HTML5/CSS/JS all-in-one o prompt/struttura coerente per pagina evento e varianti.</p>
                  </div>
                  <div className="sf-step-mini-card">
                    <span className="sf-step-pill">genera-video-informativo</span>
                    <p>Produce prompt video provider-specific, con priorita operativa inferiore negli standard v1.</p>
                  </div>
                </div>
              </section>

              <p className="sf-step-note">
                Anche in Step 3 la cartella master validata resta la fonte canonica: ogni derivazione deve poter essere
                ricondotta ai file di origine senza alterare senso, limiti e confini.
              </p>

              <p className="sf-alert-note">
                Se vuoi valutare supporto operativo o collaborazione su questo step, scrivi a
                <a href="mailto:dev.emanuele.ienna@gmail.com" className="ml-1 font-semibold underline underline-offset-2">
                  dev.emanuele.ienna@gmail.com
                </a>
                .
              </p>
              <Link href="/wiki#step-three-guide" className="sf-button-secondary">
                Apri guida Step 3 in Wiki
              </Link>
            </div>
          }
        />
      </section>

      <section className="sf-cta-block">
        <span className="text-xs font-semibold tracking-[0.16em] text-white/75 uppercase">Link Wiki necessari</span>
        <h2 className="mt-2 text-2xl font-semibold">Riferimenti essenziali durante il workflow</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {wikiLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition hover:border-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
