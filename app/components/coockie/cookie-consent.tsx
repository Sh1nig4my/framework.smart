"use client";

import { useState } from "react";

const STORAGE_KEY = "smart_cookie_essential_ack";

export function CookieConsent() {
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY) !== "accepted",
  );

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 w-full max-w-md rounded-2xl border border-[var(--line)] bg-white p-5 shadow-[0_18px_45px_-20px_rgba(7,21,35,0.65)]">
      <p className="text-sm font-semibold text-[var(--ink-900)]">Cookie necessari</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">
        Questa app usa solo cookie tecnici necessari al funzionamento. Non
        utilizza cookie di profilazione o analytics in questa fase.
      </p>
      <p className="mt-2 text-xs leading-relaxed text-[var(--ink-600)]">
        In caso di evoluzione futura della raccolta dati, policy e meccanismi di
        consenso verranno aggiornati prima dell&apos;attivazione.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleAccept}
          className="rounded-full bg-[var(--ink-900)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--ink-700)]"
        >
          Ho capito
        </button>
        <a
          href="/cookie-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[var(--brand-700)] transition hover:text-[var(--ink-900)]"
        >
          Leggi cookie policy
        </a>
      </div>
    </div>
  );
}
