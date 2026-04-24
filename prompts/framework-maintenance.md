# Prompt D: Framework Maintenance

## Scopo

Eseguire revisione profonda e manutenzione del framework SMART nelle aree operative fuori `documentation/`.

## Scope consentito

- puoi leggere tutto il repository;
- puoi modificare file root e di supporto framework fuori `documentation/` (es. `README.md`, `HOW_TO.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `prompts/`, `FRAMEWORK-STATUS.md`).

## Scope vietato

- nessuna modifica in `documentation/`;
- nessuna modifica in `app/`, `server/`, `shared/` salvo fix minimi necessari a ripristinare coerenza framework-level dichiarata.

## Obiettivi operativi

1. trovare disallineamenti, incongruenze, ambiguita e link interni non coerenti;
2. identificare bug logici di workflow e conflitti tra fasi;
3. proporre fix logiche/funzionali/editoriali;
4. pianificare interventi e implementarli solo nelle aree consentite fuori `documentation/`.

## Procedura obbligatoria

1. mappa documenti e dipendenze;
2. esegui audit coerenza terminologica e di precedenza;
3. valida catena Fase 1 -> Fase 2 -> Fase 3;
4. applica refactor con struttura uniforme;
5. aggiorna riferimenti incrociati;
6. produci report finale sintetico con file toccati.

## Output atteso

- framework operativo fuori `documentation/` riallineato e coerente;
- elenco issue corrette;
- eventuali nodi aperti espliciti.
