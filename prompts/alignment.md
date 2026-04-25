# Prompt A: Alignment

## Scopo

Riallineare framework e app alla documentazione ufficiale, mantenendo coerenza tra versione mostrata in app e versione reale del framework.

## Scope consentito

- lettura completa repository;
- aggiornamento `framework-documents/` quando necessario per correggere fonti canoniche;
- aggiornamento app per propagazione automatica dei cambiamenti documentali.

## Controlli obbligatori

1. confrontare versione documentazione mostrata in app con versione framework;
2. verificare che framework sia trattato come core (`framework-documents/`) e app come supporto;
3. allineare contenuti, link, riferimenti e nomenclatura (`step`) su framework e app.

## Propagazione app obbligatoria

Aggiornare sempre, quando impattate:

- home (`src/app/page.tsx`)
- workflow (`src/app/workflow/page.tsx`)
- wizard (`src/app/wizard/page.tsx`)
- wiki (`src/app/wiki/*`)
- privacy e sicurezza (`src/app/privacy/page.tsx`, `src/app/sicurezza-dati/page.tsx`)

## Output atteso

- framework e app allineati alla stessa baseline documentale;
- nessun riferimento obsoleto;
- tracciabilita esplicita dei file aggiornati.
