import React from 'react';

const accreditations = [
  { label: "WHO-GMP Compliant", cite: "" },
  { label: "CDSCO Approved", cite: "" },
  { label: "PAN India Sourcing", cite: "" },
  { label: "DGFT Registered", cite: "[cite: 1]" },
  { label: "IEC Licensed", cite: "[cite: 1]" },
  { label: "MSME Verified", cite: "[cite: 1]" },
];

export default function ComplianceSection() {
  return (
    <section className="py-12 bg-white border-y border-border relative overflow-hidden group">
      {/* Institutional Label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-navy/30 -rotate-90 block origin-center">
          Accreditations[cite: 1]
        </span>
      </div>

      {/* ─── The Marquee ─── */}
      <div className="flex w-max">
        {/* We use two identical lists. The key is translating exactly -50% of the PARENT width */}
        <div className="flex animate-marquee whitespace-nowrap items-center py-2">
          {accreditations.map((item, idx) => (
            <ComplianceBadge key={idx} item={item} />
          ))}
          {/* Re-map inside the same div to ensure a long continuous string */}
          {accreditations.map((item, idx) => (
            <ComplianceBadge key={`dup-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Premium Fades */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
    </section>
  );
}

function ComplianceBadge({ item }: { item: any }) {
  return (
    <div className="flex items-center group/item cursor-default px-8">
      <div className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(14,165,233,0.4)] transition-all duration-500 group-hover/item:scale-150 group-hover/item:bg-teal-dark" />
      
      <span className="ml-4 font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-navy/40 transition-all duration-500 group-hover/item:text-navy group-hover/item:tracking-[0.35em] whitespace-nowrap">
        {item.label}
        <span className="text-[8px] opacity-0 group-hover/item:opacity-100 transition-opacity ml-2 align-top text-teal">
          {item.cite}
        </span>
      </span>
      
      <span className="ml-16 text-border font-extralight text-2xl select-none">/</span>
    </div>
  );
}