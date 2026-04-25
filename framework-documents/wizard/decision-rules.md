# Decision Rules

## Scopo

Stabilire regole di precedenza e criteri di accettazione output per tutti gli step del wizard SMART.

## Precedenza in conflitto

1. `wizard/case-schema.json` (struttura Step 1)
2. `case.json` (contenuto caso concreto)
3. `wizard/cartella-master-template.md` + `wizard/cartella-master-schema.md` (struttura Step 2)
4. `framework/` + `manifesto/` (principi, lessico, governance)
5. `playbooks/` (adattamento operativo)

## Regole Step 1 -> Step 2

- il contenuto dello Step 2 deriva dal `case.json`;
- lo Step 2 produce una cartella master modulare, non un documento unico;
- assunzioni e nodi aperti devono essere espliciti;
- nessuna contraddizione e nessuna invenzione fuori caso.

## Regole Step 2 -> Step 3

- i derivati sono consentiti solo dopo gate Step 2;
- i derivati devono riferirsi a file/section source nella cartella master;
- il significato non puo essere alterato nel cambio canale;
- nessuna nuova promessa e nessuna nuova regola implicita.
- ogni output Step 3 deve dichiarare `tool_usato` e `provider_target`;
- modalita provider ibrida: preset consigliati, custom consentito, default `non specificato`.

## Regole di qualita comuni

Un output e accettabile solo se:

1. e coerente con lo step e gli input canonici;
2. e leggibile e operativo;
3. rispetta tono, limiti e policy;
4. supera il gate dello step corrente.
