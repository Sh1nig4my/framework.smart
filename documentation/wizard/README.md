# Wizard SMART

## Scopo

`wizard/` e il nucleo operativo del framework SMART: definisce procedure ufficiali, gate e criteri di conformita per Step 1, Step 2 e Step 3.

## Catena canonica

```text
Step 1: case-schema.json -> case.json
Step 2: case.json -> cartella-master/
Step 3: cartella-master validata -> output tool (prompt/materiali) pubblicabili
```

## Documenti principali

- `case-schema.json`: schema vincolante Step 1.
- `case-schema.md`: guida interpretativa dello schema.
- `case-template.json`: template compilazione.
- `case-example.json`: esempio valido.
- `step-1-intake.md`: procedura operativa Step 1.
- `step-2-generazione.md`: procedura operativa Step 2.
- `cartella-master-template.md`: struttura canonica della cartella master.
- `cartella-master-schema.md`: regole qualitative e semantiche della cartella master.
- `cartella-master-validation.md`: checklist e gate di validazione Step 2.
- `step-3-derivazione-pubblicazione.md`: procedura operativa Step 3.
- `decision-rules.md`: precedenze e regole di conflitto.
- `scenari.md`: scenari applicativi ricorrenti.

## Distinzioni obbligatorie

- lo schema non e il caso;
- il caso non e la cartella master;
- la cartella master non e il derivato;
- ogni step ha gate prima del successivo.

## Criterio di successo wizard

Il wizard e corretto quando consente di:

1. produrre un `case.json` robusto;
2. produrre una cartella master pienamente utilizzabile;
3. produrre output Step 3 pubblicabili senza conflitti con la cartella master.

## Guardrail no-code

- nessun salto di step;
- nessuna invenzione fuori schema;
- nessun derivato senza validazione Step 2;
- nessuna pubblicazione senza gate Step 3.

## Link incrociati operativi

- Prompt AI Step 2: `context-ai/prompt-templates/case-json-a-cartella-master.md`
- Prompt AI Step 3: `context-ai/prompt-templates/derivati-da-cartella-master.md`
- Gate pre-derivazione: `context-ai/prompt-templates/gate-pre-derivazione.md`
- Scenari applicativi: `wizard/scenari.md` e `playbooks/`
