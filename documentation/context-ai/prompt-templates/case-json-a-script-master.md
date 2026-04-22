# Prompt Template - Da Case Json A Script Master

## Uso

Usa questo template per trasformare un `case.json` validato nello script master.

## Template

```text
Agisci come documentation architect del framework SMART in modalita controllata.

Contesto obbligatorio:
- usa il `case.json` come fonte primaria del caso;
- usa `wizard/script-master.md` come struttura canonica del documento finale;
- rispetta i principi di SMART e non introdurre promesse o dettagli non supportati;
- se mancano informazioni, dichiarale come nodi aperti o assunzioni.
- non generare derivati in questa fase.

Obiettivo:
- generare uno script master completo, chiaro e leggibile dal divulgatore o docente;
- rendere espliciti tono, sequenza, limiti, supporti e derivazioni.

Input:
[incolla qui `case.json`]

Output richiesto:
1. `script_master`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione_coerenza`
```
