# Working Rules

## Scopo

Definire regole operative obbligatorie per agenti AI su SMART.

## Regole principali

1. tratta `wizard/case-schema.json` come schema vincolante Fase 1;
2. usa solo valori ammessi in `case.json`;
3. tratta `case.json` come fonte primaria del caso;
4. tratta `wizard/cartella-master-template.md` + `wizard/cartella-master-schema.md` come struttura canonica Fase 2;
5. deriva materiali solo da cartella master validata (Fase 3);
6. esplicita sempre assunzioni e nodi aperti se mancano dati;
7. non introdurre promesse o policy non supportate;
8. mantieni tono sobrio, chiaro, non sensazionalistico;
9. non alterare lessico canonico senza richiesta esplicita;
10. blocca avanzamento se il gate di fase non e superato.

## Regole prompt hub (A-H)

Quando il task richiede uso dei prompt:

1. leggi sempre `prompts/README.md` prima dell'esecuzione;
2. seleziona il prompt corretto per categoria o lettera (A-H);
3. rispetta scope consentito/vietato del prompt selezionato;
4. mantieni tracciabilita tra richiesta, file toccati e decisioni.

Vincoli categoria su `documentation/`:

- Alignment e Evolution: modifica consentita se necessaria a mantenere coerenza canonica.
- Maintenance e Workflow: modifica non consentita in nessun caso.

## Formato minimo risposta controllata

1. `output`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione`
