# SMART Framework

SMART e un framework documentale open source per la progettazione strutturata di iniziative formative e divulgative su intelligenza artificiale, automazioni, workflow, strumenti digitali e nuove tecnologie.

Il framework e orientato alla qualita progettuale, alla coerenza editoriale e alla riusabilita operativa. Non e un prodotto software applicativo e non include implementazioni tecniche di integrazione.

## Posizionamento

SMART affronta un problema ricorrente: progetti formativi avviati da input frammentari, promesse poco governate e materiali prodotti senza una sorgente unica.

Il framework introduce una catena decisionale stabile che riduce ambiguita, rende verificabili le scelte e consente una derivazione ordinata degli asset finali.

## Destinatari

SMART e progettato per:

- formatori e docenti;
- divulgatori e coordinatori editoriali;
- consulenti e progettisti didattici;
- enti, imprese e organizzazioni che sviluppano iniziative divulgative.

## Architettura metodologica in due fasi

Il processo canonico e composto da due fasi consecutive.

1. Fase 1: raccolta requisiti attraverso `wizard/case-schema.json`.
2. Fase 2: generazione del documento madre tramite `wizard/script-master.md`.

Catena obbligatoria:

```text
case-schema.json
-> compilazione guidata
-> case.json
-> generazione Fase 2
-> script-master.md
-> materiali derivati
```

Principio centrale: SMART non mira a generare direttamente tutti gli output finali. Mira a produrre prima uno script master robusto, da cui derivare in modo coerente i materiali successivi.

## Artefatti canonici

### `wizard/case-schema.json`

Source of truth della Fase 1.

- definisce il modello di intake a risposte chiuse;
- impone campi e opzioni selezionabili;
- supporta compilazione umana o assistita da AI;
- produce come istanza operativa un `case.json`.

### `wizard/script-master.md`

Source of truth della Fase 2.

- definisce il template del documento madre;
- e destinato in primo luogo a divulgatore o docente;
- governa struttura, tono, sequenza, contenuti, cautele e supporti;
- funge da base primaria per la derivazione di asset secondari.

## Percorso di avvio consigliato

Per utenti alla prima adozione:

1. leggere `README.md`;
2. seguire `HOW_TO.md` passo passo;
3. usare `wizard/README.md` per la parte operativa;
4. usare `ai-context/` in caso di esecuzione assistita da AI.

## Struttura del repository

```text
smart/
|- README.md
|- HOW_TO.md
|- LICENSE
|- CONTRIBUTING.md
|- CHANGELOG.md
|- manifesto/
|- framework/
|- wizard/
|- playbooks/
|- ai-context/
`- archive/
   `- legacy/
```

## Confine tra canonico e legacy

Sono aree canoniche: `manifesto/`, `framework/`, `wizard/`, `playbooks/`, `ai-context/`.

`archive/legacy/` e area storica non prescrittiva.

`TO-DELETE-after-refactor-framework/` e contenitore temporaneo di audit e non e parte della documentazione attiva del framework.

## Licenza

SMART e distribuito con licenza MIT e puo essere riusato, adattato e forkato mantenendo avviso di copyright e testo della licenza.

## Versione corrente

`v0.2.0`
