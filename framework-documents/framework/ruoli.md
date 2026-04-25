# Ruoli

## Scopo

Definire ruoli e responsabilita per mantenere il framework affidabile in tutti gli step.

## Ruoli principali

### Committente / Promotore

- fornisce obiettivi, vincoli, priorita e criteri di successo.

### Progettista del caso (Step 1 owner)

- guida compilazione schema;
- produce e valida `case.json`.

### Editor Strategico (Step 2 owner)

- produce/valida cartella master;
- controlla coerenza narrativa, limiti e promesse.

### Delivery Editor (Step 3 owner)

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
- conformita Step 1: progettista + revisore;
- conformita Step 2: editor strategico + revisore;
- conformita Step 3: delivery editor + revisore;
- supporto operativo: assistente AI entro confini `context-ai/`.

## Regola trasversale

Nessun ruolo puo usare materiale storico o fonti non canoniche come verita primaria.
