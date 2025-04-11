
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export function SavingsCalculator() {
  const [teamSize, setTeamSize] = useState(3);
  const [duration, setDuration] = useState(6);
  const [avgSalary, setAvgSalary] = useState(130000);
  
  const localCost = teamSize * avgSalary * (duration / 12);
  const upstartCost = localCost * 0.35;
  const savings = localCost - upstartCost;
  const savingsPercentage = ((savings / localCost) * 100).toFixed(0);
  
  return (
    <section id="savings" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Savings</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See exactly how much you can save with Upstart as your dedicated offshore tech team
            compared to hiring locally in Australia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6">Customize Your Estimate</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Team Size</label>
                <Select 
                  onValueChange={(value) => setTeamSize(Number(value))}
                  defaultValue={teamSize.toString()}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Developer</SelectItem>
                    <SelectItem value="2">2 Developers</SelectItem>
                    <SelectItem value="3">3 Developers</SelectItem>
                    <SelectItem value="5">5 Developers</SelectItem>
                    <SelectItem value="10">10 Developers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Duration (months)</label>
                <Select
                  onValueChange={(value) => setDuration(Number(value))}
                  defaultValue={duration.toString()}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 months</SelectItem>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="18">18 months</SelectItem>
                    <SelectItem value="24">24 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Average Developer Annual Salary in AUD</label>
                <Input
                  type="number"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  placeholder="Annual salary"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-upstart-purple text-white p-8 rounded-xl shadow-md flex flex-col">
            <h3 className="text-xl font-semibold mb-6">Your Estimated Savings</h3>
            
            <div className="space-y-4 flex-1">
              <div>
                <p className="text-sm opacity-80">Local Development Cost</p>
                <p className="text-2xl font-bold">${localCost.toLocaleString()} AUD</p>
              </div>
              
              <div>
                <p className="text-sm opacity-80">Upstart Team Cost</p>
                <p className="text-2xl font-bold">${upstartCost.toLocaleString()} AUD</p>
              </div>
              
              <Separator className="my-4 bg-white/20" />
              
              <div>
                <p className="text-sm opacity-80">Total Savings</p>
                <p className="text-3xl font-bold">${savings.toLocaleString()} AUD</p>
                <p className="text-lg mt-1">That's {savingsPercentage}% in savings!</p>
              </div>
            </div>
            
            <Button size="lg" className="mt-8 bg-white text-upstart-purple hover:bg-upstart-gold hover:text-upstart-blue">
              Start Saving Today
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
            <h3 className="text-xl font-semibold mb-3">No Compromise on Quality</h3>
            <p className="text-gray-700">
              Our offshore team consists of senior developers with 5+ years of experience and a
              proven track record of excellence with Australian clients.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
            <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
            <p className="text-gray-700">
              We align with your working hours, communication preferences, and 
              development practices for a truly collaborative experience.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
            <h3 className="text-xl font-semibold mb-3">Flexible Scaling</h3>
            <p className="text-gray-700">
              Easily scale your team up or down based on project demands, 
              only paying for the resources you actually need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
