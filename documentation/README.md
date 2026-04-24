# Documentation SMART

Questa cartella e la source of truth documentale del framework SMART.

Entrypoint di progetto: `../README.md`.

## Obiettivo

Definire in modo chiaro e verificabile:

- principi e governance del framework;
- architettura metodologica e workflow;
- regole operative per persone e agenti AI;
- procedure di step e derivazione controllata.

## Mappa principale

```text
documentation/
|- manifesto/
|- framework/
|- wizard/
|- playbooks/
`- context-ai/
```

## Workflow canonico SMART

```text
Step 1: case-schema.json -> case.json
Step 2: case.json -> cartella-master/
Step 3: cartella-master validata -> output tool (prompt/materiali) pubblicabili
```

## Artefatti canonici

- `wizard/case-schema.json` (source of truth Step 1)
- `wizard/cartella-master-template.md` + `wizard/cartella-master-schema.md` (source of truth Step 2)
- `wizard/step-3-derivazione-pubblicazione.md` (procedura canonica Step 3)

## Protocollo prompt hub (allineamento operativo)

Per operazioni agentiche, il riferimento e `prompts/README.md` con indice A-D.

Regole per categoria:

- Alignment e Framework Evolution: possono aggiornare anche `documentation/` quando necessario per coerenza canonica.
- Maintenance e Workflow: possono aggiornare `documentation/` quando necessario al riallineamento complessivo.

## Ordine di lettura consigliato

1. `../README.md`
2. `../HOW_TO.md`
3. `framework/process-overview.md`
4. `wizard/README.md`
5. `context-ai/README.md`

## Privacy e dati (coerenza con app)

Stato corrente:

- database attivo sul flusso operativo `/download`;
- salvataggio richiesta e `case.json` per manutenzione e miglioramento framework;
- blocco duplicati su stessa email + stesso JSON;
- nessun analytics o profilazione;
- solo storage tecnico locale per consenso cookie necessari.

## Criterio di qualita documentale

La documentazione e conforme quando:

1. non contiene conflitti tra file canonici;
2. mantiene integra la catena Step 1 -> Step 2 -> Step 3;
3. usa terminologia coerente con `framework/glossario.md`;
4. resta leggibile e operativa per umani e agenti.
