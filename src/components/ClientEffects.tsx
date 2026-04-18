"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ClientEffectsProps {
  pending?: boolean;
}

export function ClientEffects({ pending = false }: ClientEffectsProps) {
  useScrollReveal();

  return (
    <button
      className="w-full bg-gradient-to-br from-teal to-teal-dark text-navy border-none cursor-pointer py-4 rounded-lg font-sans text-sm font-bold tracking-[1px] uppercase mt-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,201,177,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
          Submitting...
        </>
      ) : (
        "Send Inquiry \u2192 Get Quote in 24 Hours"
      )}
    </button>
  );
}
