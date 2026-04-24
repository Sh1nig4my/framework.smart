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
  {
    id: "intro",
    title: "Introduzione",
    description: "Perche esiste SMART e come orientarti.",
  },
  {
    id: "core",
    title: "Concetti fondamentali",
    description: "Principi, standard e lessico operativo.",
  },
  {
    id: "architecture",
    title: "Architettura",
    description: "Fasi, artefatti canonici e precedenze.",
  },
  {
    id: "workflow",
    title: "Workflow",
    description: "Come usare il framework in pratica.",
  },
  {
    id: "guides",
    title: "Guide operative",
    description: "Pattern applicativi per contesti frequenti.",
  },
  {
    id: "quality",
    title: "Best practice",
    description: "Qualita, validazione e gestione dei rischi.",
  },
];

export const wikiSections: WikiSection[] = [
  {
    id: "what-is-smart",
    chapterId: "intro",
    title: "Cos'e SMART Framework",
    intro:
      "SMART e un framework no-code e AI-native che converte richieste frammentarie in processi strutturati, verificabili e riutilizzabili.",
    highlights: [
      "Non e un singolo template: e un sistema che collega metodo, documentazione e strumenti operativi.",
      "Riduce incoerenze tra promessa, contenuti e materiali pubblicati.",
      "Mantiene il giudizio umano al centro e usa gli agenti come supporto disciplinato.",
    ],
    related: ["why-standard", "operating-model"],
  },
  {
    id: "why-standard",
    chapterId: "core",
    title: "SMART come standard",
    intro:
      "Nel framework lo standard non e burocrazia: e il meccanismo che rende affidabile la divulgazione, la creazione eventi e la produzione di contenuti strutturati.",
    highlights: [
      "Stabilisce terminologia, schema e gate comuni tra team differenti.",
      "Permette customizzazione tramite agenti senza perdere coerenza di fondo.",
      "Facilita audit, manutenzione e scalabilita del processo.",
    ],
    related: ["glossary", "decision-rules"],
  },
  {
    id: "glossary",
    chapterId: "core",
    title: "Concetti base da conoscere",
    intro:
      "Per lavorare bene in SMART bastano pochi concetti chiave: case schema, case JSON, script master e derivati.",
    highlights: [
      "Il case schema definisce le scelte ammesse in Fase 1.",
      "Il case JSON e l'istanza concreta da cui parte la Fase 2.",
      "Lo script master e il documento madre: i derivati non devono introdurre nuove regole.",
    ],
    related: ["phase-one", "phase-two"],
  },
  {
    id: "operating-model",
    chapterId: "architecture",
    title: "Architettura del framework",
    intro:
      "L'architettura SMART segue una catena esplicita: intake strutturato, documento madre, derivazione controllata.",
    highlights: [
      "Fase 1: raccolta requisiti con opzioni chiuse e verificabili.",
      "Fase 2: consolidamento editoriale nello script master.",
      "Post Fase 2: produzione asset secondari solo dopo gate di validazione.",
    ],
    related: ["phase-one", "phase-two", "decision-rules"],
  },
  {
    id: "decision-rules",
    chapterId: "architecture",
    title: "Regole di precedenza",
    intro:
      "Quando due fonti entrano in conflitto, SMART usa una precedenza esplicita per evitare interpretazioni arbitrarie.",
    highlights: [
      "In Fase 1 prevale lo schema canonico e i valori ammessi.",
      "In Fase 2 prevale la struttura dello script master, alimentata dal case JSON validato.",
      "Manifesto e framework fissano principi e confini stabili del sistema.",
    ],
    related: ["operating-model", "validation"],
  },
  {
    id: "phase-one",
    chapterId: "workflow",
    title: "Workflow Fase 1",
    intro:
      "La Fase 1 trasforma il bisogno iniziale in un case JSON completo, coerente e pronto alla generazione della Fase 2.",
    highlights: [
      "Compila i campi obbligatori seguendo le opzioni dello schema.",
      "Verifica obiettivo, pubblico, formato e limiti prima dell'invio.",
      "Salva e scarica il case JSON solo dopo validazione e persistenza corretta.",
    ],
    related: ["download-guide", "phase-two"],
  },
  {
    id: "phase-two",
    chapterId: "workflow",
    title: "Workflow Fase 2",
    intro:
      "La Fase 2 usa il case JSON come sorgente primaria per creare uno script master completo e operativo.",
    highlights: [
      "Definisce sequenza narrativa, tono, cautele, supporti e rischi.",
      "Dichiara assunzioni e nodi aperti, senza inventare requisiti mancanti.",
      "Prepara derivati consistenti per slide, pagina evento, email e checklist.",
    ],
    related: ["validation", "use-cases"],
  },
  {
    id: "download-guide",
    chapterId: "guides",
    title: "Guida rapida alla pagina Download",
    intro:
      "La pagina Download e il punto operativo della Fase 1: qui compili il form ufficiale e ottieni il file JSON.",
    highlights: [
      "Il form rispetta lo schema canonicale della Fase 1.",
      "Il backend blocca duplicati su stessa email e stesso contenuto JSON.",
      "Il download viene avviato automaticamente dopo il salvataggio andato a buon fine.",
    ],
    related: ["phase-one", "validation"],
  },
  {
    id: "use-cases",
    chapterId: "guides",
    title: "Use case ricorrenti",
    intro:
      "SMART supporta scenari diversi, dalla divulgazione in aula a collaborazioni con enti e imprese.",
    highlights: [
      "Nuovo progetto divulgativo con requisiti iniziali incompleti.",
      "Seminari, lezioni e incontri con livelli diversi di interazione.",
      "Collaborazioni istituzionali o aziendali con vincoli comunicativi specifici.",
    ],
    related: ["who-can-use", "best-practices"],
  },
  {
    id: "who-can-use",
    chapterId: "guides",
    title: "Chi puo usarlo (e quando evitare)",
    intro:
      "SMART e pensato per team che vogliono ripetibilita e controllo. Non e ideale quando si rifiuta qualsiasi disciplina di processo.",
    highlights: [
      "Adatto a formatori, divulgatori, enti, aziende e team interdisciplinari.",
      "Adatto anche a non tecnici, se accettano un workflow per fasi.",
      "Meno adatto a richieste one-shot senza validazione o con promesse non verificabili.",
    ],
    related: ["how-agents-help", "validation"],
  },
  {
    id: "how-agents-help",
    chapterId: "quality",
    title: "Customizzazione tramite agenti",
    intro:
      "Gli agenti permettono di adattare il framework al contesto locale mantenendo standard comuni e confini di sicurezza.",
    highlights: [
      "Gli agenti accelerano compilazione, revisione e derivazione.",
      "Le regole restano nel framework: l'agente non deve inventare policy o campi.",
      "L'autonomia agentica e utile solo se tracciabile, auditabile e supervisionata.",
    ],
    related: ["validation", "best-practices"],
  },
  {
    id: "validation",
    chapterId: "quality",
    title: "Validazione e best practice",
    intro:
      "La qualita in SMART dipende da gate chiari: controllo del caso, controllo dello script master, controllo dei derivati.",
    highlights: [
      "Non saltare mai i gate anche quando il caso sembra semplice.",
      "Mantieni coerenza tra documentazione, form e output generato.",
      "Usa linguaggio sobrio, no hype e trasparenza su limiti e responsabilita.",
    ],
    related: ["decision-rules", "download-guide"],
  },
  {
    id: "best-practices",
    chapterId: "quality",
    title: "Pratiche consigliate di adozione",
    intro:
      "Per ottenere valore continuo dal framework serve disciplina operativa, non complessita tecnica.",
    highlights: [
      "Tratta lo script master come fonte primaria di tutti gli asset successivi.",
      "Evita contenuti non supportati dal caso o inseriti solo per effetto comunicativo.",
      "Aggiorna regole e documentazione in modo sincronizzato quando cambia il processo.",
    ],
    related: ["why-standard", "how-agents-help"],
  },
];
