"use client";

import { useState, type ReactNode } from "react";

type WorkflowStepCardProps = {
  step: string;
  title: string;
  subtitle: string;
  status: string;
  summary: string;
  details: ReactNode;
  defaultOpen?: boolean;
};

export function WorkflowStepCard({
  step,
  title,
  subtitle,
  status,
  summary,
  details,
  defaultOpen = false,
}: WorkflowStepCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className="sf-step-card">
      <header className="sf-step-head">
        <div>
          <span className="sf-eyebrow-badge">{step}</span>
          <h2 className="sf-step-title">{title}</h2>
          <p className="sf-step-subtitle">{subtitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">{summary}</p>
        </div>
        <span className="sf-step-status">{status}</span>
      </header>

      <div className="sf-collapsible px-6 py-4">
        <button type="button" className="sf-step-toggle" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen}>
          {isOpen ? "Nascondi dettagli operativi" : "Visualizza dettagli operativi"}
        </button>
      </div>

      {isOpen ? <div className="sf-collapsible-panel">{details}</div> : null}
    </article>
  );
}
