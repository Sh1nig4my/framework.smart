# Contributing

## Scopo

Questo repository accetta contributi che migliorano in modo misurabile la qualita del framework SMART sotto tre aspetti: chiarezza, coerenza, riusabilita.

Entrypoint ufficiale del progetto: `README.md` in root.

## Invarianti da preservare

Ogni contributo deve rispettare gli invarianti canonici:

- `framework-documents/wizard/case-schema.json` resta source of truth dello Step 1;
- `framework-documents/wizard/cartella-master-template.md` + `framework-documents/wizard/cartella-master-schema.md` restano source of truth dello Step 2;
- `framework-documents/wizard/step-3-derivazione-pubblicazione.md` governa lo Step 3;
- la cartella master resta artefatto centrale per ogni derivazione;
- SMART integra framework documentale e web app operativa in un unico sistema.

## Ambiti di modifica

- `framework-documents/manifesto/`: visione, principi, etica, policy, governance.
- `framework-documents/framework/`: metodologia, modello operativo, processo, ruoli, glossario.
- `framework-documents/wizard/`: processo operativo Step 1/Step 2/Step 3 e documentazione di supporto.
- `framework-documents/playbooks/`: applicazioni pratiche del metodo.
- `framework-documents/context-ai/`: contesto AI, regole operative, protocolli di validazione, template.

## Standard editoriali obbligatori

- tono formale, professionale, non promozionale;
- lessico coerente con `framework-documents/framework/glossario.md`;
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

Contributi in `framework-documents/context-ai/` devono:

- evitare prompt generici non governati;
- definire output attesi, assunzioni e criteri di fallimento;
- includere vincoli espliciti contro invenzioni fuori schema;
- mantenere piena coerenza con `framework-documents/wizard/case-schema.json`, `framework-documents/wizard/cartella-master-template.md` e `framework-documents/wizard/cartella-master-schema.md`.

## Contributi non ammessi

- codice demo o applicazioni software non coerenti con il framework;
- integrazioni software vendor-specific non richieste dal repository;
- materiale storico ricopiato in area attiva senza razionale;
- variazioni terminologiche non allineate al glossario canonico.

Nota: sono ammessi aggiornamenti documentali provider-aware in Step 3 (prompt/output contract/gate) quando restano no-code e tracciabili alla cartella master.

Sono ammessi contributi alla web app (`src/app/`) quando migliorano esperienza, adozione e operativita del framework senza alterare gli invarianti metodologici.

## Versioning

Da `v1.0.0` in avanti, ogni modifica deve preservare invarianti canonici e indicare chiaramente impatti su metodologia, app e policy dati.
