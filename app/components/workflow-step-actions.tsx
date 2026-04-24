"use client";

import { useEffect, useState } from "react";

type ToastState = {
  title: string;
};

const CONTACT_EMAIL = "dev.emanuele.ienna@gmail.com";

export function WorkflowStepActions() {
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function showUnavailableToast(stepLabel: string) {
    setToast({
      title: `${stepLabel} in aggiornamento`,
    });
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => showUnavailableToast("Step 2")}
          className="sf-button-secondary"
        >
          Step 2 - In aggiornamento
        </button>
        <button
          type="button"
          onClick={() => showUnavailableToast("Step 3")}
          className="sf-button-secondary"
        >
          Step 3 - In aggiornamento
        </button>
      </div>

      {toast ? (
        <div role="status" aria-live="polite" className="sf-toast sf-toast-info">
          <p className="sf-toast-title">{toast.title}</p>
          <p className="sf-toast-message">
            Servizio non disponibile al momento. Contattaci direttamente: {" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
}
