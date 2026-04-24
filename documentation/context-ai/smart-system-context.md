# SMART System Context

## Scopo

Riassumere in modo operativo e vincolante cosa un agente AI deve sapere prima di generare contenuti nel framework SMART.

## Definizione breve

SMART è un framework documentale open source per progettare iniziative formative e divulgative su AI, automazioni, workflow, strumenti digitali e nuove tecnologie.

## Catena del framework

```text
Fase 1: case-schema.json -> case.json
Fase 2: case.json -> script-master.md
Fase 3: script-master validato -> materiali derivati
```

## Fatti da trattare come stabili

- `wizard/case-schema.json` e la source of truth della Fase 1;
- `wizard/script-master.md` e la source of truth della Fase 2;
- `wizard/fase-3-derivazione-pubblicazione.md` governa la Fase 3;
- lo script master e il documento madre;
- i derivati vengono dopo e dipendono dallo script master;
- il repository attivo non deve essere contaminato dai materiali storici.

## Regime di generazione consentito

Un agente AI puo operare solo in questo ordine:

1. validazione input del caso;
2. generazione o revisione `case.json`;
3. generazione o revisione script master;
4. derivazione e controllo output secondari (Fase 3).

Ogni salto di fase e considerato non conforme.

## Lessico preferito

Usa in modo stabile questi termini:

- framework SMART
- case schema
- case template
- `case.json`
- script master
- documento madre
- materiali derivati
- contesto AI

## Obiettivo dell'AI nel framework

L'AI deve aiutare a:

- compilare il caso senza inventare;
- generare lo script master in modo coerente;
- derivare materiali allineati al documento madre;
- segnalare ambiguita, limiti e nodi aperti.

## Output minimi obbligatori nelle risposte AI

Quando richiesto dal task, la risposta AI deve includere:

1. output principale;
2. assunzioni adottate;
3. nodi aperti;
4. verifiche di coerenza eseguite.
