import { trustItems } from "../data/trust-items";

export function TrustBar() {
  return (
    <div className="bg-gradient-to-r from-navy via-navy-mid/50 to-navy border-y border-border py-5 overflow-hidden relative">
      {/* Edge fade gradients */}
      <div className="absolute inset-y-0 left-0 w-32 z-[2] pointer-events-none bg-gradient-to-r from-navy to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 z-[2] pointer-events-none bg-gradient-to-l from-navy to-transparent" />
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

      <div className="flex gap-0 w-max items-center animate-trust-scroll hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...trustItems, ...trustItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${idx}`}
              className="flex items-center gap-3 text-[13px] text-brand-gray tracking-[0.5px] whitespace-nowrap px-6 group/trust"
            >
              <div className="w-9 h-9 bg-teal/10 rounded-lg flex items-center justify-center border border-teal/20 shadow-[0_0_12px_rgba(0,201,177,0.08)] group-hover/trust:bg-teal/20 group-hover/trust:border-teal/40 group-hover/trust:shadow-[0_0_20px_rgba(0,201,177,0.15)] transition-all duration-300">
                <Icon className="w-4 h-4 text-teal" />
              </div>
              <span className="group-hover/trust:text-off-white transition-colors duration-300">
                {item.label}
              </span>
              {/* Separator dot */}
              <span className="w-1 h-1 rounded-full bg-teal/30 ml-3" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
