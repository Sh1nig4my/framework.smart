# Prompt A: Alignment

## Scopo

Riallineare framework e app alla documentazione ufficiale, mantenendo coerenza tra versione mostrata in app e versione reale del framework.

## Scope consentito

- lettura completa repository;
- aggiornamento `documentation/` quando necessario per correggere fonti canoniche;
- aggiornamento app per propagazione automatica dei cambiamenti documentali.

## Controlli obbligatori

1. confrontare versione documentazione mostrata in app con versione framework;
2. verificare che framework sia trattato come core (`documentation/`) e app come supporto;
3. allineare contenuti, link, riferimenti e nomenclatura (`step`) su framework e app.

## Propagazione app obbligatoria

Aggiornare sempre, quando impattate:

- home (`app/page.tsx`)
- workflow (`app/workflow/page.tsx`)
- wizard (`app/wizard/page.tsx`)
- wiki (`app/wiki/*`)
- privacy e sicurezza (`app/privacy/page.tsx`, `app/sicurezza-dati/page.tsx`)

## Output atteso

- framework e app allineati alla stessa baseline documentale;
- nessun riferimento obsoleto;
- tracciabilita esplicita dei file aggiornati.
