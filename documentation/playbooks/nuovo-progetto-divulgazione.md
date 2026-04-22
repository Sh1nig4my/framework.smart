# Nuovo Progetto Di Divulgazione

## Scopo

Guidare l'avvio di una nuova iniziativa divulgativa mediante applicazione completa del framework SMART, garantendo coerenza tra requisiti, documento madre e derivati.

## Ambito di applicazione

Questo playbook e indicato quando:

- l'iniziativa non dispone ancora di un caso strutturato;
- il brief iniziale e incompleto o ambiguo;
- il team necessita una procedura standard di avvio.

## Input minimi

- obiettivo generale dell'iniziativa;
- contesto applicativo iniziale;
- pubblico prevalente ipotizzato;
- eventuali vincoli organizzativi o comunicativi.

## Output attesi

- `case.json` validato;
- script master completo;
- elenco derivati prioritari autorizzati.

## Procedura operativa

1. Chiarisci perche l'iniziativa deve esistere.
2. Identifica il pubblico principale.
3. Definisci l'obiettivo prevalente del progetto.
4. Compila la Fase 1 partendo da `wizard/case-schema.json`.
5. Produci un `case.json` coerente.
6. Genera lo script master in Fase 2.
7. Deriva solo i materiali davvero necessari.

## Gate di controllo

Prima della Fase 2 verificare:

- completezza e coerenza del `case.json`;
- assenza di conflitti tra obiettivo, pubblico e formato;
- esplicitazione di limiti e policy.

Prima dei derivati verificare:

- script master completo;
- presenza di assunzioni e nodi aperti;
- coerenza tra promessa e contenuti.

## Criteri di qualita

- il titolo promesso e coerente con il contenuto previsto;
- il pubblico e uno, anche se possono esistere pubblici secondari;
- il livello di tecnicismo e proporzionato;
- il progetto non dipende da tool o demo non ancora chiariti.

## Rischi ricorrenti

- avvio diretto dei derivati senza documento madre validato;
- sovraccarico contenutistico non coerente con obiettivo e pubblico;
- uso di linguaggio promozionale non supportato da evidenze.

## Riferimenti

- `HOW_TO.md`
- `wizard/fase-1-intake.md`
- `wizard/fase-2-generazione.md`
