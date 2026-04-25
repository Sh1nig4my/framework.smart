import type { WikiSection } from "../types";

export const workflowSections: WikiSection[] = [
  {
    id: "workflow-overview",
    chapterId: "workflow",
    title: "Panoramica del workflow",
    intro:
        "Il workflow di SMART descrive come il contenuto attraversa l’intero sistema, dall’input iniziale fino alla generazione di output pubblicabili. Non si tratta solo di una sequenza di attività, ma di un flusso controllato in cui ogni passaggio è vincolato da regole precise e validazioni esplicite.",
    purpose:
        "Offrire una visione completa del flusso operativo, chiarendo come i diversi step si collegano tra loro e quali responsabilità sono associate a ciascuno step.",
    workflow: [
      "Acquisisci l’input iniziale e definisci il perimetro del caso.",
      "Normalizza il contenuto secondo lo schema strutturato.",
      "Costruisci la cartella master a partire dal contenuto validato.",
      "Genera output specifici per i tool o i canali di destinazione.",
      "Valida ogni passaggio prima di procedere.",
    ],
    highlights: [
      "Il workflow è sequenziale e deterministico.",
      "Ogni step dipende dall’output del precedente.",
      "La qualità è integrata nel flusso, non separata.",
    ],
    qualityGates: [
      "Ogni step deve produrre un output completo.",
      "Gli output devono essere coerenti con la fonte di verità.",
      "Non devono esserci ambiguità o informazioni mancanti.",
    ],
    antiPatterns: [
      "Saltare step del workflow per velocizzare.",
      "Trattare gli step come indipendenti.",
      "Generare output senza passare per la struttura validata.",
    ],
    outputs: [
      "Flusso operativo chiaro e ripetibile.",
      "Maggiore controllo sulle trasformazioni del contenuto.",
      "Riduzione degli errori strutturali.",
    ],
    references: [
      "documentation/framework/process-overview.md",
      "HOW_TO.md",
    ],
    related: ["step-sequence", "handoff-flow", "validation-flow"],
  },
  {
    id: "step-sequence",
    chapterId: "workflow",
    title: "Sequenza degli step",
    intro:
        "La sequenza degli step è il cuore del workflow SMART. Ogni step rappresenta una trasformazione precisa del contenuto e introduce un livello crescente di struttura, chiarezza e utilizzabilità.",
    purpose:
        "Esplicitare il ruolo di ciascuno step e chiarire perché la sequenza deve essere rispettata senza eccezioni.",
    workflow: [
      "Step 1: raccolta e normalizzazione delle informazioni.",
      "Step 2: organizzazione del contenuto nella cartella master.",
      "Step 3: generazione degli output finali.",
      "Applicazione dei quality gate tra uno step e l’altro.",
    ],
    highlights: [
      "Ogni step ha un obiettivo specifico.",
      "Gli step non sono intercambiabili.",
      "La sequenza costruisce progressivamente la qualità.",
    ],
    qualityGates: [
      "Step 1 deve produrre un case.json completo.",
      "Step 2 deve produrre una cartella master coerente.",
      "Step 3 deve produrre output allineati alla struttura.",
    ],
    antiPatterns: [
      "Invertire l’ordine degli step.",
      "Unire più step in uno solo.",
      "Saltare la validazione tra step.",
    ],
    outputs: [
      "Pipeline strutturata e comprensibile.",
      "Maggiore affidabilità del processo.",
      "Riduzione delle incoerenze tra step.",
    ],
    references: [
      "documentation/framework/process-overview.md",
      "documentation/wizard/README.md",
    ],
    related: ["workflow-overview", "validation-flow"],
  },
  {
    id: "handoff-flow",
    chapterId: "workflow",
    title: "Flusso di handoff",
    intro:
        "Il flusso di handoff descrive come il contenuto viene trasferito da uno step all’altro. Ogni passaggio deve essere controllato e basato su artefatti completi, evitando dipendenze implicite o informazioni non documentate.",
    purpose:
        "Garantire che ogni transizione tra step sia chiara, tracciabile e priva di ambiguità.",
    workflow: [
      "Completa lo step corrente e valida l’output.",
      "Verifica che l’artefatto sia autosufficiente.",
      "Documenta eventuali decisioni rilevanti.",
      "Trasferisci l’artefatto allo step successivo.",
    ],
    highlights: [
      "L’handoff è un trasferimento di stato, non solo di file.",
      "Ogni artefatto deve essere leggibile autonomamente.",
      "Le decisioni implicite devono essere esplicitate.",
    ],
    qualityGates: [
      "L’artefatto deve essere completo.",
      "Le assunzioni devono essere dichiarate.",
      "Non devono esserci dipendenze non documentate.",
    ],
    antiPatterns: [
      "Passare contenuti incompleti allo step successivo.",
      "Affidarsi a spiegazioni esterne (chat, orale).",
      "Nascondere problemi non risolti.",
    ],
    outputs: [
      "Transizioni più pulite tra step.",
      "Riduzione della perdita di contesto.",
      "Maggiore affidabilità operativa.",
    ],
    references: [
      "documentation/framework/process-overview.md",
      "HOW_TO.md",
    ],
    related: ["workflow-overview", "validation-flow"],
  },
  {
    id: "validation-flow",
    chapterId: "workflow",
    title: "Flusso di validazione",
    intro:
        "Il flusso di validazione è il meccanismo che garantisce la qualità lungo tutto il workflow. Ogni step include controlli espliciti che determinano se il contenuto può avanzare o deve essere corretto.",
    purpose:
        "Integrare la validazione nel workflow, evitando che venga trattata come un’attività separata o finale.",
    workflow: [
      "Definisci i criteri di validazione per lo step.",
      "Verifica l’output rispetto ai criteri.",
      "Identifica eventuali problemi.",
      "Blocca l’avanzamento in caso di errori critici.",
      "Procedi solo dopo la correzione.",
    ],
    highlights: [
      "La validazione è continua.",
      "Ogni step ha criteri specifici.",
      "Il flusso si interrompe in presenza di errori.",
    ],
    qualityGates: [
      "Il contenuto deve essere completo.",
      "Il contenuto deve essere coerente.",
      "Non devono esserci ambiguità.",
      "Il contenuto deve essere verificabile.",
    ],
    antiPatterns: [
      "Validare superficialmente.",
      "Ignorare errori per avanzare.",
      "Rimandare problemi allo step successivo.",
    ],
    outputs: [
      "Processo più robusto.",
      "Riduzione degli errori propagati.",
      "Maggiore qualità degli output.",
    ],
    references: [
      "documentation/framework/process-overview.md",
      "documentation/wizard/decision-rules.md",
    ],
    related: ["step-sequence", "handoff-flow"],
  },
  {
    id: "failure-management",
    chapterId: "workflow",
    title: "Gestione dei fallimenti",
    intro:
        "Nel workflow SMART, il fallimento di uno step non è un’anomalia ma un segnale operativo. Indica che il contenuto non è pronto per avanzare e che è necessario intervenire sulla causa, non sugli effetti.",
    purpose:
        "Definire come gestire i blocchi nel workflow in modo strutturato e coerente con il framework.",
    workflow: [
      "Identifica il punto di fallimento.",
      "Analizza la causa alla fonte.",
      "Applica la correzione nel punto corretto del sistema.",
      "Rivalida lo step.",
      "Riprendi il workflow solo dopo esito positivo.",
    ],
    highlights: [
      "Il fallimento è parte del processo.",
      "Le correzioni devono essere strutturali.",
      "Non esistono shortcut per bypassare errori.",
    ],
    qualityGates: [
      "Ogni errore deve essere tracciato.",
      "La causa deve essere identificata.",
      "La correzione deve essere completa.",
    ],
    antiPatterns: [
      "Bypassare errori per avanzare.",
      "Applicare workaround temporanei.",
      "Ignorare problemi minori.",
    ],
    outputs: [
      "Processo più resiliente.",
      "Riduzione degli errori ricorrenti.",
      "Maggiore stabilità operativa.",
    ],
    references: [
      "documentation/framework/process-overview.md",
      "HOW_TO.md",
    ],
    related: ["validation-flow", "handoff-flow"],
  },
];
