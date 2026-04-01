# Process Overview

## Scopo

Fornire una vista formale del processo SMART, con ordine di esecuzione e regole di precedenza tra artefatti.

## Sequenza essenziale

```text
case-schema.json
-> compilazione guidata
-> case.json
-> interpretazione Fase 2
-> script-master.md
-> materiali derivati
```

## Lettura del processo

### 1. Schema del caso

`wizard/case-schema.json` definisce cosa puo essere chiesto e come puo essere selezionato.

### 2. Caso concreto

Il risultato dell'intake e un `case.json` che raccoglie solo le scelte effettive del caso.

### 3. Documento madre

Il `case.json` viene trasformato nello script master, cioe nel documento principale dell'iniziativa.

### 4. Derivazione

Slide, naming, pagina evento, email, checklist e altri asset si derivano dallo script master, non direttamente dal rumore iniziale.

## Gate di processo

Il processo include tre gate minimi:

1. validazione `case.json` prima della Fase 2;
2. validazione script master prima della derivazione;
3. validazione derivati prima della pubblicazione.

## Regola di precedenza

Se due documenti sono in conflitto, prevalgono in questo ordine:

1. `wizard/case-schema.json` per la Fase 1;
2. `wizard/script-master.md` per la Fase 2;
3. `framework/` e `manifesto/` per principi, metodo e termini;
4. `playbooks/` come applicazioni pratiche;
5. `archive/legacy/` solo come storico.

## Condizione di conformita

Un progetto SMART e conforme quando la catena Fase 1 -> Fase 2 -> derivazione resta integra e tracciabile senza salti o sostituzioni.
