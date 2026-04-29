export default function DocumentationBannerSection() {
  return (
    <section className="py-16 border-t border-border bg-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-brand-gray mb-10 uppercase">Export Documentation & Regulatory Support</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] md:text-xs font-black text-navy/40">
          <span>COMMERCIAL INVOICE</span>
          <span>PACKING LIST</span>
          <span>CERTIFICATE OF ORIGIN</span>
          <span>COA (CERTIFICATE OF ANALYSIS)</span>
          <span>BATCH RELEASE</span>
          <span>PRODUCT DOSSIERS</span>
        </div>
      </div>
    </section>
  );
}