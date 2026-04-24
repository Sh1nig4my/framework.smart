# Prompt D: Workflow Execution

## Scopo

Eseguire il workflow SMART su un singolo progetto, coprendo Step 1 e/o Step 2 e/o Step 3 con validazione ad ogni passaggio.

## Input accettati

- requisiti testuali del progetto;
- `case.json` gia disponibile oppure da costruire;
- cartella master gia disponibile oppure da generare;
- istruzioni custom dell'utente.

## Regola chiave

Non passare allo step successivo senza validazione dello step corrente, anche quando l'input viene fornito gia compilato.

## Scope vietato

- non modificare file in `documentation/` in nessun caso durante questo prompt.

## Procedura per step

1. **Step 1**: raccogli/valida requisiti contro schema canonico e produci o correggi `case.json`.
2. **Step 2**: genera o valida cartella master dal `case.json`.
3. **Step 3**: esegue o revisiona output tool (prompt/materiali) dalla cartella master validata, dichiarando `tool_usato` e `provider_target` (default `non specificato`).

## Funzioni obbligatorie

- revisione puntuale di singoli documenti di uno step gia eseguito;
- revisione di gruppi di documenti senza perdere tracciabilita;
- controllo coerenza tra promesse, contenuti e limiti.
- per task Step 3, uso esplicito del contratto output canonico (`tool_usato`, `provider_target`, `prompt_o_output`, `fonti_cartella_master`, `vincoli_brand_policy`, `esito_validazione_derivati`).

## Tracciabilita e interrompibilita obbligatorie

- il workflow puo essere interrotto e ripreso senza perdita di stato;
- ogni progetto/evento deve avere una cartella dedicata in `workflow-output/`.

Struttura minima:

```text
workflow-output/
`- <project-id>/
   |- status/
   |  |- progress.md
   |  |- latest-changes.md
   |  |- latest-runs.md
   |  |- tools-used.md
   |  `- documentation-state.md
   |- step-1/
   |- step-2/
   `- step-3/
```

In ogni cartella `step-*` salvare:

- documenti generati;
- output richiesti;
- JSON del caso (`case.json`);
- folder master.

## Output atteso

- artefatti step richiesti e validati;
- report di conformita per step;
- elenco nodi aperti e azioni consigliate.
