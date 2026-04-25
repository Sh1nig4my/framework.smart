# Step 1 - Intake strutturato

## Scopo

Produrre un `case.json` formalmente valido e sostanzialmente coerente.

## Input

- `wizard/case-schema.json`
- `wizard/case-template.json`
- requisiti del promotore/committente

## Output

- `case.json` pronto per Step 2
- nodi aperti esplicitati
- assunzioni esplicitate

## Procedura

1. leggere integralmente schema e campi obbligatori;
2. compilare il caso senza alterare struttura e naming;
3. convertire input liberi nei valori ammessi;
4. verificare coerenza trasversale (obiettivo/pubblico/formato/limiti);
5. salvare come `case.json` e avviare gate.

## Gate Step 1

Il passaggio a Step 2 e consentito solo se:

1. tutti i campi obbligatori sono valorizzati;
2. non ci sono valori fuori opzione;
3. non ci sono conflitti logici evidenti;
4. policy e limiti risultano espliciti.

## Errori da bloccare

- campi inventati;
- valori non ammessi dallo schema;
- compilazione implicita senza assunzioni dichiarate;
- passaggio prematuro allo Step 2.
