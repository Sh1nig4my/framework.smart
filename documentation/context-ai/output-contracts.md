# Output Contracts

## Scopo

Stabilire il contratto minimo per output AI in Fase 1, Fase 2 e Fase 3.

## Contratto Fase 1 - `case.json`

Vincoli:

- struttura conforme al case schema;
- soli valori ammessi;
- nessun campo inventato.

Sezioni minime:

1. `case_json`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione_schema`

## Contratto Fase 2 - script master

Vincoli:

- struttura aderente a `wizard/script-master.md`;
- tracciabilita al `case.json`;
- limiti e cautele espliciti.

Sezioni minime:

1. `script_master`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione_coerenza`

## Contratto Fase 3 - derivati

Vincoli:

- origine esplicita da script master validato;
- coerenza con tono, pubblico, promessa e limiti;
- assenza di nuove affermazioni non supportate.

Sezioni minime:

1. `derivati`
2. `fonti_script_master`
3. `limiti_pubblicazione`
4. `esito_validazione_derivati`
