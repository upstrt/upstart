
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
import { toast } from "@/hooks/use-toast";

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
    
    // Welcome toast
    toast({
      title: "Welcome to Upxtend",
      description: "Discover how our dedicated tech team can integrate with your business",
    });
    
    // Add scroll reveal animation
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
    
    // Handle scroll events to update active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          if (id) {
            // Update URL without reloading page
            history.replaceState(null, '', `#${id}`);
            
            // Add toast notification when scrolling to a new section
            if (id !== 'home' && !section.classList.contains('toast-shown')) {
              section.classList.add('toast-shown');
              const sectionName = id.charAt(0).toUpperCase() + id.slice(1);
              toast({
                title: `Exploring ${sectionName}`,
                description: `Learn how our team becomes your team`,
                duration: 3000,
              });
            }
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Show toast when clicking navigation
      const sectionName = id.charAt(0).toUpperCase() + id.slice(1);
      toast({
        title: `Navigating to ${sectionName}`,
        description: `Learn more about this aspect of our service`,
        duration: 2000,
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden" ref={sectionsRef}>
      {/* Professional glass gradient background effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-100/50 via-indigo-100/30 to-white opacity-70 z-0"></div>
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
