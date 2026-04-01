# Contributing

## Scopo

Questo repository accetta contributi che migliorano in modo misurabile la qualita del framework SMART sotto tre aspetti: chiarezza, coerenza, riusabilita.

## Invarianti da preservare

Ogni contributo deve rispettare gli invarianti canonici:

- `wizard/case-schema.json` resta source of truth della Fase 1;
- `wizard/script-master.md` resta source of truth della Fase 2;
- lo script master resta documento madre per ogni derivazione;
- SMART resta un framework documentale, non un progetto software di implementazione.

## Ambiti di modifica

- `manifesto/`: visione, principi, etica, policy, governance.
- `framework/`: metodologia, modello operativo, processo, ruoli, glossario.
- `wizard/`: processo operativo Fase 1/Fase 2 e documentazione di supporto.
- `playbooks/`: applicazioni pratiche del metodo.
- `ai-context/`: contesto AI, regole operative, protocolli di validazione, template.
- `archive/legacy/`: sola gestione storico-orientativa.

## Standard editoriali obbligatori

- tono formale, professionale, non promozionale;
- lessico coerente con `framework/glossario.md`;
- sezioni tracciabili e prive di ridondanza;
- assenza di riferimenti tecnici non pertinenti al nucleo documentale;
- priorita a pochi documenti robusti rispetto a molti documenti deboli.

## Procedura minima di contributo

1. dichiarare il problema da risolvere;
2. indicare area e file coinvolti;
3. classificare il cambiamento come canonico, operativo o storico;
4. aggiornare i documenti correlati;
5. verificare coerenza interna e riferimenti incrociati;
6. aggiornare `CHANGELOG.md` se il cambiamento modifica comportamento o governance del framework.

## Regole specifiche per AI context

Contributi in `ai-context/` devono:

- evitare prompt generici non governati;
- definire output attesi, assunzioni e criteri di fallimento;
- includere vincoli espliciti contro invenzioni fuori schema;
- mantenere piena coerenza con `wizard/case-schema.json` e `wizard/script-master.md`.

## Contributi non ammessi

- codice demo o applicazioni software;
- integrazioni specifiche con provider esterni;
- materiale legacy ricopiato in area attiva senza razionale;
- variazioni terminologiche non allineate al glossario canonico.

## Versioning

Il framework usa serie `0.x` fino al consolidamento `1.0`. In questa fase sono ammessi miglioramenti strutturali, purche non compromettano gli invarianti canonici.
