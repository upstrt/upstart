
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "py-4"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-upstart-purple flex items-center">
              <span className="text-upstart-blue">up</span>
              <span className="text-upstart-purple">start</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-upstart-purple transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium hover:text-upstart-purple transition-colors">Our Process</a>
            <a href="#savings" className="text-sm font-medium hover:text-upstart-purple transition-colors">Cost Savings</a>
            <a href="#case-studies" className="text-sm font-medium hover:text-upstart-purple transition-colors">Case Studies</a>
            <a href="#team" className="text-sm font-medium hover:text-upstart-purple transition-colors">Our Team</a>
            <Button size="sm" className="bg-upstart-purple hover:bg-upstart-blue text-white">
              Contact Us
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-6">
              <a href="#services" className="text-sm font-medium hover:text-upstart-purple transition-colors">Services</a>
              <a href="#process" className="text-sm font-medium hover:text-upstart-purple transition-colors">Our Process</a>
              <a href="#savings" className="text-sm font-medium hover:text-upstart-purple transition-colors">Cost Savings</a>
              <a href="#case-studies" className="text-sm font-medium hover:text-upstart-purple transition-colors">Case Studies</a>
              <a href="#team" className="text-sm font-medium hover:text-upstart-purple transition-colors">Our Team</a>
              <Button size="sm" className="bg-upstart-purple hover:bg-upstart-blue text-white">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
