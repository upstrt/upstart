
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Calculator } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
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
              <Button size="lg" className="bg-upstart-purple hover:bg-upstart-darkBlue text-white flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Calculate Your Savings
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-upstart-purple text-upstart-purple hover:bg-upstart-lightPurple flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule Technical Consultation
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex">
                <div className="bg-upstart-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">✓</div>
                <span className="ml-2">Australian Time Zone Coverage</span>
              </div>
              <div className="flex">
                <div className="bg-upstart-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">✓</div>
                <span className="ml-2">Senior Developers Only</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-upstart-lightBlue rounded-full filter blur-3xl opacity-50 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-upstart-lightPurple rounded-full filter blur-3xl opacity-50 animate-float"></div>
            
            <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Your Team Dashboard</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Online</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-upstart-purple rounded-full flex items-center justify-center text-white font-bold">JS</div>
                  <div className="ml-3">
                    <p className="font-medium">James Sullivan</p>
                    <p className="text-sm text-gray-600">Senior Full-Stack Developer</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-upstart-teal rounded-full flex items-center justify-center text-white font-bold">AK</div>
                  <div className="ml-3">
                    <p className="font-medium">Aanya Kumar</p>
                    <p className="text-sm text-gray-600">DevOps Engineer</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-upstart-blue rounded-full flex items-center justify-center text-white font-bold">RL</div>
                  <div className="ml-3">
                    <p className="font-medium">Ryan Lee</p>
                    <p className="text-sm text-gray-600">UI/UX Designer</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-upstart-lightBlue p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Avg. Response Time</p>
                  <p className="text-xl font-bold text-upstart-blue">15 min</p>
                </div>
                <div className="bg-upstart-lightPurple p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Projects Delivered</p>
                  <p className="text-xl font-bold text-upstart-purple">324+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
