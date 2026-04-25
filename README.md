# SMART Framework v1.5.1

SMART e un framework agentico no-code per progettare, governare e diffondere iniziative formative con processi standardizzati, sicurezza operativa e uso responsabile dell'AI.

Questo `README.md` e l'entrypoint unico del progetto per persone e agenti AI.

## Cosa include il repository

- framework documentale in `documentation/`;
- web app Next.js in `app/` per facilitare adozione, onboarding e operativita del framework;
- guida operativa in `HOW_TO.md`;
- policy contributive e rilascio in `CONTRIBUTING.md` e `CHANGELOG.md`.

## Perche SMART

Il framework risolve un problema ricorrente: passare da richieste frammentarie a output coerenti senza improvvisazione.

Catena canonica:

```text
Step 1: case-schema.json -> case.json
Step 2: case.json -> cartella-master/
Step 3: cartella-master validata -> output tool (prompt/materiali)
```

SMART mantiene il controllo umano, rende tracciabile il lavoro degli agenti e protegge coerenza tra promessa, contenuti e diffusione.

## Avvio rapido

1. Leggi `HOW_TO.md`.
2. Consulta `documentation/wizard/README.md`.
3. Usa `documentation/wizard/case-schema.json` per lo Step 1.
4. Usa `documentation/wizard/cartella-master-template.md` e `documentation/wizard/cartella-master-schema.md` per lo Step 2.
5. Usa `documentation/wizard/step-3-derivazione-pubblicazione.md` per lo Step 3.

Per avviare la web app locale:

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Se entri per la prima volta (persone e agenti)

Percorso consigliato per evitare errori di scope:

1. leggi questo `README.md` per capire struttura e obiettivi;
2. apri `prompts/README.md` e scegli il prompt corretto (A-D) in base al tipo di task;
3. usa il formato standard:

```text
Leggi prompts/README.md.
Esegui prompts/<nome-prompt>.md.
Istruzioni custom: <obiettivo, vincoli, output atteso>.
```

4. prima di modificare file, verifica scope consentito/vietato del prompt selezionato;
5. esegui validazioni tecniche coerenti con il task (`npm run lint`, `npm run build`, test disponibili).

Quando hai dubbi sul prompt da usare, inizia da `prompts/README.md`: contiene mappa decisionale rapida e catalogo ufficiale aggiornato.

## Web app integrata al framework

La web app non e separata dal framework: ne e parte operativa.

Pagine principali attive:

- `/` homepage strategica;
- `/wizard` setup wizard (configurazione e installazione ambiente);
- `/workflow` pagina guida con storia standard e accesso operativo agli step;
- `/wiki` documentazione interna ufficiale;
- `/create-json-master` compilazione completa dello Step 1 con salvataggio e download JSON.

Stato attuale degli step in app:

- Step 1 operativo in interfaccia (`/create-json-master`);
- Step 2 e Step 3 presenti nel workflow SMART ma gestiti via documentazione, workflow locale e supporto agentico.

Pagine legali di supporto:

- `/privacy`, `/cookie-policy`, `/sicurezza-dati` per compliance e trasparenza.

## Privacy e dati (stato attuale)

- database applicativo attivo per il flusso `/create-json-master`;
- salvataggio record con dati richiesta, JSON completo, data e ora per manutenzione e miglioramento del framework;
- blocco duplicati su combinazione `stessa email + stesso JSON`;
- nessun analytics;
- nessuna profilazione;
- storage locale tecnico per consenso cookie necessari.

## Convenzione backend (obbligatoria)

Per tutte le API applicative SMART si applica questa struttura:

```text
API route (controller) -> service -> repository -> database
```

Regole:

- le API route agiscono come controller HTTP;
- i controller non chiamano mai direttamente i repository;
- i controller chiamano i service;
- i service orchestrano logica applicativa, controlli e gestione errori;
- i repository eseguono accesso diretto al database;
- la logica DB resta isolata in `app/server/lib` e `app/server/repositories`.

Questa convenzione e adottata per scalabilita, chiarezza didattica, manutenibilita e gestione errori evolutiva.

## Percorso documentale consigliato

- `HOW_TO.md`
- `documentation/README.md`
- `documentation/framework/`
- `documentation/manifesto/`
- `documentation/wizard/`
- `documentation/context-ai/`

## Contatti e repository

- Repository: `https://github.com/Sh1nig4my/framework.smart`
- Email: `dev.emanuele.ienna@gmail.com`

## Licenza

MIT. Vedi `LICENSE`.
