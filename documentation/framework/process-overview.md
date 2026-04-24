# Process Overview

## Scopo

Definire il processo SMART in forma compatta, con fasi, gate e precedenze ufficiali.

## Catena canonica

```text
Fase 1: case-schema.json -> case.json
Fase 2: case.json -> cartella-master/
Fase 3: cartella-master validata -> output tool (prompt/materiali) pubblicabili
```

## Lettura del processo

1. **Fase 1 - Intake strutturato**
   - usa `wizard/case-schema.json` come schema vincolante;
   - produce un `case.json` completo e validabile.
2. **Fase 2 - Cartella master**
   - usa il `case.json` come sorgente primaria;
   - produce `cartella-master/` completa, con assunzioni e nodi aperti.
3. **Fase 3 - Derivazione e pubblicazione**
    - usa solo cartella master validata;
    - esegue tool standardizzati con modalita provider-aware;
    - produce output coerenti (prompt provider-specific o materiali finali).

## Gate minimi obbligatori

1. gate Fase 1: validazione `case.json`;
2. gate Fase 2: validazione cartella master;
3. gate Fase 3 pre-pubblicazione: validazione derivati.

## Regole di precedenza in conflitto

1. `wizard/case-schema.json` (struttura Fase 1)
2. `case.json` (contenuto caso concreto)
3. `wizard/cartella-master-template.md` + `wizard/cartella-master-schema.md` (struttura Fase 2)
4. `framework/` + `manifesto/` (principi e lessico)
5. `playbooks/` (adattamento applicativo)

## Condizione di conformita

Un progetto SMART e conforme quando la sequenza Fase 1 -> Fase 2 -> Fase 3 resta tracciabile, senza salti, senza fonti alternative non canoniche e senza promesse fuori cartella master.
