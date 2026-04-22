# Fase 1 - Intake strutturato

## Scopo

Produrre un `case.json` formalmente valido e sostanzialmente coerente, pronto per alimentare la Fase 2.

## Input della fase

- `wizard/case-schema.json`;
- `wizard/case-template.json`;
- informazioni disponibili da promotore, committente o team progettuale.

## Output della fase

- `case.json` compilato;
- elenco dei nodi aperti non risolti;
- elenco delle assunzioni eventualmente adottate.

## Procedura operativa

1. Leggere lo schema canonico e identificare sezioni obbligatorie.
2. Compilare il template senza alterare struttura e naming dei campi.
3. Convertire eventuali risposte libere nei valori ammessi dal modello.
4. Verificare coerenza trasversale tra pubblico, obiettivo, formato e contenuti.
5. Consolidare il file finale come `case.json`.

## Regole obbligatorie

- usare esclusivamente valori previsti dallo schema;
- non aggiungere campi o sezioni fuori modello;
- non sostituire decisioni con frasi generiche;
- non completare in modo arbitrario informazioni mancanti;
- segnalare sempre nodi aperti e assunzioni.

## Definition of done - Fase 1

La Fase 1 e completata solo se:

1. tutte le aree centrali del caso sono compilate;
2. non esistono conflitti logici evidenti;
3. i vincoli editoriali e di policy sono espliciti;
4. l'output principale risulta `script_master`;
5. il file `case.json` e utilizzabile senza interpretazioni implicite.

## Gate di validazione minima

Prima di avviare la Fase 2 confermare:

- tipologia iniziativa e obiettivo principale;
- pubblico principale e livello di maturita;
- direzione narrativa e stile didattico;
- profondita contenutistica e ruolo dei tool;
- tone profile, policy profile, excluded elements;
- material generation scope.

## Uso assistito da AI

Se la compilazione e assistita da AI:

1. fornire sempre `case-schema.json` come vincolo;
2. richiedere output in formato `case.json` coerente al modello;
3. richiedere sezione esplicita "nodi aperti";
4. respingere output con campi inventati o valori fuori opzione.
