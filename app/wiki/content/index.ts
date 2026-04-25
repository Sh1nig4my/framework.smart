import { architectureSections } from "./copy/architecture";
import { wikiChapters } from "./chapters";
import { introSections } from "./copy/intro";
import { operationsSections } from "./copy/operations";
import { qualitySections } from "./copy/quality";
import { workflowSections } from "./copy/workflow";
import type { WikiSection } from "./types";

export type { WikiChapter, WikiSection } from "./types";
export { wikiChapters };

export const wikiSections: WikiSection[] = [
  ...introSections,
  ...architectureSections,
  ...workflowSections,
  ...operationsSections,
  ...qualitySections,
];
