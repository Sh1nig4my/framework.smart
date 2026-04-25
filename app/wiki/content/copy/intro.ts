import type { WikiSection } from "../types";

export const introSections: WikiSection[] = [
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
      "Normalizza il bisogno in artefatti standard (Step 1 e Step 2).",
      "Esegui output tool Step 3 solo da fonti validate, con gate obbligatori.",
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
      "Ogni rilascio deve rispettare il lessico del glossario e la catena Step 1 -> Step 2 -> Step 3.",
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
    related: ["smart-standard", "step-map"],
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
      "Una variante locale e accettabile solo se non rompe la catena degli step.",
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
];
