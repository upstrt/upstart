
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Globe, Users, Shield, Code, Clock, CheckCircle, MessageSquare, Video, GitMerge, GitPullRequest } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export function HeroSection() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const teamMessages = [
    { sender: "YOU", message: "How's the new feature implementation coming along?" },
    { sender: "DEV", message: "Just pushed the latest commits. All tests passing!" },
    { sender: "PM", message: "Great! Let's review it in today's standup." },
    { sender: "QA", message: "I'll start testing it right after the standup." }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % teamMessages.length);
    }, 3500);
    
    return () => clearInterval(messageInterval);
  }, []);
  
  const handleConsultation = () => {
    toast({
      title: "Booking Consultation",
      description: "Redirecting to our consultation scheduling page",
    });
  };
  
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
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
              Access your own dedicated tech team with senior developers who integrate seamlessly with your business.
              Regular standups, sprint planning, and real-time collaboration—just like having your own in-house team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/process">
                <Button 
                  size="lg" 
                  className="bg-upxtend-primary hover:bg-upxtend-dark text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
                  onClick={handleConsultation}
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
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
                { icon: Shield, text: "Risk-Free Trial Period" },
                { icon: Code, text: "100% Code Ownership" },
                { icon: Clock, text: "Aligned Working Hours" },
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
          
          <div className="relative hidden lg:block">
            {/* Team collaboration visualization */}
            <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-700 hover:shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Your Daily Collaboration</h3>
                <div className="bg-upxtend-light/50 p-2 rounded-full">
                  <Users className="w-6 h-6 text-upxtend-primary" />
                </div>
              </div>
              
              {/* Daily workflow visualization */}
              <div className="mb-6 space-y-4">
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-medium mb-2">
                  <div className="bg-upxtend-light/30 p-2 rounded-md text-upxtend-primary">
                    <Clock className="w-4 h-4 mx-auto mb-1" />
                    Daily Standup
                  </div>
                  <div className="bg-upxtend-light/30 p-2 rounded-md text-upxtend-primary">
                    <GitPullRequest className="w-4 h-4 mx-auto mb-1" />
                    Code Review
                  </div>
                  <div className="bg-upxtend-light/30 p-2 rounded-md text-upxtend-primary">
                    <CheckCircle className="w-4 h-4 mx-auto mb-1" />
                    QA Testing
                  </div>
                  <div className="bg-upxtend-light/30 p-2 rounded-md text-upxtend-primary">
                    <GitMerge className="w-4 h-4 mx-auto mb-1" />
                    Deployment
                  </div>
                </div>
                
                {/* Active collaboration visual */}
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold relative">
                      YOU
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                    </div>
                    
                    <svg className="w-20 h-6" viewBox="0 0 100 20">
                      <path d="M0,10 H100" stroke="#0066cc" strokeWidth="2" strokeDasharray="5,5" />
                      <path d="M90,5 L100,10 L90,15" fill="none" stroke="#0066cc" strokeWidth="2" />
                    </svg>
                    
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-upxtend-primary to-blue-500 flex items-center justify-center text-white font-medium text-sm border-2 border-white relative z-30">
                        PM
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-upxtend-primary to-blue-500 flex items-center justify-center text-white font-medium text-sm border-2 border-white relative z-20">
                        DEV
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-upxtend-primary to-blue-500 flex items-center justify-center text-white font-medium text-sm border-2 border-white relative z-10">
                        QA
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Live chat simulation */}
                  <div className="bg-upxtend-light/30 p-4 rounded-lg border border-upxtend-primary/10 h-36 overflow-y-auto">
                    <div className="flex flex-col space-y-3">
                      {teamMessages.map((msg, idx) => {
                        const isActive = idx === currentMessage;
                        return (
                          <div 
                            key={idx} 
                            className={`flex items-start ${msg.sender === "YOU" ? "" : "justify-end"} ${isActive ? "opacity-100" : "opacity-50"} transition-opacity duration-300`}
                          >
                            {msg.sender === "YOU" && (
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-medium mr-2 shrink-0">
                                YOU
                              </div>
                            )}
                            
                            <div className={`${msg.sender === "YOU" ? "bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg" : "bg-upxtend-primary text-white rounded-tl-lg rounded-bl-lg rounded-br-lg"} p-2 shadow-sm text-sm max-w-[80%] ${isActive ? "animate-pulse-subtle" : ""}`}>
                              {msg.message}
                            </div>
                            
                            {msg.sender !== "YOU" && (
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-upxtend-primary to-blue-500 flex items-center justify-center text-white text-xs font-medium ml-2 shrink-0">
                                {msg.sender}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Video className="w-5 h-5 text-upxtend-primary mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Daily Video Standups</p>
                      <p className="text-xs text-gray-500">Start your day with team alignment</p>
                    </div>
                  </div>
                  <div className="bg-green-100 px-2 py-1 rounded text-green-800 text-xs font-medium">10:00 AM Daily</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-upxtend-primary mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Real-time Communication</p>
                      <p className="text-xs text-gray-500">Always in sync with your team</p>
                    </div>
                  </div>
                  <div className="bg-green-100 px-2 py-1 rounded text-green-800 text-xs font-medium">Always On</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-upxtend-primary/10 rounded-lg border border-upxtend-primary/20">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-upxtend-primary mr-3" />
                    <p className="font-medium text-upxtend-primary">Risk-Free Trial Available</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-upxtend-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
