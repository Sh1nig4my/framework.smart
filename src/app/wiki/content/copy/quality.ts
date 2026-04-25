import type { WikiSection } from "../types";

export const qualitySections: WikiSection[] = [
  {
    id: "quality-principles",
    chapterId: "quality",
    title: "Principi di qualità",
    intro:
        "Nel framework SMART la qualità non è un controllo finale, ma una proprietà emergente del processo. Ogni step contribuisce alla qualità complessiva attraverso vincoli, validazioni e regole esplicite. Questo approccio evita che gli errori si accumulino e riduce la necessità di correzioni tardive.",
    purpose:
        "Definire i principi fondamentali che guidano la qualità nel framework, rendendo esplicito come e dove la qualità viene costruita.",
    workflow: [
      "Integra criteri di qualità in ogni step del processo.",
      "Valida ogni output prima di procedere.",
      "Risolvi i problemi alla fonte, non a valle.",
      "Mantieni coerenza tra tutte le rappresentazioni del contenuto.",
    ],
    highlights: [
      "La qualità è distribuita, non centralizzata.",
      "Ogni step contribuisce alla qualità finale.",
      "Le correzioni devono partire dalla fonte di verità.",
    ],
    qualityGates: [
      "Ogni output deve essere completo rispetto allo scopo.",
      "Il contenuto deve essere leggibile e non ambiguo.",
      "Le decisioni devono essere tracciabili.",
      "Le dipendenze devono essere esplicite.",
    ],
    antiPatterns: [
      "Trattare la qualità come un controllo finale.",
      "Accettare output incompleti per avanzare.",
      "Correggere solo gli effetti senza intervenire sulle cause.",
    ],
    outputs: [
      "Maggiore affidabilità dei contenuti.",
      "Riduzione degli errori accumulati.",
      "Processo più stabile e prevedibile.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/manifesto/governance.md",
    ],
    related: ["quality-gates", "validation-process"],
  },
  {
    id: "quality-gates",
    chapterId: "quality",
    title: "Quality gate",
    intro:
        "I quality gate rappresentano i punti di controllo formali del framework. Ogni gate stabilisce se un output è sufficientemente solido da essere utilizzato nello step successivo. Se un gate fallisce, il processo si interrompe e richiede correzione.",
    purpose:
        "Impedire che contenuti incompleti o incoerenti avanzino nel processo, proteggendo la qualità complessiva.",
    workflow: [
      "Definisci i criteri di accettazione per lo step corrente.",
      "Valida l’output rispetto ai criteri.",
      "Identifica eventuali problemi o incongruenze.",
      "Blocca l’avanzamento fino alla risoluzione.",
    ],
    highlights: [
      "Ogni step ha i propri gate.",
      "Un gate superato certifica l’output.",
      "Un gate fallito richiede correzione, non workaround.",
    ],
    qualityGates: [
      "Il contenuto deve essere completo.",
      "Il contenuto deve essere coerente con la fonte di verità.",
      "Non devono esserci ambiguità.",
      "Il contenuto deve essere verificabile da terzi.",
    ],
    antiPatterns: [
      "Bypassare i gate per velocizzare.",
      "Validare superficialmente.",
      "Accettare output parziali.",
    ],
    outputs: [
      "Avanzamento controllato tra gli step.",
      "Maggiore robustezza del processo.",
      "Riduzione delle correzioni a valle.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/decision-rules.md",
    ],
    related: ["quality-principles", "validation-process"],
  },
  {
    id: "validation-process",
    chapterId: "quality",
    title: "Processo di validazione",
    intro:
        "La validazione in SMART è un’attività strutturata che verifica la correttezza, la completezza e la coerenza del contenuto. Non si limita a controllare la forma, ma analizza anche il significato e le relazioni tra le informazioni.",
    purpose:
        "Assicurare che ogni artefatto sia utilizzabile in modo affidabile nello step successivo.",
    workflow: [
      "Controlla la completezza del contenuto.",
      "Verifica la coerenza interna.",
      "Confronta con la fonte di verità.",
      "Individua ambiguità o conflitti.",
      "Applica correzioni strutturali.",
    ],
    highlights: [
      "La validazione è sia sintattica che semantica.",
      "Il contenuto deve essere comprensibile senza contesto implicito.",
      "Le incoerenze devono essere risolte prima di procedere.",
    ],
    qualityGates: [
      "Tutti i campi richiesti devono essere presenti.",
      "Le informazioni devono essere coerenti tra loro.",
      "Non devono esserci contraddizioni.",
      "Il contenuto deve essere leggibile e verificabile.",
    ],
    antiPatterns: [
      "Validare solo la presenza dei campi.",
      "Ignorare incoerenze semantiche.",
      "Rimandare problemi allo step successivo.",
    ],
    outputs: [
      "Contenuti affidabili.",
      "Riduzione degli errori propagati.",
      "Maggiore coerenza tra gli step.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/README.md",
    ],
    related: ["quality-gates", "consistency"],
  },
  {
    id: "consistency",
    chapterId: "quality",
    title: "Coerenza",
    intro:
        "La coerenza è uno degli obiettivi principali del framework SMART. Tutti i livelli del contenuto — schema, dati, struttura e output — devono essere allineati. Una perdita di coerenza in uno di questi livelli compromette l’intero sistema.",
    purpose:
        "Garantire che tutte le rappresentazioni del contenuto riflettano la stessa informazione in modo uniforme.",
    workflow: [
      "Allinea il contenuto con la fonte di verità.",
      "Verifica la coerenza tra le sezioni.",
      "Controlla le dipendenze tra file.",
      "Aggiorna tutte le rappresentazioni collegate.",
    ],
    highlights: [
      "La coerenza è trasversale a tutto il framework.",
      "Le modifiche devono propagarsi a tutte le dipendenze.",
      "Ogni livello deve riflettere lo stesso contenuto.",
    ],
    qualityGates: [
      "Non devono esistere versioni divergenti dello stesso contenuto.",
      "Le dipendenze devono essere allineate.",
      "Le modifiche devono essere propagate.",
    ],
    antiPatterns: [
      "Aggiornare solo una parte del sistema.",
      "Mantenere versioni multiple non sincronizzate.",
      "Ignorare dipendenze tra file.",
    ],
    outputs: [
      "Contenuti uniformi.",
      "Riduzione delle incoerenze.",
      "Maggiore affidabilità del sistema.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/manifesto/governance.md",
    ],
    related: ["validation-process", "quality-principles"],
  },
  {
    id: "severity-classification",
    chapterId: "quality",
    title: "Classificazione degli errori",
    intro:
        "Non tutti gli errori hanno lo stesso impatto sul framework. Alcuni bloccano la pipeline, altri riducono la qualità dell’output, altri ancora sono correzioni minori che non compromettono l’avanzamento. Per questo SMART utilizza una classificazione della severità, utile a decidere quando bloccare il processo e quando procedere con una correzione pianificata.",
    purpose:
        "Fornire un criterio operativo per valutare la gravità degli errori, stabilire priorità di intervento e decidere se un artefatto può avanzare nello step successivo.",
    workflow: [
      "Identifica l’errore o l’incoerenza rilevata.",
      "Valuta l’impatto sulla fonte di verità, sulla struttura e sugli output.",
      "Classifica la severità come critical, major, minor o cosmetic.",
      "Applica la correzione con priorità proporzionale alla severità.",
      "Rivalida il contenuto quando l’errore impatta la pipeline o la coerenza semantica.",
    ],
    highlights: [
      "Critical: blocca la pipeline perché compromette fonte, struttura o output.",
      "Major: non sempre blocca il processo, ma compromette qualità, chiarezza o coerenza.",
      "Minor: introduce un degrado locale ma non altera la logica complessiva.",
      "Cosmetic: riguarda forma, stile o micro-correzioni senza impatto operativo.",
    ],
    qualityGates: [
      "Ogni errore critical deve bloccare l’avanzamento.",
      "Ogni errore major deve essere risolto prima della pubblicazione finale.",
      "Gli errori minor devono essere tracciati e corretti senza accumularsi.",
      "Gli errori cosmetic non devono essere usati per ritardare decisioni strutturali già valide.",
    ],
    antiPatterns: [
      "Trattare tutti gli errori con la stessa priorità.",
      "Ignorare errori major perché non bloccano immediatamente la pipeline.",
      "Classificare come cosmetic un errore che altera significato o coerenza.",
      "Procedere con errori critical aperti confidando in correzioni successive.",
    ],
    outputs: [
      "Priorità di intervento più chiare.",
      "Decisioni di blocco o avanzamento più oggettive.",
      "Migliore gestione delle revisioni in contesti collaborativi.",
      "Riduzione del rischio di rilascio di output formalmente corretti ma semanticamente fragili.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/decision-rules.md",
      "framework-documents/manifesto/governance.md",
    ],
    related: ["quality-gates", "validation-process", "error-handling"],
  },
  {
    id: "error-handling",
    chapterId: "quality",
    title: "Gestione errori",
    intro:
        "Nel framework SMART gli errori non devono essere nascosti o aggirati, ma identificati e risolti in modo strutturato. La gestione degli errori è parte integrante del processo di qualità e contribuisce a migliorare il sistema nel tempo.",
    purpose:
        "Definire come individuare, classificare e risolvere gli errori senza compromettere la coerenza del framework.",
    workflow: [
      "Identifica l’errore e il suo impatto.",
      "Classifica la severità dell’errore.",
      "Risali alla causa nella fonte di verità.",
      "Applica la correzione alla fonte.",
      "Propaga la correzione a tutte le dipendenze.",
      "Valida nuovamente il contenuto.",
    ],
    highlights: [
      "Gli errori devono essere risolti alla radice.",
      "Le correzioni locali non sono sufficienti.",
      "Ogni errore è un’opportunità di miglioramento del processo.",
      "La severità guida priorità, blocchi e modalità di intervento.",
    ],
    qualityGates: [
      "Ogni errore deve avere una causa identificata.",
      "Le correzioni devono essere complete.",
      "Non devono rimanere effetti collaterali.",
      "Gli errori critical e major devono essere rivalidati dopo la correzione.",
    ],
    antiPatterns: [
      "Applicare workaround temporanei.",
      "Correggere solo l’output finale.",
      "Ignorare errori minori che possono accumularsi.",
      "Risolvere un errore senza aggiornare le dipendenze collegate.",
    ],
    outputs: [
      "Sistema più robusto.",
      "Riduzione degli errori ricorrenti.",
      "Miglioramento continuo del framework.",
      "Maggiore controllo sulle decisioni di avanzamento o blocco.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "HOW_TO.md",
    ],
    related: ["validation-process", "consistency", "severity-classification"],
  },
];
