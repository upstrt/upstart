
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Calculator, CheckCircle, Star, Terminal, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 opacity-80"></div>
      <div className="absolute inset-0 backdrop-blur-[50px]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-40 animate-float-slow"></div>
        <div className="absolute -top-24 right-10 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-sky-400/10 rounded-full filter blur-3xl opacity-30 animate-float-reverse"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 w-20 h-20 opacity-20 animate-spin-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1E40AF" d="M41.9,-51.8C54.1,-46.1,63.5,-32.7,68.5,-17.3C73.4,-1.8,73.9,15.6,67,28.7C60.1,41.9,45.8,50.8,31,56.6C16.2,62.5,0.9,65.2,-17.5,64.1C-35.9,63,-57.4,58.1,-71.4,44.8C-85.5,31.5,-92.1,9.8,-87.5,-8.3C-82.9,-26.3,-67.1,-40.7,-50.7,-46.5C-34.3,-52.3,-17.1,-49.5,-1.3,-47.9C14.6,-46.3,29.7,-57.5,41.9,-51.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-30 animate-bounce-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0369A1" d="M41.3,-58.6C52.4,-53.3,59.7,-39.7,64.1,-25.8C68.5,-11.9,69.9,2.3,67.8,16.3C65.8,30.3,60.4,44.1,49.8,52C39.3,59.9,23.6,61.9,8.8,62.3C-6,62.7,-20,61.5,-30.8,55.1C-41.5,48.7,-48.9,37.2,-54.7,24.9C-60.5,12.5,-64.8,-0.5,-63.2,-13C-61.5,-25.5,-53.9,-37.4,-43,-44.1C-32.2,-50.8,-18.1,-52.2,-2.3,-49.2C13.5,-46.1,30.2,-63.8,41.3,-58.6Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Professional badge with gradient */}
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-100 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent font-semibold">
                  Offshore Tech Teams, Reimagined
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="inline-block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                Your Offshore Tech Team:
              </span>
              <br />
              <span className="gradient-text-hero flex items-center gap-2">
                Premium Development at <div className="relative inline-flex items-center justify-center">
                  <span className="relative z-10 text-blue-600 font-extrabold">1/3</span>
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-md animate-pulse-subtle"></div>
                </div> the Cost
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Upstart delivers world-class software development with a dedicated offshore team—streamlining your project delivery while maximizing your budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:from-blue-800 hover:to-indigo-700 flex items-center gap-2 shadow-glow-blue btn-gradient shine group"
                onClick={() => document.getElementById('savings')?.scrollIntoView({behavior: 'smooth'})}
              >
                <Calculator className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Calculate Your Savings</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-700 text-blue-700 hover:bg-blue-50 flex items-center gap-2 shine shadow-sm group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Schedule Free Consultation</span>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold pulse">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="ml-2">Compatible Time Zones</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold pulse">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="ml-2">Risk-Free Trial Period</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold pulse">
                  <Star className="w-5 h-5" />
                </div>
                <span className="ml-2">99.7% Client Satisfaction</span>
              </div>
            </div>
            
            {/* Stats animation */}
            <div className="pt-4 grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center p-3 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-blue-700 font-bold text-2xl md:text-3xl">1/3</span>
                <span className="text-xs text-gray-700 text-center">The Cost</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-indigo-600 font-bold text-2xl md:text-3xl">24/7</span>
                <span className="text-xs text-gray-700 text-center">Support</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <span className="text-sky-600 font-bold text-2xl md:text-3xl">100+</span>
                <span className="text-xs text-gray-700 text-center">Projects</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Professional dashboard visualization */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-4 text-center flex flex-col items-center justify-center transform rotate-12 z-10 animate-float-slow border border-blue-100">
              <span className="text-xs text-blue-700 font-semibold">Save up to</span>
              <span className="text-3xl font-bold text-blue-700">65%</span>
              <div className="w-20 h-1 my-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              <span className="text-xs text-gray-700">on development costs</span>
            </div>
            
            {/* Code ownership callout */}
            <div className="absolute -top-8 -left-10 md:-left-20 w-40 h-40 rotate-[-12deg] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 text-xs overflow-hidden opacity-90 z-10 animate-float-slow border border-blue-100">
              <pre className="text-blue-800 font-mono">
                <code>{`// Full Code Ownership
const client = {
  ownership: 'complete',
  rights: '100%',
  transparency: true
};

export default client;`}</code>
              </pre>
              <div className="absolute bottom-2 right-2 text-green-600">
                <Terminal className="w-4 h-4" />
              </div>
            </div>
            
            {/* Global connection visualization */}
            <div className="absolute -bottom-8 -left-10 md:-left-20 w-40 h-40 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 overflow-hidden opacity-90 animate-float z-10 border border-blue-100">
              <div className="relative h-full">
                <div className="w-12 h-12 rounded-full bg-blue-700 absolute top-2 right-2 opacity-70 flex items-center justify-center text-white">
                  <span className="text-xs">YOU</span>
                </div>
                <svg className="w-full h-full opacity-70" viewBox="0 0 100 100" fill="none">
                  <path d="M30,30 Q65,5 80,50" stroke="#4338CA" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="30" cy="30" r="5" fill="#0369A1" />
                  <circle cx="80" cy="50" r="5" fill="#4338CA" />
                  <animateTransform 
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    from="0 0"
                    to="0 3"
                    dur="3s"
                    repeatCount="indefinite"
                    additive="sum"
                  />
                </svg>
                <div className="absolute bottom-2 right-2 text-blue-700">
                  <Users className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            {/* Professional dashboard visualization */}
            <div className="relative bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-1000 hover:shadow-blue-100">
              <div className="absolute -right-3 -top-3 bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                COST COMPARISON
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-blue-900">Development Cost Analysis</h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full pulse"></span>
                  Real-time
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="relative pt-8 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Local Development</span>
                    <span className="text-lg font-bold">$100,000</span>
                  </div>
                  <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 w-full rounded-full"></div>
                  </div>
                  <div className="absolute top-0 right-0 bg-gray-400 text-white text-xs px-2 py-1 rounded-full">
                    100%
                  </div>
                </div>
                
                <div className="relative pt-8 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Upstart Development</span>
                    <span className="text-lg font-bold text-blue-700">$33,000</span>
                  </div>
                  <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-700 to-indigo-600 w-[33%] rounded-full animate-pulse-subtle"></div>
                  </div>
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-xs px-2 py-1 rounded-full animate-pulse-subtle">
                    33%
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Your Savings:</span>
                    <span className="text-xl font-bold text-green-600">$67,000</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex-1 h-2 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full"></div>
                    <div className="ml-2 text-sm font-bold text-indigo-600">67%</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white shine"
                  onClick={() => document.getElementById('savings')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Calculate Your Specific Savings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
