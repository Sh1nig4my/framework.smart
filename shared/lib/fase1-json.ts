import caseSchemaDocument from "@/documentation/wizard/case-schema.json";

export type SelectFieldType = "single_select" | "multi_select";

export type Fase1SchemaField = {
  id: string;
  label: string;
  type: SelectFieldType;
  required: boolean;
  multiple: boolean;
  options: string[];
};

export type Fase1SchemaSection = {
  id: string;
  label: string;
  fields: Fase1SchemaField[];
};

type Fase1SchemaDocument = {
  schema: {
    name: string;
    version: string;
    language: string;
    output_instance_name: string;
  };
  sections: Fase1SchemaSection[];
};

export const fase1Schema = caseSchemaDocument as Fase1SchemaDocument;

const optionLabelOverrides: Record<string, string> = {
  cartella_master: "Cartella Master",
  solo_cartella_master: "Solo Cartella Master",
  cartella_master_e_brief_essenziali: "Cartella Master e Brief Essenziali",
  cartella_master_e_brief_completi: "Cartella Master e Brief Completi",
  script_master: "Cartella Master",
  solo_script_master: "Solo Cartella Master",
  script_master_e_brief_essenziali: "Cartella Master e Brief Essenziali",
  script_master_e_brief_completi: "Cartella Master e Brief Completi",
};

export function optionToLabel(option: string) {
  if (optionLabelOverrides[option]) {
    return optionLabelOverrides[option];
  }

  return option
    .split("_")
    .filter(Boolean)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

export function getSectionById(sectionId: string) {
  return fase1Schema.sections.find((section) => section.id === sectionId);
}

export function getFieldById(sectionId: string, fieldId: string) {
  return getSectionById(sectionId)?.fields.find((field) => field.id === fieldId);
}

export function getAllowedOptions(sectionId: string, fieldId: string) {
  return getFieldById(sectionId, fieldId)?.options ?? [];
}

export function isRequiredField(sectionId: string, fieldId: string) {
  return Boolean(getFieldById(sectionId, fieldId)?.required);
}
