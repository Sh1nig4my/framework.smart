# Fase 2 - Generazione dello script master

## Scopo

Trasformare il `case.json` in uno script master completo, coerente e immediatamente utilizzabile in conduzione.

## Input della fase

- `case.json` validato;
- `wizard/script-master.md`;
- `wizard/script-master-schema.md`;
- documenti canonici di `framework/` e `manifesto/` ove necessari.

## Output della fase

- script master completo;
- elenco assunzioni esplicite;
- elenco nodi aperti con impatto operativo.

## Procedura operativa

1. Leggere integralmente `case.json`.
2. Mappare i dati del caso sulle sezioni dello script master.
3. Compilare la struttura `wizard/script-master.md` in sequenza.
4. Verificare consistenza interna del documento.
5. Integrare limiti, cautele e rischi senza omissioni.
6. Validare il documento prima della derivazione materiali.

## Regole obbligatorie

- ogni sezione deve derivare da informazioni presenti nel caso o da assunzioni dichiarate;
- non introdurre promesse non supportate;
- non usare formulazioni generiche prive di valore operativo;
- non trasformare il documento madre in una scheda amministrativa;
- non derivare materiali secondari prima del gate di qualita.

## Definition of done - Fase 2

La Fase 2 e completata solo se lo script master:

1. rappresenta integralmente il progetto;
2. e utilizzabile da divulgatore o docente senza supporti esterni;
3. esplicita limiti, rischi e confini della promessa;
4. consente derivazioni coerenti e tracciabili;
5. include nodi aperti e assunzioni residue.

## Gate di validazione pre-derivazione

Prima di generare asset derivati confermare:

- coerenza con `case.json`;
- completezza delle sezioni strategiche e operative;
- tono e lessico allineati al pubblico;
- cautele AI esplicite;
- criteri di qualita soddisfatti.

## Uso assistito da AI

Se la generazione e assistita da AI:

1. imporre come vincolo `wizard/script-master.md`;
2. richiedere output con sezione "assunzioni" e "nodi aperti";
3. eseguire revisione umana prima della validazione finale;
4. respingere output non tracciabili al caso.
