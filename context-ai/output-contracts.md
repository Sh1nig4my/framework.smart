# Output Contracts

## Scopo

Definire il contratto minimo atteso per gli output AI nelle diverse fasi del framework.

## Contratto 1 - `case.json`

Vincoli:

- struttura coerente al case schema;
- soli valori ammessi;
- nessun campo inventato.

Sezioni di risposta richieste in modalita controllata:

1. `case_json`;
2. `assunzioni`;
3. `nodi_aperti`;
4. `esito_validazione_schema`.

## Contratto 2 - script master

Vincoli:

- struttura aderente a `wizard/script-master.md`;
- tracciabilita al `case.json`;
- presenza di limiti e cautele.

Sezioni di risposta richieste in modalita controllata:

1. `script_master`;
2. `assunzioni`;
3. `nodi_aperti`;
4. `esito_validazione_coerenza`.

## Contratto 3 - derivati

Vincoli:

- origine esplicita dallo script master;
- coerenza con tono, pubblico, perimetro e promessa;
- assenza di nuove affermazioni non supportate.

Sezioni di risposta richieste in modalita controllata:

1. `derivati`;
2. `fonti_script_master`;
3. `limiti_pubblicazione`;
4. `esito_validazione_derivati`.
