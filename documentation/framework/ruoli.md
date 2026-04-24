# Ruoli

## Scopo

Definire ruoli e responsabilita per mantenere il framework affidabile in tutte le fasi.

## Ruoli principali

### Committente / Promotore

- fornisce obiettivi, vincoli, priorita e criteri di successo.

### Progettista del caso (Fase 1 owner)

- guida compilazione schema;
- produce e valida `case.json`.

### Editor Strategico (Fase 2 owner)

- produce/valida cartella master;
- controlla coerenza narrativa, limiti e promesse.

### Delivery Editor (Fase 3 owner)

- crea e valida derivati;
- garantisce coerenza tra canali e aderenza a cartella master.

### Revisore Qualita

- applica gate trasversali;
- blocca output non conformi.

### Assistente AI

- supporta compilazione, trasformazione e derivazione;
- non sostituisce responsabilita umana e non inventa regole.

## Matrice sintetica

- accuratezza input: committente + progettista;
- conformita Fase 1: progettista + revisore;
- conformita Fase 2: editor strategico + revisore;
- conformita Fase 3: delivery editor + revisore;
- supporto operativo: assistente AI entro confini `context-ai/`.

## Regola trasversale

Nessun ruolo puo usare materiale storico o fonti non canoniche come verita primaria.
