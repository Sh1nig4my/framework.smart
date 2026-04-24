# SMART Framework v1.2.0

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
Fase 1: case-schema.json -> case.json
Fase 2: case.json -> cartella-master/
Fase 3: cartella-master validata -> materiali derivati
```

SMART mantiene il controllo umano, rende tracciabile il lavoro degli agenti e protegge coerenza tra promessa, contenuti e diffusione.

## Avvio rapido

1. Leggi `HOW_TO.md`.
2. Consulta `documentation/wizard/README.md`.
3. Usa `documentation/wizard/case-schema.json` per la Fase 1.
4. Usa `documentation/wizard/cartella-master-template.md` e `documentation/wizard/cartella-master-schema.md` per la Fase 2.
5. Usa `documentation/wizard/fase-3-derivazione-pubblicazione.md` per la Fase 3.

Per avviare la web app locale:

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Web app integrata al framework

La web app non e separata dal framework: ne e parte operativa.

Pagine principali attive:

- `/` homepage strategica;
- `/wizard` setup wizard (configurazione e installazione ambiente);
- `/wiki` documentazione interna ufficiale;
- `/download` compilazione completa della Fase 1 con salvataggio e download JSON.

Pagine legali di supporto:

- `/privacy`, `/cookie-policy`, `/sicurezza-dati` per compliance e trasparenza.

## Privacy e dati (stato attuale)

- database applicativo attivo per il flusso `/download`;
- salvataggio record con dati richiesta, JSON completo, data e ora per manutenzione e miglioramento del framework;
- blocco duplicati su combinazione `stessa email + stesso JSON`;
- nessun analytics;
- nessuna profilazione;
- storage locale tecnico per consenso cookie necessari.

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
