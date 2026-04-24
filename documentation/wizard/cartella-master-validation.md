# Cartella Master Validation

## Scopo

Definire i controlli obbligatori per validare la Fase 2 prima dell'handoff a Fase 3.

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
4. nessuna regola implicita introdotta in Fase 2.

## Checklist handoff Fase 3

1. `09_phase_3_handoff/` elenca derivati autorizzati;
2. limiti di pubblicazione sono espliciti;
3. vincoli di tono/pubblico/promessa sono riassunti;
4. gate Fase 2 marcato come `approved`.

## Esito gate

Formato minimo:

1. `esito_gate_fase_2` (`approved`/`rejected`)
2. `errori_bloccanti`
3. `warning`
4. `azioni_correttive`

## Condizioni di blocco

- assenza di una o piu directory canoniche;
- conflitti sostanziali tra file interni;
- handoff Fase 3 incompleto;
- contenuto non tracciabile al caso.
