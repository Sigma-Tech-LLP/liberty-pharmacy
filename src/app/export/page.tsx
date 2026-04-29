import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ScrollProvider } from '@/components/ScrollProvider';
import DocumentationBannerSection from '@/features/export/components/DocumentationBannerSection';
import ExportProcessSection from '@/features/export/components/ExportProcessSection';
import GlobalNetworkSection from '@/features/export/components/GlobalNetworkSection';
import HeroSection from '@/features/export/components/HeroSection';
import PartnerBenefitsSection from '@/features/export/components/PartnerBenefitsSection';
import ProductPortfolioSection from '@/features/export/components/ProductPortfolioSection';

export default function ExportPage() {
  return (
    <ScrollProvider>
    <div className="bg-off-white min-h-screen selection:bg-teal/20 selection:text-navy">
      <HeroSection />
      <GlobalNetworkSection />
      <ProductPortfolioSection />
      <ExportProcessSection />
      <PartnerBenefitsSection />
      <DocumentationBannerSection />
    </div>
    </ScrollProvider>
  );
}