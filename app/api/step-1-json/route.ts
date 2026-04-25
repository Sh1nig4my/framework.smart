import { NextResponse } from "next/server";

import {
  DatabaseConfigurationError,
  DuplicateCasePayloadError,
  InvalidCasePayloadError,
  isHoneypotTriggered,
  submitCaseJson,
  type CaseJson,
  type FormPayload,
} from "@/app/server/services/case-json.service";

type Step1ApiResponse = {
  status: "created" | "duplicate" | "invalid_payload" | "error";
  message: string;
  request_id?: string;
  case_file_name?: string;
  case_json?: CaseJson;
};

function isValidPayload(value: unknown): value is FormPayload {
  return typeof value === "object" && value !== null;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json<Step1ApiResponse>(
      {
        status: "invalid_payload",
        message: "Payload non valido.",
      },
      { status: 400 },
    );
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json<Step1ApiResponse>(
      {
        status: "invalid_payload",
        message: "Payload non valido.",
      },
      { status: 400 },
    );
  }

  if (isHoneypotTriggered(payload)) {
    return NextResponse.json<Step1ApiResponse>(
      {
        status: "created",
        message: "Richiesta acquisita.",
      },
      { status: 201 },
    );
  }

  try {
    const result = await submitCaseJson(payload);

    return NextResponse.json<Step1ApiResponse>(
      {
        status: "created",
        message: "Richiesta salvata. Ora puoi scaricare il case JSON.",
        request_id: result.requestId,
        case_file_name: result.caseFileName,
        case_json: result.caseJson,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof InvalidCasePayloadError) {
      return NextResponse.json<Step1ApiResponse>(
        {
          status: "invalid_payload",
          message: error.message,
        },
        { status: 400 },
      );
    }

    if (error instanceof DuplicateCasePayloadError) {
      return NextResponse.json<Step1ApiResponse>(
        {
          status: "duplicate",
          message: error.message,
        },
        { status: 409 },
      );
    }

    if (error instanceof DatabaseConfigurationError) {
      return NextResponse.json<Step1ApiResponse>(
        {
          status: "error",
          message: error.message,
        },
        { status: 500 },
      );
    }

    console.error("Step 1 submit failed", error);

    return NextResponse.json<Step1ApiResponse>(
      {
        status: "error",
        message: "Errore durante il salvataggio. Riprova tra poco.",
      },
      { status: 500 },
    );
  }
}
