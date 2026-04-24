# HOW TO - Uso operativo SMART v1.0.0

## Scopo

Guida pratica per applicare SMART in modo conforme, dalla preparazione del contesto alla pubblicazione dei derivati.

## Entrypoint

1. leggi `README.md`;
2. apri `documentation/README.md`;
3. usa questa guida per l'esecuzione operativa.

## Sequenza canonica

```text
Fase 1: case-schema.json -> case.json
Fase 2: case.json -> script-master.md
Fase 3: script-master validato -> derivati/materiali pubblicabili
```

## Prerequisiti minimi

- accesso al repository;
- lettura file `.json` e `.md`;
- obiettivo dell'iniziativa dichiarato;
- disponibilita a rispettare i gate di fase.

## Procedura sintetica

### Passo 1 - Preparazione

Condividi con team/agente almeno:

- `README.md`
- `HOW_TO.md`
- `documentation/wizard/case-schema.json`
- `documentation/wizard/script-master.md`
- `documentation/wizard/fase-3-derivazione-pubblicazione.md`
- `documentation/context-ai/README.md`

### Passo 2 - Fase 1

1. compila il caso sullo schema ufficiale;
2. valida campi, valori e coerenza;
3. consolida `case.json`.

### Passo 3 - Fase 2

1. usa `case.json` come fonte primaria;
2. compila script master completo;
3. valida coerenza, limiti e cautele.

### Passo 4 - Fase 3

1. deriva materiali solo dallo script master validato;
2. valida ogni derivato prima della pubblicazione;
3. blocca output con promesse non supportate.

## Uso web app

- `/wizard`: setup wizard (configurazione e installazione ambiente)
- `/wiki`: documentazione interna navigabile
- `/download`: compilazione/salvataggio/download `case.json`
- `/privacy`, `/cookie-policy`, `/sicurezza-dati`: compliance

## Privacy e dati

Stato corrente:

- DB attivo sul flusso `/download`;
- nessun analytics/profilazione;
- storage tecnico locale per consenso cookie;
- blocco duplicati su stessa email + stesso JSON.

## Errori da evitare

- saltare gate di fase;
- trattare schema come output finale;
- delegare all'AI decisioni critiche non documentate;
- pubblicare derivati non validati.

## Riferimenti

- `documentation/wizard/README.md`
- `documentation/framework/process-overview.md`
- `documentation/context-ai/validation-protocol.md`
