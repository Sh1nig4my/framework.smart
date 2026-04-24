# Decision Rules

## Scopo

Stabilire regole di precedenza e criteri di accettazione output per tutte le fasi del wizard SMART.

## Precedenza in conflitto

1. `wizard/case-schema.json` (struttura Fase 1)
2. `case.json` (contenuto caso concreto)
3. `wizard/cartella-master-template.md` + `wizard/cartella-master-schema.md` (struttura Fase 2)
4. `framework/` + `manifesto/` (principi, lessico, governance)
5. `playbooks/` (adattamento operativo)

## Regole Fase 1 -> Fase 2

- il contenuto della Fase 2 deriva dal `case.json`;
- la Fase 2 produce una cartella master modulare, non un documento unico;
- assunzioni e nodi aperti devono essere espliciti;
- nessuna contraddizione e nessuna invenzione fuori caso.

## Regole Fase 2 -> Fase 3

- i derivati sono consentiti solo dopo gate Fase 2;
- i derivati devono riferirsi a file/section source nella cartella master;
- il significato non puo essere alterato nel cambio canale;
- nessuna nuova promessa e nessuna nuova regola implicita.
- ogni output Fase 3 deve dichiarare `tool_usato` e `provider_target`;
- modalita provider ibrida: preset consigliati, custom consentito, default `non specificato`.

## Regole di qualita comuni

Un output e accettabile solo se:

1. e coerente con la fase e gli input canonici;
2. e leggibile e operativo;
3. rispetta tono, limiti e policy;
4. supera il gate della fase corrente.
