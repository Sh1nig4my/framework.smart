# Contributing

## Scopo

Questo repository accetta contributi che migliorano in modo misurabile la qualita del framework SMART sotto tre aspetti: chiarezza, coerenza, riusabilita.

Entrypoint ufficiale del progetto: `README.md` in root.

## Invarianti da preservare

Ogni contributo deve rispettare gli invarianti canonici:

- `documentation/wizard/case-schema.json` resta source of truth della Fase 1;
- `documentation/wizard/cartella-master-template.md` + `documentation/wizard/cartella-master-schema.md` restano source of truth della Fase 2;
- `documentation/wizard/fase-3-derivazione-pubblicazione.md` governa la Fase 3;
- la cartella master resta artefatto centrale per ogni derivazione;
- SMART integra framework documentale e web app operativa in un unico sistema.

## Ambiti di modifica

- `documentation/manifesto/`: visione, principi, etica, policy, governance.
- `documentation/framework/`: metodologia, modello operativo, processo, ruoli, glossario.
- `documentation/wizard/`: processo operativo Fase 1/Fase 2/Fase 3 e documentazione di supporto.
- `documentation/playbooks/`: applicazioni pratiche del metodo.
- `documentation/context-ai/`: contesto AI, regole operative, protocolli di validazione, template.

## Standard editoriali obbligatori

- tono formale, professionale, non promozionale;
- lessico coerente con `documentation/framework/glossario.md`;
- sezioni tracciabili e prive di ridondanza;
- assenza di riferimenti tecnici non pertinenti al nucleo documentale;
- priorita a pochi documenti robusti rispetto a molti documenti deboli.
- allineamento esplicito a no-code, sicurezza e standardizzazione quando si modificano regole o processi.

## Procedura minima di contributo

1. dichiarare il problema da risolvere;
2. indicare area e file coinvolti;
3. classificare il cambiamento come canonico, operativo o storico;
4. aggiornare i documenti correlati;
5. verificare coerenza interna e riferimenti incrociati;
6. aggiornare `CHANGELOG.md` se il cambiamento modifica comportamento o governance del framework.

## Regole specifiche per contesto AI

Contributi in `documentation/context-ai/` devono:

- evitare prompt generici non governati;
- definire output attesi, assunzioni e criteri di fallimento;
- includere vincoli espliciti contro invenzioni fuori schema;
- mantenere piena coerenza con `documentation/wizard/case-schema.json`, `documentation/wizard/cartella-master-template.md` e `documentation/wizard/cartella-master-schema.md`.

## Contributi non ammessi

- codice demo o applicazioni software;
- integrazioni specifiche con provider esterni;
- materiale storico ricopiato in area attiva senza razionale;
- variazioni terminologiche non allineate al glossario canonico.

Sono ammessi contributi alla web app (`app/`) quando migliorano esperienza, adozione e operativita del framework senza alterare gli invarianti metodologici.

## Versioning

Da `v1.0.0` in avanti, ogni modifica deve preservare invarianti canonici e indicare chiaramente impatti su metodologia, app e policy dati.
