# Changelog

## [1.2.0] - 2026-04-24

Refactor breaking della Fase 2: passaggio da documento unico a cartella master generativa modulare.

- aggiornata la catena canonica in tutta la documentazione: `case.json -> cartella-master/`;
- rimossi artefatti legacy Fase 2 `wizard/script-master.md` e `wizard/script-master-schema.md`;
- introdotti `wizard/cartella-master-template.md`, `wizard/cartella-master-schema.md`, `wizard/cartella-master-validation.md`;
- riallineati framework, manifesto, wizard, context-ai e playbooks al nuovo modello Fase 2/Fase 3;
- aggiornati prompt template AI per generazione e derivazione da cartella master;
- aggiornati root docs (`README.md`, `HOW_TO.md`, `CONTRIBUTING.md`) e prompt workflow operativo.

## [1.1.0] - 2026-04-24

Refactor strutturale pre-release con consolidamento metodologia agentica, riallineamento route e revisione profonda documentazione.

- eliminata la route `/how-to` e promosso `/wizard` come unica pagina guida setup/configurazione;
- riscritta la pagina `/wizard` con focus installazione ambiente, prerequisiti hardware/software e verifiche tecniche;
- aggiornata propagazione route su navbar, homepage e documentazione di supporto;
- introdotta formalizzazione completa della Fase 3 in documentazione (`wizard/fase-3-derivazione-pubblicazione.md`);
- rifattorizzati documenti core in `documentation/` (framework, wizard, context-ai) mantenendo logiche e artefatti canonici;
- aggiornati `README.md`, `HOW_TO.md` e `CONTRIBUTING.md` alla catena Fase 1 -> Fase 2 -> Fase 3;
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
