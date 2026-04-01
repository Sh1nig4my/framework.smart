# HOW TO - Uso operativo del framework SMART

## Scopo del documento

Questa guida descrive come usare SMART in autonomia per completare correttamente:

- Fase 1: raccolta strutturata dei requisiti;
- Fase 2: generazione dello script master;
- derivazione controllata dei materiali successivi.

La guida e scritta per utenti non necessariamente tecnici.

## Cosa serve prima di iniziare

Prerequisiti minimi:

1. accesso al repository SMART;
2. capacita di aprire e modificare file `.json` e `.md`;
3. obiettivo dell'iniziativa gia identificato a livello generale.

Non sono richieste competenze di programmazione.

## Panoramica del flusso completo

```text
1) Leggere i documenti base
2) Compilare il caso (Fase 1)
3) Validare il case.json
4) Generare lo script master (Fase 2)
5) Verificare qualita e coerenza
6) Derivare materiali secondari
```

## Passo 1 - Orientamento rapido

Leggere in questo ordine:

1. `README.md`
2. `wizard/README.md`
3. `wizard/case-schema.md`
4. `wizard/script-master-schema.md`

Obiettivo del passo: capire differenza tra schema, caso e documento madre.

## Passo 2 - Esecuzione Fase 1

### 2.1 Avvio compilazione

1. aprire `wizard/case-schema.json` come riferimento canonico;
2. duplicare `wizard/case-template.json` in un file di lavoro;
3. compilare il file di lavoro con valori coerenti alle opzioni dello schema.

### 2.2 Regole da rispettare

- non modificare lo schema canonico;
- non inventare campi;
- non usare valori fuori opzione;
- se un dato manca, segnalarlo come nodo aperto.

### 2.3 Chiusura Fase 1

Quando la compilazione e completa:

1. salvare il risultato come `case.json`;
2. verificare che il file sia coerente con le sezioni previste;
3. conservare un elenco dei nodi aperti.

## Passo 3 - Validazione del `case.json`

Prima di passare alla Fase 2, verificare almeno:

- identita iniziativa chiara;
- pubblico principale definito;
- obiettivo principale univoco;
- formato e direzione narrativa coerenti;
- limiti e policy dichiarati;
- output atteso esplicitato.

Se due elementi sono in conflitto, correggere il caso prima di proseguire.

## Passo 4 - Esecuzione Fase 2

### 4.1 Preparazione

1. aprire `wizard/script-master.md`;
2. leggere `wizard/script-master-schema.md`;
3. usare `case.json` come unica fonte strutturale del caso.

### 4.2 Generazione

Compilare lo script master sezione per sezione:

- sintesi strategica;
- profilo del pubblico;
- promessa e perimetro;
- architettura contenuti;
- agenda e scaletta;
- linee guida di conduzione;
- limiti e cautele su AI;
- brief derivati.

### 4.3 Regole di qualita

- non inserire dettagli amministrativi irrilevanti;
- non introdurre promesse non supportate;
- non lasciare sezioni chiave in forma generica;
- dichiarare assunzioni e nodi aperti.

## Passo 5 - Verifica finale dello script master

Controllare che il documento:

1. sia utilizzabile da un divulgatore senza spiegazioni esterne;
2. mantenga coerenza con il `case.json`;
3. contenga limiti e rischi dichiarati;
4. renda derivabili i materiali secondari in modo ordinato.

Se la verifica fallisce, correggere prima lo script master.

## Passo 6 - Derivazione materiali

Solo dopo la validazione dello script master:

1. selezionare i derivati necessari;
2. derivare contenuti mantenendo tono, promessa e perimetro;
3. evitare nuovi vincoli non presenti nel documento madre.

Esempi di derivati:

- brief slide;
- brief pagina evento;
- brief email;
- checklist divulgatore;
- follow-up.

## Uso assistito da AI

Se usi AI:

1. caricare prima i documenti in `ai-context/`;
2. usare i template in `ai-context/prompt-templates/`;
3. applicare i protocolli di validazione;
4. respingere output che introducono campi o promesse non supportate.

## Errori frequenti da evitare

- passare ai derivati senza script master validato;
- trattare `case-schema.json` come file da compilare direttamente;
- usare output AI non verificati;
- confondere area canonica e area legacy.

## Checklist operativa rapida

- [ ] Ho letto i documenti base.
- [ ] Ho prodotto `case.json` coerente.
- [ ] Ho validato il caso prima della Fase 2.
- [ ] Ho compilato lo script master completo.
- [ ] Ho verificato coerenza e qualita.
- [ ] Ho derivato i materiali solo a valle del documento madre.

## Riferimenti principali

- `wizard/README.md`
- `wizard/case-schema.md`
- `wizard/script-master-schema.md`
- `ai-context/README.md`
