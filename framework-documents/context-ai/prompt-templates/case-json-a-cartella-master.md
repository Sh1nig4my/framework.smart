# Prompt Template - Da Case Json A Cartella Master

## Uso

Usa questo template per trasformare un `case.json` validato in cartella master.

## Template

```text
Agisci come documentation architect del framework SMART in modalita controllata.

Contesto obbligatorio:
- usa il `case.json` come fonte primaria del caso;
- usa `wizard/cartella-master-template.md` e `wizard/cartella-master-schema.md` come struttura canonica del risultato;
- rispetta i principi SMART e non introdurre promesse o dettagli non supportati;
- se mancano informazioni, dichiarale come nodi aperti o assunzioni.
- non generare derivati in questo step.

Obiettivo:
- generare una cartella master completa, chiara e leggibile da divulgatore, team e agenti;
- rendere espliciti tono, sequenza, limiti, supporti e handoff Step 3.

Input:
[incolla qui `case.json`]

Output richiesto:
1. `cartella_master`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione_coerenza`
```
