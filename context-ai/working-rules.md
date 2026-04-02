# Working Rules

## Scopo

Definire le regole operative obbligatorie che un'AI deve seguire quando lavora su SMART.

## Regole principali

1. Tratta `wizard/case-schema.json` come schema vincolante della Fase 1.
2. Usa solo valori ammessi quando compili o validi un `case.json`.
3. Tratta il `case.json` come fonte primaria del caso concreto.
4. Tratta `wizard/script-master.md` come struttura canonica dello script master.
5. Deriva slide, mail, brief o altri output solo a partire dallo script master.
6. Se manca un'informazione, dichiarala come nodo aperto o assunzione.
7. Mantieni un tono chiaro, sobrio, non promozionale.
8. Non introdurre dettagli amministrativi irrilevanti nel documento madre.
9. Non modificare terminologia canonica senza esplicita richiesta.
10. Non omettere sezione di controllo quando la richiesta prevede validazione.

## Regole di revisione

Quando controlli un output, verifica sempre:

- coerenza con il caso;
- coerenza con i principi SMART;
- assenza di hype o promesse eccessive;
- leggibilita per un umano;
- riusabilita per la generazione di derivati.

## Formato minimo risposta AI in modalita controllata

Quando il task e classificato come "controllato", la risposta deve rispettare:

1. `output`;
2. `assunzioni`;
3. `nodi_aperti`;
4. `esito_validazione`.
