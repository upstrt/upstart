
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Calculator, CheckCircle, Star, Code, Users } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-40 animate-float-slow"></div>
        <div className="absolute -top-24 right-10 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-400/20 rounded-full filter blur-3xl opacity-30 animate-float-reverse"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 w-20 h-20 opacity-30 animate-spin-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#5E3B8F" d="M41.9,-51.8C54.1,-46.1,63.5,-32.7,68.5,-17.3C73.4,-1.8,73.9,15.6,67,28.7C60.1,41.9,45.8,50.8,31,56.6C16.2,62.5,0.9,65.2,-17.5,64.1C-35.9,63,-57.4,58.1,-71.4,44.8C-85.5,31.5,-92.1,9.8,-87.5,-8.3C-82.9,-26.3,-67.1,-40.7,-50.7,-46.5C-34.3,-52.3,-17.1,-49.5,-1.3,-47.9C14.6,-46.3,29.7,-57.5,41.9,-51.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-40 animate-bounce-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#36B2B0" d="M41.3,-58.6C52.4,-53.3,59.7,-39.7,64.1,-25.8C68.5,-11.9,69.9,2.3,67.8,16.3C65.8,30.3,60.4,44.1,49.8,52C39.3,59.9,23.6,61.9,8.8,62.3C-6,62.7,-20,61.5,-30.8,55.1C-41.5,48.7,-48.9,37.2,-54.7,24.9C-60.5,12.5,-64.8,-0.5,-63.2,-13C-61.5,-25.5,-53.9,-37.4,-43,-44.1C-32.2,-50.8,-18.1,-52.2,-2.3,-49.2C13.5,-46.1,30.2,-63.8,41.3,-58.6Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* New badge with gradient */}
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 shadow-lg animate-pulse-subtle">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  Australian Tech Teams, Amplified
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                Your Elite Offshore Tech Team:
              </span>
              <br />
              <span className="gradient-text-hero"> Premium Development at 1/3 the Cost</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Upstart delivers world-class software development for Australian businesses, 
              functioning as your dedicated offshore tech team—not just a service provider.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 flex items-center gap-2 shadow-glow-blue btn-gradient shine"
                onClick={() => document.getElementById('savings')?.scrollIntoView({behavior: 'smooth'})}
              >
                <Calculator className="w-5 h-5" />
                Calculate Your Savings
                <ArrowRight className="w-5 h-5 animate-bounce-horizontal" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-500 text-blue-700 hover:bg-blue-50 flex items-center gap-2 shine shadow-sm"
              >
                <Calendar className="w-5 h-5" />
                Schedule Technical Consultation
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold pulse">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="ml-2">Australian Time Zone Coverage</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold pulse">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="ml-2">Senior Developers Only</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold pulse">
                  <Star className="w-5 h-5" />
                </div>
                <span className="ml-2">99.7% Client Satisfaction</span>
              </div>
            </div>
            
            {/* Stats animation */}
            <div className="pt-4 grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center p-2 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
                <span className="text-blue-600 font-bold text-lg md:text-xl">1/3</span>
                <span className="text-xs text-gray-600 text-center">The Cost</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
                <span className="text-purple-600 font-bold text-lg md:text-xl">24/7</span>
                <span className="text-xs text-gray-600 text-center">Support</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
                <span className="text-cyan-600 font-bold text-lg md:text-xl">100+</span>
                <span className="text-xs text-gray-600 text-center">Projects</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Background blobs */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-40 floating"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-40 floating"></div>
            
            {/* Code snippet animated overlay */}
            <div className="absolute -top-8 -right-10 md:-right-20 w-40 h-40 rotate-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 text-xs overflow-hidden opacity-70 animate-float-slow">
              <pre className="text-blue-800 font-mono">
                <code>{`function deploy() {
  const client = new 
    AusClient();
  return client
    .optimize()
    .execute();
}`}</code>
              </pre>
              <div className="absolute bottom-2 right-2 text-green-500">
                <Code className="w-4 h-4" />
              </div>
            </div>
            
            {/* Australia map connection */}
            <div className="absolute -bottom-8 -left-10 md:-left-20 w-40 h-40 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-3 overflow-hidden opacity-70 animate-float">
              <div className="relative h-full">
                <div className="w-12 h-12 rounded-full bg-blue-600 absolute top-2 right-2 opacity-70 flex items-center justify-center text-white">
                  <span className="text-xs">AU</span>
                </div>
                <svg className="w-full h-full opacity-70" viewBox="0 0 100 100" fill="none">
                  <path d="M30,30 Q65,5 80,50" stroke="#5E3B8F" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="30" cy="30" r="5" fill="#36B2B0" />
                  <circle cx="80" cy="50" r="5" fill="#5E3B8F" />
                </svg>
                <div className="absolute bottom-2 right-2 text-blue-500">
                  <Users className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            {/* Main dashboard card with enhanced visuals */}
            <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-gray-100 transform transition-all duration-1000 hover:shadow-blue-200/50 hover:scale-105">
              <div className="absolute -right-3 -top-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                LIVE DEMO
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-blue-800">Your Team Dashboard</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full pulse"></span>
                  Online
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-white rounded-lg hover:bg-blue-100/50 transition-all duration-300 shine border border-blue-100/50 shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-inner">JS</div>
                  <div className="ml-3">
                    <p className="font-medium">James Sullivan</p>
                    <p className="text-sm text-gray-600">Senior Full-Stack Developer</p>
                  </div>
                  <div className="ml-auto bg-green-100 w-2 h-2 rounded-full pulse"></div>
                </div>
                
                <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-white rounded-lg hover:bg-blue-100/50 transition-all duration-300 shine border border-blue-100/50 shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-inner">AK</div>
                  <div className="ml-3">
                    <p className="font-medium">Aanya Kumar</p>
                    <p className="text-sm text-gray-600">DevOps Engineer</p>
                  </div>
                  <div className="ml-auto bg-green-100 w-2 h-2 rounded-full pulse"></div>
                </div>
                
                <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-white rounded-lg hover:bg-blue-100/50 transition-all duration-300 shine border border-blue-100/50 shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-inner">RL</div>
                  <div className="ml-3">
                    <p className="font-medium">Ryan Lee</p>
                    <p className="text-sm text-gray-600">UI/UX Designer</p>
                  </div>
                  <div className="ml-auto bg-green-100 w-2 h-2 rounded-full pulse"></div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <p className="text-sm text-gray-600">Avg. Response Time</p>
                  <p className="text-xl font-bold text-blue-700">15 min</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <p className="text-sm text-gray-600">Projects Delivered</p>
                  <p className="text-xl font-bold text-purple-700">324+</p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-inner">
                <p className="text-center text-sm">
                  <span className="font-medium">Current AEST Time:</span>{" "}
                  <span className="font-bold" id="aestTime">
                    {new Date().toLocaleTimeString('en-AU', {
                      timeZone: 'Australia/Sydney',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </p>
              </div>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg">
                  <ArrowRight className="w-5 h-5 text-blue-600 rotate-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
