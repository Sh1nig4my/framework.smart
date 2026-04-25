import type { WikiSection } from "../types";

export const architectureSections: WikiSection[] = [
  {
    id: "step-map",
    chapterId: "architecture",
    title: "Mappa degli step",
    intro:
        "Il framework SMART è organizzato come una pipeline a tre step. Ogni step ha un ruolo preciso: raccogliere e normalizzare le informazioni, trasformarle in una cartella master strutturata e generare output finali pubblicabili. Questa sequenza non è una semplice preferenza operativa, ma il principio architetturale che permette al sistema di restare coerente, verificabile e scalabile.",
    purpose:
        "Fornire una mappa chiara del processo end-to-end, così che ogni persona coinvolta sappia cosa deve entrare in uno step, cosa deve uscire e quali controlli sono necessari prima di procedere.",
    workflow: [
      "Step 1: raccogli e normalizza i dati attraverso lo schema ufficiale.",
      "Step 2: trasforma il caso validato in una cartella master completa, modulare e consultabile.",
      "Step 3: genera output tool specifici partendo esclusivamente da una cartella master validata.",
      "Esegui sempre i gate di qualità prima di ogni handoff o avanzamento di step.",
    ],
    highlights: [
      "Step 1: case-schema.json -> case.json.",
      "Step 2: case.json -> cartella-master/.",
      "Step 3: cartella-master validata -> output tool pubblicabili.",
    ],
    qualityGates: [
      "Nessuno step può essere saltato.",
      "Nessun gate può essere bypassato.",
      "Ogni output intermedio deve essere completo, leggibile e verificabile.",
      "Ogni output dello Step 3 deve essere semanticamente coerente con la cartella master validata.",
    ],
    antiPatterns: [
      "Entrare nello Step 2 con un case.json incompleto.",
      "Produrre output pubblicabili direttamente dallo Step 1.",
      "Aggiornare output dello Step 3 senza riallineare prima la cartella master.",
      "Trattare gli step come attività indipendenti invece che come una pipeline continua.",
    ],
    outputs: [
      "Pipeline prevedibile dall’intake alla pubblicazione.",
      "Riduzione dei conflitti tra progettazione, validazione e output finale.",
      "Maggiore qualità cumulativa tra iterazioni successive.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/README.md",
      "HOW_TO.md",
    ],
    related: ["step-one-guide", "step-two-guide", "step-three-guide"],
  },
  {
    id: "source-of-truth",
    chapterId: "architecture",
    title: "Fonte di verità",
    intro:
        "SMART separa in modo netto le fonti temporanee dalle fonti canoniche. Durante il processo possono esistere appunti, bozze, conversazioni, prompt intermedi e versioni parziali, ma non tutte queste fonti hanno lo stesso valore decisionale. L’architettura del framework funziona solo se è sempre chiaro quale artefatto rappresenta la verità corrente del caso.",
    purpose:
        "Evitare ambiguità tra materiali di lavoro e materiali validati, stabilendo quali file devono essere considerati autorevoli in ogni step del processo.",
    workflow: [
      "Durante lo Step 1, usa lo schema ufficiale come riferimento per raccogliere informazioni complete e coerenti.",
      "Quando il case.json è validato, trattalo come fonte strutturata del caso.",
      "Durante lo Step 2, trasferisci il contenuto validato nella cartella master.",
      "Dopo la validazione della cartella master, usa solo quella come base per generare output Step 3.",
    ],
    highlights: [
      "Lo schema definisce quali informazioni devono esistere.",
      "Il case.json rappresenta il caso normalizzato.",
      "La cartella master rappresenta la versione editoriale, modulare e operativa del caso.",
      "Gli output finali sono derivazioni della cartella master, non fonti autonome.",
    ],
    qualityGates: [
      "Ogni aggiornamento rilevante deve risalire alla fonte canonica corretta.",
      "Gli output pubblicabili non devono introdurre informazioni non presenti o non deducibili dalla cartella master.",
      "Le modifiche locali devono essere propagate alla fonte di verità prima di essere considerate definitive.",
    ],
    antiPatterns: [
      "Usare un prompt intermedio come fonte primaria.",
      "Correggere solo l’output finale senza aggiornare la cartella master.",
      "Mantenere più versioni concorrenti dello stesso contenuto senza una gerarchia esplicita.",
    ],
    outputs: [
      "Maggiore controllo sulla consistenza del contenuto.",
      "Riduzione delle divergenze tra documentazione, prompt e materiali finali.",
      "Processo di revisione più semplice e tracciabile.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/decision-rules.md",
      "framework-documents/manifesto/governance.md",
    ],
    related: ["precedence", "quality-gates", "step-map"],
  },
  {
    id: "non-negotiable-constraints",
    chapterId: "architecture",
    title: "Vincoli non negoziabili",
    intro:
        "Ogni architettura solida si basa su vincoli che non possono essere reinterpretati a seconda del contesto. In SMART questi vincoli proteggono la coerenza della pipeline e impediscono che il framework venga trasformato in una semplice raccolta di buone pratiche applicate in modo variabile.",
    purpose:
        "Rendere espliciti i limiti strutturali che non devono essere violati durante l’utilizzo, l’estensione o la manutenzione del framework.",
    workflow: [
      "Verifica che ogni attività rispetti la sequenza ufficiale degli step.",
      "Assicurati che ogni output derivi dalla fonte canonica corretta.",
      "Blocca modifiche o shortcut che introducono incoerenza tra gli artefatti.",
      "Documenta ogni eccezione solo se realmente necessaria e compatibile con la logica del framework.",
    ],
    highlights: [
      "Non si genera output finale senza una cartella master validata.",
      "Non si corregge a valle ciò che deve essere corretto alla fonte.",
      "Non si considera valido un artefatto solo perché formalmente completo.",
      "Non si introduce una nuova regola se entra in conflitto con la gerarchia esistente.",
    ],
    qualityGates: [
      "Ogni vincolo deve essere verificabile in modo operativo.",
      "Le eccezioni devono essere documentate, motivate e limitate.",
      "La violazione di un vincolo architetturale deve bloccare l’avanzamento.",
      "Le correzioni devono ripristinare coerenza sull’intera pipeline, non solo sul file interessato.",
    ],
    antiPatterns: [
      "Trattare i vincoli come suggerimenti.",
      "Bypassare la cartella master per produrre più velocemente un output.",
      "Applicare fix locali senza controllare l’impatto sugli step precedenti.",
      "Introdurre logiche parallele non documentate.",
    ],
    outputs: [
      "Framework più resistente a deviazioni e interpretazioni arbitrarie.",
      "Maggiore affidabilità nei processi collaborativi.",
      "Riduzione del debito documentale generato da eccezioni non controllate.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/decision-rules.md",
      "framework-documents/manifesto/governance.md",
    ],
    related: ["source-of-truth", "precedence", "quality-gates"],
  },
  {
    id: "precedence",
    chapterId: "architecture",
    title: "Regole di precedenza",
    intro:
        "Quando emergono conflitti tra fonti, versioni o interpretazioni, SMART applica regole di precedenza esplicite. Questo evita che ogni revisione diventi una discussione soggettiva e permette al team di prendere decisioni coerenti anche quando il sistema cresce, cambia o viene mantenuto da contributor diversi.",
    purpose:
        "Ridurre l’incertezza nei conflitti documentali e operativi, fornendo una gerarchia stabile per stabilire quale fonte deve prevalere.",
    workflow: [
      "Rileva il conflitto e identifica i file o gli artefatti coinvolti.",
      "Applica l’ordine ufficiale di precedenza definito dal framework.",
      "Registra la decisione, il razionale e l’impatto sui file aggiornati.",
      "Propaga la correzione alle sezioni collegate, evitando fix isolati.",
    ],
    highlights: [
      "Il case schema prevale sulla struttura dello Step 1.",
      "Il case JSON prevale sul contenuto descrittivo non strutturato del caso.",
      "La cartella master governa lo Step 2 e costituisce la base dello Step 3.",
      "Gli output finali non devono sovrascrivere retroattivamente la logica della cartella master.",
    ],
    qualityGates: [
      "Ogni conflitto risolto deve indicare chiaramente la fonte prevalente.",
      "Le fonti subordinate non devono introdurre regole alternative.",
      "Le decisioni devono restare comprensibili anche a nuovi contributor.",
      "Ogni eccezione deve essere documentata e motivata.",
    ],
    antiPatterns: [
      "Scegliere la fonte più comoda invece della fonte canonica.",
      "Applicare fix locali senza aggiornare i riferimenti incrociati.",
      "Aggiungere eccezioni non documentate.",
      "Risolvere conflitti modificando direttamente l’output finale senza intervenire sulla causa.",
    ],
    outputs: [
      "Matrice decisionale più stabile nei conflitti.",
      "Riduzione delle regressioni documentali.",
      "Maggiore prevedibilità nella manutenzione evolutiva.",
    ],
    references: [
      "framework-documents/wizard/decision-rules.md",
      "framework-documents/framework/process-overview.md",
      "framework-documents/manifesto/governance.md",
    ],
    related: ["source-of-truth", "quality-gates", "step-map"],
  },
  {
    id: "modular-structure",
    chapterId: "architecture",
    title: "Struttura modulare",
    intro:
        "La cartella master è progettata come una struttura modulare. Ogni file o sezione deve avere una responsabilità chiara, un perimetro comprensibile e una relazione leggibile con il resto del sistema. Questo approccio consente di aggiornare singole parti del framework senza compromettere l’intero contenuto.",
    purpose:
        "Favorire manutenzione, riuso e revisione incrementale dei contenuti, evitando file monolitici difficili da leggere, validare o correggere.",
    workflow: [
      "Organizza ogni contenuto in sezioni con responsabilità distinte.",
      "Mantieni separati contesto, istruzioni, vincoli, output e criteri di qualità.",
      "Collega i moduli correlati attraverso riferimenti espliciti.",
      "Aggiorna solo il modulo interessato, verificando poi gli impatti sulle sezioni dipendenti.",
    ],
    highlights: [
      "Ogni modulo deve rispondere a una funzione precisa.",
      "La modularità riduce il rischio di modifiche invasive.",
      "I riferimenti tra moduli devono aiutare la navigazione, non creare dipendenze opache.",
      "La struttura deve restare leggibile anche per chi entra nel progetto in un secondo momento.",
    ],
    qualityGates: [
      "Ogni sezione deve avere uno scopo riconoscibile.",
      "Non devono esistere duplicazioni inutili tra moduli.",
      "I contenuti condivisi devono essere aggiornati alla fonte corretta.",
      "Ogni riferimento deve puntare a una risorsa realmente utile.",
    ],
    antiPatterns: [
      "Accorpare troppe responsabilità nello stesso file.",
      "Duplicare lo stesso contenuto in più sezioni senza motivo.",
      "Creare moduli troppo piccoli, privi di autonomia informativa.",
      "Usare riferimenti incrociati come sostituti di una struttura chiara.",
    ],
    outputs: [
      "Contenuti più facili da estendere.",
      "Revisione più rapida dei singoli capitoli.",
      "Minore rischio di regressioni durante aggiornamenti progressivi.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/README.md",
      "HOW_TO.md",
    ],
    related: ["source-of-truth", "quality-gates", "step-map"],
  },
  {
    id: "quality-gates",
    chapterId: "architecture",
    title: "Quality gate",
    intro:
        "I quality gate sono i punti di controllo che impediscono al framework di avanzare con dati incompleti, contenuti ambigui o output non coerenti. Non sono semplici checklist formali: rappresentano il meccanismo con cui SMART protegge la qualità del lavoro lungo tutta la pipeline.",
    purpose:
        "Garantire che ogni passaggio produca un artefatto sufficientemente solido da poter essere usato nello step successivo senza introdurre debito documentale o operativo.",
    workflow: [
      "Verifica la completezza dell’artefatto prodotto nello step corrente.",
      "Controlla la coerenza con la fonte di verità applicabile.",
      "Identifica eventuali ambiguità, omissioni o conflitti.",
      "Blocca l’avanzamento finché i problemi critici non sono risolti.",
    ],
    highlights: [
      "Ogni step ha criteri di accettazione propri.",
      "Un gate superato rende lo step utilizzabile dallo step successivo.",
      "Un gate fallito deve produrre correzioni, non workaround.",
      "La qualità viene accumulata progressivamente, non recuperata solo alla fine.",
    ],
    qualityGates: [
      "Il contenuto deve essere completo rispetto allo scopo dello step.",
      "Il contenuto deve essere leggibile da una persona esterna al lavoro originale.",
      "Le dipendenze devono essere esplicite.",
      "Le decisioni rilevanti devono essere tracciabili.",
    ],
    antiPatterns: [
      "Trattare i quality gate come controlli opzionali.",
      "Rimandare problemi strutturali allo step successivo.",
      "Validare un output solo perché formalmente compilato.",
      "Correggere errori a valle invece di risolverli nella fonte corretta.",
    ],
    outputs: [
      "Avanzamento più sicuro tra gli step.",
      "Meno rilavorazioni negli step finali.",
      "Maggiore affidabilità degli output pubblicabili.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/decision-rules.md",
      "framework-documents/manifesto/governance.md",
    ],
    related: ["precedence", "source-of-truth", "step-map"],
  },
  {
    id: "handoff-model",
    chapterId: "architecture",
    title: "Modello di handoff",
    intro:
        "Ogni passaggio tra step deve essere trattato come un handoff controllato. Questo significa che l’artefatto consegnato allo step successivo deve essere autosufficiente, comprensibile e già validato. Lo step successivo non dovrebbe dover interpretare intenzioni implicite o ricostruire decisioni mancanti.",
    purpose:
        "Rendere il trasferimento tra step chiaro e affidabile, riducendo dipendenze informali, perdite di contesto e interpretazioni divergenti.",
    workflow: [
      "Completa lo step corrente fino al relativo gate di qualità.",
      "Verifica che l’artefatto prodotto sia leggibile senza spiegazioni esterne.",
      "Documenta eventuali decisioni importanti prese durante la lavorazione.",
      "Passa allo step successivo solo quando il materiale è stabile e consultabile.",
    ],
    highlights: [
      "Un buon handoff riduce il carico cognitivo dello step successivo.",
      "Ogni artefatto deve contenere abbastanza contesto da essere revisionato autonomamente.",
      "Le decisioni implicite devono diventare esplicite prima del passaggio.",
      "L’handoff non è un cambio di responsabilità, ma un trasferimento controllato di stato.",
    ],
    qualityGates: [
      "L’artefatto deve essere completo rispetto allo step appena concluso.",
      "Le assunzioni devono essere dichiarate.",
      "Le aree non risolte devono essere evidenziate, non nascoste.",
      "Il destinatario dello step successivo deve poter lavorare senza recuperare contesto altrove.",
    ],
    antiPatterns: [
      "Consegnare file parziali contando su spiegazioni verbali o chat esterne.",
      "Passare allo step successivo con decisioni ancora aperte.",
      "Usare l’handoff per scaricare problemi non risolti.",
      "Confondere una bozza con un artefatto validato.",
    ],
    outputs: [
      "Transizioni più pulite tra step di lavoro.",
      "Minore perdita di contesto.",
      "Collaborazione più efficace tra ruoli e contributor.",
    ],
    references: [
      "framework-documents/framework/process-overview.md",
      "framework-documents/wizard/README.md",
      "HOW_TO.md",
    ],
    related: ["quality-gates", "source-of-truth", "step-map"],
  },
];
