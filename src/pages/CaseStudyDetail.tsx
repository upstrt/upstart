import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Clock, CheckCircle, BarChart, Users, Code, Globe } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const caseStudiesData = [
  {
    id: "techmate-sydney",
    client: "TechMate Sydney",
    industry: "FinTech",
    title: "Payment Processing System",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    results: [
      "Reduced development costs by 65%",
      "Launched 2 months ahead of schedule",
      "99.99% system uptime",
      "Seamless integration with Australian banking systems"
    ],
    quote: "Upxtend didn't just build our payment system—they revolutionized our entire approach to technology. The team delivered beyond our expectations while saving us significant costs.",
    author: "Sarah Johnson, CTO",
    brief: "A state-of-the-art payment processing platform that handles over $10M in daily transactions for an Australian fintech leader.",
    challenge: "TechMate Sydney needed to develop a secure, compliant payment processing system that could handle thousands of transactions per second while meeting Australia's strict financial regulations. Local development costs were prohibitively expensive, and they were struggling to find specialized FinTech developers.",
    solution: "We assembled a dedicated team of 5 senior developers with extensive experience in financial systems and Australian compliance requirements. The team worked during Sydney business hours and integrated seamlessly with TechMate's product team.",
    approach: [
      "Thorough discovery and requirement analysis phase",
      "Implementation of bank-grade security protocols",
      "Agile development process with weekly sprint reviews",
      "Comprehensive testing and compliance validation"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe API", "Docker"],
    timeline: "8 months",
    team: "5 developers, 1 QA specialist, 1 project manager",
    liveUrl: "#",
    images: [
      "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ]
  },
  // ... other case studies would be defined here
];

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [study, setStudy] = useState<any>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundStudy = caseStudiesData.find(s => s.id === id);
    setStudy(foundStudy || null);
    
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!study) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Case study not found</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-upxtend-light to-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/case-studies" className="inline-flex items-center text-upxtend-primary mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to all case studies
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-upxtend-light text-upxtend-primary px-3 py-1 rounded-full text-sm font-medium">{study.industry}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500 flex items-center"><Clock className="w-4 h-4 mr-1" /> {study.timeline}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{study.title}</h1>
              <p className="text-xl text-upxtend-primary font-medium mb-6">{study.client}</p>
              
              <p className="text-lg text-gray-700 mb-8">{study.brief}</p>
              
              <div className="flex space-x-4">
                <Button className="bg-upxtend-primary hover:bg-upxtend-dark">
                  Contact Us For Similar Project
                </Button>
                {study.liveUrl && (
                  <Button variant="outline" className="border-upxtend-primary text-upxtend-primary flex items-center gap-2">
                    Visit Live Site <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src={study.thumbnail} 
                alt={study.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-tl from-upxtend-primary/5 to-transparent -z-0"></div>
      </section>
      
      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                <BarChart className="w-6 h-6 mr-2 text-upxtend-primary" /> The Challenge
              </h2>
              <p className="text-gray-700">{study.challenge}</p>
            </div>
            
            <div className="bg-upxtend-light/50 p-8 rounded-xl border border-upxtend-primary/10">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                <Users className="w-6 h-6 mr-2 text-upxtend-primary" /> Our Solution
              </h2>
              <p className="text-gray-700">{study.solution}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Approach & Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
            
            <div className="space-y-4 mb-12">
              {study.approach.map((step: string, idx: number) => (
                <div key={idx} className="flex items-start bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <div className="bg-upxtend-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
            
            <h2 className="text-3xl font-bold mb-8 text-center">Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.results.map((result: string, idx: number) => (
                <div key={idx} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <p className="font-medium">{result}</p>
                </div>
              ))}
            </div>
            
            <blockquote className="mt-12 bg-white p-6 rounded-xl border-l-4 border-upxtend-primary shadow-md">
              <p className="text-lg italic text-gray-700 mb-4">"{study.quote}"</p>
              <footer className="font-medium text-right text-gray-600">— {study.author}</footer>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
              <Code className="w-6 h-6 mr-2 text-upxtend-primary" /> Technologies Used
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {study.technologies.map((tech: string, idx: number) => (
                <div key={idx} className="bg-upxtend-light/50 text-upxtend-primary px-4 py-2 rounded-full font-medium">
                  {tech}
                </div>
              ))}
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-upxtend-primary" /> Project Timeline
                </h3>
                <p>{study.timeline}</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-1 text-upxtend-primary" /> Team Composition
                </h3>
                <p>{study.team}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      {study.images && study.images.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.images.map((img: string, idx: number) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src={img}
                    alt={`${study.title} screenshot ${idx+1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-upxtend-primary to-upxtend-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to achieve similar results for your business?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to become your extended tech department and deliver exceptional results at a fraction of the cost.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-upxtend-primary">
              Book Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Our Expertise
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
