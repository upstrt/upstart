
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, CheckCircle, Building } from "lucide-react";
import { Link } from "react-router-dom";

export function CaseStudies() {
  const ongoingPartnerships = [
    {
      client: "TechMate Sydney",
      industry: "FinTech",
      logo: "https://via.placeholder.com/120x60?text=TechMate",
      teamSize: "6 developers",
      duration: "Since 2021",
      services: ["Payment Processing System", "Customer Dashboard", "Mobile App Integration"],
      quote: "Upxtend has become an integral part of our tech department. They understand our business goals and deliver exceptional solutions that drive our growth.",
      author: "Sarah Johnson, CTO"
    },
    {
      client: "GreenGrow Melbourne",
      industry: "AgTech",
      logo: "https://via.placeholder.com/120x60?text=GreenGrow",
      teamSize: "4 developers",
      duration: "Since 2022",
      services: ["IoT Platform", "Data Analytics", "Mobile App Development"],
      quote: "Having Upxtend as our extended team gives us the technical expertise we need without the overhead of hiring locally. They're truly part of our company.",
      author: "Michael Chen, CEO"
    },
    {
      client: "MediTrack Brisbane",
      industry: "HealthTech",
      logo: "https://via.placeholder.com/120x60?text=MediTrack",
      teamSize: "5 developers",
      duration: "Since 2020",
      services: ["Patient Management System", "Telehealth Platform", "Compliance Solutions"],
      quote: "Our Upxtend team consistently delivers high-quality work while adhering to strict healthcare regulations. They've become essential to our development process.",
      author: "Dr. Emma Wilson, Founder"
    }
  ];
  
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ongoing Client Partnerships</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We don't just complete projects—we build long-term relationships. Meet some of the Australian businesses 
            that rely on Upxtend as their extended tech department.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingPartnerships.map((partnership, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
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
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Services Provided:</h4>
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
                <Link to={`/case-studies/${partnership.client.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="ghost" size="sm" className="text-upxtend-primary hover:bg-upxtend-light/50">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/case-studies">
            <Button className="bg-upxtend-primary hover:bg-upxtend-dark text-white flex items-center gap-2 mx-auto">
              View All Partnerships
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
