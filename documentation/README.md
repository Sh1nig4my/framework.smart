# Documentation SMART

Questa cartella contiene la documentazione estesa del framework SMART.

Entrypoint ufficiale del progetto: `../README.md`.

## Ruolo di questa cartella

- dettaglia metodo, manifesto, wizard e contesto AI;
- supporta contribuzione e manutenzione del framework;
- mantiene la source of truth documentale per processi e artefatti.

## Mappa principale

```text
documentation/
|- manifesto/
|- framework/
|- wizard/
|- playbooks/
`- context-ai/
```

## Percorso consigliato

1. `../README.md`
2. `../HOW_TO.md`
3. `wizard/README.md`
4. `wizard/case-schema.md`
5. `wizard/script-master-schema.md`
6. `context-ai/README.md`

## Artefatti canonici

- `wizard/case-schema.json` (source of truth Fase 1)
- `wizard/script-master.md` (source of truth Fase 2)

## Privacy e dati (coerenza con app)

Stato corrente del progetto:

- database attivo per il flusso operativo di compilazione Fase 1 (`/download`);
- salvataggio richiesta e case JSON per finalita tecniche di manutenzione e miglioramento;
- blocco duplicati su combinazione stessa email + stesso JSON;
- nessun analytics o profilazione;
- solo storage tecnico locale per consenso cookie necessari.

Evoluzione prevista:

- eventuale estensione del trattamento solo con aggiornamento preventivo di policy e consenso;
- nessuna vendita dei dati.

## Versione corrente

`v1.0.0`
