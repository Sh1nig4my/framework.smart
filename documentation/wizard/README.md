# Wizard SMART

## Scopo

`wizard/` e il nucleo operativo del framework SMART: definisce procedure ufficiali, gate e criteri di conformita per Fase 1, Fase 2 e Fase 3.

## Catena canonica

```text
Fase 1: case-schema.json -> case.json
Fase 2: case.json -> script-master.md
Fase 3: script-master validato -> derivati e materiali pubblicabili
```

## Documenti principali

- `case-schema.json`: schema vincolante Fase 1.
- `case-schema.md`: guida interpretativa dello schema.
- `case-template.json`: template compilazione.
- `case-example.json`: esempio valido.
- `fase-1-intake.md`: procedura operativa Fase 1.
- `fase-2-generazione.md`: procedura operativa Fase 2.
- `fase-3-derivazione-pubblicazione.md`: procedura operativa Fase 3.
- `script-master.md`: template canonico documento madre.
- `script-master-schema.md`: quality rules struttura script master.
- `decision-rules.md`: precedenze e regole di conflitto.
- `scenari.md`: scenari applicativi ricorrenti.

## Distinzioni obbligatorie

- lo schema non e il caso;
- il caso non e il documento madre;
- il documento madre non e il derivato;
- ogni fase ha gate prima della successiva.

## Criterio di successo wizard

Il wizard e corretto quando consente di:

1. produrre un `case.json` robusto;
2. produrre uno script master pienamente utilizzabile;
3. produrre derivati pubblicabili senza conflitti con il documento madre.

## Guardrail no-code

- nessun salto di fase;
- nessuna invenzione fuori schema;
- nessun derivato senza validazione Fase 2;
- nessuna pubblicazione senza gate Fase 3.
