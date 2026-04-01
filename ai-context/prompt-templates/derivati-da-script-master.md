# Prompt Template - Derivati Da Script Master

## Uso

Usa questo template per generare materiali derivati solo dopo validazione dello script master.

## Template

```text
Agisci come assistente del framework SMART per derivazione controllata.

Contesto obbligatorio:
- tratta lo script master come unico documento madre;
- non introdurre messaggi, promesse o CTA non presenti o non implicati chiaramente nello script master;
- mantieni tono, pubblico, limiti e perimetro del documento sorgente.
- blocca la generazione se lo script master e incompleto.

Obiettivo:
- generare i materiali derivati richiesti in modo coerente.

Script master:
[incolla qui lo script master]

Derivati richiesti:
[indica qui i derivati da produrre]

Output richiesto:
1. `derivati`
2. `fonti_script_master`
3. `limiti_pubblicazione`
4. `esito_validazione_derivati`
```
