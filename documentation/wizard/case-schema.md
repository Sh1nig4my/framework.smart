# Case Schema

## Scopo

Definire in modo formale la funzione di `wizard/case-schema.json`, le regole di compilazione e i criteri minimi di validazione dello Step 1.

## Cos'e

`case-schema.json` e il file canonico dello Step 1. Definisce la struttura completa della raccolta requisiti e rappresenta il vincolo principale per ogni compilazione assistita o manuale.

Il file non contiene un caso. Contiene il modello ammissibile del caso.

## Perche esiste

Lo schema esiste per ridurre ambiguita in ingresso e garantire coerenza in uscita.

Rispetto ai brief liberi, il modello a opzioni chiuse consente:

- piu leggibili;
- piu confrontabili;
- piu facili da validare;
- piu affidabili per il lavoro umano e per il supporto AI.

## Che tipo di file e

E un file JSON strutturato in:

- un blocco `schema` con metadati e output atteso;
- una lista `sections` con macro-aree di raccolta;
- una lista `fields` per ogni sezione;
- opzioni predefinite per i campi selezionabili;
- eventuali dipendenze tra campi.

## Chi lo usa

Lo schema e utilizzato da:

- progettisti;
- formatori;
- consulenti;
- divulgatori;
- assistenti AI configurati correttamente.

## Come si usa

1. Usare `wizard/case-schema.json` come riferimento immutabile.
2. Compilare `wizard/case-template.json` o file equivalente con stessa struttura.
3. Selezionare solo valori ammessi dal campo.
4. Consolidare l'istanza finale in `case.json`.
5. Eseguire validazione pre-Step 2.

## Perche usa risposte chiuse

Le risposte chiuse non riducono la qualita progettuale. Rendono invece esplicite le decisioni che hanno impatto reale sulla conduzione e sui derivati.

Questo approccio aiuta a:

- evitare interpretazioni arbitrarie;
- mantenere il lessico stabile;
- permettere a un'AI di lavorare senza inventare categorie;
- mantenere allineati intake e generazione.

## Relazione tra i file

### `case-schema.json`

Lo schema canonico della raccolta requisiti.

### `wizard/case-template.json`

Una base di compilazione derivata dallo schema. Contiene gli stessi gruppi logici del caso finale, ma con valori vuoti.

### `case.json`

Il risultato concreto della compilazione. E il file che rappresenta un caso reale.

### `wizard/case-example.json`

Un esempio di `case.json` gia compilato, usato per orientamento.

## Struttura delle sezioni

### `initiative`

Definisce identita, obiettivo, ambito, contesto applicativo e modalita di erogazione.

### `audience`

Definisce pubblico principale, esperienza, maturita digitale, dimensione, bisogni e resistenze.

### `design`

Definisce durata, numero di giorni, livello di interazione, stile didattico, direzione narrativa, pratica e verifica.

### `content`

Definisce profondita, macro temi, priorita contenutistica, quantita di esempi, ruolo dei tool e enfasi sull'uso responsabile di AI.

### `constraints`

Definisce tono richiesto, limite di complessita, policy divulgativa, accessibilita comunicativa ed elementi da evitare.

### `generation_targets`

Definisce output principale, possibili output secondari e ampiezza della derivazione.

## Lettura formale dei campi

Ogni campo va letto insieme a:

- `id`: identificatore stabile del campo;
- `label`: etichetta leggibile;
- `type`: tipo di selezione, singola o multipla;
- `required`: obbligatorieta compilativa;
- `multiple`: cardinalita ammissibile;
- `options`: insieme chiuso di risposte ammesse;
- `depends_on`: eventuale condizione di dipendenza.

## Compilazione assistita da AI

Un'AI puo assistere la compilazione solo in presenza di questi vincoli:

- tratta `wizard/case-schema.json` come schema vincolante;
- usa solo valori presenti nelle opzioni;
- non inventare campi nuovi;
- se una scelta non e supportata, segnala il nodo aperto invece di indovinare;
- restituisci un `case.json` coerente con lo schema.

## Criteri minimi di validazione del caso

Un `case.json` e idoneo allo Step 2 solo se:

1. identifica chiaramente tipologia, obiettivo e pubblico;
2. contiene impostazione didattica e narrativa compatibili;
3. esplicita limiti, policy e complessita;
4. definisce output e ampiezza della derivazione;
5. non contiene valori fuori schema.

## Collegamento con lo Step 2

Lo Step 1 termina quando esiste un `case.json` sufficiente per alimentare la generazione.

Da quel punto operativo:

1. il `case.json` diventa la fonte primaria del caso;
2. `wizard/cartella-master-template.md` + `wizard/cartella-master-schema.md` definiscono la struttura canonica dello Step 2;
3. il caso viene trasformato in una cartella master modulare;
4. i derivati vengono prodotti solo a valle della cartella master validata.

## Riferimenti

- `HOW_TO.md`
- `wizard/step-1-intake.md`
- `wizard/step-2-generazione.md`
