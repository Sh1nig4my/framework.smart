"use client";

import { useEffect, useMemo, useState } from "react";

import { wikiChapters, wikiSections } from "@/app/wiki/wiki-content";

function isKnownSection(id: string) {
  return wikiSections.some((section) => section.id === id);
}

export function WikiBrowser() {
  const [activeSectionId, setActiveSectionId] = useState(() => {
    if (typeof window === "undefined") {
      return wikiSections[0]?.id ?? "";
    }

    const hash = window.location.hash.replace("#", "");
    return hash && isKnownSection(hash) ? hash : (wikiSections[0]?.id ?? "");
  });

  useEffect(() => {
    if (!activeSectionId) {
      return;
    }

    const nextUrl = `${window.location.pathname}#${activeSectionId}`;
    window.history.replaceState(null, "", nextUrl);
  }, [activeSectionId]);

  const activeSection = useMemo(
    () => wikiSections.find((section) => section.id === activeSectionId) ?? wikiSections[0],
    [activeSectionId],
  );

  const byId = useMemo(() => {
    return new Map(wikiSections.map((section) => [section.id, section]));
  }, []);

  if (!activeSection) {
    return null;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">
      <aside className="rounded-2xl border border-[var(--line)] bg-white/92 p-4 lg:sticky lg:top-24 lg:h-fit">
        <p className="px-2 text-xs font-semibold tracking-[0.16em] text-[var(--ink-600)] uppercase">Capitoli wiki</p>
        <nav className="mt-3 space-y-3" aria-label="Navigazione Wiki SMART">
          {wikiChapters.map((chapter) => {
            const chapterSections = wikiSections.filter((section) => section.chapterId === chapter.id);

            return (
              <div key={chapter.id} className="rounded-xl border border-[var(--line)] bg-[var(--surface-1)] p-3">
                <p className="text-sm font-semibold text-[var(--ink-900)]">{chapter.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--ink-600)]">{chapter.description}</p>
                <ul className="mt-3 space-y-1">
                  {chapterSections.map((section) => {
                    const selected = section.id === activeSection.id;

                    return (
                      <li key={section.id}>
                        <button
                          type="button"
                          onClick={() => setActiveSectionId(section.id)}
                          className={`w-full rounded-lg px-2 py-2 text-left text-sm transition ${
                            selected
                              ? "bg-[var(--ink-900)] text-white"
                              : "text-[var(--ink-700)] hover:bg-white hover:text-[var(--ink-900)]"
                          }`}
                        >
                          {section.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>
      </aside>

      <article className="rounded-2xl border border-[var(--line)] bg-white p-6 md:p-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--brand-700)] uppercase">{activeSection.chapterId}</p>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--ink-900)] md:text-4xl">{activeSection.title}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--ink-700)] md:text-base">{activeSection.intro}</p>

        <section className="mt-6">
          <h3 className="text-sm font-semibold tracking-[0.12em] text-[var(--ink-800)] uppercase">Punti chiave</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--ink-700)] md:text-base">
            {activeSection.highlights.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-[var(--line)] bg-[var(--surface-1)] p-4">
          <h3 className="text-sm font-semibold tracking-[0.12em] text-[var(--ink-800)] uppercase">Collegamenti interni</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {activeSection.related.map((relatedId) => {
              const relatedSection = byId.get(relatedId);

              if (!relatedSection) {
                return null;
              }

              return (
                <button
                  key={relatedId}
                  type="button"
                  onClick={() => setActiveSectionId(relatedId)}
                  className="rounded-full border border-[var(--line-strong)] bg-white px-4 py-2 text-sm font-medium text-[var(--ink-800)] transition hover:border-[var(--ink-900)] hover:text-[var(--ink-900)]"
                >
                  {relatedSection.title}
                </button>
              );
            })}
          </div>
        </section>
      </article>
    </div>
  );
}
