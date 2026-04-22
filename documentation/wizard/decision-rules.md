# Decision Rules

## Scopo

Definire la gerarchia decisionale e i vincoli di produzione del wizard SMART.

## Gerarchia di precedenza

Ordine vincolante in caso di conflitto:

1. `wizard/case-schema.json` per struttura Fase 1;
2. `case.json` per contenuto del caso concreto;
3. `wizard/script-master.md` per struttura Fase 2;
4. `framework/` e `manifesto/` per principi e terminologia;
5. `playbooks/` come adattamento pratico;
6. nessuna area storica prescrittiva nel repository attivo.

## Regole di trasformazione Fase 1 -> Fase 2

- il `case.json` e sorgente primaria di contenuto;
- il framework orienta l'interpretazione ma non autorizza contraddizioni;
- ogni assunzione deve essere dichiarata;
- ogni assenza informativa deve diventare nodo aperto;
- ogni sezione dello script master deve essere tracciabile a input validi.

## Regole sui materiali derivati

- i derivati sono consentiti solo dopo validazione dello script master;
- il significato non puo essere alterato nel cambio canale;
- i derivati non possono introdurre nuove promesse non presenti nel documento madre;
- lo script master resta unico centro di verita.

## Regole di qualita vincolanti

Un output e accettabile solo se:

1. e coerente con il caso;
2. e formalmente leggibile e operativo;
3. rispetta tono e limiti dichiarati;
4. non contiene invenzioni o ipotesi implicite.
