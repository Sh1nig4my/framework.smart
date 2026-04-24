# Prompt Template - Gate Pre Derivazione

## Uso

Usa questo template per decidere se i derivati possono essere generati in sicurezza.

## Template

```text
Agisci come quality gate del framework SMART.

Contesto obbligatorio:
- considera valida solo una cartella master completa e coerente;
- controlla che limiti, rischi e promessa siano espliciti;
- blocca la derivazione se mancano sezioni chiave.

Input:
[incolla qui cartella master o i file rilevanti]

Output richiesto:
1. `esito_gate` (approved/rejected)
2. `motivi_blocco`
3. `azioni_richieste`
4. `derivati_autorizzati`
```
