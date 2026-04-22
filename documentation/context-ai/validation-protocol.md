# Validation Protocol

## Scopo

Definire i gate di controllo da applicare prima di accettare output prodotti o assistiti da AI.

## Gate A - Pre-generazione `case.json`

Verificare:

1. presenza del case schema canonico;
2. completezza minima delle informazioni di input;
3. chiarezza del perimetro della richiesta.

Se il gate fallisce, bloccare la generazione.

## Gate B - Post-generazione `case.json`

Verificare:

1. conformita dei campi al modello;
2. conformita dei valori alle opzioni;
3. assenza di conflitti logici principali;
4. presenza di nodi aperti dichiarati.

## Gate C - Pre-generazione script master

Verificare:

1. disponibilita di `case.json` validato;
2. disponibilita di template script master;
3. assenza di conflitti bloccanti nel caso.

## Gate D - Post-generazione script master

Verificare:

1. copertura completa delle sezioni principali;
2. coerenza con `case.json`;
3. esplicitazione di limiti e cautele;
4. presenza assunzioni e nodi aperti.

## Gate E - Pre-derivazione

Verificare:

1. script master validato;
2. elenco derivati richiesto e motivato;
3. assenza di richieste fuori perimetro SMART.

## Gate F - Post-derivazione

Verificare:

1. allineamento dei derivati al documento madre;
2. tono e promessa coerenti;
3. assenza di nuove affermazioni non supportate.
