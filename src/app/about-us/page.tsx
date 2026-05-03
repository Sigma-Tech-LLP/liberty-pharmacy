import ComplianceSection from '@/features/about-us/components/ComplianceSection';
import PillarSection from '@/features/about-us/components/PillarSection';
import HeroSection from '@/features/about-us/components/HeroSection';
import StorySection from '@/features/about-us/components/StorySection';

export default function AboutUsPage() {
  return (
    <>
    <main className="bg-off-white selection:bg-teal/20">
      <HeroSection />
      <StorySection />
      <PillarSection />
     <ComplianceSection />
    </main>
    </>
  );
}