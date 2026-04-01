# Prompt Template - Validazione Case Json

## Uso

Usa questo template per validare un `case.json` prima della Fase 2.

## Template

```text
Agisci come validatore del framework SMART.

Contesto obbligatorio:
- usa `wizard/case-schema.json` come riferimento di conformita;
- non modificare direttamente il file;
- segnala con precisione campo, problema e impatto.

Input:
[incolla qui case.json]

Output richiesto:
1. `esito_validazione` (pass/fail)
2. `errori_bloccanti`
3. `warning`
4. `azioni_correttive`
```
