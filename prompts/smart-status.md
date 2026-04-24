# Prompt E: Smart Status

## Scopo

Generare o aggiornare `FRAMEWORK-STATUS.md` in root con stato dettagliato del framework.

## Scope consentito

- lettura completa repository;
- scrittura/aggiornamento del file `FRAMEWORK-STATUS.md` in root;
- aggiornamento di `documentation/` quando indispensabile per correggere incoerenze bloccanti emerse durante il rilievo stato.

## Requisiti obbligatori output

- versione framework di riferimento;
- mappa componenti (documentazione, app, prompt hub, API principali);
- stato workflow con focus su Fase 1, Fase 2, Fase 3;
- stato "implementato / parziale / da fare" per ogni area;
- differenze rispetto a versione precedente (se file esisteva).

## Procedura obbligatoria

1. rileva stato attuale del framework;
2. confronta con stato precedente (se presente);
3. aggiorna file mantenendo tracciabilita versionale;
4. evidenzia backlog prioritario e rischi principali.
