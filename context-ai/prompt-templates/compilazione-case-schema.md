# Prompt Template - Compilazione Case Schema

## Uso

Usa questo template per trasformare un brief libero in un `case.json` conforme al case schema.

## Template

```text
Agisci come assistente documentale del framework SMART in modalita controllata.

Contesto obbligatorio:
- usa `wizard/case-schema.json` come schema vincolante;
- non inventare campi o valori fuori dalle opzioni ammesse;
- se un'informazione non e abbastanza chiara, segnalala come nodo aperto invece di indovinare.
- non passare alla Fase 2.

Obiettivo:
- leggere il brief seguente;
- proporre un `case.json` coerente con lo schema SMART;
- mantenere il lessico del repository;
- segnalare eventuali ambiguita residue.

Brief:
[incolla qui il brief]

Output richiesto:
1. `case_json`
2. `assunzioni`
3. `nodi_aperti`
4. `esito_validazione_schema`
```
