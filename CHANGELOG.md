# Changelog

## [1.5.1] - 2026-04-25

Rifinitura pre-produzione con riallineamento versione framework e revisione completa framework+app.

- aggiornato versioning a `1.5.1` in `package.json`, `package-lock.json`, `README.md` e `HOW_TO.md`;
- consolidata UX della Wiki: riferimenti canonici in uscita verso GitHub blob ufficiali, navigazione interna con scroll contestuale e reset completo vista da navbar su `/wiki`;
- migliorata navigazione globale con evidenza della pagina attiva in navbar (`aria-current` + stato visivo chiaro);
- completata verifica pre-rilascio su app e framework con validazioni tecniche (`npm run lint`, `npm run build`) e controllo coerenza baseline versione/documentazione.

## [1.5.0] - 2026-04-25

Refactor evolutivo completo di web app e backend con allineamento documentale pre-rilascio.

- introdotto design system globale esteso in `app/globals.css` con palette triadica aggiornata (verde brillante, accenti blu e terracotta) e superfici neutre uniformi;
- riorganizzati componenti frontend in `app/components/layout/` e `app/components/workflow/`, eliminando componenti legacy non piu usati;
- migliorate UX e narrativa delle pagine `/`, `/wizard`, `/workflow` con card uniformate, CTA coerenti e collapsible step-by-step;
- mantenuta `/wiki` con navigazione hash compatibile, riallineata al nuovo sistema visivo;
- rifattorizzata API Step 1 secondo pattern `controller -> service -> repository -> database` con nuova struttura `app/server/{lib,repositories,services}`;
- confermato flusso Step 1 invariato lato contratto esterno (`POST /api/step-1-json`), inclusi salvataggio Mongo, download JSON e blocco duplicati;
- rimossa la cartella root `server/` in favore della sola struttura `app/server/`;
- allineata documentazione di progetto con regola backend obbligatoria e stato reale degli step in app.

## [1.4.0] - 2026-04-25

Riorganizzazione prompt hub e standardizzazione `step` su framework, app e output workflow.

- ridotta la sezione `prompts/` a 4 prompt essenziali: `alignment.md`, `framework-evolution.md`, `maintenance.md`, `workflow-execution.md`;
- introdotte regole operative `workflow-output/<project-id>/` con cartella `status/` e suddivisione `step-1`, `step-2`, `step-3`;
- aggiornata nomenclatura di progetto da `fase/phase` a `step` nei contenuti attivi framework+app;
- rinominati asset tecnici Step 1 (`/api/step-1-json`, `step-1-json-form`, `step1-json`);
- propagate modifiche su pagine app core (`/`, `/workflow`, `/wizard`, `/wiki`, `/privacy`, `/sicurezza-dati`) e riferimenti documentali collegati.

## [1.3.0] - 2026-04-24

Evoluzione breaking dello Step 3: passaggio da derivazione generica a toolchain operativa provider-aware.

- aggiornata la procedura canonica Step 3 con tool standardizzati v1 (naming, immagini, riassunti, PowerPoint, pagina web statica, video);
- introdotta modalita provider ibrida in Step 3 (preset consigliati, custom consentito, default `non specificato`);
- estesi gate e contratti output Step 3 con campi `tool_usato`, `provider_target`, `prompt_o_output` e vincoli brand/policy;
- aggiornato handoff Step 2 -> Step 3 in `09_step_3_handoff/` con metadati minimi su tool, provider, scope e pubblicazione;
- riallineati wizard, framework, context-ai, root docs e prompt workflow al nuovo modello operativo Step 3;
- chiarito `CONTRIBUTING.md`: provider-aware documentale ammesso, integrazioni software vendor-specific non richieste restano escluse.

## [1.2.0] - 2026-04-24

Refactor breaking dello Step 2: passaggio da documento unico a cartella master generativa modulare.

- aggiornata la catena canonica in tutta la documentazione: `case.json -> cartella-master/`;
- rimossi artefatti legacy Step 2 `wizard/script-master.md` e `wizard/script-master-schema.md`;
- introdotti `wizard/cartella-master-template.md`, `wizard/cartella-master-schema.md`, `wizard/cartella-master-validation.md`;
- riallineati framework, manifesto, wizard, context-ai e playbooks al nuovo modello Step 2/Step 3;
- aggiornati prompt template AI per generazione e derivazione da cartella master;
- aggiornati root docs (`README.md`, `HOW_TO.md`, `CONTRIBUTING.md`) e prompt workflow operativo.

## [1.1.0] - 2026-04-24

Refactor strutturale pre-release con consolidamento metodologia agentica, riallineamento route e revisione profonda documentazione.

- eliminata la route `/how-to` e promosso `/wizard` come unica pagina guida setup/configurazione;
- riscritta la pagina `/wizard` con focus installazione ambiente, prerequisiti hardware/software e verifiche tecniche;
- aggiornata propagazione route su navbar, homepage e documentazione di supporto;
- introdotta formalizzazione completa dello Step 3 in documentazione (`wizard/step-3-derivazione-pubblicazione.md`);
- rifattorizzati documenti core in `documentation/` (framework, wizard, context-ai) mantenendo logiche e artefatti canonici;
- aggiornati `README.md`, `HOW_TO.md` e `CONTRIBUTING.md` alla catena Step 1 -> Step 2 -> Step 3;
- evoluta la Wiki app con contenuti piu esaustivi e guida passo-passo del workflow;
- trasformata `prompts/` in prompt hub operativo con entrypoint unico e 8 prompt specialistici.
- estesa la pagina `/wiki` in formato guida professionale con workflow operativi, gate, anti-pattern e riferimenti canonici;
- riallineate le regole del prompt hub: Alignment/Evolution possono aggiornare `documentation/` se necessario, Maintenance/Workflow no;
- introdotto indice prompt A-H per invocazione rapida e tracciabile.
- aggiornati `documentation/README.md` e `documentation/context-ai/` per allineare il protocollo prompt hub A-H e i vincoli categoria su `documentation/`.

## [1.0.0] - 2026-04-22

Prima release stabile del framework SMART con integrazione completa tra metodo documentale e web app operativa.

- introdotta architettura app multi-pagina (`/wizard`, `/fase-1-json`, `/privacy`, `/cookie-policy`, `/sicurezza-dati`);
- centralizzato layout condiviso con header/footer globali e design system Tailwind/CSS variables;
- aggiunto banner cookie con gestione "solo necessari" e persistenza locale;
- aggiornata homepage con navigazione interna e CTA orientate all'adozione del framework-agentico;
- reso `README.md` root l'entrypoint unico per umani e agenti AI;
- aggiornati `HOW_TO.md`, `documentation/README.md` e `CONTRIBUTING.md` dopo refactor in root;
- formalizzata policy dati attuale (no DB, no analytics) e predisposizione futura per metriche tecniche non commerciali;
- inizializzato `prompts/README.md` come base per prompt di evoluzione, refactor e maintenance.

## [0.4.0] - 2026-04-22

Aggiornamento strutturale del repository con homepage standalone e revisione completa della documentazione.

- sostituito il README root template con onboarding SMART coerente al progetto;
- realizzata homepage Next.js dedicata al framework con focus AI-native, no-code, sicurezza e standardizzazione;
- revisionati `documentation/README.md`, `documentation/HOW_TO.md` e `documentation/wizard/README.md` con mappa repository reale e link aggiornati;
- rimosse sezioni placeholder e inserito il repository pubblico ufficiale;
- rafforzati i documenti manifesto su ruolo degli agenti di coding, governance no-code e principi di sicurezza operativa;
- allineato il versioning del package alla release documentale.

## [0.3.0] - 2026-04-02

Refactor documentale orientato a v0.3 e al naming canonico `context-ai/`.

- riallineato il repository al contesto AI locale con naming coerente;
- rimosso ogni riferimento documentale ad aree storiche eliminate;
- aggiornati README, HOW_TO, ai documenti di governance e i template AI;
- consolidato il posizionamento del framework come AI-native e più fruibile.

## [0.2.0] - 2026-04-01

Upgrade editoriale e operativo del framework SMART in ottica production-grade.

- rafforzato il tono formale e la completezza dei documenti principali;
- introdotto `HOW_TO.md` come guida autonoma passo passo per utenti non tecnici;
- estesa la documentazione wizard con criteri di validazione e uso operativo piu esplicito;
- potenziato `context-ai/` con protocolli di controllo per ridurre generazioni non conformi;
- aggiornati template prompt e regole di governance documentale per l'uso assistito da AI.

## [0.1.0] - 2026-04-01

Prima versione canonica pubblicabile del framework SMART.

- definita la nuova architettura documentale del repository;
- integrati `case-schema.json` e `script-master.md` come artefatti canonici;
- creati manifesto, framework, wizard, playbook e contesto AI coerenti;
- separato il materiale storico dall'area attiva;
- predisposto il repository per pubblicazione open source con licenza MIT.
