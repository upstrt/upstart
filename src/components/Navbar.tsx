
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Zap, ExternalLink, ChevronRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-lg py-2" : "py-4"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold flex items-center gap-1">
              <span className="text-blue-700">up</span>
              <span className="text-indigo-700">start</span>
              <Zap className="w-5 h-5 text-blue-600 animate-pulse" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-blue-700 transition-colors">Solutions</a>
            <a href="#process" className="text-sm font-medium hover:text-blue-700 transition-colors">Development Process</a>
            <a href="#savings" className="text-sm font-medium hover:text-blue-700 transition-colors">ROI Calculator</a>
            <a href="#case-studies" className="text-sm font-medium hover:text-blue-700 transition-colors">Success Stories</a>
            <a href="#team" className="text-sm font-medium hover:text-blue-700 transition-colors">Our Expertise</a>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white relative overflow-hidden group shine"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-500 opacity-0 group-hover:opacity-20 group-hover:blur-lg transition-all duration-700"></span>
              <span className="relative flex items-center gap-1 z-10">
                Free Consultation <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-1 rounded-md hover:bg-blue-50">
              {isOpen ? <X className="text-blue-700" /> : <Menu className="text-blue-700" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 px-6">
              <a href="#services" className="text-sm font-medium hover:text-blue-700 transition-colors">Solutions</a>
              <a href="#process" className="text-sm font-medium hover:text-blue-700 transition-colors">Development Process</a>
              <a href="#savings" className="text-sm font-medium hover:text-blue-700 transition-colors">ROI Calculator</a>
              <a href="#case-studies" className="text-sm font-medium hover:text-blue-700 transition-colors">Success Stories</a>
              <a href="#team" className="text-sm font-medium hover:text-blue-700 transition-colors">Our Expertise</a>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white shine"
              >
                Free Consultation <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
