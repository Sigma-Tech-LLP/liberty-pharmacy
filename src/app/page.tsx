import { HeroSection } from "@/features/home/components/HeroSection";
import { TrustBar } from "@/features/home/components/TrustBar";
import { CategoriesSection } from "@/features/home/components/CategoriesSection";
import { ProcessSection } from "@/features/home/components/ProcessSection";
import { WhyChooseSection } from "@/features/home/components/WhyChooseSection";
import { InquirySection } from "@/features/home/components/InquirySection";
import { RetailSection } from "@/features/home/components/RetailSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CategoriesSection />
      <ProcessSection />
      <WhyChooseSection />
      <InquirySection />
      <RetailSection />
    </>
  );
}
