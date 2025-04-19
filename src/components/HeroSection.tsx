import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Globe, Users, Shield, Code, Clock, CheckCircle, MessageSquare, Video, GitMerge, GitPullRequest } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { StandupAnimation } from './StandupAnimation';

export function HeroSection() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  
  const teamMessages = [
    { sender: "FOUNDER", message: "How's the new feature implementation coming along?" },
    { sender: "DEV", message: "Just pushed the latest commits. All tests passing!" },
    { sender: "PM", message: "Great! Let's review it in today's standup." },
    { sender: "QA", message: "I'll start testing it right after the standup." }
  ];

  const workingHours = [
    { location: "Sydney", time: "9:00 AM - 5:00 PM AEST" },
    { location: "Melbourne", time: "9:00 AM - 5:00 PM AEST" },
    { location: "Brisbane", time: "9:00 AM - 5:00 PM AEST" },
    { location: "Perth", time: "9:00 AM - 5:00 PM AWST" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Start the message rotation
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % teamMessages.length);
    }, 3500);
    
    // Trigger animation sequence after a short delay
    setTimeout(() => {
      setShowAnimation(true);
    }, 800);
    
    return () => clearInterval(messageInterval);
  }, []);
  
  const handleConsultation = () => {
    toast({
      title: "Free Consultation",
      description: "Opening consultation scheduler...",
    });
  };
  
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-upxtend-light/10 to-white/80 opacity-70"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-upxtend-light/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-200/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-upxtend-primary/20 shadow-sm">
              <span className="w-2 h-2 bg-upxtend-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-upxtend-dark">Your Extended Tech Team</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text-hero">Your In-House Tech Team,</span>
              <br />
              <span className="inline-flex items-baseline">
                Just <span className="text-upxtend-primary mx-2 relative">
                  Remote
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q50,0 100,10" stroke="#0066cc" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              We integrate seamlessly with your business, just like an in-house team. Same daily standups, 
              sprint planning, and real-time collaboration – aligned with <span className="text-upxtend-primary font-medium">Australian business hours</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/process">
                <Button 
                  size="lg" 
                  className="bg-upxtend-primary hover:bg-upxtend-dark text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group animate-pulse-subtle"
                  onClick={handleConsultation}
                >
                  <Calendar className="w-5 h-5" />
                  Let's Build Together
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/expertise">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-upxtend-primary text-upxtend-primary hover:bg-upxtend-light flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Explore Our Expertise
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Clock, text: "Aligned with Australian Business Hours" },
                { icon: Globe, text: "Australian Culture Fit" },
                { icon: Shield, text: "Risk-Free Trial Period" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 p-3 bg-white/80 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
                  data-aos="fade-up" 
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="bg-upxtend-light rounded-full p-1.5">
                    <item.icon className="w-4 h-4 text-upxtend-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative hidden lg:block transform transition-all duration-1000 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <StandupAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
