# Prompt G: Wiki Alignment

## Scopo

Allineare la pagina `/wiki` dell'app all'ultima versione della documentazione in `documentation/`.

## Scope consentito

- lettura completa `documentation/`;
- aggiornamento di `documentation/` quando necessario per riallineare fonti canoniche e pagina wiki;
- modifica dei file Wiki nell'app (es. `app/wiki/*`, `app/components/*wiki*`).

## Scope vietato

- non introdurre claim wiki non tracciabili ai contenuti canonici aggiornati.

## Procedura obbligatoria

1. estrai tassonomia aggiornata da `documentation/`;
2. identifica gap tra docs e wiki;
3. aggiorna capitoli, sottosezioni, relazioni interne e guida passo-passo;
4. verifica che ogni claim wiki sia tracciabile alla documentazione;
5. valida navigazione interna senza reload.

## Output atteso

- `/wiki` completa, modulare, coerente con documentazione ufficiale;
- struttura pronta ad espansioni future.
