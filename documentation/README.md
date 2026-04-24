# Documentation SMART

Questa cartella e la source of truth documentale del framework SMART.

Entrypoint di progetto: `../README.md`.

## Obiettivo

Definire in modo chiaro e verificabile:

- principi e governance del framework;
- architettura metodologica e workflow;
- regole operative per persone e agenti AI;
- procedure di fase e derivazione controllata.

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
Fase 1: case-schema.json -> case.json
Fase 2: case.json -> cartella-master/
Fase 3: cartella-master validata -> derivati/materiali pubblicabili
```

## Artefatti canonici

- `wizard/case-schema.json` (source of truth Fase 1)
- `wizard/cartella-master-template.md` + `wizard/cartella-master-schema.md` (source of truth Fase 2)
- `wizard/fase-3-derivazione-pubblicazione.md` (procedura canonica Fase 3)

## Protocollo prompt hub (allineamento operativo)

Per operazioni agentiche, il riferimento e `prompts/README.md` con indice A-H.

Regole per categoria:

- Alignment e Evolution: possono aggiornare anche `documentation/` quando necessario per coerenza canonica.
- Maintenance e Workflow: non possono modificare `documentation/` in nessun caso.

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
2. mantiene integra la catena Fase 1 -> Fase 2 -> Fase 3;
3. usa terminologia coerente con `framework/glossario.md`;
4. resta leggibile e operativa per umani e agenti.
