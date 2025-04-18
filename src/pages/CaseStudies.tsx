
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "techmate-sydney",
    client: "TechMate Sydney",
    industry: "FinTech",
    title: "Payment Processing System",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    results: ["Reduced development costs by 65%", "Launched 2 months ahead of schedule", "99.99% system uptime"],
    quote: "Upxtend didn't just build our payment system—they revolutionized our entire approach to technology. The team delivered beyond our expectations while saving us significant costs.",
    author: "Sarah Johnson, CTO",
    brief: "A state-of-the-art payment processing platform that handles over $10M in daily transactions for an Australian fintech leader."
  },
  {
    id: "greengrow-melbourne",
    client: "GreenGrow Melbourne",
    industry: "AgTech",
    title: "IoT Crop Monitoring Platform",
    thumbnail: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    results: ["Saved $430,000 in development costs", "Increased crop yield by 23%", "Seamless integration with existing systems"],
    quote: "Working with Upxtend feels just like having our own in-house team, but at a fraction of the cost. Their developers understand Australian agriculture and delivered an intuitive platform our farmers love.",
    author: "Michael Chen, CEO",
    brief: "An innovative IoT solution that helps Australian farmers monitor crops in real-time, optimizing yields and reducing resource waste."
  },
  {
    id: "meditrack-brisbane",
    client: "MediTrack Brisbane",
    industry: "HealthTech",
    title: "Patient Management System",
    thumbnail: "https://images.unsplash.com/photo-1581093196277-9f6e9b84e741?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    results: ["HIPAA & Australian privacy standards compliant", "Reduced patient wait times by 35%", "40% cost savings vs. local development"],
    quote: "We were hesitant about working with an offshore team for such sensitive healthcare technology, but Upxtend exceeded all expectations in security, quality, and communication.",
    author: "Dr. Emma Wilson, Founder",
    brief: "A comprehensive healthcare management system that streamlines patient care while meeting Australia's strict privacy requirements."
  },
  {
    id: "edutech-sydney",
    client: "EduTech Sydney",
    industry: "Education",
    title: "Virtual Learning Environment",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    results: ["50% faster development cycle", "98% student satisfaction rate", "Seamless integration with university systems"],
    quote: "The virtual learning platform Upxtend built transformed our educational offerings during the pandemic. Their team's responsiveness and technical expertise were crucial to our success.",
    author: "Professor James Anderson, Director of Digital Learning",
    brief: "A sophisticated virtual learning environment that supported 50,000+ Australian students during the pandemic transition to remote education."
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-upxtend-light to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Success Stories</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Discover how Australian businesses across industries have achieved exceptional results
              while dramatically reducing development costs with Upxtend's dedicated tech teams.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button className="bg-upxtend-primary hover:bg-upxtend-dark">All Projects</Button>
              <Button variant="outline" className="border-upxtend-primary text-upxtend-primary">FinTech</Button>
              <Button variant="outline" className="border-upxtend-primary text-upxtend-primary">HealthTech</Button>
              <Button variant="outline" className="border-upxtend-primary text-upxtend-primary">AgTech</Button>
              <Button variant="outline" className="border-upxtend-primary text-upxtend-primary">Education</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={study.thumbnail} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-upxtend-primary">{study.industry}</div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{study.title}</h3>
                  <p className="text-sm text-upxtend-primary font-medium mb-3">{study.client}</p>
                  <p className="text-gray-600 mb-4 flex-grow">{study.brief}</p>
                  
                  <div className="space-y-3 mb-6">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="bg-upxtend-light rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link to={`/case-studies/${study.id}`}>
                      <Button variant="outline" className="border-upxtend-primary text-upxtend-primary flex items-center gap-1">
                        View Case Study <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-upxtend-primary">
                      <ExternalLink className="w-4 h-4" />
                      <span className="sr-only">View Live Site</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Ready to join our roster of successful clients?
            </p>
            <Button className="bg-upxtend-primary hover:bg-upxtend-dark text-white flex items-center gap-2 mx-auto">
              Start Your Success Story
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
