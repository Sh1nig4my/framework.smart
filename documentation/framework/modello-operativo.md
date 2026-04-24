# Modello Operativo

## Scopo

Definire come SMART trasforma un bisogno iniziale in output pubblicabili con controllo qualitativo.

## Input principali

- bisogno progettuale su divulgazione/formazione/eventi;
- contesto e vincoli reali;
- disponibilita a lavorare per fasi.

## Output principali

- `case.json` valido (Fase 1);
- cartella master completa (Fase 2);
- derivati pubblicabili coerenti (Fase 3).

## Componenti del modello

1. **Intake engine (Fase 1)**: raccolta strutturata e normalizzazione requisiti.
2. **Master engine (Fase 2)**: costruzione cartella master e controllo semantico.
3. **Delivery engine (Fase 3)**: derivazione, adattamento canale, pre-pubblicazione.
4. **Governance engine**: regole, terminologia, gate, auditabilita.

## Catena operativa

1. usare `wizard/case-schema.json`;
2. compilare e validare `case.json`;
3. generare/validare cartella master secondo `wizard/cartella-master-template.md`;
4. produrre derivati in Fase 3 con verifiche pre-pubblicazione.

## Rischi da evitare

- intake incompleto con passaggio prematuro alla Fase 2;
- cartella master incoerente o incompleta;
- derivati costruiti da appunti non canonici;
- drift lessicale rispetto al glossario;
- delega all'AI di decisioni non formalizzate.

## Condizione di successo

Il modello funziona quando la catena resta leggibile e tracciabile end-to-end, con qualita stabile anche su team e contesti diversi.
