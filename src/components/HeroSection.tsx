
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
              <Button 
                size="lg" 
                className="bg-upxtend-primary hover:bg-upxtend-dark text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
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
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-upxtend-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            
            {/* Team visualization */}
            <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Your Global Team</h3>
                    <p className="text-sm text-gray-500">Seamlessly integrated with your business</p>
                  </div>
                  <Globe className="w-8 h-8 text-upxtend-primary" />
                </div>
                
                <div className="relative">
                  <div className="flex -space-x-4 mb-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-upxtend-primary to-upxtend-secondary flex items-center justify-center text-white font-semibold text-sm border-2 border-white">
                        {['PM', 'FE', 'BE', 'UI', 'QA'][i-1]}
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Dedicated Team Members", value: "5-10", icon: Users },
                      { label: "Global Talent Access", value: "Unlimited", icon: Globe },
                      { label: "Tech Stacks", value: "20+", icon: Code },
                    ].map((item, index) => (
                      <div key={index} className="bg-upxtend-light/50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-upxtend-primary/10 rounded-md">
                              <item.icon className="w-5 h-5 text-upxtend-primary" />
                            </div>
                            <span className="font-medium text-gray-700">{item.label}</span>
                          </div>
                          <span className="text-lg font-semibold text-upxtend-primary">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-upxtend-light rounded-lg border border-upxtend-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-full">
                        <Clock className="w-5 h-5 text-upxtend-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-upxtend-dark">Compatible Working Hours</p>
                        <p className="text-sm text-gray-600">Our team works during <span className="font-semibold">your business hours</span></p>
                      </div>
                    </div>
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
