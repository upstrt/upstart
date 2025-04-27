
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
import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
    
    // Handle scroll events to update active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          if (id) {
            // Update URL without reloading page
            history.replaceState(null, '', `#${id}`);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden" ref={sectionsRef}>
      {/* Professional glass gradient background effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-outteams-light/50 via-blue-100/30 to-white opacity-70 z-0"></div>
      <div className="fixed inset-0 backdrop-blur-[100px] z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar onSectionClick={scrollToSection} />
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
