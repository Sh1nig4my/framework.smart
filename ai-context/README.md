# AI Context

## Scopo

`ai-context/` definisce il perimetro operativo per l'uso di AI sul framework SMART. L'obiettivo e ridurre generazioni non conformi e rendere verificabile ogni output prodotto.

## Principio di controllo

Un output AI e valido solo se:

1. rispetta i vincoli del case schema;
2. resta tracciabile al `case.json`;
3. rispetta la struttura di `wizard/script-master.md`;
4. dichiara assunzioni e nodi aperti;
5. supera il protocollo di validazione.

## Ordine di lettura raccomandato

1. `ai-context/smart-system-context.md`
2. `ai-context/working-rules.md`
3. `ai-context/boundaries.md`
4. `ai-context/output-contracts.md`
5. `ai-context/validation-protocol.md`
6. `ai-context/failure-modes.md`

Poi consultare i file canonici del wizard.

## Documenti della cartella

- `smart-system-context.md`: mappa sintetica del sistema SMART.
- `working-rules.md`: regole operative obbligatorie.
- `boundaries.md`: confini e divieti.
- `output-contracts.md`: formato atteso degli output principali.
- `validation-protocol.md`: gate di controllo pre e post generazione.
- `failure-modes.md`: errori ricorrenti e azioni correttive.
- `prompt-templates/`: template guidati con vincoli espliciti.

## Regola di sicurezza

L'AI non deve sostituire il giudizio umano. Deve supportare il processo entro i limiti formali del framework.
