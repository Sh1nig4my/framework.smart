export type WikiSection = {
  id: string;
  chapterId: string;
  title: string;
  intro: string;
  purpose: string;
  workflow: string[];
  highlights: string[];
  qualityGates: string[];
  antiPatterns: string[];
  outputs: string[];
  references: string[];
  related: string[];
};

export type WikiChapter = {
  id: string;
  title: string;
  description: string;
};
