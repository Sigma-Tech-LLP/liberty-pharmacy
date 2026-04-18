import {
  Pill,
  Syringe,
  FlaskConical,
  Microscope,
  Building2,
  Leaf,
  ShoppingCart,
  Apple,
} from "lucide-react";
import type { Category } from "@/types";

export const categories: Category[] = [
  {
    icon: Pill,
    name: "Tablets & Capsules",
    desc: "Branded and generic oral solid dosage forms across all therapeutic segments. Bulk packs available.",
  },
  {
    icon: Syringe,
    name: "Injections",
    desc: "Sterile injectable solutions, lyophilized products and pre-filled syringes from WHO-GMP manufacturers.",
  },
  {
    icon: FlaskConical,
    name: "IV Fluids",
    desc: "Intravenous fluids, electrolyte solutions and parenteral nutrition products for hospitals and clinics.",
  },
  {
    icon: Microscope,
    name: "Vaccines & Biologicals",
    desc: "Cold chain managed vaccines, biologics and immunoglobulins with full regulatory compliance support.",
  },
  {
    icon: Building2,
    name: "Surgical & Hospital Supplies",
    desc: "Disposables, sutures, surgical instruments and hospital consumables for healthcare institutions.",
  },
  {
    icon: Leaf,
    name: "Ayurvedic & Herbal",
    desc: "Authentic Ayurvedic formulations and herbal wellness products certified for international export.",
  },
  {
    icon: ShoppingCart,
    name: "OTC & Consumer Healthcare",
    desc: "Over-the-counter medicines, personal care and consumer health products for retail distribution.",
  },
  {
    icon: Apple,
    name: "Nutraceuticals & Supplements",
    desc: "Vitamins, minerals, protein supplements and functional nutrition products for wellness brands.",
  },
];
