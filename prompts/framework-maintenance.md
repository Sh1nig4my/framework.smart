# Prompt: Framework Maintenance

## Scopo

Eseguire revisione profonda e manutenzione della documentazione SMART nella sola cartella `documentation/`.

## Scope consentito

- puoi leggere tutto il repository;
- puoi modificare solo file dentro `documentation/`.

## Scope vietato

- nessuna modifica in `app/`, `server/`, `shared/`, root docs fuori `documentation/`.

## Obiettivi operativi

1. trovare disallineamenti, incongruenze, ambiguita e link interni non coerenti;
2. identificare bug logici di workflow e conflitti tra fasi;
3. proporre fix logiche/funzionali/editoriali;
4. pianificare interventi e poi implementarli solo in `documentation/`.

## Procedura obbligatoria

1. mappa documenti e dipendenze;
2. esegui audit coerenza terminologica e di precedenza;
3. valida catena Fase 1 -> Fase 2 -> Fase 3;
4. applica refactor con struttura uniforme;
5. aggiorna riferimenti incrociati;
6. produci report finale sintetico con file toccati.

## Output atteso

- documentazione in `documentation/` riallineata e coerente;
- elenco issue corrette;
- eventuali nodi aperti espliciti.
