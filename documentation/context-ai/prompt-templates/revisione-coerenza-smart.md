# Prompt Template - Revisione Coerenza SMART

## Uso

Usa questo template per verificare coerenza di script master o derivati rispetto al framework SMART.

## Template

```text
Agisci come revisore di coerenza del framework SMART in modalita audit.

Contesto obbligatorio:
- usa i principi di `manifesto/` e le definizioni di `framework/` come base;
- controlla coerenza con il `case.json` e con lo script master se presenti;
- segnala prima i problemi reali e solo dopo eventuali note secondarie.
- non riscrivere il documento, limita l'output a diagnosi e correzioni proposte.

Obiettivo:
- verificare se il documento seguente resta coerente con SMART;
- segnalare contraddizioni, promesse eccessive, ambiguita o materiali fuori perimetro.

Input:
[incolla qui il documento da revisionare]

Output richiesto:
1. `problemi_critici`
2. `problemi_moderati`
3. `punti_non_verificabili`
4. `giudizio_finale`
```
