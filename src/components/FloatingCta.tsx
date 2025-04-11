
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button 
        size="lg" 
        className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white shadow-xl flex items-center gap-2 transition-all duration-300 ${isHovered ? 'scale-110 shadow-2xl shadow-blue-300/30' : ''}`}
      >
        <MessageSquare className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'rotate-12' : ''}`} />
        Talk to Our Tech Team
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full pulse"></div>
      </Button>
      
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-3 bg-white p-3 rounded-lg shadow-lg text-sm w-64 fadeIn">
          <p className="font-medium text-blue-700">Our tech experts are ready to help!</p>
          <p className="text-gray-600 text-xs mt-1">Average response time: <span className="font-bold">5 mins</span></p>
          <div className="flex items-center gap-1 mt-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-xs text-green-700">3 developers online now</span>
          </div>
        </div>
      )}
    </div>
  );
}
