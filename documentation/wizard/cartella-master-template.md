# Cartella Master Template

## Scopo

Definire la struttura canonica minima della cartella master prodotta in Fase 2.

## Regola strutturale

La cartella master non puo essere piatta. Deve usare sezioni ordinate per dominio logico e handoff operativo.

## Struttura canonica

```text
cartella-master/
|- 00_index/
|  |- README.md
|  `- manifest.json
|- 01_overview/
|- 02_event_structure/
|- 03_daily_events/
|- 04_multi_day_events/
|- 05_collections/
|- 06_seminars/
|- 07_content_types/
|- 08_agent_ready_files/
`- 09_phase_3_handoff/
```

## Requisiti minimi per directory

### `00_index/`

- `README.md` con mappa sezione -> finalita;
- `manifest.json` con elenco file previsti, stato e completezza.

### `01_overview/`

- identita iniziativa;
- sintesi strategica;
- profilo pubblico;
- promessa e perimetro.

### `02_event_structure/`

- agenda generale;
- logica narrativa;
- linee di conduzione;
- uso responsabile AI e cautele.

### `03_daily_events/`

- piani per eventi a giornata singola;
- blocchi, tempi, output e transizioni.

### `04_multi_day_events/`

- piani multi-giorno;
- dipendenze tra giornate;
- continuita narrativa e didattica.

### `05_collections/`

- collezioni di contenuti o sessioni;
- criteri di ordinamento e riuso;
- relazioni tra asset.

### `06_seminars/`

- regole specifiche per seminari;
- adattamenti su tono, profondita e ritmo;
- varianti coerenti col pubblico.

### `07_content_types/`

- tipologie divulgative interne allo stesso evento;
- istruzioni per adattamento formati senza cambiare significato.

### `08_agent_ready_files/`

- file sintetici machine-friendly;
- punti chiave, limiti e blocchi;
- formato orientato a task successivi.

### `09_phase_3_handoff/`

- derivati/tool autorizzati;
- provider preferences (preset/custom/default `non specificato`);
- vincoli brand (palette, logo SMART, stile);
- scope filters (giorni/parti/blocchi);
- limiti di pubblicazione;
- checklist handoff Fase 3.

## Regola di naming

- usare prefissi numerici per preservare ordine logico;
- usare nomi cartelle stabili e in minuscolo;
- evitare file monolitici che duplicano tutta la cartella.

## Riferimenti

- `wizard/fase-2-generazione.md`
- `wizard/cartella-master-schema.md`
- `wizard/cartella-master-validation.md`
