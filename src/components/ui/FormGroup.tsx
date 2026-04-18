import type { ReactNode } from "react";

export function FormGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-5">
      <label className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-brand-gray mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
