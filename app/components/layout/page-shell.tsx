import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  const baseClassName = "sf-container space-y-8 md:space-y-10";
  const sectionClassName = className ? `${baseClassName} ${className}` : baseClassName;

  return (
    <div className="sf-page-shell">
      <div className="sf-page-glow" />
      <section className={sectionClassName}>{children}</section>
    </div>
  );
}
