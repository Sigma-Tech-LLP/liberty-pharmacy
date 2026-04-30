import { Landmark, Check } from 'lucide-react';

export default function PartnerBenefitsSection() {
  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-border">
            <h3 className="text-2xl font-serif text-navy mb-8 flex items-center gap-3">
              <Landmark className="text-teal" /> Who We Serve
            </h3>
            <div className="space-y-4">
              {["Pharmaceutical Distributors", "Importers & Wholesalers", "Government Procurement Agencies", "Hospitals & Healthcare Institutions", "NGOs & Medical Organizations"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-brand-gray border-b border-light-bg pb-3">
                  <Check className="text-teal w-4 h-4" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-navy mb-6">Why Choose Liberty Pharmacy International?</h2>
            <p className="text-brand-gray mb-8">
              Buyer's choose us for our 30+ years of trade experience, transparent commercial proposals, and dedicated documentation team. We focus on stable supply relationships, not one-time transactions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-navy text-white rounded-2xl">
                <div className="text-2xl font-bold text-teal-light">30+ Years</div>
                <p className="text-xs opacity-70">Experience</p>
              </div>
              <div className="p-6 border border-border bg-white rounded-2xl">
                <div className="text-2xl font-bold text-navy">Two Star</div>
                <p className="text-xs text-brand-gray uppercase">Export House</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}