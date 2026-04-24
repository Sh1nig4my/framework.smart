# Output Contracts

## Scopo

Stabilire il contratto minimo per output AI in Step 1, Step 2 e Step 3.

## Contratto Step 1 - `case.json`

Vincoli:

- struttura conforme al case schema;
- soli valori ammessi;
- nessun campo inventato.

Sezioni minime:

1. `case_json`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione_schema`

## Contratto Step 2 - cartella master

Vincoli:

- struttura aderente a `wizard/cartella-master-template.md`;
- tracciabilita al `case.json`;
- limiti e cautele espliciti.

Sezioni minime:

1. `cartella_master`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione_coerenza`

## Contratto Step 3 - output tool

Vincoli:

- origine esplicita da cartella master validata;
- coerenza con tono, pubblico, promessa, limiti e vincoli brand;
- dichiarazione obbligatoria di tool usato e provider target;
- assenza di nuove affermazioni non supportate.

Sezioni minime:

1. `tool_usato`
2. `provider_target`
3. `prompt_o_output`
4. `fonti_cartella_master`
5. `vincoli_brand_policy`
6. `esito_validazione_derivati`

## Struttura output obbligatoria `workflow-output/`

Ogni esecuzione operativa deve salvare artefatti in:

```text
workflow-output/<project-id>/
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

Regole:

- usare sempre naming `step`;
- mantenere stato separato per progetto/evento;
- salvare in ogni cartella `step-*` documenti generati, output richiesti, `case.json` e folder master.
