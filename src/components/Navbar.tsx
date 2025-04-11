
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Code, Zap } from "lucide-react";

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "py-4"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold flex items-center gap-1">
              <span className="text-blue-600">up</span>
              <span className="text-purple-700">start</span>
              <Zap className="w-5 h-5 text-blue-500 animate-pulse" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium hover:text-blue-600 transition-colors">Our Process</a>
            <a href="#savings" className="text-sm font-medium hover:text-blue-600 transition-colors">Cost Savings</a>
            <a href="#case-studies" className="text-sm font-medium hover:text-blue-600 transition-colors">Case Studies</a>
            <a href="#team" className="text-sm font-medium hover:text-blue-600 transition-colors">Our Team</a>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shine">
              Contact Us
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-1 rounded-md hover:bg-blue-50">
              {isOpen ? <X className="text-blue-600" /> : <Menu className="text-blue-600" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 px-6">
              <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</a>
              <a href="#process" className="text-sm font-medium hover:text-blue-600 transition-colors">Our Process</a>
              <a href="#savings" className="text-sm font-medium hover:text-blue-600 transition-colors">Cost Savings</a>
              <a href="#case-studies" className="text-sm font-medium hover:text-blue-600 transition-colors">Case Studies</a>
              <a href="#team" className="text-sm font-medium hover:text-blue-600 transition-colors">Our Team</a>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shine">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
