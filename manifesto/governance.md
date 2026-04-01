# Governance

## Scopo

Definire il modello di governo del framework SMART e le regole di evoluzione controllata.

## Livelli del repository

- `manifesto/` definisce i principi piu stabili;
- `framework/` definisce metodo, ruoli, processo e glossario;
- `wizard/` governa il cuore operativo delle due fasi;
- `playbooks/` applicano il metodo a scenari ricorrenti;
- `ai-context/` governa l'uso del repository come contesto affidabile per agenti AI;
- `archive/legacy/` conserva solo orientamento storico minimo.

## Principi di governo

- prevalenza del canonico sul contingente;
- modifica minima necessaria;
- tracciabilita delle decisioni documentali;
- separazione rigorosa tra area attiva e area storica.

## Regole di cambiamento

1. Ogni modifica deve dichiarare il problema che risolve.
2. Se cambia il significato del framework, si aggiorna prima `manifesto/` o `framework/`.
3. Se cambia il processo operativo, si aggiorna `wizard/`.
4. Se cambiano termini canonici, si aggiorna `framework/glossario.md`.
5. Il legacy non puo reintrodurre regole implicite nell'area attiva.

## Controlli richiesti per release

Ogni release documentale richiede:

1. verifica coerenza inter-documentale;
2. verifica integrita della catena Fase 1 -> Fase 2;
3. verifica allineamento ai confini AI;
4. aggiornamento changelog.

## Stabilita attesa

- `case-schema.json` e `script-master.md` cambiano raramente e solo per motivi forti;
- il glossario va mantenuto stabile;
- i playbook possono evolvere piu facilmente, ma senza contraddire il metodo;
- l'AI context puo essere rifinito, ma deve restare minimale e ordinato.
