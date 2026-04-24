# Metodologia

## Scopo

Descrivere il metodo SMART come sequenza di decisioni governate da standard, gate e validazioni esplicite.

## Principio centrale

SMART non ottimizza la velocita a scapito della coerenza: ottimizza la qualita ripetibile.

## Struttura metodologica per step

### Step 1 - Intake strutturato

- chiarisce obiettivo, pubblico, formato, limiti e policy;
- obbliga scelta su valori ammessi dallo schema;
- produce `case.json` valido e leggibile.

### Step 2 - Generazione cartella master

- trasforma `case.json` in cartella master modulare;
- esplicita assunzioni, limiti, cautele, rischi;
- prepara base univoca per derivazioni.

### Step 3 - Derivazione e pubblicazione

- esegue tool standardizzati solo da cartella master validata;
- produce output finali o prompt provider-specific senza alterare significato e promesse;
- valida ogni output Step 3 prima della pubblicazione.

## Regole metodologiche non negoziabili

1. prima il perche, poi il per chi, poi il cosa, poi il come;
2. nessuna assunzione implicita: va sempre dichiarata;
3. nessun salto di step;
4. nessuna derivazione senza gate precedente superato;
5. nessuna promessa esterna non tracciabile alla cartella master.

## Esito atteso

Il metodo e applicato correttamente quando persone e agenti possono ottenere output coerenti, verificabili e riusabili mantenendo controllo umano sulle decisioni critiche.
