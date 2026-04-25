import type { WikiSection } from "../types";

export const operationsSections: WikiSection[] = [
  {
    id: "wizard-setup",
    chapterId: "operations",
    title: "Wizard setup ambiente",
    intro:
      "La pagina `/wizard` e la guida di configurazione e installazione ambiente prima del lavoro operativo. Serve a rendere replicabile il setup e ridurre errori tecnici all'avvio.",
    purpose:
      "Portare ogni contributor, tecnico o non tecnico, in uno stato di ambiente affidabile prima dell'esecuzione degli step metodologici.",
    workflow: [
      "Verifica prerequisiti software e versione runtime richieste dal progetto.",
      "Installa dipendenze e avvia ambiente locale con i comandi ufficiali.",
      "Esegui check minimi (lint/build/dev) per validare lo stato di partenza.",
      "Conferma che route chiave (/wizard, /wiki, /workflow, /create-json-master) siano raggiungibili.",
    ],
    highlights: [
      "Copre prerequisiti hardware/software e setup locale.",
      "Definisce controlli minimi (lint/build/dev) prima dell'operativita.",
      "Riduce errori tecnici prima di avviare Step 1.",
    ],
    qualityGates: [
      "Comandi base eseguiti senza errori bloccanti.",
      "Ambiente coerente con standard del repository.",
      "Assenza di mismatch critici tra configurazione locale e progetto.",
    ],
    antiPatterns: [
      "Iniziare workflow con ambiente non verificato.",
      "Applicare workaround locali non documentati.",
      "Confondere setup tecnico con step metodologico di contenuto.",
    ],
    outputs: [
      "Ambiente pronto per lavorare in modo prevedibile.",
      "Riduzione del tempo perso in debug non metodologico.",
      "Onboarding tecnico piu fluido per nuovi membri.",
    ],
    references: ["app/wizard/page.tsx", "README.md", "HOW_TO.md"],
    related: ["download-guide", "prompt-method"],
  },
  {
    id: "download-guide",
    chapterId: "operations",
    title: "Create JSON Master e compilazione Step 1",
    intro:
      "La pagina `/create-json-master` e il punto operativo per generare e scaricare `case.json` dopo validazione e salvataggio. E l'interfaccia applicativa principale dello Step 1.",
    purpose:
      "Consentire compilazione guidata del caso in modo conforme allo schema canonico, con persistenza controllata e prevenzione duplicati.",
    workflow: [
      "Compila il form seguendo campi e opzioni compatibili con lo schema ufficiale.",
      "Esegui validazione applicativa lato client e lato server.",
      "Persisti il record e verifica controllo duplicati email+JSON.",
      "Scarica `case.json` solo dopo conferma di salvataggio riuscito.",
      "Riusa il file come input unico dello Step 2.",
    ],
    highlights: [
      "Il form e allineato allo schema canonico Step 1.",
      "Il backend blocca duplicati su stessa email + stesso JSON.",
      "Il file viene scaricato solo dopo persistenza riuscita.",
    ],
    qualityGates: [
      "Campi obbligatori compilati e validi.",
      "Persistenza riuscita senza errori di integrita.",
      "File esportato coerente con i dati realmente salvati.",
    ],
    antiPatterns: [
      "Compilare il form senza conoscere il significato dei campi canonici.",
      "Bypassare la persistenza e usare JSON non tracciato.",
      "Ignorare warning di duplicazione e procedere con copie incoerenti.",
    ],
    outputs: [
      "`case.json` valido, persistito e scaricabile.",
      "Tracciabilita minima del caso per manutenzione framework.",
      "Riduzione errori di handoff tra Step 1 e Step 2.",
    ],
    references: ["app/create-json-master/page.tsx", "app/api/", "documentation/wizard/step-1-intake.md"],
    related: ["step-one-guide", "quality-gates"],
  },
  {
    id: "prompt-method",
    chapterId: "operations",
    title: "Metodologia agentica con prompt hub",
    intro:
      "Il protocollo raccomandato prevede lettura di `prompts/README.md`, selezione del prompt target e applicazione di istruzioni custom. Questo approccio riduce interventi fuori scope e mantiene allineamento tra persone e agenti.",
    purpose:
      "Standardizzare il lavoro agentico in task ripetibili e verificabili, con confini espliciti di modifica e criteri di conformita finali.",
    workflow: [
      "Leggi `prompts/README.md` e identifica il prompt corretto (A-D).",
      "Apri il prompt selezionato e verifica scope consentito/vietato.",
      "Applica le istruzioni custom dell'utente senza violare i vincoli di categoria.",
      "Esegui verifiche finali coerenti con il perimetro del prompt.",
      "Rendi espliciti file toccati, assunzioni e nodi aperti.",
    ],
    highlights: [
      "Ogni prompt ha scope consentito e vietato.",
      "Maintenance, Alignment, Framework Evolution e Workflow sono separati e governati da regole di categoria.",
      "L'agente deve restare conforme al perimetro del prompt scelto.",
      "Per Step 3, contract e gate provider-aware sono obbligatori.",
    ],
    qualityGates: [
      "Nessuna modifica fuori scope rispetto al prompt selezionato.",
      "Coerenza tra obiettivo utente, categoria prompt e file aggiornati.",
      "Per task Step 3: presenza di `tool_usato`, `provider_target` e `prompt_o_output`.",
      "Verifiche tecniche o documentali coerenti col tipo di intervento.",
    ],
    antiPatterns: [
      "Applicare un prompt Maintenance a obiettivi di evoluzione.",
      "Ignorare i divieti di categoria su `documentation/`.",
      "Modificare file canonici senza esplicitare tracciabilita della decisione.",
    ],
    outputs: [
      "Esecuzioni piu prevedibili e controllabili.",
      "Riduzione errori di scope nelle collaborazioni con AI.",
      "Maggiore facilita nel rieseguire task simili in futuro.",
    ],
    references: ["prompts/README.md", "prompts/framework-evolution.md", "prompts/workflow-execution.md"],
    related: ["quality-gates", "wizard-setup"],
  },
];
