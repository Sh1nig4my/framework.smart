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

In alternativa puoi indicare il prompt per lettera (A-H) usando l'indice rapido.

## Regole globali valide per tutti i prompt

- non alterare terminologia canonica SMART;
- mantenere tracciabilita tra decisioni e file modificati;
- esplicitare ipotesi e nodi aperti quando i dati sono incompleti;
- non inventare regole fuori documentazione;
- eseguire verifiche finali coerenti con lo scope;
- non toccare aree vietate dal prompt selezionato.

## Regole globali per categoria

- Alignment: puo modificare anche `documentation/` quando serve per mantenere allineamento canonico.
- Evolution: puo modificare anche `documentation/` quando serve per mantenere coerenza evolutiva del framework.
- Maintenance: non puo modificare `documentation/` in nessun caso.
- Workflow: non puo modificare `documentation/` in nessun caso.

## Catalogo prompt ufficiali

Indice rapido (A-H):

- A - `app-maintenance.md` (Maintenance)
- B - `app-evolution.md` (Evolution)
- C - `framework-evolution.md` (Evolution)
- D - `framework-maintenance.md` (Maintenance)
- E - `smart-status.md` (Evolution)
- F - `homepage-wizard-alignment.md` (Alignment)
- G - `wiki-alignment.md` (Alignment)
- H - `workflow-execution.md` (Workflow)

Ordine alfabetico file:

- `app-maintenance.md`
- `app-evolution.md`
- `framework-evolution.md`
- `framework-maintenance.md`
- `homepage-wizard-alignment.md`
- `smart-status.md`
- `wiki-alignment.md`
- `workflow-execution.md`

## Mappa scope rapido

- A `app-maintenance`: manutenzione app + root docs operative, senza modifiche in `documentation/`
- B `app-evolution`: evoluzione app con possibilita di aggiornare `documentation/` se necessario
- C `framework-evolution`: evoluzione framework docs-first su `documentation/`; lato app solo dopo, se necessario, e previa richiesta informazioni
- D `framework-maintenance`: manutenzione framework operativo fuori `documentation/`
- E `smart-status`: genera/aggiorna `FRAMEWORK-STATUS.md` (puo aggiornare `documentation/` se indispensabile)
- F `homepage-wizard-alignment`: allinea `/` e `/wizard`, con possibilita di riallineare `documentation/` se necessario
- G `wiki-alignment`: allinea `/wiki` e puo aggiornare `documentation/` se necessario
- H `workflow-execution`: esecuzione operativa Fase 1/2/3 senza modifiche a `documentation/`

## Criterio di conformita finale

Un'esecuzione e conforme quando:

1. rispetta lo scope del prompt;
2. preserva catena SMART (Fase 1 -> Fase 2 -> Fase 3);
3. non introduce conflitti con artefatti canonici;
4. lascia output verificabili e leggibili.
