
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import { DollarSign, BarChart, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SavingsCalculator() {
  const [teamSize, setTeamSize] = useState(3);
  const [duration, setDuration] = useState(6);
  const [avgSalary, setAvgSalary] = useState(130000);
  const [animateNumbers, setAnimateNumbers] = useState(false);
  
  const localCost = teamSize * avgSalary * (duration / 12);
  const upstartCost = localCost * 0.35;
  const savings = localCost - upstartCost;
  const savingsPercentage = ((savings / localCost) * 100).toFixed(0);
  
  useEffect(() => {
    setAnimateNumbers(true);
    const timer = setTimeout(() => setAnimateNumbers(false), 1000);
    return () => clearTimeout(timer);
  }, [teamSize, duration, avgSalary]);
  
  return (
    <section id="savings" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Calculate Your Savings</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See exactly how much you can save with Upstart as your dedicated offshore tech team
            compared to hiring locally in Australia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 fadeIn">
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <BarChart className="mr-2 text-upstart-purple" /> 
              Customize Your Estimate
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Team Size</label>
                <Select 
                  onValueChange={(value) => setTeamSize(Number(value))}
                  defaultValue={teamSize.toString()}
                >
                  <SelectTrigger className="w-full shine">
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
                  <SelectTrigger className="w-full shine">
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
                  className="w-full shine"
                />
              </div>
            </div>
            
            <div className="mt-8 bg-upstart-lightPurple p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Clock className="text-upstart-purple mr-2" />
                <p className="font-medium">Time to deploy your team: <span className="text-upstart-purple font-bold">2 weeks</span> vs 3-6 months locally</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-upstart-purple to-upstart-blue text-white p-8 rounded-xl shadow-lg flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-upstart-gold/20 rounded-full blur-2xl"></div>
            
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <TrendingUp className="mr-2" /> 
              Your Estimated Savings
            </h3>
            
            <div className="space-y-4 flex-1 relative z-10">
              <div className="bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm opacity-80">Local Development Cost</p>
                <p className={`text-2xl font-bold ${animateNumbers ? 'floating' : ''}`}>
                  ${localCost.toLocaleString()} AUD
                </p>
              </div>
              
              <div className="bg-black/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm opacity-80">Upstart Team Cost</p>
                <p className={`text-2xl font-bold ${animateNumbers ? 'floating' : ''}`}>
                  ${upstartCost.toLocaleString()} AUD
                </p>
              </div>
              
              <Separator className="my-4 bg-white/20" />
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm pulse">
                <p className="text-sm opacity-80">Total Savings</p>
                <p className={`text-3xl font-bold ${animateNumbers ? 'floating' : ''}`}>
                  ${savings.toLocaleString()} AUD
                </p>
                <p className="text-lg mt-1">That's <span className="text-upstart-gold font-bold">{savingsPercentage}%</span> in savings!</p>
              </div>
            </div>
            
            <Button size="lg" className="mt-8 bg-white text-upstart-purple hover:bg-upstart-gold hover:text-upstart-blue btn-gradient shine">
              <DollarSign className="mr-2" />
              Start Saving Today
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-none shadow-lg overflow-hidden shine fadeIn" style={{ animationDelay: '0.1s' }}>
            <div className="h-2 bg-gradient-to-r from-upstart-purple to-upstart-teal"></div>
            <CardHeader>
              <div className="bg-upstart-lightPurple rounded-full p-2 w-12 h-12 flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-upstart-purple" />
              </div>
              <CardTitle>No Compromise on Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our offshore team consists of senior developers with 5+ years of experience and a
                proven track record of excellence with Australian clients.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-upstart-lightPurple px-2 py-1 rounded text-sm text-upstart-purple">Senior talent</span>
                <span className="bg-upstart-lightBlue px-2 py-1 rounded text-sm text-upstart-blue">Code reviews</span>
                <span className="bg-upstart-lightPurple px-2 py-1 rounded text-sm text-upstart-purple">Quality assurance</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-lg overflow-hidden shine fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="h-2 bg-gradient-to-r from-upstart-teal to-upstart-gold"></div>
            <CardHeader>
              <div className="bg-upstart-lightBlue rounded-full p-2 w-12 h-12 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-upstart-teal" />
              </div>
              <CardTitle>Seamless Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We align with your working hours, communication preferences, and 
                development practices for a truly collaborative experience.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-upstart-lightBlue px-2 py-1 rounded text-sm text-upstart-blue">AU timezone</span>
                <span className="bg-upstart-lightPurple px-2 py-1 rounded text-sm text-upstart-purple">Daily standups</span>
                <span className="bg-upstart-lightBlue px-2 py-1 rounded text-sm text-upstart-blue">Your tools</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-lg overflow-hidden shine fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="h-2 bg-gradient-to-r from-upstart-gold to-upstart-purple"></div>
            <CardHeader>
              <div className="bg-upstart-lightPurple rounded-full p-2 w-12 h-12 flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-upstart-gold" />
              </div>
              <CardTitle>Flexible Scaling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Easily scale your team up or down based on project demands, 
                only paying for the resources you actually need.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-upstart-lightPurple px-2 py-1 rounded text-sm text-upstart-purple">No long contracts</span>
                <span className="bg-upstart-lightBlue px-2 py-1 rounded text-sm text-upstart-blue">Scale on demand</span>
                <span className="bg-upstart-lightPurple px-2 py-1 rounded text-sm text-upstart-purple">Pay as you go</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
