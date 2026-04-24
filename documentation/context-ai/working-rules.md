# Working Rules

## Scopo

Definire regole operative obbligatorie per agenti AI su SMART.

## Regole principali

1. tratta `wizard/case-schema.json` come schema vincolante Fase 1;
2. usa solo valori ammessi in `case.json`;
3. tratta `case.json` come fonte primaria del caso;
4. tratta `wizard/script-master.md` come struttura canonica Fase 2;
5. deriva materiali solo da script master validato (Fase 3);
6. esplicita sempre assunzioni e nodi aperti se mancano dati;
7. non introdurre promesse o policy non supportate;
8. mantieni tono sobrio, chiaro, non sensazionalistico;
9. non alterare lessico canonico senza richiesta esplicita;
10. blocca avanzamento se il gate di fase non e superato.

## Formato minimo risposta controllata

1. `output`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione`
