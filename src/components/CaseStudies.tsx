
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      client: "TechMate Sydney",
      industry: "FinTech",
      title: "Payment Processing System",
      results: ["Reduced development costs by 65%", "Launched 2 months ahead of schedule", "99.99% system uptime"],
      quote: "Upstart didn't just build our payment system—they revolutionized our entire approach to technology. The team delivered beyond our expectations while saving us significant costs.",
      author: "Sarah Johnson, CTO"
    },
    {
      client: "GreenGrow Melbourne",
      industry: "AgTech",
      title: "IoT Crop Monitoring Platform",
      results: ["Saved $430,000 in development costs", "Increased crop yield by 23%", "Seamless integration with existing systems"],
      quote: "Working with Upstart feels just like having our own in-house team, but at a fraction of the cost. Their developers understand Australian agriculture and delivered an intuitive platform our farmers love.",
      author: "Michael Chen, CEO"
    },
    {
      client: "MediTrack Brisbane",
      industry: "HealthTech",
      title: "Patient Management System",
      results: ["HIPAA & Australian privacy standards compliant", "Reduced patient wait times by 35%", "40% cost savings vs. local development"],
      quote: "We were hesitant about working with an offshore team for such sensitive healthcare technology, but Upstart exceeded all expectations in security, quality, and communication.",
      author: "Dr. Emma Wilson, Founder"
    }
  ];
  
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Australian Success Stories</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how Australian businesses across industries have achieved exceptional results
            while dramatically reducing development costs with Upstart.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover h-full flex flex-col">
              <div className="p-1 bg-gradient-to-r from-upstart-purple to-upstart-teal">
                <div className="bg-white p-5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-upstart-purple">{study.client}</span>
                    <span className="bg-upstart-lightPurple px-2 py-1 rounded text-xs font-medium text-upstart-purple">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="bg-upstart-lightBlue rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upstart-blue">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="italic text-gray-600 text-sm border-l-4 border-upstart-teal pl-4 mt-4 mb-2">
                    "{study.quote}"
                  </blockquote>
                  <p className="text-sm font-medium text-right">— {study.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-upstart-blue hover:bg-upstart-darkBlue text-white flex items-center gap-2 mx-auto">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
