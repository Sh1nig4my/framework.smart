# SMART Prompt Hub

Questo file e l'entrypoint unico della cartella `prompts/`.

## Scopo

Fornire un protocollo standard per lavorare con il framework SMART in modalita agentica, mantenendo conformita metodologica, coerenza documentale e qualita degli output.

## Protocollo obbligatorio di invocazione

Quando vuoi usare un agente, fornisci sempre questa istruzione minima:

1. leggi `prompts/README.md`;
2. esegui il prompt specifico richiesto;
3. applica eventuali istruzioni custom aggiuntive fornite dall'utente;
4. rispetta rigorosamente scope e vincoli del prompt selezionato.

Formato consigliato:

```text
Leggi prompts/README.md.
Esegui prompts/<nome-prompt>.md.
Istruzioni custom: <eventuali vincoli o obiettivi extra>.
```

## Regole globali valide per tutti i prompt

- non alterare terminologia canonica SMART;
- mantenere tracciabilita tra decisioni e file modificati;
- esplicitare ipotesi e nodi aperti quando i dati sono incompleti;
- non inventare regole fuori documentazione;
- eseguire verifiche finali coerenti con lo scope;
- non toccare aree vietate dal prompt selezionato.

## Catalogo prompt ufficiali

### Maintenance

- `framework-maintenance.md`
- `app-maintenance.md`

### Alignment

- `wiki-alignment.md`
- `homepage-wizard-alignment.md`

### Evolution

- `framework-status.md`
- `framework-evolution.md`
- `app-evolution.md`

### Workflow

- `workflow-execution.md`

## Mappa scope rapido

- framework-maintenance: solo `documentation/`
- app-maintenance: app + docs annesse fuori `documentation/`
- wiki-alignment: allinea `/wiki` a `documentation/`
- homepage-wizard-alignment: allinea `/` e `/wizard` a `documentation/`
- framework-status: genera/aggiorna `FRAMEWORK-STATUS.md` in root
- framework-evolution: evoluzione solo `documentation/`
- app-evolution: evoluzione app + docs annesse fuori `documentation/`
- workflow-execution: esecuzione operativa Fase 1/2/3 su singolo progetto

## Criterio di conformita finale

Un'esecuzione e conforme quando:

1. rispetta lo scope del prompt;
2. preserva catena SMART (Fase 1 -> Fase 2 -> Fase 3);
3. non introduce conflitti con artefatti canonici;
4. lascia output verificabili e leggibili.
