
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Calculator, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fadeIn">
            <div className="inline-block px-3 py-1 bg-upstart-lightPurple text-upstart-purple rounded-full text-sm font-medium">
              Australian Tech Teams, Amplified
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Elite Offshore Tech Team:
              <span className="gradient-text"> Premium Development at 1/3 the Cost</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Upstart delivers world-class software development for Australian businesses, 
              functioning as your dedicated offshore tech team—not just a service provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-upstart-purple to-upstart-teal text-white hover:from-upstart-darkBlue hover:to-upstart-teal flex items-center gap-2 shadow-lg btn-gradient shine"
                onClick={() => document.getElementById('savings')?.scrollIntoView({behavior: 'smooth'})}
              >
                <Calculator className="w-4 h-4" />
                Calculate Your Savings
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-upstart-purple text-upstart-purple hover:bg-upstart-lightPurple flex items-center gap-2 shine"
              >
                <Calendar className="w-4 h-4" />
                Schedule Technical Consultation
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-upstart-purple to-upstart-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold pulse">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="ml-2">Australian Time Zone Coverage</span>
              </div>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-upstart-teal to-upstart-purple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold pulse">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="ml-2">Senior Developers Only</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-upstart-lightBlue rounded-full filter blur-3xl opacity-40 floating"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-upstart-lightPurple rounded-full filter blur-3xl opacity-40 floating"></div>
            
            <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100 fadeIn">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Your Team Dashboard</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full pulse"></span>
                  Online
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-upstart-lightPurple/20 transition-colors duration-300 shine">
                  <div className="w-10 h-10 bg-gradient-to-br from-upstart-purple to-upstart-darkBlue rounded-full flex items-center justify-center text-white font-bold">JS</div>
                  <div className="ml-3">
                    <p className="font-medium">James Sullivan</p>
                    <p className="text-sm text-gray-600">Senior Full-Stack Developer</p>
                  </div>
                  <div className="ml-auto bg-green-100 w-2 h-2 rounded-full pulse"></div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-upstart-lightPurple/20 transition-colors duration-300 shine">
                  <div className="w-10 h-10 bg-gradient-to-br from-upstart-teal to-upstart-blue rounded-full flex items-center justify-center text-white font-bold">AK</div>
                  <div className="ml-3">
                    <p className="font-medium">Aanya Kumar</p>
                    <p className="text-sm text-gray-600">DevOps Engineer</p>
                  </div>
                  <div className="ml-auto bg-green-100 w-2 h-2 rounded-full pulse"></div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-upstart-lightPurple/20 transition-colors duration-300 shine">
                  <div className="w-10 h-10 bg-gradient-to-br from-upstart-blue to-upstart-teal rounded-full flex items-center justify-center text-white font-bold">RL</div>
                  <div className="ml-3">
                    <p className="font-medium">Ryan Lee</p>
                    <p className="text-sm text-gray-600">UI/UX Designer</p>
                  </div>
                  <div className="ml-auto bg-green-100 w-2 h-2 rounded-full pulse"></div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-upstart-lightBlue p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="text-sm text-gray-600">Avg. Response Time</p>
                  <p className="text-xl font-bold text-upstart-blue">15 min</p>
                </div>
                <div className="bg-upstart-lightPurple p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="text-sm text-gray-600">Projects Delivered</p>
                  <p className="text-xl font-bold text-upstart-purple">324+</p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gradient-to-r from-upstart-lightPurple to-upstart-lightBlue rounded-lg">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
