# SMART Framework

SMART è un framework documentale open source pensato per progettare, strutturare e rendere riusabili iniziative formative e divulgative su intelligenza artificiale, automazioni, workflow, strumenti digitali e nuove tecnologie.

Non è un software applicativo e non è un generatore automatico di output finali. SMART è un sistema metodologico e operativo che aiuta a trasformare input iniziali spesso frammentari in un processo ordinato, verificabile e assistibile da AI.

Il suo obiettivo è semplice: costruire prima una sorgente unica affidabile, e solo dopo derivare da quella sorgente tutti i materiali successivi in modo coerente.

SMART è progettato per un uso esplicitamente AI-native: leggibile da umani, ma anche da chat AI e agenti locali che operano sul repository.

## Perché esiste SMART

Molti progetti formativi o divulgativi nascono da richieste incomplete, obiettivi ancora poco definiti, aspettative non allineate e materiali prodotti troppo presto, senza una base strategica unica.

Questo porta spesso a:

* brief ambigui;
* contenuti incoerenti;
* promesse non presidiate;
* scalette deboli;
* slide, email o pagine evento non allineate tra loro;
* uso poco controllato degli output generati da AI.

SMART nasce per risolvere questo problema attraverso una catena decisionale chiara.

```text
raccolta strutturata dei requisiti
-> validazione del caso
-> generazione del documento madre
-> derivazione ordinata dei materiali finali
```

Questo approccio migliora la qualità progettuale, riduce l'ambiguità, aumenta la coerenza editoriale e rende l'uso dell'intelligenza artificiale più affidabile e controllabile.

## A chi è rivolto

SMART è progettato per:

* docenti e formatori;
* divulgatori;
* progettisti didattici;
* consulenti;
* coordinatori editoriali;
* enti, imprese e organizzazioni che progettano iniziative formative o divulgative.

È particolarmente utile per chi vuole lavorare in modo più ordinato, mantenere controllo sui materiali prodotti e usare strumenti AI senza perdere coerenza metodologica.

## Come funziona

Il processo canonico di SMART è composto da due fasi consecutive.

### Fase 1 — raccolta strutturata dei requisiti

La Fase 1 serve a raccogliere il caso in modo ordinato, usando una struttura chiusa e coerente.

Artefatto principale:

* `wizard/case-schema.json`

Risultato operativo:

* `case.json`

Questa fase definisce identità dell'iniziativa, pubblico, obiettivi, formato, limiti, vincoli e attese. Il suo scopo non è produrre materiali finali, ma costruire una base affidabile da cui partire.

### Fase 2 — generazione del documento madre

La Fase 2 trasforma il caso strutturato in uno script master completo.

Artefatto principale:

* `wizard/script-master.md`

Risultato operativo:

* documento madre da cui derivare tutti i materiali successivi

Questo documento madre governa struttura, tono, promessa, perimetro, scaletta, contenuti, limiti, cautele e linee guida operative.

## Catena canonica del framework

```text
wizard/case-schema.json
-> compilazione guidata
-> case.json
-> generazione Fase 2
-> script-master.md
-> materiali derivati
```

Principio centrale: SMART non punta a generare immediatamente tutti gli output finali. Prima costruisce il documento giusto da cui tutto il resto potrà essere derivato con maggiore qualità e coerenza.

## Perché SMART è AI-native

SMART è un framework pensato per essere usato anche con strumenti di intelligenza artificiale, ma senza dipendere da un singolo provider, da un singolo modello o da un unico software.

La sua struttura documentale si presta bene a essere letta, interpretata e processata sia da chat AI sia da strumenti in grado di lavorare su un repository locale.

Questo consente due vantaggi importanti:

* l'AI può essere usata come supporto operativo durante la compilazione, la validazione e la trasformazione dei documenti;
* il controllo metodologico resta in mano all'utente, perché il framework definisce artefatti, sequenza e criteri di qualità.

In altre parole, SMART non delega il progetto all'AI. La usa come leva operativa all'interno di una struttura governata.

## Modalità di utilizzo del framework

SMART può essere usato in due modalità principali.

### 1. Utilizzo tramite chat AI

Esempi:

* ChatGPT
* Claude
* Gemini
* altri LLM conversazionali

Questa modalità è adatta quando vuoi:

* comprendere il framework;
* lavorare su un caso alla volta;
* caricare file selezionati e procedere per step;
* compilare o validare la Fase 1;
* generare o rifinire la Fase 2 con un flusso semplice.

In questo scenario, l'utente carica i file utili, fornisce il contesto e chiede alla chat di leggere, validare, compilare, trasformare o migliorare gli artefatti del framework.

### 2. Utilizzo in locale con agente AI

Esempi:

* OpenCode
* Codex
* altri strumenti agentici o ambienti in grado di leggere un repository locale

Questa modalità è adatta quando vuoi:

* far leggere all'AI l'intero repository in locale;
* lavorare con maggiore continuità tra i file;
* iterare più rapidamente tra Fase 1, Fase 2 e materiali derivati;
* ridurre il caricamento manuale dei documenti uno per uno.

In questo scenario, il repository viene scaricato sul proprio computer e l'agente AI può lavorare direttamente sui file del framework, anche partendo dai documenti predisposti nella cartella `context-ai/`.

## Quale modalità scegliere

### Usa una chat AI se:

* stai iniziando;
* vuoi un flusso semplice;
* vuoi lavorare su un singolo caso per volta;
* preferisci caricare manualmente i documenti necessari.

### Usa un ambiente locale con agente AI se:

* vuoi usare il framework in modo più fluido e continuativo;
* vuoi far leggere all'AI l'intero repository;
* vuoi ridurre passaggi manuali;
* vuoi lavorare con maggiore profondità sul contesto del progetto.

Entrambe le modalità sono valide. SMART non richiede una tecnologia specifica per funzionare correttamente.

## Avvio rapido

### Opzione A — uso via chat

1. Leggi questo `README.md`.
2. Apri `HOW_TO.md`.
3. Consulta `wizard/README.md`.
4. Carica in chat i file necessari per la Fase 1 o per la Fase 2.
5. Se usi l'AI, includi anche i file utili presenti in `context-ai/`.
6. Procedi per step, validando ogni passaggio prima di proseguire.

### Opzione B — uso in locale con agente AI

1. Scarica il repository.
2. Aprilo nel tuo ambiente di lavoro locale.
3. Fai leggere all'agente AI il contenuto del repository.
4. Indica di partire dai documenti presenti in `context-ai/` per acquisire il contesto operativo.
5. Esegui la Fase 1 e costruisci il `case.json`.
6. Valida il caso.
7. Esegui la Fase 2 e genera il documento madre.
8. Deriva i materiali solo dopo la validazione finale.

## Strumenti utili consigliati ma non obbligatori

SMART può essere utilizzato anche senza strumenti specifici aggiuntivi, ma alcuni software e servizi possono semplificare il processo operativo.

Questi riferimenti sono consigli pratici e non costituiscono un vincolo per l'utilizzo del framework.

### Per scaricare o gestire il repository

* Git da riga di comando: `https://git-scm.com/install/`
* Client Git grafico Fork: `https://git-fork.com/`
* Repository SMART su GitHub: inserire qui il link pubblico del repository

### Per lavorare in locale con un agente AI

* OpenCode download: `https://opencode.ai/it/download`
* OpenAI Codex: `https://openai.com/it-IT/codex/`

### Per installare un agente locale tramite Anthropic da riga di comando

```bash
pip install claude-agent-sdk
npm install @anthropic-ai/claude-agent-sdk
```

### Per semplificare la compilazione della Fase 1

* Generatore guidato del `case.json`: `https://emanueleienna.vercel.app/framework-smart/form-request`
* Pagina descrittiva del framework SMART: `https://emanueleienna.vercel.app/framework-smart`

## Una nota importante sugli strumenti

Gli strumenti suggeriti servono a semplificare una o più parti del processo:

* scaricare il repository;
* lavorare in locale;
* far leggere i file a un agente AI;
* compilare più facilmente la Fase 1.

Nessuno di questi strumenti è obbligatorio per applicare SMART. Il framework resta utilizzabile anche con strumenti gratuiti, modelli free, flussi manuali o chat AI generaliste, purché venga rispettata la sequenza metodologica e vengano verificati gli output prodotti.

## Struttura del repository

La struttura del repository è organizzata per separare chiaramente visione, metodo, artefatti operativi e contesto AI.

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
`- context-ai/
```

### `README.md`

È il documento di ingresso del framework. Spiega il posizionamento, la logica generale, le modalità d'uso e il percorso consigliato per iniziare.

### `HOW_TO.md`

È la guida operativa. Descrive il processo passo passo e chiarisce come eseguire correttamente Fase 1, Fase 2 e derivazione dei materiali.

### `manifesto/`

Raccoglie i principi fondativi, la visione e l'impianto culturale del framework. È utile per capire il perché del metodo, oltre al suo funzionamento.

### `framework/`

Contiene i materiali che descrivono il framework a livello metodologico e strutturale. È l'area utile per comprendere la grammatica interna del sistema SMART.

### `wizard/`

È il nucleo operativo del framework.

Qui si trovano gli artefatti canonici che governano il processo:

* schemi;
* template;
* documenti guida delle due fasi;
* file necessari alla raccolta del caso e alla generazione del documento madre.

È la cartella centrale per chi applica concretamente SMART.

### `playbooks/`

Contiene materiali orientati all'applicazione pratica, a pattern d'uso, esempi operativi o procedure che possono aiutare a estendere o adattare il framework in contesti reali.

### `context-ai/`

Contiene i documenti pensati per fornire contesto all'AI.

Questa cartella è particolarmente utile quando si usa SMART con una chat o con un agente locale, perché aiuta il modello a capire:

* il perimetro del framework;
* il lessico corretto;
* la struttura degli artefatti;
* il ruolo della Fase 1 e della Fase 2;
* i criteri con cui generare o validare gli output.

In pratica, è il punto di partenza consigliato quando si lavora con strumenti AI.

## Artefatti canonici

### `wizard/case-schema.json`

È la source of truth della Fase 1.

* definisce il modello di intake a risposte chiuse;
* stabilisce campi, opzioni e struttura;
* supporta compilazione umana o assistita da AI;
* genera come istanza operativa un `case.json`.

### `wizard/script-master.md`

È la source of truth della Fase 2.

* definisce il template del documento madre;
* governa struttura, tono, contenuti, cautele e supporti;
* è pensato per essere usato da docenti, divulgatori o progettisti;
* consente la derivazione coerente dei materiali secondari.

## Percorso consigliato per la prima adozione

Per iniziare correttamente:

1. leggere `README.md`;
2. seguire `HOW_TO.md` passo passo;
3. usare `wizard/README.md` come riferimento operativo;
4. consultare `context-ai/` se il framework viene utilizzato con AI;
5. completare la Fase 1 prima di iniziare la Fase 2;
6. derivare i materiali solo dopo aver validato il documento madre.

## Principi di utilizzo corretti

Quando usi SMART:

* non modificare gli schemi canonici come se fossero file finali da compilare direttamente;
* non saltare la validazione del caso;
* non generare i derivati prima del documento madre;
* non accettare output AI non verificati;
* non introdurre promesse, dettagli o vincoli non supportati dal caso;
* non trattare il framework come una scorciatoia per evitare la progettazione.

SMART accelera, struttura e rende più affidabile il processo. Non sostituisce il giudizio progettuale.

## Output derivabili

Dopo la validazione della Fase 2, dal documento madre è possibile derivare in modo ordinato:

* brief slide;
* brief pagina evento;
* brief email;
* checklist divulgatore;
* follow-up;
* altri materiali coerenti con il perimetro definito.

## Documenti da leggere per iniziare

* `README.md`
* `HOW_TO.md`
* `wizard/README.md`
* `wizard/case-schema.md`
* `wizard/script-master-schema.md`
* `context-ai/README.md`

## Licenza

SMART è distribuito con licenza MIT.

Può essere riusato, adattato e forkato nel rispetto dell'avviso di copyright e del testo della licenza.

## Versione corrente

`v0.3.0`
