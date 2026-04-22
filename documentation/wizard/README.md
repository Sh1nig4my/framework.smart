# Wizard SMART

## Scopo

`wizard/` e il nucleo operativo del framework SMART. Definisce procedure, regole e criteri di qualita per completare in autonomia l'intero ciclo documentale: dalla raccolta requisiti fino alla derivazione dei materiali.

## Catena operativa canonica

```text
case-schema.json
-> compilazione guidata
-> case.json
-> generazione Fase 2
-> script-master.md
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

## Riferimenti di onboarding

Per avvio guidato usare:

1. `README.md`
2. `HOW_TO.md`
3. `wizard/case-schema.md`
4. `wizard/script-master-schema.md`
