
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);
  
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
    <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button 
        size="lg" 
        className="bg-upstart-purple hover:bg-upstart-darkBlue text-white shadow-lg flex items-center gap-2"
      >
        <MessageSquare className="w-5 h-5" />
        Talk to Our Tech Team
      </Button>
    </div>
  );
}
