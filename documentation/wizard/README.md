# Wizard SMART

## Scopo

`wizard/` e il nucleo operativo del framework SMART: definisce procedure ufficiali, gate e criteri di conformita per Fase 1, Fase 2 e Fase 3.

## Catena canonica

```text
Fase 1: case-schema.json -> case.json
Fase 2: case.json -> cartella-master/
Fase 3: cartella-master validata -> derivati e materiali pubblicabili
```

## Documenti principali

- `case-schema.json`: schema vincolante Fase 1.
- `case-schema.md`: guida interpretativa dello schema.
- `case-template.json`: template compilazione.
- `case-example.json`: esempio valido.
- `fase-1-intake.md`: procedura operativa Fase 1.
- `fase-2-generazione.md`: procedura operativa Fase 2.
- `cartella-master-template.md`: struttura canonica della cartella master.
- `cartella-master-schema.md`: regole qualitative e semantiche della cartella master.
- `cartella-master-validation.md`: checklist e gate di validazione Fase 2.
- `fase-3-derivazione-pubblicazione.md`: procedura operativa Fase 3.
- `decision-rules.md`: precedenze e regole di conflitto.
- `scenari.md`: scenari applicativi ricorrenti.

## Distinzioni obbligatorie

- lo schema non e il caso;
- il caso non e la cartella master;
- la cartella master non e il derivato;
- ogni fase ha gate prima della successiva.

## Criterio di successo wizard

Il wizard e corretto quando consente di:

1. produrre un `case.json` robusto;
2. produrre una cartella master pienamente utilizzabile;
3. produrre derivati pubblicabili senza conflitti con la cartella master.

## Guardrail no-code

- nessun salto di fase;
- nessuna invenzione fuori schema;
- nessun derivato senza validazione Fase 2;
- nessuna pubblicazione senza gate Fase 3.
