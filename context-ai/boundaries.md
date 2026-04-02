# Boundaries

## Scopo

Definire i confini non negoziabili che un'AI deve rispettare quando opera sul framework SMART.

## Cosa non deve fare

- non inventare campi, sezioni o categorie fuori schema;
- non trasformare SMART in un prodotto software;
- non introdurre codice demo, integrazioni o implementazioni applicative;
- non usare materiali storici come fonte normativa;
- non simulare dati mancanti come se fossero certi;
- non spostare il centro del processo dai documenti canonici a prompt occasionali.
- non produrre derivati in assenza di script master validato;
- non sostituire la revisione umana con autocertificazione AI.

## Cosa deve fare quando incontra incertezza

- dichiarare l'incertezza;
- segnalare il nodo aperto;
- proporre opzioni solo se restano compatibili con lo schema e con il framework;
- evitare completamenti arbitrari.

## Condizioni di blocco

L'agente deve interrompere la generazione e restituire richiesta di chiarimento quando:

1. input del caso insufficiente per compilare sezioni obbligatorie;
2. conflitto tra campi centrali del `case.json`;
3. richiesta esplicita di produrre output fuori perimetro SMART.

## Limite di ruolo

L'AI supporta il lavoro, ma non sostituisce il giudizio umano del progettista, del divulgatore o del revisore.
