import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface NavbarProps {
  onSectionClick?: (id: string) => void;
}

export function Navbar({ onSectionClick }: NavbarProps) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleConsultation = () => {
    toast({
      title: "Booking Consultation",
      description: "Redirecting to our consultation scheduling page",
    });
  };
  
  const handleNavClick = (id: string) => {
    if (onSectionClick && isHomePage) {
      onSectionClick(id);
      setIsOpen(false); // Close mobile menu if open
    }
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-lg shadow-lg py-2" 
        : "py-4"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="relative w-32 h-8">
              <img 
                src="/lovable-uploads/d45ec594-8a8e-48e3-a3e1-3a79db8c91fb.png" 
                alt="Upxtend Logo" 
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <button 
                  onClick={() => handleNavClick("home")} 
                  className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick("services")} 
                  className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors"
                >
                  Solutions
                </button>
                <button 
                  onClick={() => handleNavClick("process")} 
                  className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => handleNavClick("calculator")} 
                  className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors"
                >
                  Cost Calculator
                </button>
                <button 
                  onClick={() => handleNavClick("case-studies")} 
                  className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors"
                >
                  Partnerships
                </button>
                <button 
                  onClick={() => handleNavClick("team")} 
                  className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors"
                >
                  Our Team
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                  Home
                </Link>
                <Link to="/solutions" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                  Solutions
                </Link>
                <Link to="/process" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                  How It Works
                </Link>
                <Link to="/calculator" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                  Cost Calculator
                </Link>
                <Link to="/case-studies" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                  Partnerships
                </Link>
                <Link to="/expertise" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                  Our Expertise
                </Link>
              </>
            )}
            
            <Link to="/process" onClick={handleConsultation}>
              <Button 
                size="sm" 
                className="bg-upxtend-primary hover:bg-upxtend-dark text-white relative overflow-hidden group shine font-semibold px-5 py-2.5 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative flex items-center gap-1 z-10">
                  <Calendar className="w-4 h-4 mr-1" />
                  Book Free Consultation <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-1 rounded-md hover:bg-upxtend-light">
              {isOpen ? <X className="text-upxtend-primary" /> : <Menu className="text-upxtend-primary" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 px-6">
              {isHomePage ? (
                <>
                  <button 
                    onClick={() => handleNavClick("home")} 
                    className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors text-left py-1"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => handleNavClick("services")} 
                    className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors text-left py-1"
                  >
                    Solutions
                  </button>
                  <button 
                    onClick={() => handleNavClick("process")} 
                    className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors text-left py-1"
                  >
                    How It Works
                  </button>
                  <button 
                    onClick={() => handleNavClick("calculator")} 
                    className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors text-left py-1"
                  >
                    Cost Calculator
                  </button>
                  <button 
                    onClick={() => handleNavClick("case-studies")} 
                    className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors text-left py-1"
                  >
                    Partnerships
                  </button>
                  <button 
                    onClick={() => handleNavClick("team")} 
                    className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors text-left py-1"
                  >
                    Our Team
                  </button>
                </>
              ) : (
                <>
                  <Link to="/" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                    Home
                  </Link>
                  <Link to="/solutions" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                    Solutions
                  </Link>
                  <Link to="/process" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                    How It Works
                  </Link>
                  <Link to="/calculator" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                    Cost Calculator
                  </Link>
                  <Link to="/case-studies" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                    Partnerships
                  </Link>
                  <Link to="/expertise" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">
                    Our Expertise
                  </Link>
                </>
              )}
              
              <Link to="/process" onClick={handleConsultation}>
                <Button 
                  size="sm" 
                  className="bg-upxtend-primary hover:bg-upxtend-dark text-white shine w-full flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Free Consultation <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
