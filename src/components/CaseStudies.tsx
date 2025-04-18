
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, CheckCircle, Building, MessageCircle, GitMerge } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function CaseStudies() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");
  
  const ongoingPartnerships = [
    {
      client: "TechMate Sydney",
      industry: "FinTech",
      logo: "https://via.placeholder.com/120x60?text=TechMate",
      teamSize: "6 developers",
      duration: "Since 2021",
      services: ["Payment Processing System", "Customer Dashboard", "Mobile App Integration"],
      quote: "Upxtend has become an integral part of our tech department. They understand our business goals and deliver exceptional solutions that drive our growth.",
      author: "Sarah Johnson, CTO",
      category: "fintech",
      specialFeatures: [
        "Daily standups with Sydney team",
        "Integration with Australian banking APIs",
        "Compliance with local financial regulations"
      ]
    },
    {
      client: "GreenGrow Melbourne",
      industry: "AgTech",
      logo: "https://via.placeholder.com/120x60?text=GreenGrow",
      teamSize: "4 developers",
      duration: "Since 2022",
      services: ["IoT Platform", "Data Analytics", "Mobile App Development"],
      quote: "Having Upxtend as our extended team gives us the technical expertise we need without the overhead of hiring locally. They're truly part of our company.",
      author: "Michael Chen, CEO",
      category: "agriculture",
      specialFeatures: [
        "Field testing support with local farmers",
        "Integration with Australian weather services",
        "Rural connectivity solutions"
      ]
    },
    {
      client: "MediTrack Brisbane",
      industry: "HealthTech",
      logo: "https://via.placeholder.com/120x60?text=MediTrack",
      teamSize: "5 developers",
      duration: "Since 2020",
      services: ["Patient Management System", "Telehealth Platform", "Compliance Solutions"],
      quote: "Our Upxtend team consistently delivers high-quality work while adhering to strict healthcare regulations. They've become essential to our development process.",
      author: "Dr. Emma Wilson, Founder",
      category: "healthcare",
      specialFeatures: [
        "HIPAA and Australian privacy compliance",
        "Integration with Medicare systems",
        "Local healthcare regulations expertise"
      ]
    }
  ];
  
  const handleViewDetails = (client: string) => {
    toast({
      title: "Viewing Partnership Details",
      description: `Navigating to ${client}'s ongoing partnership details`,
    });
  };
  
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ongoing Team Extensions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We don't just complete projects—we become your extended tech department. Meet some of the Australian businesses 
            that rely on Upxtend as their in-house tech team every day.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button 
              variant={activeTab === "all" ? "default" : "outline"} 
              onClick={() => setActiveTab("all")}
              className={activeTab === "all" ? "bg-upxtend-primary text-white hover:bg-upxtend-dark" : ""}
            >
              All Partnerships
            </Button>
            <Button 
              variant={activeTab === "fintech" ? "default" : "outline"} 
              onClick={() => setActiveTab("fintech")}
              className={activeTab === "fintech" ? "bg-upxtend-primary text-white hover:bg-upxtend-dark" : ""}
            >
              FinTech
            </Button>
            <Button 
              variant={activeTab === "healthcare" ? "default" : "outline"}
              onClick={() => setActiveTab("healthcare")}
              className={activeTab === "healthcare" ? "bg-upxtend-primary text-white hover:bg-upxtend-dark" : ""}
            >
              Healthcare
            </Button>
            <Button 
              variant={activeTab === "agriculture" ? "default" : "outline"} 
              onClick={() => setActiveTab("agriculture")}
              className={activeTab === "agriculture" ? "bg-upxtend-primary text-white hover:bg-upxtend-dark" : ""}
            >
              Agriculture
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingPartnerships
            .filter(partnership => activeTab === "all" || partnership.category === activeTab)
            .map((partnership, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-upxtend-light px-2 py-1 rounded text-xs font-medium text-upxtend-primary">{partnership.industry}</span>
                  <div className="w-24 h-12 bg-gray-100 rounded flex items-center justify-center">
                    <img src={partnership.logo} alt={partnership.client} className="max-w-full max-h-full" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{partnership.client}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-upxtend-primary mr-2" />
                    <span className="text-sm">{partnership.teamSize}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-upxtend-primary mr-2" />
                    <span className="text-sm">{partnership.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 text-upxtend-primary mr-2" />
                    <span className="text-sm">Daily Team Communication</span>
                  </div>
                  <div className="flex items-center">
                    <GitMerge className="w-4 h-4 text-upxtend-primary mr-2" />
                    <span className="text-sm">Continuous Integration</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Current Ongoing Work:</h4>
                  <div className="space-y-2">
                    {partnership.services.map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="bg-upxtend-light rounded-full p-1 mr-2">
                          <CheckCircle className="w-3 h-3 text-upxtend-primary" />
                        </div>
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 flex items-center">
                    <div className="bg-upxtend-light rounded-full p-1 mr-2">
                      <Users className="w-3 h-3 text-upxtend-primary" />
                    </div>
                    Australian Business Integration:
                  </h4>
                  <div className="pl-6 space-y-1">
                    {partnership.specialFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-xs">
                        <span>• {feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <blockquote className="italic text-gray-600 text-sm border-l-4 border-upxtend-primary pl-4 mt-4 mb-2 flex-grow">
                  "{partnership.quote}"
                </blockquote>
                <p className="text-sm font-medium text-right">— {partnership.author}</p>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Building className="w-4 h-4 text-upxtend-primary mr-1" />
                  <span className="text-sm font-medium">Ongoing Partnership</span>
                </div>
                <Link to={`/case-studies/${partnership.client.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => handleViewDetails(partnership.client)}>
                  <Button variant="ghost" size="sm" className="text-upxtend-primary hover:bg-upxtend-light/50">
                    <span className="text-sm">View Partnership</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center" data-aos="fade-up">
          <Link to="/case-studies">
            <Button className="bg-upxtend-primary hover:bg-upxtend-dark text-white flex items-center gap-2 mx-auto group transition-all duration-300 transform hover:scale-105">
              View All Team Extensions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
