# Wizard SMART

## Scopo

`wizard/` e il nucleo operativo del framework SMART. Definisce procedure, regole e criteri di qualita per completare in autonomia il ciclo documentale: dalla raccolta requisiti alla derivazione controllata dei materiali.

## Catena operativa canonica

```text
documentation/wizard/case-schema.json
-> compilazione guidata
-> case.json
-> generazione Fase 2
-> documentation/wizard/script-master.md
-> materiali derivati
```

## Documenti e responsabilita

- `case-schema.json`: schema canonico della Fase 1.
- `case-schema.md`: guida normativa e interpretativa dello schema.
- `case-template.json`: base operativa di compilazione.
- `case-example.json`: esempio di istanza valida.
- `fase-1-intake.md`: procedura completa per produrre `case.json`.
- `fase-2-generazione.md`: procedura completa per produrre lo script master.
- `decision-rules.md`: regole di precedenza e criteri decisionali.
- `scenari.md`: applicazioni ricorrenti del metodo.
- `script-master.md`: template canonico del documento madre.
- `script-master-schema.md`: guida strutturale e criteri di qualita del documento madre.

## Distinzioni obbligatorie

### `case-schema.json`

Definisce il modello della raccolta requisiti. Non e un caso compilato.

### `case-template.json`

Fornisce il contenitore operativo per compilare un caso senza alterare lo schema.

### `case.json`

E l'istanza concreta risultante dalla Fase 1. E l'unico input strutturale della Fase 2.

### `script-master.md`

Definisce la struttura del documento madre da cui derivano tutti i materiali successivi.

## Criterio di successo del wizard

Il wizard e corretto quando un divulgatore puo:

1. produrre un `case.json` completo e coerente;
2. generare uno script master utilizzabile senza regole implicite;
3. derivare materiali allineati senza contraddire il caso.

## Guardrail no-code e sicurezza

Il wizard rende possibile una progettazione no-code robusta solo se restano attivi questi vincoli:

- nessun salto di fase;
- nessuna invenzione fuori schema;
- nessun derivato senza script master validato;
- nessuna delega del giudizio professionale all'AI.

## Riferimenti di onboarding

Per avvio guidato usare:

1. [README root](../../README.md)
2. [Documentation README](../README.md)
3. [HOW_TO](../../HOW_TO.md)
4. [Case schema guide](case-schema.md)
5. [Script master schema](script-master-schema.md)
