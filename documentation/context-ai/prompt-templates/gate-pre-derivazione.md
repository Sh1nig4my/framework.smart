# Prompt Template - Gate Pre Fase 3

## Uso

Usa questo template per decidere se i tool Fase 3 possono essere eseguiti in sicurezza.

## Template

```text
Agisci come quality gate del framework SMART per la Fase 3.

Contesto obbligatorio:
- considera valida solo una cartella master completa e coerente;
- controlla che limiti, rischi e promessa siano espliciti;
- verifica che handoff Fase 3 dichiari tool richiesti e provider target;
- blocca la derivazione se mancano sezioni chiave.

Input:
[incolla qui cartella master o i file rilevanti]

Output richiesto:
1. `esito_gate` (approved/rejected)
2. `motivi_blocco`
3. `azioni_richieste`
4. `tool_autorizzati`
5. `provider_target_esito`
```
