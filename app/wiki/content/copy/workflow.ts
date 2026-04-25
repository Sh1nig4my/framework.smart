import type { WikiSection } from "../types";

export const workflowSections: WikiSection[] = [
  {
    id: "step-one-guide",
    chapterId: "workflow",
    title: "Guida Step 1 passo-passo",
    intro:
      "Lo Step 1 raccoglie requisiti in formato strutturato per produrre un case JSON validabile e pronto allo Step 2. E lo step che determina la qualita di tutto il ciclo successivo.",
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
      "Confondere schema di step con caso reale.",
      "Mandare in Step 2 un case incompleto solo per rispettare una scadenza.",
    ],
    outputs: [
      "`case.json` pronto per il mapping in Step 2.",
      "Log di assunzioni e nodi aperti con impatto operativo.",
      "Base solida per evitare promesse non supportate a valle.",
    ],
    references: [
      "documentation/wizard/step-1-intake.md",
      "documentation/wizard/case-schema.md",
      "documentation/wizard/case-schema.json",
      "app/create-json-master/page.tsx",
    ],
    related: ["download-guide", "step-two-guide"],
  },
  {
    id: "step-two-guide",
    chapterId: "workflow",
    title: "Guida Step 2 passo-passo",
    intro:
      "Lo Step 2 costruisce una cartella master modulare da cui dipendono tutti gli output successivi. Qui si decide qualita narrativa, confini di promessa e robustezza editoriale.",
    purpose:
      "Convertire il dato strutturato dello Step 1 in una cartella strategico-operativa che possa governare output tool coerenti su canali diversi.",
    workflow: [
      "1) Leggi integralmente `case.json` validato e marca eventuali lacune residue.",
      "2) Mappa ogni blocco del caso sulle directory e sui file canonici della cartella master.",
      "3) Compila sezioni core e specialistiche in modo modulare, includendo limiti, cautele e assunzioni.",
      "4) Verifica coerenza narrativa, tono, policy e aderenza al pubblico target.",
      "5) Esegui gate Step 2 e prepara handoff con evidenze tracciabili per Step 3.",
    ],
    highlights: [
      "Mappa `case.json` sulla struttura canonica della cartella master.",
      "Esplicita assunzioni, nodi aperti, limiti e cautele.",
      "Supera gate Step 2 prima di ogni derivazione.",
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
      "Cartella master pronta per esecuzioni multi-canale in Step 3.",
      "Registro chiaro di assunzioni e nodi aperti.",
      "Riduzione degli errori semantici in Step 3.",
    ],
    references: [
      "documentation/wizard/step-2-generazione.md",
      "documentation/wizard/cartella-master-template.md",
      "documentation/wizard/cartella-master-schema.md",
      "documentation/wizard/cartella-master-validation.md",
    ],
    related: ["step-three-guide", "quality-gates"],
  },
  {
    id: "step-three-guide",
    chapterId: "workflow",
    title: "Guida Step 3 passo-passo",
    intro:
      "Lo Step 3 esegue tool operativi e prepara output pubblicabili mantenendo coerenza piena con cartella master validata. E lo step in cui forma e canale cambiano, ma il significato deve restare stabile.",
    purpose:
      "Produrre output finali efficaci per ciascun canale, preservando contenuto, tono, limiti, vincoli brand e promessa definiti nello step strategico.",
    workflow: [
      "1) Leggi handoff Step 3 e seleziona tool richiesti, scope e vincoli.",
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
      "documentation/wizard/step-3-derivazione-pubblicazione.md",
      "documentation/context-ai/output-contracts.md",
      "documentation/context-ai/validation-protocol.md",
    ],
    related: ["quality-gates", "use-cases"],
  },
];
