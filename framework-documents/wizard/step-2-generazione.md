# Step 2 - Generazione della cartella master

## Scopo

Trasformare `case.json` in `cartella-master/` completa, coerente, modulare e pronta all'handoff verso Step 3.

## Input

- `case.json` validato (gate Step 1 superato)
- `wizard/cartella-master-template.md`
- `wizard/cartella-master-schema.md`
- `wizard/cartella-master-validation.md`

## Output

- `cartella-master/` completa secondo struttura canonica
- assunzioni dichiarate e tracciate nei file di sezione
- nodi aperti con impatto operativo
- handoff Step 3 compilato con richieste tool/provider

## Regola centrale

Lo Step 2 non produce un singolo documento: produce una cartella strutturata in sezioni indipendenti, leggibili e generabili anche in task separati.

## Procedura modulare

1. leggere integralmente `case.json`;
2. inizializzare la struttura canonica di `cartella-master/`;
3. compilare `00_index/` con mappa, stato e ordine di lettura;
4. generare sezioni core (`01_overview/`, `02_event_structure/`) con tracciabilita al caso;
5. generare sezioni specialistiche (`03_daily_events/`, `04_multi_day_events/`, `05_collections/`, `06_seminars/`, `07_content_types/`) in modo modulare;
6. produrre i file per agenti in `08_agent_ready_files/`;
7. completare handoff in `09_step_3_handoff/` includendo tool richiesti, provider e vincoli brand;
8. validare la cartella con `wizard/cartella-master-validation.md`.

## Gate Step 2

Il passaggio a Step 3 e consentito solo se:

1. la cartella contiene tutte le directory canoniche obbligatorie;
2. ogni file obbligatorio e compilato in forma operativa;
3. ogni sezione e tracciabile al `case.json` o ad assunzioni esplicite;
4. non esistono contraddizioni tra file della cartella;
5. `09_step_3_handoff/` autorizza in modo esplicito la derivazione e specifica i metadati minimi Step 3.

## Errori da bloccare

- cartella piatta senza architettura di sezione;
- compilazione monolitica non modulare;
- file generici senza valore operativo;
- omissione limiti/cautele nelle sezioni critiche;
- contraddizioni col `case.json` o tra file interni;
- avvio derivazione senza gate Step 2.
