# Cartella Master Validation

## Scopo

Definire i controlli obbligatori per validare lo Step 2 prima dell'handoff a Step 3.

## Input di validazione

- `case.json` validato;
- struttura `cartella-master/` completa;
- contenuti sezione per sezione.

## Checklist strutturale

1. tutte le directory canoniche `00`-`09` sono presenti;
2. `00_index/README.md` e `00_index/manifest.json` esistono;
3. nessuna sezione obbligatoria e vuota;
4. la struttura non e piatta.

## Checklist semantica

1. coerenza tra overview, event structure e sezioni specialistiche;
2. assenza di promesse non supportate;
3. limiti, cautele e policy esplicite;
4. lessico coerente col glossario SMART.

## Checklist tracciabilita

1. ogni sezione critica ha riferimento al `case.json`;
2. assunzioni dichiarate quando i dati non bastano;
3. nodi aperti dichiarati con impatto operativo;
4. nessuna regola implicita introdotta in Step 2.

## Checklist handoff Step 3

1. `09_step_3_handoff/` elenca derivati/tool autorizzati;
2. provider preferences sono dichiarate (oppure default `non specificato`);
3. limiti di pubblicazione sono espliciti;
4. vincoli di tono/pubblico/promessa/brand sono riassunti;
5. gate Step 2 marcato come `approved`.

## Esito gate

Formato minimo:

1. `esito_gate_step_2` (`approved`/`rejected`)
2. `errori_bloccanti`
3. `warning`
4. `azioni_correttive`

## Condizioni di blocco

- assenza di una o piu directory canoniche;
- conflitti sostanziali tra file interni;
- handoff Step 3 incompleto;
- contenuto non tracciabile al caso.
