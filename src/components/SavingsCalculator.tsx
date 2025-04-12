
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import { DollarSign, BarChart, TrendingUp, Clock, CheckCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="savings" className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 relative overflow-hidden">
      {/* Glass effect background blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Calculate Your Savings</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See exactly how much you can save with Upstart as your dedicated offshore tech team
            compared to hiring locally in Australia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 fadeIn">
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-blue-100/20">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <BarChart className="mr-2 text-blue-600" /> 
              Customize Your Estimate
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Team Size</label>
                <Select 
                  onValueChange={(value) => setTeamSize(Number(value))}
                  defaultValue={teamSize.toString()}
                >
                  <SelectTrigger className="w-full shine bg-white">
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
                  <SelectTrigger className="w-full shine bg-white">
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
                  className="w-full shine bg-white"
                />
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100/50">
              <div className="flex items-center mb-2">
                <Calendar className="text-purple-600 mr-2" />
                <p className="font-medium">Time to deploy your team: <span className="text-blue-600 font-bold">2 weeks</span> vs 3-6 months locally</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-xl shadow-lg flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/20 rounded-full blur-2xl"></div>
            
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <TrendingUp className="mr-2" /> 
              Your Estimated Savings
            </h3>
            
            <div className="space-y-4 flex-1 relative z-10">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm opacity-80">Local Development Cost</p>
                <p className={`text-2xl font-bold ${animateNumbers ? 'floating' : ''}`}>
                  ${localCost.toLocaleString()} AUD
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm opacity-80">Upstart Team Cost</p>
                <p className={`text-2xl font-bold ${animateNumbers ? 'floating' : ''}`}>
                  ${upstartCost.toLocaleString()} AUD
                </p>
              </div>
              
              <Separator className="my-4 bg-white/20" />
              
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg pulse">
                <p className="text-sm opacity-80">Total Savings</p>
                <p className={`text-3xl font-bold ${animateNumbers ? 'floating' : ''}`}>
                  ${savings.toLocaleString()} AUD
                </p>
                <p className="text-lg mt-1">That's <span className="text-yellow-300 font-bold">{savingsPercentage}%</span> in savings!</p>
              </div>
            </div>
            
            <Button size="lg" className="mt-8 bg-white text-blue-700 hover:bg-yellow-300 hover:text-blue-800 btn-gradient shine group">
              <DollarSign className="mr-2 group-hover:scale-110 transition-transform" />
              Start Saving Today
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/80 backdrop-blur-md border border-blue-100/20 shadow-lg overflow-hidden shine fadeIn" style={{ animationDelay: '0.1s' }}>
            <div className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <CardHeader>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>No Compromise on Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our offshore team consists of experienced developers with a
                proven track record of excellence with Australian clients.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 rounded text-sm text-blue-700">Expert talent</span>
                <span className="bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 rounded text-sm text-blue-700">Code reviews</span>
                <span className="bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 rounded text-sm text-blue-700">Quality assurance</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-md border border-blue-100/20 shadow-lg overflow-hidden shine fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
            <CardHeader>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Seamless Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We align with your working hours, communication preferences, and 
                development practices for a truly collaborative experience.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 rounded text-sm text-blue-700">AU timezone</span>
                <span className="bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 rounded text-sm text-blue-700">Daily standups</span>
                <span className="bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 rounded text-sm text-blue-700">Your tools</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-md border border-blue-100/20 shadow-lg overflow-hidden shine fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <CardHeader>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Flexible Scaling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Easily scale your team up or down based on project demands, 
                only paying for the resources you actually need.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 rounded text-sm text-blue-700">No long contracts</span>
                <span className="bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 rounded text-sm text-blue-700">Scale on demand</span>
                <span className="bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 rounded text-sm text-blue-700">Pay as you go</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
