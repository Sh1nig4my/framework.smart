# Context AI

## Scopo

Definire confini e protocolli per usare agenti AI in modo conforme al framework SMART.

## Principio operativo

Un output AI e valido solo se:

1. rispetta schema e vincoli Step 1;
2. resta tracciabile al `case.json`;
3. rispetta la struttura della cartella master in Step 2;
4. rispetta la coerenza derivativa in Step 3;
5. supera i gate del validation protocol.

## Ordine di lettura

1. `context-ai/smart-system-context.md`
2. `context-ai/working-rules.md`
3. `context-ai/boundaries.md`
4. `context-ai/output-contracts.md`
5. `context-ai/validation-protocol.md`
6. `context-ai/failure-modes.md`

## Regola di sicurezza

L'AI supporta il processo ma non sostituisce giudizio e responsabilita umane.

## Nota operativa prompt

Quando il task e guidato da prompt, applicare il protocollo in `prompts/README.md` (indice A-D) e rispettare i vincoli di categoria su `framework-documents/`.

## Template principali

Per uso operativo sulla catena Step 1 -> Step 2 -> Step 3:

1. `context-ai/prompt-templates/compilazione-case-schema.md`
2. `context-ai/prompt-templates/validazione-case-json.md`
3. `context-ai/prompt-templates/case-json-a-cartella-master.md`
4. `context-ai/prompt-templates/gate-pre-derivazione.md`
5. `context-ai/prompt-templates/derivati-da-cartella-master.md`
6. `context-ai/prompt-templates/revisione-coerenza-smart.md`

Riferimenti wizard allineati:

- `wizard/step-2-generazione.md`
- `wizard/cartella-master-schema.md`
- `wizard/cartella-master-validation.md`
