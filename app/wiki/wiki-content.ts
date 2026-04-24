export type WikiSection = {
  id: string;
  chapterId: string;
  title: string;
  intro: string;
  highlights: string[];
  related: string[];
};

export type WikiChapter = {
  id: string;
  title: string;
  description: string;
};

export const wikiChapters: WikiChapter[] = [
  { id: "intro", title: "Introduzione", description: "Visione, scopo e valore del framework SMART." },
  { id: "architecture", title: "Architettura", description: "Fasi, artefatti e precedenze canoniche." },
  { id: "workflow", title: "Workflow guidato", description: "Guida operativa step-by-step dalla Fase 1 alla Fase 3." },
  { id: "operations", title: "Operativita", description: "Wizard setup, Download e uso pratico con agenti." },
  { id: "quality", title: "Qualita e governance", description: "Gate, best practice, limiti e sicurezza operativa." },
];

export const wikiSections: WikiSection[] = [
  {
    id: "what-is-smart",
    chapterId: "intro",
    title: "Cos'e SMART Framework",
    intro:
      "SMART e un framework no-code e AI-native per trasformare esigenze frammentarie in output affidabili, tracciabili e riusabili.",
    highlights: [
      "Integra documentazione, metodo e app in un unico sistema.",
      "Riduce incoerenze tra promessa comunicativa e contenuto reale.",
      "Mantiene controllo umano e usa gli agenti come acceleratori disciplinati.",
    ],
    related: ["smart-standard", "phase-map"],
  },
  {
    id: "smart-standard",
    chapterId: "intro",
    title: "SMART come standard",
    intro:
      "In SMART lo standard e la base per scalare qualita e coerenza su divulgazione, eventi e contenuti strutturati.",
    highlights: [
      "Terminologia, gate e strutture comuni tra team differenti.",
      "Customizzazione locale senza perdita di allineamento metodologico.",
      "Auditabilita e manutenzione piu semplici nel tempo.",
    ],
    related: ["precedence", "quality-gates"],
  },
  {
    id: "phase-map",
    chapterId: "architecture",
    title: "Mappa delle fasi",
    intro:
      "Il framework segue una sequenza canonica a 3 fasi: intake strutturato, documento madre, derivazione pubblicabile.",
    highlights: [
      "Fase 1: case-schema.json -> case.json.",
      "Fase 2: case.json -> script-master.md.",
      "Fase 3: script-master validato -> derivati/materiali pubblicabili.",
    ],
    related: ["phase-one-guide", "phase-two-guide", "phase-three-guide"],
  },
  {
    id: "precedence",
    chapterId: "architecture",
    title: "Regole di precedenza",
    intro:
      "Quando compaiono conflitti tra fonti, SMART applica precedenze fisse per evitare derive interpretative.",
    highlights: [
      "Case schema prevale sulla struttura Fase 1.",
      "Case JSON prevale sul contenuto del caso.",
      "Script master governa struttura Fase 2 e base della Fase 3.",
    ],
    related: ["quality-gates", "phase-map"],
  },
  {
    id: "phase-one-guide",
    chapterId: "workflow",
    title: "Guida Fase 1 passo-passo",
    intro:
      "La Fase 1 raccoglie requisiti in formato strutturato per produrre un case JSON validabile e pronto alla Fase 2.",
    highlights: [
      "Parti da schema canonico e compila solo valori ammessi.",
      "Blocca campi inventati e assunzioni implicite.",
      "Valida coerenza di obiettivo, pubblico, formato, policy e limiti.",
    ],
    related: ["download-guide", "phase-two-guide"],
  },
  {
    id: "phase-two-guide",
    chapterId: "workflow",
    title: "Guida Fase 2 passo-passo",
    intro:
      "La Fase 2 costruisce lo script master, documento madre da cui dipendono tutti i materiali successivi.",
    highlights: [
      "Mappa `case.json` sulle sezioni del template script master.",
      "Esplicita assunzioni, nodi aperti, limiti e cautele.",
      "Supera gate Fase 2 prima di ogni derivazione.",
    ],
    related: ["phase-three-guide", "quality-gates"],
  },
  {
    id: "phase-three-guide",
    chapterId: "workflow",
    title: "Guida Fase 3 passo-passo",
    intro:
      "La Fase 3 deriva e prepara i materiali pubblicabili mantenendo coerenza piena con script master validato.",
    highlights: [
      "Definisci derivati richiesti e finalita di ciascun canale.",
      "Adatta forma senza alterare significato, limiti e promessa.",
      "Esegui controllo pre-pubblicazione su ogni output.",
    ],
    related: ["quality-gates", "use-cases"],
  },
  {
    id: "wizard-setup",
    chapterId: "operations",
    title: "Wizard setup ambiente",
    intro:
      "La pagina `/wizard` e la guida di configurazione e installazione ambiente prima del lavoro operativo.",
    highlights: [
      "Copre prerequisiti hardware/software e setup locale.",
      "Definisce controlli minimi (lint/build/dev) prima dell'operativita.",
      "Riduce errori tecnici prima di avviare Fase 1.",
    ],
    related: ["download-guide", "prompt-method"],
  },
  {
    id: "download-guide",
    chapterId: "operations",
    title: "Download e compilazione Fase 1",
    intro:
      "La pagina `/download` e il punto operativo per generare e scaricare `case.json` dopo validazione e salvataggio.",
    highlights: [
      "Il form e allineato allo schema canonico Fase 1.",
      "Il backend blocca duplicati su stessa email + stesso JSON.",
      "Il file viene scaricato solo dopo persistenza riuscita.",
    ],
    related: ["phase-one-guide", "quality-gates"],
  },
  {
    id: "prompt-method",
    chapterId: "operations",
    title: "Metodologia agentica con prompt hub",
    intro:
      "Il protocollo raccomandato prevede lettura di `prompts/README.md`, selezione del prompt target e applicazione di istruzioni custom.",
    highlights: [
      "Ogni prompt ha scope consentito e vietato.",
      "Maintenance, Alignment, Evolution e Workflow sono separati.",
      "L'agente deve restare conforme al perimetro del prompt scelto.",
    ],
    related: ["quality-gates", "wizard-setup"],
  },
  {
    id: "quality-gates",
    chapterId: "quality",
    title: "Gate di qualita",
    intro:
      "I gate sono il meccanismo che garantisce affidabilita tra le fasi e blocca output non conformi.",
    highlights: [
      "Gate Fase 1: validazione schema e coerenza caso.",
      "Gate Fase 2: validazione documento madre.",
      "Gate Fase 3: validazione derivati pre-pubblicazione.",
    ],
    related: ["precedence", "phase-three-guide"],
  },
  {
    id: "use-cases",
    chapterId: "quality",
    title: "Use case e best practice",
    intro:
      "SMART e applicabile a seminari, lezioni, incontri, collaborazioni con enti e imprese mantenendo catena e controlli invariati.",
    highlights: [
      "Scegli tono e profondita in base al pubblico reale.",
      "Evita promessa eccessiva e claim non verificabili.",
      "Mantieni tracciabilita dal documento madre ai derivati.",
    ],
    related: ["smart-standard", "prompt-method"],
  },
];
