# Prompt Library (Scaffold)

Questa cartella e predisposta per ospitare prompt pronti all'uso per evoluzione, manutenzione e governance del progetto SMART.

## Obiettivo

Fornire prompt riusabili per:

- nuove feature web;
- refactor strutturali;
- pulizia codice e miglioramenti quality;
- sincronizzazione documentazione <-> sito;
- aggiornamenti policy privacy/dati;
- manutenzione ordinaria e release.

## Convenzione file

Usa naming coerente:

`<categoria>-<azione>-<contesto>.md`

Esempi:

- `feature-create-page-wizard.md`
- `refactor-layout-shared-components.md`
- `docs-sync-manifesto-to-web.md`
- `maintenance-lint-build-regression.md`

## Categorie previste

- `feature/` nuove funzionalita;
- `refactor/` riorganizzazione codice o architettura;
- `docs/` aggiornamento e propagazione documentale;
- `maintenance/` pulizia, upgrade, quality gate;
- `release/` checklist versione e changelog.

## Template minimo consigliato

Ogni prompt dovrebbe includere:

1. obiettivo operativo;
2. contesto da leggere (file/path);
3. vincoli da rispettare;
4. output atteso;
5. verifiche finali (`lint`, `build`, controllo link, coerenza docs/app).

## Stato

Scaffold iniziale pronto per estensioni future.
