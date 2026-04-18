"use client";

import { useMemo, useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ClientEffects() {
  const [submitLabel, setSubmitLabel] = useState(
    "Send Inquiry \u2192 Get Quote in 24 Hours",
  );
  const [submitClickedAt, setSubmitClickedAt] = useState<number | null>(null);

  const isSubmitted = useMemo(() => submitClickedAt !== null, [submitClickedAt]);

  useScrollReveal();

  useEffect(() => {
    if (!isSubmitted) return;

    const t = window.setTimeout(() => {
      setSubmitClickedAt(null);
      setSubmitLabel("Send Inquiry \u2192 Get Quote in 24 Hours");
    }, 4000);

    return () => window.clearTimeout(t);
  }, [isSubmitted]);

  return (
    <button
      className="w-full bg-gradient-to-br from-teal to-teal-dark text-navy border-none cursor-pointer py-4 rounded-lg font-sans text-sm font-bold tracking-[1px] uppercase mt-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,201,177,0.4)]"
      type="button"
      onClick={() => {
        setSubmitClickedAt(Date.now());
        setSubmitLabel("\u2705 Inquiry Sent! We will contact you within 24 hours.");
      }}
    >
      {submitLabel}
    </button>
  );
}
