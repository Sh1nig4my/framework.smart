# Fase 2 - Generazione dello script master

## Scopo

Trasformare `case.json` in script master completo, coerente e operativo.

## Input

- `case.json` validato (gate Fase 1 superato)
- `wizard/script-master.md`
- `wizard/script-master-schema.md`

## Output

- script master completo
- assunzioni dichiarate
- nodi aperti con impatto operativo

## Procedura

1. leggere integralmente `case.json`;
2. mappare i dati del caso sulle sezioni dello script master;
3. compilare in sequenza tutte le sezioni canoniche;
4. verificare consistenza narrativa, policy e limiti;
5. preparare handoff a Fase 3.

## Gate Fase 2

Il passaggio a Fase 3 e consentito solo se:

1. il documento e completo e leggibile;
2. ogni sezione e tracciabile al caso o ad assunzioni dichiarate;
3. non sono presenti promesse non supportate;
4. lessico e tono risultano coerenti col pubblico.

## Errori da bloccare

- testo generico non operativo;
- omissione limiti/cautele;
- contraddizioni col `case.json`;
- avvio derivazione senza gate Fase 2.
