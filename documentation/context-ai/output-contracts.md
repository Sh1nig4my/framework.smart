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

## Contratto Fase 2 - cartella master

Vincoli:

- struttura aderente a `wizard/cartella-master-template.md`;
- tracciabilita al `case.json`;
- limiti e cautele espliciti.

Sezioni minime:

1. `cartella_master`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione_coerenza`

## Contratto Fase 3 - output tool

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
