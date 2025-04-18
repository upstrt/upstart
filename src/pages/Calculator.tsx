
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Calculator as CalculatorIcon, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Users,
  Building
} from "lucide-react";
import { useState } from "react";

const Calculator = () => {
  const [teamSize, setTeamSize] = useState(5);
  const [avgSalary, setAvgSalary] = useState(120000);
  const [duration, setDuration] = useState(12);
  
  // Calculate cost with local team
  const localTeamCost = teamSize * avgSalary * (duration / 12);
  
  // Calculate cost with Upxtend (using 65% discount as an example)
  const upxtendTeamCost = localTeamCost * 0.35;
  
  // Calculate savings
  const savings = localTeamCost - upxtendTeamCost;
  const savingsPercentage = Math.round((savings / localTeamCost) * 100);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechMate Sydney",
      company: "TechMate Sydney",
      industry: "FinTech",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      quote: "Working with Upxtend has saved us over $430,000 in development costs while delivering our payment processing system ahead of schedule.",
      savings: "$430,000",
      timeframe: "8 months",
      metrics: ["65% cost reduction", "Launched 2 months early", "99.99% system uptime"]
    },
    {
      name: "Michael Chen",
      role: "CEO at GreenGrow",
      company: "GreenGrow Melbourne",
      industry: "AgTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      quote: "Our IoT crop monitoring platform would have cost us nearly double with a local team. Upxtend delivered at a fraction of the cost with no compromise on quality.",
      savings: "$380,000",
      timeframe: "12 months",
      metrics: ["55% cost savings", "Increased crop yield by 23%", "Seamless integration"]
    },
    {
      name: "Dr. Emma Wilson",
      role: "Founder at MediTrack",
      company: "MediTrack Brisbane",
      industry: "HealthTech",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      quote: "With Upxtend as our ongoing tech partner, we've reduced our IT costs by 40% while meeting all Australian healthcare privacy standards and regulations.",
      savings: "$290,000",
      timeframe: "10 months",
      metrics: ["40% cost reduction", "Reduced patient wait times by 35%", "HIPAA compliant"]
    }
  ];
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-upxtend-light to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Savings Calculator</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              See how much your business can save by using Upxtend as your extended tech team instead of hiring locally.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-upxtend-primary/20 shadow-sm">
              <span className="w-2 h-2 bg-upxtend-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Average client saves 60-70% on development costs</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 max-w-4xl mx-auto">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <CalculatorIcon className="mr-2 text-upxtend-primary" /> Cost Savings Calculator
              </h2>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Team Size (Number of Developers)</label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-upxtend-primary"
                  />
                  <div className="flex justify-between mt-1 text-sm text-gray-500">
                    <span>1</span>
                    <span>{teamSize} developers</span>
                    <span>20</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Average Annual Salary per Developer (USD)</label>
                  <input
                    type="range"
                    min="80000"
                    max="200000"
                    step="5000"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-upxtend-primary"
                  />
                  <div className="flex justify-between mt-1 text-sm text-gray-500">
                    <span>$80,000</span>
                    <span>{formatCurrency(avgSalary)}</span>
                    <span>$200,000</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (Months)</label>
                  <input
                    type="range"
                    min="1"
                    max="36"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-upxtend-primary"
                  />
                  <div className="flex justify-between mt-1 text-sm text-gray-500">
                    <span>1 month</span>
                    <span>{duration} months</span>
                    <span>36 months</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-700 mb-4">Cost with Local Team</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{formatCurrency(localTeamCost)}</div>
                  <p className="text-sm text-gray-500">Based on local market rates and overhead costs</p>
                </div>
                
                <div className="bg-upxtend-light/30 p-6 rounded-lg border border-upxtend-primary/20">
                  <h3 className="font-medium text-gray-700 mb-4">Cost with Upxtend</h3>
                  <div className="text-3xl font-bold text-upxtend-primary mb-2">{formatCurrency(upxtendTeamCost)}</div>
                  <p className="text-sm text-gray-500">Senior developers at a fraction of the cost</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-upxtend-primary to-upxtend-dark text-white rounded-lg">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <h4 className="font-medium mb-2">Your Potential Savings</h4>
                    <div className="text-3xl font-bold mb-1">{formatCurrency(savings)}</div>
                    <p className="text-blue-100">That's a {savingsPercentage}% reduction in cost!</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button className="bg-white text-upxtend-primary hover:bg-gray-100">
                      Book Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories & Savings</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              See how Australian businesses have dramatically reduced their development costs and achieved exceptional results with Upxtend.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4 text-sm">
                    <Building className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-gray-700 mr-3">{testimonial.company}</span>
                    <span className="bg-upxtend-light text-upxtend-primary text-xs px-2 py-0.5 rounded-full">
                      {testimonial.industry}
                    </span>
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center text-gray-700">
                        <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                        <span className="font-medium">Total Savings</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">{testimonial.savings}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-700">
                        <Clock className="h-4 w-4 mr-1 text-upxtend-primary" />
                        <span className="font-medium">Timeframe</span>
                      </div>
                      <span className="font-medium">{testimonial.timeframe}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {testimonial.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center">
                        <div className="bg-upxtend-light rounded-full p-1 mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-upxtend-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Calculate Your Custom Savings?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team can provide a detailed cost analysis based on your specific requirements.
          </p>
          <Button className="bg-white text-upxtend-primary hover:bg-gray-100 mr-4">
            Book Free Consultation
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            View Case Studies
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Calculator;
