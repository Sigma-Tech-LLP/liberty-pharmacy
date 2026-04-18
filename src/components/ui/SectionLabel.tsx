import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] font-semibold tracking-[3px] uppercase text-teal mb-3">
      {children}
    </div>
  );
}
