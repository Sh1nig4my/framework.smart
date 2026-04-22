# HOW TO — Uso operativo del framework SMART

## Scopo del documento

Questa guida descrive come utilizzare SMART in modo operativo, ordinato e assistito da AI.

Il suo obiettivo è aiutare l'utente a:

* comprendere il flusso corretto del framework;
* scegliere il modo più adatto per usarlo;
* eseguire correttamente la Fase 1;
* validare il `case.json`;
* generare il documento madre nella Fase 2;
* derivare i materiali successivi senza perdere coerenza.

La guida è scritta per utenti non necessariamente tecnici. Non sono richieste competenze di programmazione, ma è utile avere familiarità minima con file `.json`, file `.md` e gestione documentale di base.

## Cosa serve prima di iniziare

Per usare SMART servono solo alcuni prerequisiti minimi:

1. accesso al repository del framework;
2. possibilità di aprire e leggere file `.json` e `.md`;
3. un obiettivo dell'iniziativa già identificato a livello generale;
4. disponibilità a lavorare per passaggi, senza saltare la sequenza del metodo.

Non è necessario usare software specifici. Il framework può essere applicato anche manualmente o con strumenti gratuiti. Tuttavia, alcuni strumenti possono semplificare molto il processo.

## Due modalità di utilizzo del framework

SMART può essere usato in due modi principali.

### Modalità 1 — utilizzo tramite chat AI

Esempi:

* ChatGPT
* Claude
* Gemini
* altri modelli conversazionali

Questa modalità è consigliata se:

* stai iniziando a conoscere il framework;
* vuoi lavorare su un singolo caso alla volta;
* preferisci caricare i file manualmente;
* vuoi procedere per step in modo semplice.

In questa modalità, l'AI non legge automaticamente tutto il repository. Devi quindi fornirle i documenti giusti e guidarla nel processo.

### Modalità 2 — utilizzo in locale con agente AI

Esempi:

* OpenCode
* Codex
* altri strumenti agentici in grado di leggere un repository locale

Questa modalità è consigliata se:

* vuoi far leggere all'AI l'intero repository;
* vuoi lavorare con maggiore continuità tra i file;
* vuoi ridurre il caricamento manuale dei documenti;
* vuoi usare SMART in modo più fluido, strutturato e professionale.

In questa modalità, il framework viene scaricato sul computer e lo strumento AI può leggere il repository direttamente in locale.

## Differenza pratica tra chat AI e agente AI locale

La differenza principale è operativa.

### Con una chat AI

Di norma lavori così:

* selezioni i file da caricare;
* spieghi il contesto;
* chiedi una lavorazione specifica;
* controlli il risultato;
* procedi al passaggio successivo.

È una modalità semplice, flessibile e accessibile, ma richiede maggiore attenzione nel fornire ogni volta il contesto corretto.

### Con un agente AI locale

Di norma lavori così:

* scarichi il repository;
* lo apri in locale;
* chiedi allo strumento di leggere il framework;
* fai partire la lavorazione a partire dai file corretti;
* iteri più rapidamente tra lettura, validazione e produzione dei documenti.

È una modalità più continua e potente, particolarmente adatta quando vuoi usare SMART in modo frequente o professionale.

## Strumenti utili ma non obbligatori

Puoi usare SMART anche senza strumenti specifici aggiuntivi. Tuttavia, questi riferimenti possono semplificare il processo.

### Per scaricare o gestire il repository

* Git: `https://git-scm.com/install/`
* Fork: `https://git-fork.com/`
* Repository SMART su GitHub: inserire qui il link pubblico del repository

### Per lavorare in locale con un agente AI

* OpenCode: `https://opencode.ai/it/download`
* Codex: `https://openai.com/it-IT/codex/`

### Per installare un agente locale tramite Anthropic da riga di comando

```bash
pip install claude-agent-sdk
npm install @anthropic-ai/claude-agent-sdk
```

### Per facilitare la compilazione del `case.json`

* Pagina descrittiva del framework: `https://emanueleienna.vercel.app/framework-smart`
* Form guidato per la generazione del JSON di Fase 1: `https://emanueleienna.vercel.app/framework-smart/form-request`

Questi strumenti sono consigli di utilizzo e non costituiscono un vincolo metodologico. Il framework resta applicabile anche con altri software, altri provider o procedure manuali.

## Panoramica del flusso completo

```text
1) Comprendere il framework
2) Scegliere la modalità di utilizzo
3) Preparare il contesto di lavoro
4) Eseguire la Fase 1
5) Validare il case.json
6) Eseguire la Fase 2
7) Verificare il documento madre
8) Derivare i materiali successivi
```

Il principio fondamentale è questo: non bisogna anticipare i derivati prima che il caso e il documento madre siano stati costruiti e verificati correttamente.

## Passo 1 — Comprendere il framework

Prima di lavorare su un caso specifico, leggi i documenti base in questo ordine:

1. `README.md`
2. `HOW_TO.md`
3. `wizard/README.md`
4. `wizard/case-schema.md`
5. `wizard/script-master-schema.md`
6. `context-ai/README.md`

Obiettivo del passo: capire la differenza tra schema, caso, documento madre e materiali derivati.

## Passo 2 — Scegliere la modalità di lavoro

A questo punto scegli come usare SMART.

### Se usi una chat AI

Preparati a:

* caricare i file rilevanti;
* spiegare ogni volta il contesto;
* lavorare per passaggi distinti;
* verificare più spesso che l'AI non introduca elementi non richiesti.

### Se usi un agente AI in locale

Preparati a:

* scaricare il repository;
* aprirlo nel tuo ambiente di lavoro;
* far leggere allo strumento i documenti del framework;
* lavorare partendo dai file di contesto già predisposti.

Non esiste una modalità universalmente migliore. La scelta dipende dal tuo flusso di lavoro, dalla frequenza d'uso e dagli strumenti che hai a disposizione.

## Passo 3 — Preparare il contesto di lavoro

Prima di iniziare la Fase 1, assicurati che l'AI o il tuo ambiente di lavoro dispongano del contesto corretto.

### Se lavori con una chat AI

Carica o condividi almeno i documenti più rilevanti:

* `README.md`
* `HOW_TO.md`
* `wizard/README.md`
* `wizard/case-schema.md`
* `wizard/script-master-schema.md`
* contenuti di `context-ai/` se disponibili e pertinenti

### Se lavori con un agente AI locale

Fai leggere allo strumento almeno:

* la struttura generale del repository;
* i documenti in `context-ai/`;
* i file della cartella `wizard/`;
* gli artefatti di schema e template che regolano Fase 1 e Fase 2.

Il consiglio operativo è semplice: prima di chiedere una produzione, fai sempre acquisire il contesto corretto.

## Passo 4 — Eseguire la Fase 1

La Fase 1 serve a raccogliere e strutturare il caso.

### 4.1 Obiettivo della Fase 1

L'obiettivo non è creare contenuti finali. L'obiettivo è costruire un `case.json` coerente, completo e abbastanza chiaro da poter sostenere la Fase 2.

### 4.2 Come iniziare

1. apri `wizard/case-schema.json` come riferimento canonico;
2. usa `wizard/case-template.json` se presente come base di lavoro;
3. compila progressivamente il caso rispettando la struttura prevista;
4. usa solo campi e opzioni coerenti con lo schema.

### 4.3 Regole da rispettare

Durante la Fase 1:

* non modificare lo schema canonico;
* non inventare campi;
* non usare valori fuori opzione;
* non compensare i vuoti con supposizioni arbitrarie;
* se un'informazione manca, dichiarala come nodo aperto.

### 4.4 Compilazione guidata della Fase 1

Se vuoi semplificare la raccolta iniziale del caso, puoi usare il form guidato disponibile qui:

`https://emanueleienna.vercel.app/framework-smart/form-request`

Questo strumento può aiutarti a generare il JSON della Fase 1 in modo più semplice e ordinato. Resta comunque necessario verificare il risultato finale prima di considerarlo valido.

### 4.5 Chiusura della Fase 1

Quando la compilazione è completa:

1. salva il risultato come `case.json`;
2. verifica che tutte le sezioni fondamentali siano presenti;
3. conserva un elenco dei nodi aperti;
4. controlla che il file sia coerente e non contraddittorio.

## Passo 5 — Validare il `case.json`

Prima di passare alla Fase 2, il caso deve essere validato.

Controlla almeno questi elementi:

* identità dell'iniziativa chiara;
* pubblico principale definito;
* obiettivo principale univoco;
* formato coerente;
* direzione narrativa chiara;
* limiti e policy dichiarati;
* output atteso esplicitato.

Se due elementi sono in conflitto, correggi il caso prima di proseguire.

Se il caso è ancora troppo generico, la Fase 2 produrrà un documento debole. È quindi preferibile rallentare qui piuttosto che correggere tutto più avanti.

## Passo 6 — Eseguire la Fase 2

La Fase 2 serve a generare lo script master, cioè il documento madre del progetto.

### 6.1 Obiettivo della Fase 2

L'obiettivo non è ottenere subito slide, email o pagine evento. L'obiettivo è produrre un documento madre abbastanza robusto da permettere poi la derivazione coerente dei materiali successivi.

### 6.2 Preparazione

1. apri `wizard/script-master.md`;
2. leggi `wizard/script-master-schema.md`;
3. usa `case.json` come unica fonte strutturale del caso;
4. porta con te eventuali nodi aperti emersi nella validazione.

### 6.3 Generazione del documento madre

Compila lo script master sezione per sezione, includendo almeno:

* sintesi strategica;
* profilo del pubblico;
* promessa e perimetro;
* architettura dei contenuti;
* agenda e scaletta;
* linee guida di conduzione;
* limiti e cautele sull'uso dell'AI;
* brief derivati o istruzioni utili alla produzione successiva.

### 6.4 Regole di qualità

Durante la Fase 2:

* non inserire dettagli amministrativi irrilevanti;
* non introdurre promesse non supportate;
* non lasciare sezioni chiave troppo generiche;
* non inventare vincoli assenti nel caso;
* dichiara assunzioni e nodi aperti quando servono.

## Passo 7 — Verifica finale del documento madre

Prima di derivare altri materiali, controlla che lo script master:

1. sia utilizzabile da un docente, divulgatore o progettista senza spiegazioni esterne;
2. mantenga piena coerenza con il `case.json`;
3. renda chiari perimetro, tono, obiettivo e limiti;
4. permetta di derivare i materiali secondari in modo ordinato;
5. non contenga sezioni troppo vaghe o troppo promettenti.

Se la verifica fallisce, correggi prima lo script master.

## Passo 8 — Derivare i materiali successivi

Solo dopo la validazione del documento madre puoi derivare i materiali successivi.

Esempi:

* brief slide;
* brief pagina evento;
* brief email;
* checklist divulgatore;
* follow-up;
* altri asset coerenti con il caso.

Durante la derivazione:

* mantieni tono, promessa e perimetro;
* non introdurre nuovi vincoli non presenti nel documento madre;
* non usare i derivati per correggere errori che andavano risolti prima.

## Uso corretto dell'AI durante il processo

Se usi strumenti di intelligenza artificiale, adotta queste regole operative.

### 1. Fornisci sempre il contesto giusto

L'AI lavora bene solo se legge i documenti corretti. Inizia sempre dai materiali di contesto e dagli artefatti canonici.

### 2. Chiedi una lavorazione alla volta

Evita richieste troppo ampie come "fammi tutto". È meglio procedere per fasi:

* comprensione;
* compilazione;
* validazione;
* trasformazione;
* revisione.

### 3. Verifica gli output

Un output AI può sembrare credibile anche quando non è coerente con il caso o con il framework. Tutto va verificato.

### 4. Non delegare il giudizio progettuale

SMART è progettato per rendere l'AI utile, non per sostituire la responsabilità di chi progetta.

## Errori frequenti da evitare

* passare ai derivati senza aver validato caso e documento madre;
* trattare `case-schema.json` come file da compilare direttamente;
* usare output AI senza controllo;
* confondere raccolta requisiti e produzione materiali;
* saltare i documenti di contesto;
* usare strumenti AI senza aver chiarito al modello il ruolo della Fase 1 e della Fase 2.

## Checklist operativa rapida

* [ ] Ho letto i documenti base.
* [ ] Ho scelto una modalità di utilizzo coerente con il mio flusso di lavoro.
* [ ] Ho preparato il contesto corretto per l'AI o per il lavoro manuale.
* [ ] Ho prodotto un `case.json` coerente.
* [ ] Ho validato il caso prima della Fase 2.
* [ ] Ho compilato lo script master completo.
* [ ] Ho verificato coerenza, qualità e limiti.
* [ ] Ho derivato i materiali solo a valle del documento madre.

## Riferimenti principali

* `README.md`
* `wizard/README.md`
* `wizard/case-schema.md`
* `wizard/script-master-schema.md`
* `context-ai/README.md`
* `https://emanueleienna.vercel.app/framework-smart`
* `https://emanueleienna.vercel.app/framework-smart/form-request`
