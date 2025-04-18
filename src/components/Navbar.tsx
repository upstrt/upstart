
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg py-2" : "py-4"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="relative w-32 h-8">
              <img 
                src="/public/lovable-uploads/d45ec594-8a8e-48e3-a3e1-3a79db8c91fb.png" 
                alt="Upxtend Logo" 
                className="w-full h-full object-contain"
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">Solutions</a>
            <a href="#process" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">How It Works</a>
            <a href="#savings" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">Cost Calculator</a>
            <a href="#case-studies" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">Case Studies</a>
            <a href="#team" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">Our Team</a>
            <Button 
              size="sm" 
              className="bg-upxtend-primary hover:bg-upxtend-dark text-white relative overflow-hidden group shine"
            >
              <span className="relative flex items-center gap-1 z-10">
                Start Free Trial <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
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
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">Solutions</a>
              <a href="#process" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">How It Works</a>
              <a href="#savings" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">Cost Calculator</a>
              <a href="#case-studies" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">Case Studies</a>
              <a href="#team" className="text-sm font-medium text-gray-700 hover:text-upxtend-primary transition-colors">Our Team</a>
              <Button 
                size="sm" 
                className="bg-upxtend-primary hover:bg-upxtend-dark text-white shine w-full"
              >
                Start Free Trial <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
