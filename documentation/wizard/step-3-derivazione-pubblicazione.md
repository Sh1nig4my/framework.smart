# Step 3 - Tool operativi e pubblicazione controllata

## Scopo

Produrre output operativi a partire dalla cartella master validata usando tool Step 3 standardizzati, con modalita provider-aware e controllo pre-pubblicazione.

## Input

- cartella master validata (gate Step 2 superato)
- handoff Step 3 completo da `09_step_3_handoff/`
- richiesta utente aggiuntiva (scope, formato, obiettivo)
- policy comunicative, limiti e confini SMART

## Output

- output tool Step 3 coerenti (prompt provider-specific o materiali finali)
- tracciabilita fonti cartella master -> output
- checklist pre-pubblicazione compilata
- eventuali revisioni richieste tracciate

## Regole centrali

1. La cartella master validata resta l'unica fonte canonica dello Step 3.
2. I tool Step 3 possono produrre output finale diretto oppure prompt strutturati per provider esterni.
3. La modalita provider-aware e ibrida: provider consigliati + valore custom.
4. Se il provider non e indicato, usare default `non specificato` e produrre output provider-neutral adattabile.
5. Nessun tool puo introdurre nuove promesse, policy o claim non supportati.

## Tool standardizzati v1

### 1) `genera-proposte-naming`

- obiettivo: proporre naming collegato all'evento;
- output minimo: almeno 10 proposte (piu proposte solo su richiesta utente);
- formato tipico: documento `.md` con proposta + razionale sintetico.

### 2) `genera-immagine`

- obiettivo: generare prompt/materiali per immagini evento;
- supporta casi: slide, seminario/lezione, divulgazione, grafici, altri usi dichiarati;
- se presente una palette nel contesto evento, va applicata come vincolo esplicito.

### 3) `genera-documenti-riassuntivi`

- obiettivo: produrre uno o piu riassunti mirati su porzioni specifiche;
- scope supportati: giorno singolo, range giorni, parte iniziale/finale, blocchi specifici;
- uso: chiarezza operativa e preparazione materiali per ulteriori task AI.

### 4) `genera-powerpoint`

- obiettivo: produrre prompt per provider slide con standard professionale;
- supporta: deck grandi, piu deck multi-giorno, piu deck per seminario breve, micro-deck;
- includere logo SMART quando disponibile nell'app e compatibile col canale.

### 5) `genera-pagina-web-statica`

- obiettivo: pagina HTML5/CSS/JS all-in-one, pubblicabile facilmente;
- rami supportati:
  1. pagina promozionale evento;
  2. pagina divulgativa con template: linktree evoluto, pagina guida, pagina info pratiche (contatti/posizione/programma);
- stile: professionale, accattivante, allineato al tema SMART senza eccessi grafici.

### 6) `genera-video-informativo`

- obiettivo: prompt video provider-specific basato sul contesto evento;
- stato: tool previsto e standardizzato, con priorita operativa inferiore rispetto agli altri tool v1.

## Procedura

1. leggere handoff Step 3 e identificare tool richiesti, scope e vincoli;
2. determinare `provider_target` per ogni output (`preset`, `custom`, o `non specificato`);
3. generare output del tool usando solo fonti rilevanti della cartella master;
4. integrare richiesta aggiuntiva utente senza alterare significato canonico;
5. validare coerenza su promessa, limiti, tono, policy e vincoli brand;
6. completare controllo pre-pubblicazione e registrare esito.

## Gate Step 3

Un output Step 3 e pubblicabile/riusabile solo se:

1. e semanticamente coerente con la cartella master;
2. dichiara tool usato e provider target (`non specificato` ammesso);
3. non introduce nuove promesse, regole o claim non supportati;
4. mantiene tono, policy, cautele e confini dichiarati;
5. supera revisione finale umana.

## Errori da bloccare

- output prodotti da fonti non canoniche o handoff incompleto;
- semplificazioni che cambiano il messaggio;
- claim promozionali non supportati;
- prompt non allineati al provider dichiarato;
- pubblicazione senza revisione finale.
