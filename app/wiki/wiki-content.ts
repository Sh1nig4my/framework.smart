export type WikiSection = {
  id: string;
  chapterId: string;
  title: string;
  intro: string;
  purpose: string;
  workflow: string[];
  highlights: string[];
  qualityGates: string[];
  antiPatterns: string[];
  outputs: string[];
  references: string[];
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
      "SMART e un framework no-code e AI-native per trasformare esigenze frammentarie in output affidabili, tracciabili e riusabili, senza improvvisazione e senza perdita di controllo umano.",
    purpose:
      "Definire un sistema operativo comune tra team, stakeholder e agenti AI, in cui ogni decisione resta auditabile e ogni output puo essere verificato contro fonti canoniche.",
    workflow: [
      "Inquadra il bisogno reale: problema, pubblico, vincoli, risultato atteso.",
      "Normalizza il bisogno in artefatti standard (Fase 1 e Fase 2).",
      "Esegui output tool Fase 3 solo da fonti validate, con gate obbligatori.",
      "Consegna output pubblicabili mantenendo promessa, tono e limiti dichiarati.",
    ],
    highlights: [
      "Integra documentazione, metodo, prompt hub e web app in un unico sistema operativo.",
      "Riduce incoerenze tra promessa comunicativa, contenuto reale e pubblicazione.",
      "Tratta gli agenti AI come acceleratori disciplinati, non come fonti autonome di verita.",
    ],
    qualityGates: [
      "Ogni output deve essere tracciabile a una fonte canonica SMART.",
      "Ogni passaggio deve esplicitare assunzioni e nodi aperti, senza impliciti.",
      "Ogni rilascio deve rispettare il lessico del glossario e la catena Fase 1 -> Fase 2 -> Fase 3.",
    ],
    antiPatterns: [
      "Usare SMART come raccolta di template scollegati dal processo.",
      "Saltare la validazione per accelerare tempi di produzione.",
      "Demandare all'AI decisioni critiche senza ownership umana.",
    ],
    outputs: [
      "Processo replicabile e leggibile da team misti umani+AI.",
      "Riduzione dei rework causati da ambiguita iniziali.",
      "Output finali consistenti tra canali diversi.",
    ],
    references: [
      "documentation/README.md",
      "documentation/framework/process-overview.md",
      "documentation/framework/metodologia.md",
    ],
    related: ["smart-standard", "phase-map"],
  },
  {
    id: "smart-standard",
    chapterId: "intro",
    title: "SMART come standard",
    intro:
      "In SMART lo standard e la base per scalare qualita e coerenza su divulgazione, eventi e contenuti strutturati, senza dipendere da singole persone o da memoria informale.",
    purpose:
      "Garantire che team diversi, in momenti diversi, producano decisioni e output compatibili tra loro grazie a nomenclatura, gate e precedenze condivise.",
    workflow: [
      "Adotta il lessico canonico prima di produrre nuovi artefatti.",
      "Verifica che struttura e contenuto rispettino le precedenze ufficiali.",
      "Documenta ogni deviazione locale e il suo impatto operativo.",
      "Consolida la modifica in modo che sia riusabile per i prossimi cicli.",
    ],
    highlights: [
      "Terminologia, gate e strutture comuni tra team differenti.",
      "Customizzazione locale possibile senza perdita di allineamento metodologico.",
      "Auditabilita e manutenzione piu semplici nel tempo, anche con agenti multipli.",
    ],
    qualityGates: [
      "Un termine nuovo e valido solo se non confligge con il glossario.",
      "Una variante locale e accettabile solo se non rompe la catena delle fasi.",
      "Ogni aggiornamento deve mantenere compatibilita con i playbook principali.",
    ],
    antiPatterns: [
      "Introdurre sinonimi per concetti gia standardizzati.",
      "Usare playbook come regola primaria al posto del framework.",
      "Confondere materiale storico con regole attive.",
    ],
    outputs: [
      "Meno ambiguita semantica tra documenti, prompt e pagine app.",
      "Maggiore velocita di onboarding senza riduzione della qualita.",
      "Decisioni piu difendibili in review e audit interni.",
    ],
    references: [
      "documentation/framework/glossario.md",
      "documentation/manifesto/principi.md",
      "documentation/manifesto/governance.md",
    ],
    related: ["precedence", "quality-gates"],
  },
  {
    id: "phase-map",
    chapterId: "architecture",
    title: "Mappa delle fasi",
    intro:
      "Il framework segue una sequenza canonica a 3 fasi: intake strutturato, cartella master modulare, output tool pubblicabili. La sequenza non e opzionale: e il meccanismo che preserva coerenza e responsabilita.",
    purpose:
      "Offrire una mappa unica per capire in pochi minuti cosa entra in ogni fase, cosa esce e quali controlli servono prima del passaggio successivo.",
    workflow: [
      "Fase 1: raccogli e normalizza dati con schema ufficiale.",
      "Fase 2: trasforma il caso validato in cartella master completa.",
      "Fase 3: crea output tool canale-specifici solo da cartella master validata.",
      "Esegui gate di fase prima di qualsiasi handoff.",
    ],
    highlights: [
      "Fase 1: case-schema.json -> case.json.",
      "Fase 2: case.json -> cartella-master/.",
      "Fase 3: cartella-master validata -> output tool (prompt/materiali) pubblicabili.",
    ],
    qualityGates: [
      "Nessun salto di fase e nessun bypass dei gate.",
      "Ogni output intermedio deve essere completo e leggibile.",
      "Ogni output Fase 3 deve essere semanticamente coerente con la cartella master validata.",
    ],
    antiPatterns: [
      "Entrare in Fase 2 con un case.json incompleto.",
      "Produrre output pubblicabili direttamente dalla Fase 1.",
      "Aggiornare output Fase 3 senza allineare prima la cartella master.",
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
    related: ["phase-one-guide", "phase-two-guide", "phase-three-guide"],
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
      "Case schema prevale sulla struttura Fase 1.",
      "Case JSON prevale sul contenuto del caso.",
      "Cartella master governa struttura Fase 2 e base della Fase 3.",
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
    related: ["quality-gates", "phase-map"],
  },
  {
    id: "phase-one-guide",
    chapterId: "workflow",
    title: "Guida Fase 1 passo-passo",
    intro:
      "La Fase 1 raccoglie requisiti in formato strutturato per produrre un case JSON validabile e pronto alla Fase 2. E la fase che determina la qualita di tutto il ciclo successivo.",
    purpose:
      "Trasformare informazioni spesso frammentarie in un artefatto coerente, completo e formalmente corretto, eliminando ambiguita prima della generazione editoriale.",
    workflow: [
      "1) Leggi `wizard/case-schema.json` e identifica campi obbligatori e opzioni valide.",
      "2) Raccogli i requisiti del committente in linguaggio naturale e normalizzali.",
      "3) Compila i campi seguendo naming e struttura canonici, senza aggiunte arbitrarie.",
      "4) Verifica coerenza trasversale tra obiettivo, pubblico, formato, policy e limiti.",
      "5) Salva `case.json`, valida e blocca il passaggio se restano conflitti logici.",
    ],
    highlights: [
      "Parti da schema canonico e compila solo valori ammessi.",
      "Blocca campi inventati e assunzioni implicite.",
      "Valida coerenza di obiettivo, pubblico, formato, policy e limiti.",
    ],
    qualityGates: [
      "Tutti i campi obbligatori valorizzati e sintatticamente validi.",
      "Nessun valore fuori opzione e nessun campo extra.",
      "Assunzioni e nodi aperti dichiarati in modo esplicito.",
    ],
    antiPatterns: [
      "Compilare direttamente da intuizioni non confermate.",
      "Confondere schema di fase con caso reale.",
      "Mandare in Fase 2 un case incompleto solo per rispettare una scadenza.",
    ],
    outputs: [
      "`case.json` pronto per il mapping in Fase 2.",
      "Log di assunzioni e nodi aperti con impatto operativo.",
      "Base solida per evitare promesse non supportate a valle.",
    ],
    references: [
      "documentation/wizard/fase-1-intake.md",
      "documentation/wizard/case-schema.md",
      "documentation/wizard/case-schema.json",
      "app/download/page.tsx",
    ],
    related: ["download-guide", "phase-two-guide"],
  },
  {
    id: "phase-two-guide",
    chapterId: "workflow",
    title: "Guida Fase 2 passo-passo",
    intro:
      "La Fase 2 costruisce una cartella master modulare da cui dipendono tutti gli output successivi. Qui si decide qualita narrativa, confini di promessa e robustezza editoriale.",
    purpose:
      "Convertire il dato strutturato della Fase 1 in una cartella strategico-operativa che possa governare output tool coerenti su canali diversi.",
    workflow: [
      "1) Leggi integralmente `case.json` validato e marca eventuali lacune residue.",
      "2) Mappa ogni blocco del caso sulle directory e sui file canonici della cartella master.",
      "3) Compila sezioni core e specialistiche in modo modulare, includendo limiti, cautele e assunzioni.",
      "4) Verifica coerenza narrativa, tono, policy e aderenza al pubblico target.",
      "5) Esegui gate Fase 2 e prepara handoff con evidenze tracciabili per Fase 3.",
    ],
    highlights: [
      "Mappa `case.json` sulla struttura canonica della cartella master.",
      "Esplicita assunzioni, nodi aperti, limiti e cautele.",
      "Supera gate Fase 2 prima di ogni derivazione.",
    ],
    qualityGates: [
      "Documento completo: nessuna sezione canonica lasciata implicita.",
      "Ogni claim e tracciabile al caso o ad assunzioni dichiarate.",
      "Nessuna promessa esterna non supportata dal materiale disponibile.",
    ],
    antiPatterns: [
      "Scrivere testo generico che non guida scelte operative.",
      "Saltare il controllo su rischi, limiti o policy del caso.",
      "Iniziare derivazione prima della validazione finale della cartella master.",
    ],
    outputs: [
      "Cartella master pronta per esecuzioni multi-canale in Fase 3.",
      "Registro chiaro di assunzioni e nodi aperti.",
      "Riduzione degli errori semantici in Fase 3.",
    ],
    references: [
      "documentation/wizard/fase-2-generazione.md",
      "documentation/wizard/cartella-master-template.md",
      "documentation/wizard/cartella-master-schema.md",
      "documentation/wizard/cartella-master-validation.md",
    ],
    related: ["phase-three-guide", "quality-gates"],
  },
  {
    id: "phase-three-guide",
    chapterId: "workflow",
    title: "Guida Fase 3 passo-passo",
    intro:
      "La Fase 3 esegue tool operativi e prepara output pubblicabili mantenendo coerenza piena con cartella master validata. E la fase in cui forma e canale cambiano, ma il significato deve restare stabile.",
    purpose:
      "Produrre output finali efficaci per ciascun canale, preservando contenuto, tono, limiti, vincoli brand e promessa definiti nella fase strategica.",
    workflow: [
      "1) Leggi handoff Fase 3 e seleziona tool richiesti, scope e vincoli.",
      "2) Definisci `provider_target` (`preset`, `custom`, default `non specificato`).",
      "3) Genera `prompt_o_output` solo da fonti cartella master validate.",
      "4) Applica checklist pre-pubblicazione su coerenza, promesse, policy e brand.",
      "5) Completa revisione finale umana prima del rilascio esterno.",
    ],
    highlights: [
      "Usa tool standardizzati v1 (naming, immagini, riassunti, PowerPoint, pagina web, video).",
      "Dichiara sempre `tool_usato` e `provider_target`.",
      "Adatta forma senza alterare significato, limiti, promessa e policy.",
    ],
    qualityGates: [
      "Coerenza semantica completa con cartella master validata.",
      "Assenza di nuove regole, promesse o claim non supportati.",
      "Coerenza tra provider dichiarato e struttura output.",
      "Revisione umana conclusiva con esito esplicito.",
    ],
    antiPatterns: [
      "Derivare da appunti secondari invece che dalla cartella master.",
      "Semplificare troppo il messaggio fino a cambiarne il senso.",
      "Pubblicare output non verificati per urgenza di canale.",
    ],
    outputs: [
      "Output tool pronti alla pubblicazione e coerenti tra loro.",
      "Checklist pre-release compilata.",
      "Tracciato completo (`tool_usato`, `provider_target`, fonti master, esito validazione).",
    ],
    references: [
      "documentation/wizard/fase-3-derivazione-pubblicazione.md",
      "documentation/context-ai/output-contracts.md",
      "documentation/context-ai/validation-protocol.md",
    ],
    related: ["quality-gates", "use-cases"],
  },
  {
    id: "wizard-setup",
    chapterId: "operations",
    title: "Wizard setup ambiente",
    intro:
      "La pagina `/wizard` e la guida di configurazione e installazione ambiente prima del lavoro operativo. Serve a rendere replicabile il setup e ridurre errori tecnici all'avvio.",
    purpose:
      "Portare ogni contributor, tecnico o non tecnico, in uno stato di ambiente affidabile prima dell'esecuzione delle fasi metodologiche.",
    workflow: [
      "Verifica prerequisiti software e versione runtime richieste dal progetto.",
      "Installa dipendenze e avvia ambiente locale con i comandi ufficiali.",
      "Esegui check minimi (lint/build/dev) per validare lo stato di partenza.",
      "Conferma che route chiave (/wizard, /wiki, /download) siano raggiungibili.",
    ],
    highlights: [
      "Copre prerequisiti hardware/software e setup locale.",
      "Definisce controlli minimi (lint/build/dev) prima dell'operativita.",
      "Riduce errori tecnici prima di avviare Fase 1.",
    ],
    qualityGates: [
      "Comandi base eseguiti senza errori bloccanti.",
      "Ambiente coerente con standard del repository.",
      "Assenza di mismatch critici tra configurazione locale e progetto.",
    ],
    antiPatterns: [
      "Iniziare workflow con ambiente non verificato.",
      "Applicare workaround locali non documentati.",
      "Confondere setup tecnico con fase metodologica di contenuto.",
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
    title: "Download e compilazione Fase 1",
    intro:
      "La pagina `/download` e il punto operativo per generare e scaricare `case.json` dopo validazione e salvataggio. E l'interfaccia applicativa principale della Fase 1.",
    purpose:
      "Consentire compilazione guidata del caso in modo conforme allo schema canonico, con persistenza controllata e prevenzione duplicati.",
    workflow: [
      "Compila il form seguendo campi e opzioni compatibili con lo schema ufficiale.",
      "Esegui validazione applicativa lato client e lato server.",
      "Persisti il record e verifica controllo duplicati email+JSON.",
      "Scarica `case.json` solo dopo conferma di salvataggio riuscito.",
      "Riusa il file come input unico della Fase 2.",
    ],
    highlights: [
      "Il form e allineato allo schema canonico Fase 1.",
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
      "Riduzione errori di handoff tra Fase 1 e Fase 2.",
    ],
    references: ["app/download/page.tsx", "app/api/", "documentation/wizard/fase-1-intake.md"],
    related: ["phase-one-guide", "quality-gates"],
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
      "Leggi `prompts/README.md` e identifica categoria e lettera del prompt (A-H).",
      "Apri il prompt selezionato e verifica scope consentito/vietato.",
      "Applica le istruzioni custom dell'utente senza violare i vincoli di categoria.",
      "Esegui verifiche finali coerenti con il perimetro del prompt.",
      "Rendi espliciti file toccati, assunzioni e nodi aperti.",
    ],
    highlights: [
      "Ogni prompt ha scope consentito e vietato.",
      "Maintenance, Alignment, Evolution e Workflow sono separati e governati da regole di categoria.",
      "L'agente deve restare conforme al perimetro del prompt scelto.",
      "Per Fase 3, contract e gate provider-aware sono obbligatori.",
    ],
    qualityGates: [
      "Nessuna modifica fuori scope rispetto al prompt selezionato.",
      "Coerenza tra obiettivo utente, categoria prompt e file aggiornati.",
      "Per task Fase 3: presenza di `tool_usato`, `provider_target` e `prompt_o_output`.",
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
    references: ["prompts/README.md", "prompts/app-evolution.md", "prompts/workflow-execution.md"],
    related: ["quality-gates", "wizard-setup"],
  },
  {
    id: "quality-gates",
    chapterId: "quality",
    title: "Gate di qualita",
    intro:
      "I gate sono il meccanismo che garantisce affidabilita tra le fasi e blocca output non conformi. Senza gate, il framework perde valore operativo e non e piu auditabile.",
    purpose:
      "Imporre criteri di uscita chiari a ogni fase, evitando propagazione di errori semantici o strutturali verso gli output pubblicabili.",
    workflow: [
      "Definisci criteri di superamento prima di iniziare la fase.",
      "Esegui controllo formale su completezza, coerenza e tracciabilita.",
      "Blocca il passaggio se un criterio obbligatorio fallisce.",
      "Registra esito del gate e azioni correttive richieste.",
    ],
    highlights: [
      "Gate Fase 1: validazione schema e coerenza caso.",
      "Gate Fase 2: validazione cartella master.",
      "Gate Fase 3: validazione output tool pre-pubblicazione.",
    ],
    qualityGates: [
      "Ogni gate deve avere criteri espliciti e verificabili.",
      "Ogni non-conformita deve produrre un'azione correttiva specifica.",
      "Nessun gate superato per sola urgenza di consegna.",
    ],
    antiPatterns: [
      "Considerare il gate come formalita burocratica.",
      "Accettare output incompleti con l'idea di sistemarli dopo.",
      "Confondere quality gate con revisione stilistica opzionale.",
    ],
    outputs: [
      "Meno errori a cascata tra fasi.",
      "Maggiore affidabilita nei rilasci finali.",
      "Processo di revisione piu oggettivo e ripetibile.",
    ],
    references: [
      "documentation/context-ai/validation-protocol.md",
      "documentation/wizard/fase-1-intake.md",
      "documentation/wizard/fase-2-generazione.md",
      "documentation/wizard/fase-3-derivazione-pubblicazione.md",
    ],
    related: ["precedence", "phase-three-guide"],
  },
  {
    id: "use-cases",
    chapterId: "quality",
    title: "Use case e best practice",
    intro:
      "SMART e applicabile a seminari, lezioni, incontri, collaborazioni con enti e imprese mantenendo catena e controlli invariati. Cambia il contesto, non la disciplina metodologica.",
    purpose:
      "Mostrare come adattare il framework a casi reali mantenendo struttura, governance e criteri di qualita indipendentemente dal dominio.",
    workflow: [
      "Seleziona lo scenario piu vicino dal catalogo playbook.",
      "Identifica personalizzazioni di tono, profondita e canali.",
      "Applica personalizzazioni nella cartella master, non direttamente negli output Fase 3.",
      "Valida risultati con gli stessi gate standard delle tre fasi.",
    ],
    highlights: [
      "Scegli tono e profondita in base al pubblico reale.",
      "Evita promessa eccessiva e claim non verificabili.",
      "Mantieni tracciabilita dalla cartella master agli output tool.",
    ],
    qualityGates: [
      "Scenario scelto coerente con obiettivo e stakeholder.",
      "Adattamenti locali compatibili con principi e glossario.",
      "Output finali aderenti a policy e limiti del caso.",
    ],
    antiPatterns: [
      "Copiare playbook senza contestualizzazione minima.",
      "Cambiare promessa in base al canale promozionale.",
      "Usare eccezioni locali per aggirare i gate.",
    ],
    outputs: [
      "Applicazioni reali del framework piu credibili e robuste.",
      "Maggiore riuso di asset e processi tra iniziative diverse.",
      "Riduzione variabilita qualitativa tra team e progetti.",
    ],
    references: [
      "documentation/playbooks/organizzare-seminario.md",
      "documentation/playbooks/organizzare-lezione.md",
      "documentation/playbooks/collaborazione-imprese.md",
    ],
    related: ["smart-standard", "prompt-method"],
  },
];
