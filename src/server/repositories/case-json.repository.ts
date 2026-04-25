import { MongoServerError } from "mongodb";

import { getDatabase } from "@/server/lib/mongodb";

const REQUEST_COLLECTION = "framework_smart_event_requests";

type IndexCache = {
  promise: Promise<void> | null;
};

declare global {
  var step1IndexesCache: IndexCache | undefined;
}

const globalIndexesCache = globalThis as typeof globalThis & {
  step1IndexesCache?: IndexCache;
};

const indexesCache = globalIndexesCache.step1IndexesCache ?? { promise: null };

globalIndexesCache.step1IndexesCache = indexesCache;

export type CaseJsonRecord = {
  schema_version: string;
  wizard_schema_name: string;
  wizard_schema_language: string;
  request_mode: "json_download";
  request_status: "working";
  nome_cognome: string;
  email: string;
  telefono: string | null;
  nome_organizzazione: string | null;
  ruolo: string | null;
  initiative_type: string;
  initiative_goal: string;
  beneficiary_context: string;
  delivery_mode: string;
  primary_audience_type: string;
  material_generation_scope: string;
  case_json: unknown;
  case_json_hash: string;
  requestedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
};

export class DuplicateCaseJsonError extends Error {
  constructor() {
    super("DUPLICATE_CASE_JSON");
  }
}

export async function ensureCaseJsonIndexes() {
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

export async function insertCaseJsonRecord(record: CaseJsonRecord) {
  try {
    await ensureCaseJsonIndexes();

    const db = await getDatabase();
    const collection = db.collection(REQUEST_COLLECTION);
    const result = await collection.insertOne(record);

    return result.insertedId.toString();
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      throw new DuplicateCaseJsonError();
    }

    throw error;
  }
}
