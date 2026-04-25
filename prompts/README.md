# SMART Prompt Hub

Questo file e l'entrypoint unico della cartella `prompts/`.

## Scopo

Ridurre i prompt al set minimo essenziale, con regole chiare tra framework e app e con integrazione automatica dopo ogni aggiornamento documentale.

## Primo accesso: cosa leggere e in che ordine

1. leggi `README.md`;
2. leggi `HOW_TO.md`;
3. torna su questo file e scegli il prompt corretto (A-D).

## Protocollo obbligatorio di invocazione

Quando vuoi usare un agente, usa sempre questo formato:

```text
Leggi prompts/README.md.
Esegui prompts/<nome-prompt>.md.
Istruzioni custom: <eventuali vincoli o obiettivi extra>.
```

## Catalogo prompt ufficiali (ridotto)

Indice rapido (A-D):

```text
A - alignment.md
B - framework-evolution.md
C - maintenance.md
D - workflow-execution.md
```

## Come scegliere il prompt giusto

- `alignment.md`: riallinea framework e app rispetto alla documentazione ufficiale e alla sua versione.
- `framework-evolution.md`: evolve il framework docs-first in `framework-documents/`, poi propaga in app in modo automatico.
- `maintenance.md`: revisione completa di coerenza (link, ambiguita, incoerenze) e proposta/implementazione fix.
- `workflow-execution.md`: esecuzione operativa Step 1/2/3 con tracciabilita completa, interrompibilita e output in `workflow-output/`.

## Regole globali valide per tutti i prompt

- non alterare terminologia canonica SMART;
- usare sempre il termine `step` (mai `fase` o `phase`) nei nuovi contenuti;
- mantenere tracciabilita tra decisioni e file modificati;
- esplicitare ipotesi e nodi aperti quando mancano dati;
- non inventare regole fuori documentazione;
- eseguire verifiche finali coerenti con lo scope;
- per Step 3 applicare output contract e gate canonici provider-aware.

## Regola framework-app obbligatoria

Dopo ogni modifica in `framework-documents/`:

1. eseguire review dell'app;
2. propagare le modifiche nelle pagine applicative;
3. applicare il processo in modo automatico.

Pagine minime obbligatorie:

- `src/app/page.tsx` (home)
- `src/app/workflow/page.tsx`
- `src/app/wizard/page.tsx`
- `src/app/wiki/*`
- `src/app/privacy/page.tsx`
- `src/app/sicurezza-dati/page.tsx`

## Criterio di conformita finale

Un'esecuzione e conforme quando:

1. rispetta lo scope del prompt;
2. preserva catena SMART (Step 1 -> Step 2 -> Step 3);
3. non introduce conflitti con artefatti canonici;
4. lascia output verificabili in `workflow-output/` quando il task e operativo.
