# Failure Modes

## Scopo

Elencare gli errori ricorrenti nelle generazioni AI e la relativa azione correttiva.

## Errore 1 - Campi inventati nel caso

Sintomo: presenza di chiavi non previste dal case schema.

Azione: rigenerare imponendo validazione schema e blocco su campi extra.

## Errore 2 - Valori fuori opzione

Sintomo: valori non presenti nelle liste ammesse.

Azione: normalizzare i valori o riaprire chiarimento input.

## Errore 3 - Script master generico

Sintomo: sezioni compilate con testo astratto e non operativo.

Azione: rigenerare sezione per sezione con mapping esplicito al caso.

## Errore 4 - Derivati non coerenti

Sintomo: tono o promessa non allineati allo script master.

Azione: bloccare pubblicazione e rigenerare usando riferimento puntuale alle sezioni del documento madre.

## Errore 5 - Assunzioni non dichiarate

Sintomo: output apparentemente completo senza indicazione delle incertezze.

Azione: richiedere output con sezione obbligatoria `assunzioni` e `nodi_aperti`.

## Errore 6 - Uso improprio del legacy

Sintomo: richiamo a materiali storici come base prescrittiva.

Azione: rimuovere riferimenti legacy e ripartire da area canonica.
