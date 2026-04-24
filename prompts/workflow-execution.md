# Prompt H: Workflow Execution

## Scopo

Eseguire il workflow SMART su un singolo progetto, coprendo Fase 1 e/o Fase 2 e/o Fase 3 con validazione ad ogni passaggio.

## Input accettati

- requisiti testuali del progetto;
- `case.json` gia disponibile oppure da costruire;
- script master gia disponibile oppure da generare;
- istruzioni custom dell'utente.

## Regola chiave

Non passare alla fase successiva senza validazione della fase corrente, anche quando l'input viene fornito gia compilato.

## Scope vietato

- non modificare file in `documentation/` in nessun caso durante questo prompt.

## Procedura per fasi

1. **Fase 1**: raccogli/valida requisiti contro schema canonico e produci o correggi `case.json`.
2. **Fase 2**: genera o valida script master dal `case.json`.
3. **Fase 3**: genera o revisiona derivati/materiali pubblicabili dal documento madre validato.

## Funzioni obbligatorie

- revisione puntuale di singoli documenti di una fase gia eseguita;
- revisione di gruppi di documenti senza perdere tracciabilita;
- controllo coerenza tra promesse, contenuti e limiti.

## Output atteso

- artefatti fase richiesti e validati;
- report di conformita per fase;
- elenco nodi aperti e azioni consigliate.
