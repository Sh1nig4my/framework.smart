"use client";

import { useMemo, useState, type FormEvent } from "react";

import { fase1Schema, optionToLabel } from "@/shared/lib/fase1-json";

type FeedbackTone = "success" | "error" | "info";

type Feedback = {
  tone: FeedbackTone;
  title: string;
  message: string;
};

type ApiResponse = {
  status: "created" | "duplicate" | "invalid_payload" | "error";
  message: string;
  request_id?: string;
  case_file_name?: string;
  case_json?: unknown;
};

const HONEYPOT_FIELD_NAME = "website";

const sectionOrder = ["initiative", "audience", "design", "content", "constraints", "generation_targets"] as const;

type SectionId = (typeof sectionOrder)[number];

type SingleValues = Record<string, string>;
type MultiValues = Record<string, string[]>;

type ContactState = {
  nome_cognome: string;
  email: string;
  telefono: string;
  nome_organizzazione: string;
  ruolo: string;
  privacy: boolean;
};

type FormState = {
  single: SingleValues;
  multi: MultiValues;
  contact: ContactState;
};

function buildInitialFormState(): FormState {
  const single: SingleValues = {};
  const multi: MultiValues = {};

  for (const section of fase1Schema.sections) {
    for (const field of section.fields) {
      if (field.multiple) {
        multi[field.id] = [];
      } else {
        single[field.id] = field.id === "primary_output" ? "script_master" : "";
      }
    }
  }

  return {
    single,
    multi,
    contact: {
      nome_cognome: "",
      email: "",
      telefono: "",
      nome_organizzazione: "",
      ruolo: "",
      privacy: false,
    },
  };
}

function isSectionCompleted(state: FormState, sectionId: SectionId) {
  const section = fase1Schema.sections.find((entry) => entry.id === sectionId);

  if (!section) {
    return false;
  }

  for (const field of section.fields) {
    if (!field.required) {
      continue;
    }

    if (field.multiple) {
      if ((state.multi[field.id] ?? []).length === 0) {
        return false;
      }
    } else if (!state.single[field.id]) {
      return false;
    }
  }

  return true;
}

export function Fase1JsonForm() {
  const [state, setState] = useState<FormState>(() => buildInitialFormState());
  const [openSections, setOpenSections] = useState<Record<SectionId, boolean>>({
    initiative: true,
    audience: false,
    design: false,
    content: false,
    constraints: false,
    generation_targets: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const completedCount = useMemo(
    () => sectionOrder.filter((sectionId) => isSectionCompleted(state, sectionId)).length,
    [state],
  );

  function setSingle(fieldId: string, value: string) {
    setState((current) => ({
      ...current,
      single: {
        ...current.single,
        [fieldId]: value,
      },
    }));
  }

  function toggleMulti(fieldId: string, value: string) {
    setState((current) => {
      const currentValues = current.multi[fieldId] ?? [];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((entry) => entry !== value)
        : [...currentValues, value];

      return {
        ...current,
        multi: {
          ...current.multi,
          [fieldId]: nextValues,
        },
      };
    });
  }

  function setContact(field: keyof ContactState, value: string | boolean) {
    setState((current) => ({
      ...current,
      contact: {
        ...current.contact,
        [field]: value,
      },
    }));
  }

  function setAllSections(value: boolean) {
    setOpenSections({
      initiative: value,
      audience: value,
      design: value,
      content: value,
      constraints: value,
      generation_targets: value,
    });
  }

  function toggleSection(sectionId: SectionId) {
    setOpenSections((current) => ({
      ...current,
      [sectionId]: !current[sectionId],
    }));
  }

  function validateClient() {
    if (!state.contact.nome_cognome.trim()) {
      return "Inserisci nome e cognome.";
    }

    if (!state.contact.email.trim()) {
      return "Inserisci email.";
    }

    for (const section of fase1Schema.sections) {
      for (const field of section.fields) {
        if (!field.required) {
          continue;
        }

        if (field.multiple) {
          if ((state.multi[field.id] ?? []).length === 0) {
            return `Compila il campo obbligatorio: ${field.label}.`;
          }
        } else if (!state.single[field.id]) {
          return `Compila il campo obbligatorio: ${field.label}.`;
        }
      }
    }

    if (!state.contact.privacy) {
      return "Devi accettare la privacy per procedere.";
    }

    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);

    const validationError = validateClient();

    if (validationError) {
      setFeedback({
        tone: "error",
        title: "Dati incompleti",
        message: validationError,
      });
      return;
    }

    const payload = {
      nome_cognome: state.contact.nome_cognome,
      email: state.contact.email,
      telefono: state.contact.telefono,
      nome_organizzazione: state.contact.nome_organizzazione,
      ruolo: state.contact.ruolo,
      privacy: state.contact.privacy,
      initiative: {
        initiative_type: state.single.initiative_type,
        initiative_goal: state.single.initiative_goal,
        context_domain: state.multi.context_domain,
        beneficiary_context: state.single.beneficiary_context,
        delivery_mode: state.single.delivery_mode,
      },
      audience: {
        primary_audience_type: state.single.primary_audience_type,
        audience_experience_level: state.single.audience_experience_level,
        audience_digital_maturity: state.single.audience_digital_maturity,
        audience_size: state.single.audience_size,
        audience_primary_need: state.multi.audience_primary_need,
        audience_resistance_profile: state.multi.audience_resistance_profile,
      },
      design: {
        duration_format: state.single.duration_format,
        days_count: state.single.days_count,
        interaction_level: state.single.interaction_level,
        didactic_style: state.single.didactic_style,
        narrative_direction: state.single.narrative_direction,
        practice_presence: state.single.practice_presence,
        evaluation_mode: state.single.evaluation_mode,
      },
      content: {
        content_depth: state.single.content_depth,
        macro_topics: state.multi.macro_topics,
        content_priority: state.single.content_priority,
        example_intensity: state.single.example_intensity,
        tool_focus: state.single.tool_focus,
        tool_categories: state.multi.tool_categories,
        responsible_ai_emphasis: state.single.responsible_ai_emphasis,
      },
      constraints: {
        tone_profile: state.multi.tone_profile,
        complexity_limit: state.single.complexity_limit,
        policy_profile: state.multi.policy_profile,
        accessibility_profile: state.multi.accessibility_profile,
        excluded_elements: state.multi.excluded_elements,
      },
      generation_targets: {
        primary_output: "script_master",
        secondary_outputs: state.multi.secondary_outputs,
        material_generation_scope: state.single.material_generation_scope,
      },
      [HONEYPOT_FIELD_NAME]: "",
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/fase-1-json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as ApiResponse;

      if (result.status !== "created" || !response.ok) {
        setFeedback({
          tone: "error",
          title: result.status === "duplicate" ? "Richiesta gia presente" : "Operazione non riuscita",
          message: result.message,
        });
        return;
      }

      if (result.case_json) {
        const fileName = result.case_file_name || "case.json";
        const jsonBlob = new Blob([JSON.stringify(result.case_json, null, 2)], { type: "application/json;charset=utf-8" });
        const objectUrl = URL.createObjectURL(jsonBlob);
        const anchor = document.createElement("a");
        anchor.href = objectUrl;
        anchor.download = fileName;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        URL.revokeObjectURL(objectUrl);
      }

      setFeedback({
        tone: "success",
        title: "Case JSON salvato",
        message: result.request_id
          ? `${result.message} ID richiesta: ${result.request_id}.`
          : result.message,
      });
    } catch {
      setFeedback({
        tone: "error",
        title: "Errore di rete",
        message: "Errore di rete durante il salvataggio. Riprova tra poco.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="sf-form" onSubmit={handleSubmit}>
      <input type="text" name={HONEYPOT_FIELD_NAME} className="hidden" tabIndex={-1} autoComplete="off" />

      {feedback ? (
        <div className={`sf-toast ${feedback.tone === "success" ? "sf-toast-success" : feedback.tone === "info" ? "sf-toast-info" : "sf-toast-error"}`}>
          <p className="sf-toast-title">{feedback.title}</p>
          <p className="sf-toast-message">{feedback.message}</p>
        </div>
      ) : null}

      <section className="sf-card">
        <p className="sf-eyebrow">Regole invio</p>
        <h2 className="sf-title">Indicazioni essenziali prima del submit</h2>
        <ul className="sf-list">
          <li>Usa solo le opzioni previste dal framework SMART.</li>
          <li>Ogni invio salva un nuovo record a database con data e ora.</li>
          <li>Se email e JSON sono identici a una richiesta gia salvata, il sistema blocca il duplicato.</li>
          <li>Il download del file .json parte solo dopo salvataggio riuscito.</li>
        </ul>
      </section>

      <section className="sf-card">
        <p className="sf-eyebrow">Contatto</p>
        <h2 className="sf-title">Dati iniziali</h2>
        <p className="sf-description">Questa sezione resta sempre visibile.</p>
        <div className="sf-grid sf-grid-2">
          <label className="sf-field sf-field-full">
            <span>Nome e cognome *</span>
            <input className="sf-input" value={state.contact.nome_cognome} onChange={(event) => setContact("nome_cognome", event.target.value)} />
          </label>
          <label className="sf-field">
            <span>Email *</span>
            <input className="sf-input" type="email" value={state.contact.email} onChange={(event) => setContact("email", event.target.value)} />
          </label>
          <label className="sf-field">
            <span>Telefono</span>
            <input className="sf-input" value={state.contact.telefono} onChange={(event) => setContact("telefono", event.target.value)} />
          </label>
          <label className="sf-field">
            <span>Organizzazione o ente</span>
            <input className="sf-input" value={state.contact.nome_organizzazione} onChange={(event) => setContact("nome_organizzazione", event.target.value)} />
          </label>
          <label className="sf-field">
            <span>Ruolo</span>
            <input className="sf-input" value={state.contact.ruolo} onChange={(event) => setContact("ruolo", event.target.value)} />
          </label>
        </div>
      </section>

      <section className="sf-progress-card">
        <p className="sf-progress-text">Progresso compilazione: {completedCount}/{sectionOrder.length} sezioni complete</p>
        <div className="sf-actions-row">
          <button type="button" className="sf-button-secondary" onClick={() => setAllSections(true)}>
            Apri tutte
          </button>
          <button type="button" className="sf-button-secondary" onClick={() => setAllSections(false)}>
            Chiudi sezioni
          </button>
        </div>
      </section>

      {sectionOrder.map((sectionId, index) => {
        const section = fase1Schema.sections.find((entry) => entry.id === sectionId);

        if (!section) {
          return null;
        }

        const completed = isSectionCompleted(state, sectionId);

        return (
          <section key={section.id} className="sf-card sf-collapsible">
            <button
              type="button"
              className="sf-collapsible-trigger"
              onClick={() => toggleSection(sectionId)}
              aria-expanded={openSections[sectionId]}
            >
              <span className="flex w-20 shrink-0 items-center text-left md:w-28">
                <span className="sf-eyebrow">{index + 1}. Sezione</span>
              </span>
              <span className="flex flex-1 items-center justify-center px-1 text-center">
                <span className="sf-title !mt-0 leading-tight">{section.label}</span>
              </span>
              <span className="sf-status-chip">
                {completed ? "Completa" : "Da compilare"}
                <span className="sf-status-icon">{openSections[sectionId] ? "-" : "+"}</span>
              </span>
            </button>

            {openSections[sectionId] ? (
              <div className="sf-fields-stack">
                {section.fields.map((field) => {
                  if (field.id === "primary_output") {
                    return (
                      <div key={field.id} className="sf-note">
                        <p className="sf-note-title">Output principale</p>
                        <p>{optionToLabel("script_master")}. E l&apos;unico output principale ammesso in Fase 1.</p>
                      </div>
                    );
                  }

                  if (field.type === "single_select") {
                    return (
                      <label key={field.id} className="sf-field">
                        <span>
                          {field.label}
                          {field.required ? " *" : ""}
                        </span>
                        <select
                          className="sf-select"
                          value={state.single[field.id] ?? ""}
                          onChange={(event) => setSingle(field.id, event.target.value)}
                        >
                          <option value="">Seleziona</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>
                              {optionToLabel(option)}
                            </option>
                          ))}
                        </select>
                      </label>
                    );
                  }

                  return (
                    <fieldset key={field.id} className="sf-fieldset">
                      <legend>
                        {field.label}
                        {field.required ? " *" : ""}
                      </legend>
                      <div className="sf-options-grid">
                        {field.options.map((option) => {
                          const selected = (state.multi[field.id] ?? []).includes(option);

                          return (
                            <label key={option} className={`sf-option-card ${selected ? "sf-option-card-selected" : ""}`}>
                              <input
                                type="checkbox"
                                className="sr-only"
                                checked={selected}
                                onChange={() => toggleMulti(field.id, option)}
                              />
                              <span>{optionToLabel(option)}</span>
                              <span className={`sf-check ${selected ? "sf-check-on" : "sf-check-off"}`}>{selected ? "v" : ""}</span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>
                  );
                })}
              </div>
            ) : null}
          </section>
        );
      })}

      <label className="sf-consent">
        <input
          type="checkbox"
          checked={state.contact.privacy}
          onChange={(event) => setContact("privacy", event.target.checked)}
        />
        <span>
          Acconsento al trattamento dei dati per il salvataggio della richiesta e del relativo case JSON, con finalita di
          test, manutenzione e miglioramento del framework.
        </span>
      </label>

      <div className="sf-submit-wrap">
        <button type="submit" className="sf-button-primary" disabled={isSubmitting}>
          {isSubmitting ? "Sto salvando la richiesta..." : "Invia e scarica case JSON"}
        </button>
        <p className="sf-submit-help">Al termine, se il record e salvato correttamente, il file .json viene scaricato automaticamente.</p>
      </div>
    </form>
  );
}
