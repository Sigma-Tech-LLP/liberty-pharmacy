import type { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1] mb-4 [&>strong]:font-bold [&>strong]:text-teal">
      {children}
    </div>
  );
}
