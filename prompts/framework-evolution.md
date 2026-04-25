# Prompt B: Framework Evolution

## Scopo

Evolvere il framework con approccio docs-first: prima `framework-documents/`, poi propagare automaticamente in app le modifiche rilevanti.

## Scope consentito

- modifica, estensione, refactor e ottimizzazione di file in `framework-documents/`;
- aggiornamento di file collegati fuori `framework-documents/` per mantenere coerenza del framework;
- propagazione automatica su app quando la documentazione cambia.

## Scope vietato

- non introdurre regole in conflitto con artefatti canonici SMART;
- non lasciare disallineamenti tra framework e app dopo aggiornamenti documentali.

## Obiettivi operativi

1. introdurre nuovi tool o regole negli step del workflow (1/2/3);
2. migliorare struttura e leggibilita dei documenti;
3. garantire coerenza metodologica globale;
4. preservare significato e logiche canoniche SMART;
5. mantenere allineata la rappresentazione app del framework.

## Procedura obbligatoria

1. definisci impatto del cambiamento sugli step;
2. pianifica file da aggiornare;
3. implementa prima le modifiche in `framework-documents/` con allineamento incrociato;
4. esegui review obbligatoria dell'app;
5. propaga automaticamente le modifiche nelle pagine coinvolte (`/`, `/workflow`, `/wizard`, `/wiki`, privacy/sicurezza);
6. aggiorna riferimenti, gate e naming (`step`) dove necessario;
7. rilascia riepilogo finale dei cambiamenti.
