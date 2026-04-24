# Process Overview

## Scopo

Definire il processo SMART in forma compatta, con step, gate e precedenze ufficiali.

## Catena canonica

```text
Step 1: case-schema.json -> case.json
Step 2: case.json -> cartella-master/
Step 3: cartella-master validata -> output tool (prompt/materiali) pubblicabili
```

## Lettura del processo

1. **Step 1 - Intake strutturato**
   - usa `wizard/case-schema.json` come schema vincolante;
   - produce un `case.json` completo e validabile.
2. **Step 2 - Cartella master**
   - usa il `case.json` come sorgente primaria;
   - produce `cartella-master/` completa, con assunzioni e nodi aperti.
3. **Step 3 - Derivazione e pubblicazione**
    - usa solo cartella master validata;
    - esegue tool standardizzati con modalita provider-aware;
    - produce output coerenti (prompt provider-specific o materiali finali).

## Gate minimi obbligatori

1. gate Step 1: validazione `case.json`;
2. gate Step 2: validazione cartella master;
3. gate Step 3 pre-pubblicazione: validazione derivati.

## Regole di precedenza in conflitto

1. `wizard/case-schema.json` (struttura Step 1)
2. `case.json` (contenuto caso concreto)
3. `wizard/cartella-master-template.md` + `wizard/cartella-master-schema.md` (struttura Step 2)
4. `framework/` + `manifesto/` (principi e lessico)
5. `playbooks/` (adattamento applicativo)

## Condizione di conformita

Un progetto SMART e conforme quando la sequenza Step 1 -> Step 2 -> Step 3 resta tracciabile, senza salti, senza fonti alternative non canoniche e senza promesse fuori cartella master.
