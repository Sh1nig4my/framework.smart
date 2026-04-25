import type { WikiSection } from "../types";

export const operationsSections: WikiSection[] = [
  {
    id: "operational-model",
    chapterId: "operations",
    title: "Modello operativo",
    intro:
        "Il modello operativo di SMART definisce come il framework viene applicato nella pratica. Non si limita a descrivere cosa fare, ma stabilisce come organizzare il lavoro, come gestire i passaggi tra gli step e come mantenere coerenza tra contenuto, struttura e output.",
    purpose:
        "Fornire un riferimento chiaro su come utilizzare SMART in contesti reali, assicurando che il processo resti consistente indipendentemente da chi lo esegue.",
    workflow: [
      "Avvia il processo partendo da un input definito e strutturato.",
      "Applica la sequenza degli step senza deviazioni.",
      "Valida ogni output prima di procedere allo step successivo.",
      "Mantieni allineate tutte le fonti durante l’intero ciclo operativo.",
    ],
    highlights: [
      "Il processo è sequenziale e non arbitrario.",
      "Ogni step ha responsabilità e output distinti.",
      "La coerenza è più importante della velocità.",
    ],
    qualityGates: [
      "Ogni step deve produrre un output completo.",
      "Gli output devono essere leggibili senza contesto esterno.",
      "Non devono esistere ambiguità tra gli step.",
    ],
    antiPatterns: [
      "Adattare il processo per comodità operativa.",
      "Saltare step per ridurre i tempi.",
      "Introdurre variazioni non documentate.",
    ],
    outputs: [
      "Processo replicabile e controllabile.",
      "Riduzione degli errori operativi.",
      "Maggiore qualità degli output finali.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "HOW_TO.md",
    ],
    related: ["execution-flow", "quality-control"],
  },
  {
    id: "execution-flow",
    chapterId: "operations",
    title: "Flusso di esecuzione",
    intro:
        "Il flusso di esecuzione rappresenta la sequenza concreta con cui SMART viene applicato. Ogni passaggio è determinato dal precedente e prepara il successivo, creando una catena continua di trasformazione del contenuto.",
    purpose:
        "Descrivere come il contenuto si muove all’interno del framework, evidenziando dipendenze e vincoli tra gli step.",
    workflow: [
      "Ricevi e analizza l’input iniziale.",
      "Struttura i dati secondo lo schema definito.",
      "Costruisci la cartella master a partire dal contenuto validato.",
      "Genera output finali coerenti con la struttura.",
      "Esegui controlli di qualità prima della pubblicazione.",
    ],
    highlights: [
      "Ogni passaggio ha un input e un output chiaro.",
      "Non esistono shortcut tra step.",
      "La qualità è progressiva, non finale.",
    ],
    qualityGates: [
      "Ogni output deve essere verificabile.",
      "Le dipendenze tra step devono essere rispettate.",
      "Non devono esserci informazioni non tracciate.",
    ],
    antiPatterns: [
      "Saltare direttamente agli output finali.",
      "Rielaborare contenuto senza struttura.",
      "Modificare output senza aggiornare le fonti.",
    ],
    outputs: [
      "Pipeline lineare e prevedibile.",
      "Maggiore controllo sulle trasformazioni.",
      "Riduzione degli errori a valle.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/README.md",
    ],
    related: ["operational-model", "quality-control"],
  },
  {
    id: "quality-control",
    chapterId: "operations",
    title: "Controllo qualità",
    intro:
        "Il controllo qualità in SMART è distribuito lungo tutto il processo. Non è uno step finale, ma un insieme di verifiche continue che garantiscono che ogni output sia solido prima di essere utilizzato nello step successivo.",
    purpose:
        "Assicurare che ogni artefatto prodotto sia coerente, completo e utilizzabile senza introdurre errori o ambiguità.",
    workflow: [
      "Verifica la completezza del contenuto.",
      "Controlla la coerenza con la fonte di verità.",
      "Identifica eventuali errori o omissioni.",
      "Correggi prima di procedere.",
    ],
    highlights: [
      "Il controllo è continuo, non finale.",
      "Ogni step ha i propri criteri di qualità.",
      "La qualità è responsabilità del processo, non del singolo output.",
    ],
    qualityGates: [
      "Il contenuto deve essere completo.",
      "Il contenuto deve essere leggibile.",
      "Le decisioni devono essere tracciabili.",
    ],
    antiPatterns: [
      "Validare superficialmente per avanzare.",
      "Rimandare problemi allo step successivo.",
      "Considerare il controllo qualità come opzionale.",
    ],
    outputs: [
      "Maggiore affidabilità degli output.",
      "Riduzione delle correzioni a valle.",
      "Processo più robusto.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/manifesto/governance.md",
    ],
    related: ["execution-flow", "operational-model"],
  },
  {
    id: "iteration-cycle",
    chapterId: "operations",
    title: "Ciclo iterativo",
    intro:
        "SMART non è pensato come un processo one-shot, ma come un sistema iterativo. Ogni ciclo di lavoro produce un miglioramento incrementale del contenuto, permettendo di raffinare progressivamente struttura, chiarezza e qualità.",
    purpose:
        "Spiegare come utilizzare SMART in modo continuo, sfruttando iterazioni successive per migliorare il risultato finale.",
    workflow: [
      "Esegui un ciclo completo del framework.",
      "Analizza l’output prodotto.",
      "Identifica aree di miglioramento.",
      "Applica modifiche alla fonte di verità.",
      "Ripeti il ciclo.",
    ],
    highlights: [
      "Il miglioramento è incrementale.",
      "Le modifiche devono sempre partire dalla fonte.",
      "Ogni iterazione aumenta la qualità complessiva.",
    ],
    qualityGates: [
      "Ogni iterazione deve partire da una base valida.",
      "Le modifiche devono essere coerenti con la struttura.",
      "Non devono essere introdotte regressioni.",
    ],
    antiPatterns: [
      "Modificare solo l’output finale.",
      "Saltare la validazione nelle iterazioni successive.",
      "Accumulare modifiche senza controllo.",
    ],
    outputs: [
      "Contenuti progressivamente migliori.",
      "Maggiore precisione nel tempo.",
      "Riduzione degli errori strutturali.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "HOW_TO.md",
    ],
    related: ["quality-control", "execution-flow"],
  },
  {
    id: "role-of-operator",
    chapterId: "operations",
    title: "Ruolo dell’operatore",
    intro:
        "L’operatore nel framework SMART non è un semplice esecutore, ma un facilitatore del processo. Il suo compito è applicare le regole del framework in modo rigoroso, garantendo che ogni passaggio sia eseguito correttamente e che il contenuto mantenga coerenza lungo tutta la pipeline.",
    purpose:
        "Definire responsabilità e comportamento atteso di chi utilizza SMART, riducendo interpretazioni arbitrarie.",
    workflow: [
      "Seguire la struttura senza deviazioni.",
      "Applicare i quality gate in modo rigoroso.",
      "Documentare decisioni e modifiche.",
      "Mantenere allineate le fonti di verità.",
    ],
    highlights: [
      "L’operatore applica il framework, non lo modifica.",
      "La disciplina operativa è fondamentale.",
      "Le decisioni devono essere tracciabili.",
    ],
    qualityGates: [
      "Le azioni devono essere coerenti con il framework.",
      "Le modifiche devono essere documentate.",
      "Non devono essere introdotte scorciatoie.",
    ],
    antiPatterns: [
      "Interpretare liberamente le regole.",
      "Adattare il framework al contesto senza criterio.",
      "Ignorare vincoli per velocizzare.",
    ],
    outputs: [
      "Applicazione coerente del framework.",
      "Maggiore qualità operativa.",
      "Riduzione degli errori umani.",
    ],
    references: [
      "framework-documents/manifesto/governance.md",
      "HOW_TO.md",
    ],
    related: ["operational-model", "quality-control"],
  },
];
