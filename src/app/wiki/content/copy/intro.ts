import type { WikiSection } from "../types";

export const introSections: WikiSection[] = [
  {
    id: "what-is-smart",
    chapterId: "intro",
    title: "Cos’è SMART",
    intro:
        "SMART è un framework operativo progettato per strutturare, validare e trasformare contenuti complessi in output chiari, riutilizzabili e pubblicabili. Nasce per risolvere un problema ricorrente: quando un contenuto cresce senza una struttura condivisa, tende a frammentarsi, perdere contesto e generare output incoerenti. SMART interviene su questo punto, trasformando il lavoro editoriale e operativo in una pipeline controllata.",
    purpose:
        "Fornire un modello replicabile per gestire contenuti complessi, riducendo ambiguità, dispersione informativa e dipendenza da interpretazioni individuali. Il framework permette di passare da informazioni grezze a materiali finali attraverso passaggi espliciti, validabili e mantenibili nel tempo.",
    workflow: [
      "Raccogli le informazioni seguendo uno schema strutturato.",
      "Normalizza il contenuto in un formato verificabile (case.json).",
      "Trasforma il contenuto in una cartella master organizzata.",
      "Genera output finali coerenti con la struttura validata.",
    ],
    highlights: [
      "Separazione netta tra raccolta dati, struttura e output.",
      "Pipeline deterministica e non arbitraria.",
      "Forte orientamento alla riusabilità e alla scalabilità.",
      "Riduzione della conoscenza implicita e delle decisioni non documentate.",
    ],
    qualityGates: [
      "Ogni step deve produrre un output completo e verificabile.",
      "Il contenuto deve essere comprensibile anche senza contesto esterno.",
      "Non devono esistere ambiguità strutturali tra gli step.",
      "Ogni trasformazione deve mantenere coerenza con la fonte di verità applicabile.",
    ],
    antiPatterns: [
      "Saltare passaggi della pipeline per velocizzare il processo.",
      "Mescolare contenuti strutturati e non strutturati senza distinzione.",
      "Generare output senza una base validata.",
      "Usare SMART come semplice checklist invece che come sistema operativo del contenuto.",
    ],
    outputs: [
      "Contenuti più coerenti e strutturati.",
      "Maggiore facilità di revisione e manutenzione.",
      "Riduzione delle interpretazioni soggettive.",
      "Output finali più affidabili, perché derivati da una base validata.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "HOW_TO.md",
    ],
    related: ["why-smart", "how-it-works"],
  },
  {
    id: "why-smart",
    chapterId: "intro",
    title: "Perché SMART",
    intro:
        "La necessità di SMART nasce dalla difficoltà di gestire contenuti complessi in modo coerente nel tempo. Senza una struttura chiara, le informazioni tendono a duplicarsi, le decisioni diventano opache e gli output finali perdono qualità. SMART introduce un metodo per impedire che il contenuto venga governato da memoria, abitudine o interpretazione soggettiva.",
    purpose:
        "Spiegare il valore del framework in termini pratici: riduzione degli errori, maggiore chiarezza, miglior controllo sul ciclo di vita dei contenuti e maggiore prevedibilità nella produzione degli output.",
    workflow: [
      "Identifica le criticità nei flussi di contenuto esistenti.",
      "Applica una struttura standardizzata per raccogliere informazioni.",
      "Centralizza la gestione del contenuto in una fonte di verità.",
      "Utilizza la struttura validata per generare output consistenti.",
    ],
    highlights: [
      "Riduce la dipendenza da conoscenza implicita.",
      "Rende esplicite le decisioni e le strutture.",
      "Facilita la collaborazione tra più contributor.",
      "Previene la produzione di output scollegati dal contesto originale.",
    ],
    qualityGates: [
      "Il problema deve essere chiaramente definito prima di applicare il framework.",
      "La struttura deve essere rispettata senza scorciatoie.",
      "Gli output devono riflettere fedelmente il contenuto validato.",
      "Ogni deviazione dal processo deve essere motivata e documentata.",
    ],
    antiPatterns: [
      "Usare SMART solo come formalità senza applicarne la logica.",
      "Adattare il framework al contenuto invece di strutturare il contenuto correttamente.",
      "Ignorare i vincoli quando diventano scomodi.",
      "Correggere problemi solo sull’output finale senza intervenire sulla fonte.",
    ],
    outputs: [
      "Processi più prevedibili.",
      "Contenuti più chiari e verificabili.",
      "Maggiore qualità degli output finali.",
      "Meno rilavorazioni dovute a incoerenze o decisioni non tracciate.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/manifesto/governance.md",
    ],
    related: ["what-is-smart", "how-it-works"],
  },
  {
    id: "how-it-works",
    chapterId: "intro",
    title: "Come funziona",
    intro:
        "SMART funziona attraverso una sequenza di trasformazioni controllate. Ogni passaggio prende un input definito, lo elabora secondo regole precise e produce un output che diventa la base dello step successivo. Questo approccio elimina improvvisazione, riduce il rischio di errori accumulati e rende il processo più semplice da verificare.",
    purpose:
        "Descrivere in modo sintetico ma chiaro il funzionamento del framework, evidenziando la logica sequenziale, i vincoli tra gli step e il ruolo della validazione continua.",
    workflow: [
      "Step 1: raccolta e normalizzazione dei dati.",
      "Step 2: costruzione della cartella master.",
      "Step 3: generazione degli output finali.",
      "Validazione continua attraverso quality gate.",
    ],
    highlights: [
      "Ogni step dipende dal precedente.",
      "La qualità viene costruita progressivamente.",
      "Gli output non sono indipendenti dalla struttura.",
      "Il framework privilegia coerenza e tracciabilità rispetto alla velocità apparente.",
    ],
    qualityGates: [
      "Ogni step deve essere validato prima di procedere.",
      "Gli output devono essere coerenti con gli input.",
      "Non devono esserci informazioni non tracciate.",
      "Ogni passaggio deve produrre un artefatto utilizzabile dallo step successivo.",
    ],
    antiPatterns: [
      "Trattare gli step come opzionali.",
      "Saltare la validazione per velocizzare.",
      "Introdurre modifiche non propagate agli step precedenti.",
      "Considerare gli output finali come documenti autonomi scollegati dalla cartella master.",
    ],
    outputs: [
      "Pipeline chiara e ripetibile.",
      "Maggiore controllo sui contenuti.",
      "Riduzione degli errori a valle.",
      "Produzione di materiali finali coerenti con il caso validato.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/README.md",
    ],
    related: ["what-is-smart", "why-smart"],
  },
];
