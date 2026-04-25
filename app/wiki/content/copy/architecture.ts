import type { WikiSection } from "../types";

export const architectureSections: WikiSection[] = [
  {
    id: "step-map",
    chapterId: "architecture",
    title: "Mappa degli step",
    intro:
      "Il framework segue una sequenza canonica a 3 step: intake strutturato, cartella master modulare, output tool pubblicabili. La sequenza non e opzionale: e il meccanismo che preserva coerenza e responsabilita.",
    purpose:
      "Offrire una mappa unica per capire in pochi minuti cosa entra in ogni step, cosa esce e quali controlli servono prima del passaggio successivo.",
    workflow: [
      "Step 1: raccogli e normalizza dati con schema ufficiale.",
      "Step 2: trasforma il caso validato in cartella master completa.",
      "Step 3: crea output tool canale-specifici solo da cartella master validata.",
      "Esegui gate di step prima di qualsiasi handoff.",
    ],
    highlights: [
      "Step 1: case-schema.json -> case.json.",
      "Step 2: case.json -> cartella-master/.",
      "Step 3: cartella-master validata -> output tool (prompt/materiali) pubblicabili.",
    ],
    qualityGates: [
      "Nessun salto di step e nessun bypass dei gate.",
      "Ogni output intermedio deve essere completo e leggibile.",
      "Ogni output Step 3 deve essere semanticamente coerente con la cartella master validata.",
    ],
    antiPatterns: [
      "Entrare in Step 2 con un case.json incompleto.",
      "Produrre output pubblicabili direttamente dallo Step 1.",
      "Aggiornare output Step 3 senza allineare prima la cartella master.",
    ],
    outputs: [
      "Pipeline prevedibile end-to-end.",
      "Riduzione dei conflitti tra progettazione e pubblicazione.",
      "Maggiore qualita cumulativa tra iterazioni.",
    ],
    references: [
      "documentation/framework/process-overview.md",
      "documentation/wizard/README.md",
      "HOW_TO.md",
    ],
    related: ["step-one-guide", "step-two-guide", "step-three-guide"],
  },
  {
    id: "precedence",
    chapterId: "architecture",
    title: "Regole di precedenza",
    intro:
      "Quando compaiono conflitti tra fonti, SMART applica precedenze fisse per evitare derive interpretative e garantire decisioni riproducibili anche in team estesi.",
    purpose:
      "Ridurre le discussioni improduttive su quale fonte sia valida in caso di conflitto, fornendo una gerarchia esplicita e non negoziabile.",
    workflow: [
      "Rileva il conflitto e identifica i file sorgente coinvolti.",
      "Applica l'ordine ufficiale di precedenza SMART.",
      "Registra decisione, razionale e impatto sui file aggiornati.",
      "Propaga il fix alle sezioni collegate.",
    ],
    highlights: [
      "Case schema prevale sulla struttura Step 1.",
      "Case JSON prevale sul contenuto del caso.",
      "Cartella master governa struttura Step 2 e base dello Step 3.",
    ],
    qualityGates: [
      "Ogni conflitto risolto deve citare esplicitamente la fonte prevalente.",
      "Le fonti subordinate non devono introdurre regole alternative.",
      "Le decisioni devono restare comprensibili anche a nuovi contributor.",
    ],
    antiPatterns: [
      "Scegliere la fonte piu comoda invece della fonte canonica.",
      "Applicare fix locali senza aggiornare riferimenti incrociati.",
      "Aggiungere eccezioni non documentate.",
    ],
    outputs: [
      "Matrice di decisione piu stabile nei conflitti.",
      "Riduzione delle regressioni documentali.",
      "Maggiore prevedibilita nella manutenzione evolutiva.",
    ],
    references: [
      "documentation/wizard/decision-rules.md",
      "documentation/framework/process-overview.md",
      "documentation/manifesto/governance.md",
    ],
    related: ["quality-gates", "step-map"],
  },
];
