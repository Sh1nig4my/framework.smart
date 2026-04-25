import type { WikiSection } from "../types";

export const qualitySections: WikiSection[] = [
  {
    id: "quality-gates",
    chapterId: "quality",
    title: "Gate di qualita",
    intro:
      "I gate sono il meccanismo che garantisce affidabilita tra gli step e blocca output non conformi. Senza gate, il framework perde valore operativo e non e piu auditabile.",
    purpose:
      "Imporre criteri di uscita chiari a ogni step, evitando propagazione di errori semantici o strutturali verso gli output pubblicabili.",
    workflow: [
      "Definisci criteri di superamento prima di iniziare lo step.",
      "Esegui controllo formale su completezza, coerenza e tracciabilita.",
      "Blocca il passaggio se un criterio obbligatorio fallisce.",
      "Registra esito del gate e azioni correttive richieste.",
    ],
    highlights: [
      "Gate Step 1: validazione schema e coerenza caso.",
      "Gate Step 2: validazione cartella master.",
      "Gate Step 3: validazione output tool pre-pubblicazione.",
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
      "Meno errori a cascata tra step.",
      "Maggiore affidabilita nei rilasci finali.",
      "Processo di revisione piu oggettivo e ripetibile.",
    ],
    references: [
      "documentation/context-ai/validation-protocol.md",
      "documentation/wizard/step-1-intake.md",
      "documentation/wizard/step-2-generazione.md",
      "documentation/wizard/step-3-derivazione-pubblicazione.md",
    ],
    related: ["precedence", "step-three-guide"],
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
      "Applica personalizzazioni nella cartella master, non direttamente negli output Step 3.",
      "Valida risultati con gli stessi gate standard dei tre step.",
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
