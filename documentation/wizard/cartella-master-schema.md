# Cartella Master Schema

## Scopo

Definire in modo formale il ruolo della cartella master, i criteri di compilazione e le condizioni minime per considerare lo Step 2 completato.

## Cos'e la cartella master

La cartella master e l'artefatto centrale dell'iniziativa.

E il principale output dello Step 2 e il riferimento operativo per preparazione, conduzione, allineamento del team e derivazione materiali.

## A chi e destinata

- divulgatore;
- docente;
- progettista dell'iniziativa;
- collaboratori che devono produrre materiali coerenti;
- assistenti AI usati con vincoli documentali espliciti.

## Come si collega al `case.json`

Il `case.json` fornisce il quadro strutturale del caso.

La cartella master trasforma tale quadro in un'architettura di regia che esplicita:

- senso;
- promessa;
- pubblico;
- architettura contenuti;
- agenda e blocchi;
- conduzione;
- cautele;
- supporti;
- handoff di derivazione.

## Cosa contiene per sezione

### `00_index`

Mappa della cartella, ordine di lettura, stato compilazione, manifest operativo.

### `01_overview`

Identita, sintesi strategica, profilo pubblico, promessa e confini.

### `02_event_structure`

Agenda generale, struttura narrativa, criteri conduzione e policy comunicative.

### `03_daily_events`

Piani evento singola giornata, blocchi operativi e passaggi.

### `04_multi_day_events`

Piani evento su piu giornate, dipendenze, milestone, continuita.

### `05_collections`

Strutture per serie e collezioni, criteri di raggruppamento e riuso.

### `06_seminars`

Linee specifiche per seminari e varianti legate al contesto.

### `07_content_types`

Tipologie divulgative interne al medesimo perimetro evento.

### `08_agent_ready_files`

File sintetici ad alta usabilita per agenti e task successivi.

### `09_step_3_handoff`

Autorizzazioni di derivazione, richieste tool, provider target, vincoli brand, scope filters, limiti e checklist pre-pubblicazione.

## Criteri di compilazione

Durante la compilazione della cartella master:

- usare il `case.json` come base primaria;
- integrare assunzioni solo se dichiarate;
- esplicitare nodi aperti con impatto;
- mantenere tono professionale e non promozionale;
- evitare file placeholder privi di contenuto operativo;
- garantire coerenza cross-file tra sezioni.

## Come usarla nella pratica

1. Genera la struttura canonica a partire dal template.
2. Compila sezione per sezione con tracciabilita al caso.
3. Rivedi coerenza interna con giudizio umano.
4. Usa la cartella come base per Step 3.

## Definition of done - Cartella master

La cartella master e validata solo se:

1. copre tutte le directory canoniche obbligatorie;
2. mantiene coerenza integrale con il `case.json`;
3. contiene limiti, rischi e confini in modo esplicito;
4. permette la derivazione senza introdurre nuove regole implicite;
5. include handoff Step 3 completo.

## Metadati minimi handoff Step 3

Ogni handoff in `09_step_3_handoff/` deve esplicitare almeno:

1. `tool_requests` (quali tool Step 3 attivare e per quale finalita);
2. `provider_preferences` (preset consigliato oppure custom);
3. `provider_target_default` con valore `non specificato` se assente scelta utente;
4. `brand_constraints` (palette, logo SMART, stile comunicativo);
5. `scope_filters` (giorni, blocchi o porzioni da trattare);
6. `publication_limits` (vincoli e blocchi pre-rilascio).

## Cosa non deve contenere

La cartella master non deve diventare:

- una raccolta piatta di file scollegati;
- un duplicato in piu file dello stesso testo generico;
- un contenitore di promesse commerciali scollegate;
- un sistema di note frammentarie senza regia.

## Criteri di qualita

Una cartella master e buona quando:

- restituisce il senso del progetto con chiarezza;
- puo essere usata dal divulgatore senza spiegazioni esterne;
- rende i derivati piu facili da produrre, non piu ambigui;
- esplicita limiti, rischi e assunzioni invece di nasconderli.

## Riferimenti

- `HOW_TO.md`
- `wizard/step-2-generazione.md`
- `wizard/cartella-master-template.md`
- `wizard/cartella-master-validation.md`
- `wizard/step-3-derivazione-pubblicazione.md`
