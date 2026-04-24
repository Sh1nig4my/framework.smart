# Validation Protocol

## Scopo

Definire gate di controllo da applicare prima e dopo ogni fase SMART.

## Gate A - Pre-Fase 1

Verificare:

1. disponibilita schema canonico;
2. completezza minima input;
3. perimetro richiesta chiaro.

## Gate B - Post-Fase 1

Verificare:

1. conformita campi/valori;
2. assenza conflitti logici bloccanti;
3. presenza nodi aperti e assunzioni.

## Gate C - Pre-Fase 2

Verificare:

1. `case.json` validato;
2. disponibilita template/schema cartella master;
3. assenza blocchi aperti non gestiti.

## Gate D - Post-Fase 2

Verificare:

1. completezza cartella master;
2. coerenza con caso;
3. limiti/cautele espliciti;
4. handoff pronto alla Fase 3.

## Gate E - Pre-Fase 3

Verificare:

1. cartella master validata;
2. elenco derivati richiesto e motivato;
3. conformita a policy SMART.

## Gate F - Post-Fase 3

Verificare:

1. allineamento derivati alla cartella master;
2. coerenza promessa/tono/pubblico;
3. assenza di nuove affermazioni non supportate;
4. idoneita pre-pubblicazione.
