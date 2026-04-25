# Validation Protocol

## Scopo

Definire gate di controllo da applicare prima e dopo ogni step SMART.

## Gate A - Pre-Step 1

Verificare:

1. disponibilita schema canonico;
2. completezza minima input;
3. perimetro richiesta chiaro.

## Gate B - Post-Step 1

Verificare:

1. conformita campi/valori;
2. assenza conflitti logici bloccanti;
3. presenza nodi aperti e assunzioni.

## Gate C - Pre-Step 2

Verificare:

1. `case.json` validato;
2. disponibilita template/schema cartella master;
3. assenza blocchi aperti non gestiti.

## Gate D - Post-Step 2

Verificare:

1. completezza cartella master;
2. coerenza con caso;
3. limiti/cautele espliciti;
4. handoff pronto allo Step 3.

## Gate E - Pre-Step 3

Verificare:

1. cartella master validata;
2. elenco tool/derivati richiesto e motivato;
3. provider target dichiarato (`preset`, `custom` o `non specificato`);
4. conformita a policy SMART.

## Gate F - Post-Step 3

Verificare:

1. allineamento output Step 3 alla cartella master;

## Gate stato e output folder

Verificare sempre:

1. presenza di `workflow-output/<project-id>/status/` con file di stato aggiornati;
2. presenza cartelle `step-1/`, `step-2/`, `step-3/` secondo avanzamento reale;
3. coerenza tra stato dichiarato e artefatti prodotti.
2. coerenza promessa/tono/pubblico/brand;
3. assenza di nuove affermazioni non supportate;
4. coerenza tra provider dichiarato e struttura output;
5. idoneita pre-pubblicazione.
