
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Calendar, Shield, Code, Users } from "lucide-react";
import { useEffect, useState } from "react";

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
              <span className="text-sm font-medium text-upxtend-dark">Transform Your Development Team</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text-hero">Premium Development</span>
              <br />
              <span className="inline-flex items-baseline">
                at <span className="text-upxtend-secondary mx-2 relative">
                  1/3
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q50,0 100,10" stroke="#FF8533" strokeWidth="2" fill="none"/>
                  </svg>
                </span> the Cost
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Access top-tier developers and scale your team efficiently with our risk-free trial period. Compatible time zones, transparent development, and complete code ownership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-upxtend-primary hover:bg-upxtend-dark text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
                onClick={() => document.getElementById('savings')?.scrollIntoView({behavior: 'smooth'})}
              >
                <Calculator className="w-5 h-5" />
                Calculate Your Savings
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-upxtend-primary text-upxtend-primary hover:bg-upxtend-light flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Shield, text: "Risk-Free Trial Period" },
                { icon: Code, text: "100% Code Ownership" },
                { icon: Users, text: "Compatible Time Zones" },
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
            
            {/* Stats cards with glassmorphism */}
            <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Development Cost Comparison</h3>
                    <p className="text-sm text-gray-500">Annual savings analysis</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Live Data
                  </span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Traditional Cost", value: "$300,000", percentage: "100%" },
                    { label: "Upxtend Cost", value: "$100,000", percentage: "33%" },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{item.label}</span>
                        <span className="text-lg font-bold">{item.value}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            index === 0 
                              ? "bg-gray-400" 
                              : "bg-upxtend-primary animate-pulse"
                          }`}
                          style={{ width: item.percentage }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-green-800">Your Savings:</span>
                    <span className="text-xl font-bold text-green-700">$200,000</span>
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
