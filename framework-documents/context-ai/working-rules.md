# Working Rules

## Scopo

Definire regole operative obbligatorie per agenti AI su SMART.

## Regole principali

1. tratta `wizard/case-schema.json` come schema vincolante Step 1;
2. usa solo valori ammessi in `case.json`;
3. tratta `case.json` come fonte primaria del caso;
4. tratta `wizard/cartella-master-template.md` + `wizard/cartella-master-schema.md` come struttura canonica Step 2;
5. esegue tool Step 3 solo da cartella master validata;
6. per i tool Step 3 dichiara sempre `tool_usato` e `provider_target` (default `non specificato`);
7. esplicita sempre assunzioni e nodi aperti se mancano dati;
8. non introdurre promesse o policy non supportate;
9. mantieni tono sobrio, chiaro, non sensazionalistico;
10. non alterare lessico canonico senza richiesta esplicita;
11. blocca avanzamento se il gate di step non e superato.

## Regole prompt hub (A-D)

Quando il task richiede uso dei prompt:

1. leggi sempre `prompts/README.md` prima dell'esecuzione;
2. seleziona il prompt corretto per categoria o lettera (A-D);
3. rispetta scope consentito/vietato del prompt selezionato;
4. mantieni tracciabilita tra richiesta, file toccati e decisioni.

Vincoli categoria su `framework-documents/`:

- Alignment, Framework Evolution e Maintenance: modifica consentita se necessaria a mantenere coerenza canonica.
- Workflow: modifica non consentita in nessun caso.

## Formato minimo risposta controllata

1. `output`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione`
