export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-teal to-gold rounded-[10px] flex items-center justify-center font-serif font-bold text-xl text-navy">
        L
      </div>
      <div className="leading-[1.1]">
        <span className="block font-serif text-lg font-bold tracking-[0.5px] text-off-white">
          Liberty Medical
        </span>
        <span className="text-[10px] font-medium tracking-[2px] text-teal uppercase">
          Global Pharma Export
        </span>
      </div>
    </div>
  );
}
