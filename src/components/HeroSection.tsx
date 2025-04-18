
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Globe, Users, Shield, Code, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-upxtend-light to-white/80 opacity-70"></div>
      
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
              Access your own dedicated tech team with senior developers who integrate seamlessly with your business. Enjoy risk-free trial periods, compatible time zones, and complete code ownership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/process">
                <Button 
                  size="lg" 
                  className="bg-upxtend-primary hover:bg-upxtend-dark text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
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
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Shield, text: "Risk-Free Trial Period" },
                { icon: Code, text: "100% Code Ownership" },
                { icon: Clock, text: "Compatible Time Zones" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white/80 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <item.icon className="w-5 h-5 text-upxtend-primary" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Abstract visualization */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-upxtend-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-200/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            
            {/* Team collaboration visualization */}
            <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Your Collaborative Team</h3>
                <div className="bg-upxtend-light/50 p-2 rounded-full">
                  <Users className="w-6 h-6 text-upxtend-primary" />
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
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
                  
                  <div className="bg-upxtend-light/30 p-4 rounded-lg border border-upxtend-primary/10">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-medium mr-2 shrink-0">
                          YOU
                        </div>
                        <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm text-sm">
                          Can we review the new feature implementation?
                        </div>
                      </div>
                      
                      <div className="flex items-start justify-end">
                        <div className="bg-upxtend-primary p-2 rounded-lg rounded-tr-none shadow-sm text-white text-sm">
                          Yes! I've prepared a demo for our standup today.
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-upxtend-primary to-blue-500 flex items-center justify-center text-white text-xs font-medium ml-2 shrink-0">
                          PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-upxtend-primary mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Same Working Hours</p>
                      <p className="text-xs text-gray-500">Aligned with your business schedule</p>
                    </div>
                  </div>
                  <div className="bg-green-100 px-2 py-1 rounded text-green-800 text-xs font-medium">Active</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-upxtend-primary mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Seamless Integration</p>
                      <p className="text-xs text-gray-500">With your tools and processes</p>
                    </div>
                  </div>
                  <div className="bg-green-100 px-2 py-1 rounded text-green-800 text-xs font-medium">Connected</div>
                </div>
                
                <div className="bg-upxtend-primary/10 p-3 rounded-lg border border-upxtend-primary/20">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-upxtend-primary mr-3" />
                    <p className="font-medium text-upxtend-primary">Risk-Free Trial Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
