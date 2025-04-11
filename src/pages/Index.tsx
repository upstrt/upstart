
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { CaseStudies } from "@/components/CaseStudies";
import { TeamSection } from "@/components/TeamSection";
import { ConnectSection } from "@/components/ConnectSection";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <SavingsCalculator />
      <CaseStudies />
      <TeamSection />
      <ConnectSection />
      <Footer />
      <FloatingCta />
    </div>
  );
};

export default Index;
