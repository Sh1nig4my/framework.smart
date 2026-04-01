# Legacy

## Scopo

Separare con nettezza il materiale storico dal repository canonico.

## Regola fondamentale

Questa cartella non e fonte primaria di verita.

Se un contenuto storico entra in conflitto con `manifesto/`, `framework/` o `wizard/`, prevale sempre l'area canonica attiva.

## Strategia adottata in questo refactor

Il repository usa una conservazione legacy minimale.

- l'area attiva contiene solo i documenti necessari al framework canonico;
- il materiale storico non e stato migrato in massa;
- il contenitore temporaneo `TO-DELETE-after-refactor-framework/` resta fuori dal canone e potra essere eliminato dopo conferma esplicita.
