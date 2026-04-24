# Prompt B: App Evolution

## Scopo

Evolvere app e documentazione di progetto, inclusa `documentation/` quando necessario.

## Scope consentito

- `app/`, `server/`, `shared/`, file root di supporto;
- `documentation/` quando serve per mantenere coerenza con l'evoluzione applicativa;
- UX/UI, routing, componenti, API, qualita tecnica.

## Scope vietato

- non introdurre cambiamenti canonici non tracciati tra app e documentazione.

## Obiettivi operativi

1. implementare nuove funzionalita;
2. ristrutturare e ottimizzare codice esistente;
3. mantenere compatibilita con regole SMART;
4. preservare affidabilita dei flussi critici.

## Procedura obbligatoria

1. analisi stato attuale;
2. piano implementativo incrementale;
3. modifica codice con attenzione a backward compatibility;
4. validazione tecnica (lint/build/test disponibili);
5. aggiornamento documenti annessi e, se necessario, aggiornamento coerente di `documentation/`.
