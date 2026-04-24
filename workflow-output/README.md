# Workflow Output

Questa cartella contiene tutti gli output operativi del workflow SMART.

Struttura standard:

```text
workflow-output/
`- <project-id>/
   |- status/
   |  |- progress.md
   |  |- latest-changes.md
   |  |- latest-runs.md
   |  |- tools-used.md
   |  `- documentation-state.md
   |- step-1/
   |- step-2/
   `- step-3/
```

Regole:

- usare sempre il termine `step`;
- mantenere uno stato separato per ogni progetto/evento;
- salvare in ogni `step-*` documenti generati, output richiesti, `case.json` e folder master.
