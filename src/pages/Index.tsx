
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
import { useEffect } from "react";

const Index = () => {
  // Add scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observer all major sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      // Skip hero section as it has its own animations
      if (!section.classList.contains('hero-gradient')) {
        // Remove any existing fadeIn class to prevent double animation
        section.classList.remove('fadeIn');
        observer.observe(section);
      }
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Glass gradient background effect inspired by the image */}
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-200 via-blue-400 to-purple-700 opacity-5 z-0"></div>
      <div className="fixed inset-0 backdrop-blur-[120px] z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
