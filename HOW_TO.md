# HOW TO - Uso operativo SMART v1.4.0

## Scopo

Guida pratica per applicare SMART in modo conforme, dalla preparazione del contesto alla pubblicazione degli output Step 3.

## Entrypoint

1. leggi `README.md`;
2. apri `documentation/README.md`;
3. usa questa guida per l'esecuzione operativa.

## Sequenza canonica

```text
Step 1: case-schema.json -> case.json
Step 2: case.json -> cartella-master/
Step 3: cartella-master validata -> output tool (prompt/materiali) pubblicabili
```

## Prerequisiti minimi

- accesso al repository;
- lettura file `.json` e `.md`;
- obiettivo dell'iniziativa dichiarato;
- disponibilita a rispettare i gate di step.

## Procedura sintetica

### Passo 1 - Preparazione

Condividi con team/agente almeno:

- `README.md`
- `HOW_TO.md`
- `documentation/wizard/case-schema.json`
- `documentation/wizard/cartella-master-template.md`
- `documentation/wizard/cartella-master-schema.md`
- `documentation/wizard/step-3-derivazione-pubblicazione.md`
- `documentation/context-ai/README.md`

### Passo 2 - Step 1

1. compila il caso sullo schema ufficiale;
2. valida campi, valori e coerenza;
3. consolida `case.json`.

### Passo 3 - Step 2

1. usa `case.json` come fonte primaria;
2. compila la cartella master completa;
3. valida coerenza, limiti e cautele.

### Passo 4 - Step 3

1. esegui tool Step 3 solo dalla cartella master validata;
2. definisci provider target (o usa default `non specificato`);
3. valida ogni output Step 3 prima della pubblicazione;
4. blocca output con promesse non supportate.

## Uso web app

- `/wizard`: setup wizard (configurazione e installazione ambiente)
- `/workflow`: percorso guidato con storia standard + accesso allo Step 1
- `/wiki`: documentazione interna navigabile
- `/create-json-master`: compilazione/salvataggio/download `case.json`
- `/privacy`, `/cookie-policy`, `/sicurezza-dati`: compliance

## Privacy e dati

Stato corrente:

- DB attivo sul flusso `/create-json-master`;
- nessun analytics/profilazione;
- storage tecnico locale per consenso cookie;
- blocco duplicati su stessa email + stesso JSON.

## Errori da evitare

- saltare gate di step;
- trattare schema come output finale;
- delegare all'AI decisioni critiche non documentate;
- pubblicare output Step 3 non validati.

## Riferimenti

- `documentation/wizard/README.md`
- `documentation/framework/process-overview.md`
- `documentation/context-ai/validation-protocol.md`
