# Prompt Template - Gate Pre Derivazione

## Uso

Usa questo template per decidere se i derivati possono essere generati in sicurezza.

## Template

```text
Agisci come quality gate del framework SMART.

Contesto obbligatorio:
- considera valido solo uno script master completo e coerente;
- controlla che limiti, rischi e promessa siano espliciti;
- blocca la derivazione se mancano sezioni chiave.

Input:
[incolla qui script master]

Output richiesto:
1. `esito_gate` (approved/rejected)
2. `motivi_blocco`
3. `azioni_richieste`
4. `derivati_autorizzati`
```
