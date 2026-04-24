# HOW TO - Uso operativo SMART v1.0.0

## Scopo

Guida pratica per applicare SMART con o senza agente AI, mantenendo ordine metodologico, sicurezza e standardizzazione.

## Entrypoint

Inizia sempre da `README.md` (entrypoint unico del progetto), poi usa questa guida per l'operativita.

## Prerequisiti minimi

1. accesso al repository;
2. lettura file `.json` e `.md`;
3. obiettivo generale dell'iniziativa;
4. disponibilita a lavorare per fasi.

## Modalita di utilizzo

### Modalita A - Chat AI

Carichi manualmente i file necessari e procedi step by step.

### Modalita B - Agente AI locale

L'agente legge il repository completo e supporta iterazioni continue tra documenti.

## Sequenza canonica

```text
Fase 1: case-schema.json -> case.json
Fase 2: case.json -> script-master.md
Post Fase 2: script-master.md -> materiali derivati
```

## Passo 1 - Preparazione contesto

Condividi o fai leggere almeno:

- `README.md`
- `HOW_TO.md`
- `documentation/wizard/case-schema.json`
- `documentation/wizard/script-master.md`
- `documentation/context-ai/README.md`

## Passo 2 - Fase 1 (intake)

1. usa `documentation/wizard/case-schema.json` come schema vincolante;
2. compila `documentation/wizard/case-template.json`;
3. salva output come `case.json`;
4. dichiara nodi aperti se mancano dati.

Gate minimo prima di proseguire:

- obiettivo chiaro;
- pubblico definito;
- formato coerente;
- limiti/policy espliciti;
- nessun valore fuori schema.

## Passo 3 - Fase 2 (documento madre)

1. apri `documentation/wizard/script-master.md`;
2. usa solo `case.json` come fonte primaria del caso;
3. compila lo script master completo;
4. valida coerenza, limiti e cautele.

## Passo 4 - Derivazione controllata

Solo dopo validazione dello script master puoi derivare:

- brief slide;
- pagina evento;
- email;
- checklist;
- follow-up.

Regola: nessun derivato deve introdurre regole o promesse non presenti nello script master.

## Uso web app (supporto operativo)

- `/how-to` per percorso guidato;
- `/wiki` per documentazione interna ufficiale;
- `/download` per compilazione/salvataggio/download del case JSON;
- pagine legali `/privacy`, `/cookie-policy`, `/sicurezza-dati`.

## Privacy e gestione dati

Stato corrente:

- DB attivo per il flusso `/download` (raccolta richiesta e case JSON);
- nessun analytics;
- solo storage tecnico locale necessario per consenso banner;
- blocco duplicati su combinazione stessa email + stesso JSON.

Evoluzione futura:

- eventuali nuove forme di raccolta verranno introdotte solo con aggiornamento preventivo di policy e consenso;
- nessuna vendita del dato.

## Errori da evitare

- saltare i gate di validazione;
- trattare lo schema come output finale;
- delegare decisioni critiche all'AI;
- passare ai derivati prima della Fase 2 validata.

## Riferimenti

- `README.md`
- `documentation/README.md`
- `documentation/wizard/README.md`
- `documentation/context-ai/README.md`
