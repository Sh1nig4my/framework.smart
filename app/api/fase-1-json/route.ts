import { createHash } from "node:crypto";

import { NextResponse } from "next/server";
import { MongoServerError } from "mongodb";

import { fase1Schema, getAllowedOptions } from "@/shared/lib/fase1-json";
import { getDatabase } from "@/server/lib/mongodb";

const HONEYPOT_FIELD_NAME = "website";
const REQUEST_COLLECTION = "framework_smart_event_requests";

type FormPayload = {
  nome_cognome?: unknown;
  email?: unknown;
  telefono?: unknown;
  nome_organizzazione?: unknown;
  ruolo?: unknown;
  privacy?: unknown;
  website?: unknown;
  initiative?: Record<string, unknown>;
  audience?: Record<string, unknown>;
  design?: Record<string, unknown>;
  content?: Record<string, unknown>;
  constraints?: Record<string, unknown>;
  generation_targets?: Record<string, unknown>;
};

type CaseJson = {
  meta: {
    schema_name: string;
    schema_version: string;
    language: string;
    output_name: string;
  };
  initiative: {
    initiative_type: string;
    initiative_goal: string;
    context_domain: string[];
    beneficiary_context: string;
    delivery_mode: string;
  };
  audience: {
    primary_audience_type: string;
    audience_experience_level: string;
    audience_digital_maturity: string;
    audience_size: string;
    audience_primary_need: string[];
    audience_resistance_profile: string[];
  };
  design: {
    duration_format: string;
    days_count: string;
    interaction_level: string;
    didactic_style: string;
    narrative_direction: string;
    practice_presence: string;
    evaluation_mode: string;
  };
  content: {
    content_depth: string;
    macro_topics: string[];
    content_priority: string;
    example_intensity: string;
    tool_focus: string;
    tool_categories: string[];
    responsible_ai_emphasis: string;
  };
  constraints: {
    tone_profile: string[];
    complexity_limit: string;
    policy_profile: string[];
    accessibility_profile: string[];
    excluded_elements: string[];
  };
  generation_targets: {
    primary_output: "script_master";
    secondary_outputs: string[];
    material_generation_scope: string;
  };
};

type Fase1ApiResponse = {
  status: "created" | "duplicate" | "invalid_payload" | "error";
  message: string;
  request_id?: string;
  case_file_name?: string;
  case_json?: CaseJson;
};

type IndexCache = {
  promise: Promise<void> | null;
};

declare global {
  var fase1IndexesCache: IndexCache | undefined;
}

const globalIndexesCache = globalThis as typeof globalThis & {
  fase1IndexesCache?: IndexCache;
};

const indexesCache = globalIndexesCache.fase1IndexesCache ?? { promise: null };

globalIndexesCache.fase1IndexesCache = indexesCache;

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeEmail(value: unknown) {
  return normalizeString(value).toLowerCase();
}

function normalizeMultiValue(value: unknown) {
  if (!Array.isArray(value)) {
    return [] as string[];
  }

  return [...new Set(value.filter((entry): entry is string => typeof entry === "string").map((entry) => entry.trim()).filter(Boolean))].sort(
    (a, b) => a.localeCompare(b, "it"),
  );
}

function validateSingleValue(sectionId: string, fieldId: string, rawValue: unknown) {
  const value = normalizeString(rawValue);
  const allowedValues = getAllowedOptions(sectionId, fieldId);

  if (!allowedValues.includes(value)) {
    return "";
  }

  return value;
}

function validateMultiValue(sectionId: string, fieldId: string, rawValue: unknown) {
  const allowedValues = new Set(getAllowedOptions(sectionId, fieldId));

  return normalizeMultiValue(rawValue).filter((entry) => allowedValues.has(entry));
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildCaseFileName(email: string) {
  const localPart = email.split("@")[0]?.replace(/[^a-z0-9_-]/gi, "-").toLowerCase() || "smart";
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `case-${localPart}-${stamp}.json`;
}

async function ensureCollectionIndexes() {
  if (!indexesCache.promise) {
    indexesCache.promise = (async () => {
      const db = await getDatabase();
      const collection = db.collection(REQUEST_COLLECTION);

      await Promise.all([
        collection.createIndex({ email: 1, case_json_hash: 1 }, { unique: true, name: "uniq_email_case_json_hash" }),
        collection.createIndex({ requestedAt: -1 }, { name: "requestedAt_desc" }),
        collection.createIndex({ email: 1, requestedAt: -1 }, { name: "email_requestedAt_desc" }),
        collection.createIndex({ request_status: 1, requestedAt: -1 }, { name: "status_requestedAt_desc" }),
      ]);
    })();
  }

  try {
    await indexesCache.promise;
  } catch (error) {
    indexesCache.promise = null;
    throw error;
  }
}

function getSectionPayload(payload: FormPayload, sectionId: string) {
  const section = payload[sectionId as keyof FormPayload];
  return section && typeof section === "object" ? (section as Record<string, unknown>) : {};
}

function buildCaseJson(payload: FormPayload): CaseJson {
  const initiative = getSectionPayload(payload, "initiative");
  const audience = getSectionPayload(payload, "audience");
  const design = getSectionPayload(payload, "design");
  const content = getSectionPayload(payload, "content");
  const constraints = getSectionPayload(payload, "constraints");
  const generationTargets = getSectionPayload(payload, "generation_targets");

  return {
    meta: {
      schema_name: fase1Schema.schema.name,
      schema_version: fase1Schema.schema.version,
      language: fase1Schema.schema.language,
      output_name: fase1Schema.schema.output_instance_name,
    },
    initiative: {
      initiative_type: validateSingleValue("initiative", "initiative_type", initiative.initiative_type),
      initiative_goal: validateSingleValue("initiative", "initiative_goal", initiative.initiative_goal),
      context_domain: validateMultiValue("initiative", "context_domain", initiative.context_domain),
      beneficiary_context: validateSingleValue("initiative", "beneficiary_context", initiative.beneficiary_context),
      delivery_mode: validateSingleValue("initiative", "delivery_mode", initiative.delivery_mode),
    },
    audience: {
      primary_audience_type: validateSingleValue("audience", "primary_audience_type", audience.primary_audience_type),
      audience_experience_level: validateSingleValue("audience", "audience_experience_level", audience.audience_experience_level),
      audience_digital_maturity: validateSingleValue("audience", "audience_digital_maturity", audience.audience_digital_maturity),
      audience_size: validateSingleValue("audience", "audience_size", audience.audience_size),
      audience_primary_need: validateMultiValue("audience", "audience_primary_need", audience.audience_primary_need),
      audience_resistance_profile: validateMultiValue("audience", "audience_resistance_profile", audience.audience_resistance_profile),
    },
    design: {
      duration_format: validateSingleValue("design", "duration_format", design.duration_format),
      days_count: validateSingleValue("design", "days_count", design.days_count),
      interaction_level: validateSingleValue("design", "interaction_level", design.interaction_level),
      didactic_style: validateSingleValue("design", "didactic_style", design.didactic_style),
      narrative_direction: validateSingleValue("design", "narrative_direction", design.narrative_direction),
      practice_presence: validateSingleValue("design", "practice_presence", design.practice_presence),
      evaluation_mode: validateSingleValue("design", "evaluation_mode", design.evaluation_mode),
    },
    content: {
      content_depth: validateSingleValue("content", "content_depth", content.content_depth),
      macro_topics: validateMultiValue("content", "macro_topics", content.macro_topics),
      content_priority: validateSingleValue("content", "content_priority", content.content_priority),
      example_intensity: validateSingleValue("content", "example_intensity", content.example_intensity),
      tool_focus: validateSingleValue("content", "tool_focus", content.tool_focus),
      tool_categories: validateMultiValue("content", "tool_categories", content.tool_categories),
      responsible_ai_emphasis: validateSingleValue("content", "responsible_ai_emphasis", content.responsible_ai_emphasis),
    },
    constraints: {
      tone_profile: validateMultiValue("constraints", "tone_profile", constraints.tone_profile),
      complexity_limit: validateSingleValue("constraints", "complexity_limit", constraints.complexity_limit),
      policy_profile: validateMultiValue("constraints", "policy_profile", constraints.policy_profile),
      accessibility_profile: validateMultiValue("constraints", "accessibility_profile", constraints.accessibility_profile),
      excluded_elements: validateMultiValue("constraints", "excluded_elements", constraints.excluded_elements),
    },
    generation_targets: {
      primary_output: "script_master",
      secondary_outputs: validateMultiValue("generation_targets", "secondary_outputs", generationTargets.secondary_outputs),
      material_generation_scope: validateSingleValue(
        "generation_targets",
        "material_generation_scope",
        generationTargets.material_generation_scope,
      ),
    },
  };
}

function getValidationMessage(payload: FormPayload, caseJson: CaseJson) {
  const nomeCognome = normalizeString(payload.nome_cognome);
  const email = normalizeEmail(payload.email);

  if (!nomeCognome) {
    return "Inserisci nome e cognome.";
  }

  if (!isValidEmail(email)) {
    return "Inserisci un indirizzo email valido.";
  }

  for (const section of fase1Schema.sections) {
    for (const field of section.fields) {
      if (!field.required) {
        continue;
      }

      const sectionData = caseJson[section.id as keyof CaseJson] as Record<string, string | string[]>;
      const value = sectionData[field.id];

      if (Array.isArray(value)) {
        if (value.length === 0) {
          return `Compila il campo obbligatorio: ${field.label}.`;
        }
      } else if (!value) {
        return `Compila il campo obbligatorio: ${field.label}.`;
      }
    }
  }

  if (payload.privacy !== true) {
    return "Devi accettare il consenso privacy per procedere.";
  }

  return null;
}

export async function POST(request: Request) {
  let payload: FormPayload;

  try {
    payload = (await request.json()) as FormPayload;
  } catch {
    return NextResponse.json<Fase1ApiResponse>(
      {
        status: "invalid_payload",
        message: "Payload non valido.",
      },
      { status: 400 },
    );
  }

  if (normalizeString(payload[HONEYPOT_FIELD_NAME])) {
    return NextResponse.json<Fase1ApiResponse>(
      {
        status: "created",
        message: "Richiesta acquisita.",
      },
      { status: 201 },
    );
  }

  const caseJson = buildCaseJson(payload);
  const validationError = getValidationMessage(payload, caseJson);

  if (validationError) {
    return NextResponse.json<Fase1ApiResponse>(
      {
        status: "invalid_payload",
        message: validationError,
      },
      { status: 400 },
    );
  }

  const email = normalizeEmail(payload.email);
  const nomeCognome = normalizeString(payload.nome_cognome);
  const telefono = normalizeString(payload.telefono);
  const nomeOrganizzazione = normalizeString(payload.nome_organizzazione);
  const ruolo = normalizeString(payload.ruolo);

  const caseJsonString = JSON.stringify(caseJson);
  const caseJsonHash = createHash("sha256").update(caseJsonString).digest("hex");
  const now = new Date();

  const record = {
    schema_version: fase1Schema.schema.version,
    wizard_schema_name: fase1Schema.schema.name,
    wizard_schema_language: fase1Schema.schema.language,
    request_mode: "json_download",
    request_status: "working",
    nome_cognome: nomeCognome,
    email,
    telefono: telefono || null,
    nome_organizzazione: nomeOrganizzazione || null,
    ruolo: ruolo || null,
    initiative_type: caseJson.initiative.initiative_type,
    initiative_goal: caseJson.initiative.initiative_goal,
    beneficiary_context: caseJson.initiative.beneficiary_context,
    delivery_mode: caseJson.initiative.delivery_mode,
    primary_audience_type: caseJson.audience.primary_audience_type,
    material_generation_scope: caseJson.generation_targets.material_generation_scope,
    case_json: caseJson,
    case_json_hash: caseJsonHash,
    requestedAt: now,
    createdAt: now,
    updatedAt: now,
    deletedAt: null,
  };

  try {
    await ensureCollectionIndexes();
    const db = await getDatabase();
    const collection = db.collection(REQUEST_COLLECTION);
    const result = await collection.insertOne(record);

    return NextResponse.json<Fase1ApiResponse>(
      {
        status: "created",
        message: "Richiesta salvata. Ora puoi scaricare il case JSON.",
        request_id: result.insertedId.toString(),
        case_file_name: buildCaseFileName(email),
        case_json: caseJson,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      return NextResponse.json<Fase1ApiResponse>(
        {
          status: "duplicate",
          message: "Esiste gia una richiesta identica con la stessa email e lo stesso case JSON.",
        },
        { status: 409 },
      );
    }

    if (error instanceof Error && error.message.includes("Missing MONGODB_URI")) {
      return NextResponse.json<Fase1ApiResponse>(
        {
          status: "error",
          message: "Configurazione database mancante. Imposta MONGODB_URI e riprova.",
        },
        { status: 500 },
      );
    }

    console.error("Fase 1 submit failed", error);

    return NextResponse.json<Fase1ApiResponse>(
      {
        status: "error",
        message: "Errore durante il salvataggio. Riprova tra poco.",
      },
      { status: 500 },
    );
  }
}
