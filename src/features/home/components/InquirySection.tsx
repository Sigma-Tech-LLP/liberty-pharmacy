"use client";

import { useActionState, useEffect, useRef } from "react";
import { MapPin, Phone, MessageCircle, AlertCircle, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FormGroup } from "@/components/ui/FormGroup";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ClientEffects } from "@/components/ClientEffects";
import { WHATSAPP_URL, COMPANY } from "@/lib/constants";
import { submitInquiry } from "@/app/actions/inquiry";

const INPUT_CLASSES =
  "w-full bg-white/[0.05] border border-white/10 rounded-lg px-4 py-3.5 text-off-white font-sans text-sm outline-none transition-all duration-200 focus:border-teal focus:bg-teal/[0.05]";

export function InquirySection() {
  const [state, formAction, pending] = useActionState(submitInquiry, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state?.success]);

  return (
    <section
      id="inquiry"
      className="px-[60px] py-[100px] bg-navy-mid max-md:px-6 max-md:py-[60px]"
    >
      <div className="text-center max-w-[600px] mx-auto">
        <SectionLabel>Get In Touch</SectionLabel>
        <SectionTitle>
          Export <strong>Inquiry Form</strong>
        </SectionTitle>
        <p className="text-base text-brand-gray leading-[1.7] max-w-[560px] mx-auto">
          Submit your requirements and receive a competitive quotation within 24
          hours.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-16 mt-[60px] items-start max-md:grid-cols-1 max-md:gap-8">
        {/* Form */}
        <div className="bg-white/[0.03] border border-border rounded-[20px] p-12 reveal opacity-0 translate-y-8 transition-[opacity,transform] duration-700 ease-out max-md:p-5">
          <form action={formAction} ref={formRef} className="flex flex-col gap-4">
            {state?.success && (
              <div className="bg-teal/10 border border-teal/20 text-teal px-4 py-3 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">Thank you! Your inquiry has been submitted successfully.</p>
              </div>
            )}
            
            {state?.error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{state.error}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <FormGroup label="Full Name *">
                <input type="text" name="fullName" className={INPUT_CLASSES} placeholder="Your full name" required />
              </FormGroup>
              <FormGroup label="Company *">
                <input type="text" name="company" className={INPUT_CLASSES} placeholder="Company / Organization" required />
              </FormGroup>
            </div>
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <FormGroup label="Country *">
                <input type="text" name="country" className={INPUT_CLASSES} placeholder="Your country" required />
              </FormGroup>
              <FormGroup label="Phone / WhatsApp *">
                <input type="tel" name="phone" className={INPUT_CLASSES} placeholder="+1 234 567 8900" required />
              </FormGroup>
            </div>
            <FormGroup label="Email Address *">
              <input type="email" name="email" className={INPUT_CLASSES} placeholder="your@email.com" required />
            </FormGroup>
            <FormGroup label="Product Name / List *">
              <input type="text" name="productList" className={INPUT_CLASSES} placeholder="e.g. Paracetamol 500mg, Amoxicillin 250mg..." required />
            </FormGroup>
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <FormGroup label="Quantity">
                <input type="text" name="quantity" className={INPUT_CLASSES} placeholder="e.g. 10,000 strips" />
              </FormGroup>
              <FormGroup label="Brand / Generic">
                <select name="brandGeneric" className={`form-select ${INPUT_CLASSES}`} defaultValue="">
                  <option value="">Select...</option>
                  <option value="Branded">Branded</option>
                  <option value="Generic">Generic</option>
                  <option value="Both">Both</option>
                </select>
              </FormGroup>
            </div>
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <FormGroup label="Packaging">
                <input type="text" name="packaging" className={INPUT_CLASSES} placeholder="e.g. Blister, Bottle" />
              </FormGroup>
              <FormGroup label="Destination Port">
                <input type="text" name="destinationPort" className={INPUT_CLASSES} placeholder="e.g. Dubai, Lagos" />
              </FormGroup>
            </div>
            <FormGroup label="Additional Message">
              <textarea
                name="message"
                className={`${INPUT_CLASSES} resize-y min-h-[100px]`}
                placeholder="Any specific requirements, regulatory needs, or questions..."
              />
            </FormGroup>

            <button
              type="submit"
              disabled={pending}
              className="mt-4 w-full bg-teal text-navy-dark font-sans font-semibold py-4 rounded-lg hover:bg-[#66e0d0] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {pending ? (
                <>
                  <div className="w-5 h-5 border-2 border-navy-dark/30 border-t-navy-dark rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </form>

          <ClientEffects />
        </div>

        {/* Contact info */}
        <div className="pt-5 reveal opacity-0 translate-y-8 transition-[opacity,transform] duration-700 ease-out">
          <ContactCard
            icon={<MapPin className="w-6 h-6 text-teal" />}
            title="Our Office"
          >
            <div className="font-mono text-[13px] text-teal mb-1">
              Shop No. 7, Comet Building
            </div>
            <div className="text-xs text-brand-gray">
              Opp. Lake View, Guru Nanak Road
              <br />
              Bandra West, Mumbai – 400050
            </div>
          </ContactCard>

          <ContactCard
            icon={<Phone className="w-6 h-6 text-teal" />}
            title="Call / WhatsApp"
          >
            {COMPANY.phones.map((phone) => (
              <div key={phone} className="font-mono text-[13px] text-teal mb-1">
                {phone}
              </div>
            ))}
            <div className="text-xs text-brand-gray">
              Available 24×7 for Export Queries
            </div>
          </ContactCard>

          <div className="bg-[rgba(37,211,102,0.05)] border border-[rgba(37,211,102,0.3)] rounded-2xl p-8 mb-5 transition-colors duration-300 hover:border-teal">
            <div className="w-12 h-12 bg-[rgba(37,211,102,0.15)] rounded-xl flex items-center justify-center mb-3 border border-[rgba(37,211,102,0.3)]">
              <MessageCircle className="w-6 h-6 text-[#25d366]" />
            </div>
            <div className="font-serif text-xl font-semibold mb-2">
              WhatsApp Direct
            </div>
            <div className="text-xs text-brand-gray mb-4">
              Fastest way to get a quote. Send us your product list on WhatsApp
              and receive pricing within hours.
            </div>
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white px-5 py-3 rounded-lg font-semibold text-[13px] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)]"
            >
              <WhatsAppIcon size={16} />
              Chat on WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/[0.03] border border-border rounded-2xl p-8 mb-5 transition-colors duration-300 hover:border-teal">
      <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-3 border border-teal/20">
        {icon}
      </div>
      <div className="font-serif text-xl font-semibold mb-2">{title}</div>
      {children}
    </div>
  );
}
