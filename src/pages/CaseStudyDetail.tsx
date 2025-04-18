
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Clock, CheckCircle, BarChart, Users, Code, Globe, CalendarDays, MessageSquare, Video } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Expanded detailed data for ongoing partnerships
const caseStudiesData = [
  {
    id: "techmate-sydney",
    client: "TechMate Sydney",
    industry: "FinTech",
    title: "Ongoing FinTech Team Extension",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    teamComposition: [
      "1 Tech Lead",
      "3 Senior Developers",
      "1 QA Engineer",
      "1 DevOps Specialist"
    ],
    workingHours: "9:00 AM - 5:00 PM AEST (Sydney time)",
    dailySchedule: [
      {time: "9:00 AM", activity: "Daily standup with Sydney team"},
      {time: "9:30 AM", activity: "Task allocation and planning"},
      {time: "11:00 AM", activity: "Code collaboration session"},
      {time: "2:00 PM", activity: "Progress review meeting"},
      {time: "4:30 PM", activity: "End-of-day summary"}
    ],
    currentProjects: [
      "Payment Gateway Integration",
      "Customer Dashboard Enhancement",
      "Mobile App Development",
      "Security Compliance Updates"
    ],
    communicationTools: ["Slack", "JIRA", "Zoom", "GitHub", "Confluence"],
    australianIntegration: [
      "Team members trained in Australian financial regulations",
      "Regular cultural exchange sessions",
      "Celebration of Australian holidays",
      "Understanding of local business practices"
    ],
    quote: "Upxtend has become an integral part of our tech department. Their team works in perfect sync with our Sydney office, making distance irrelevant. They understand Australian financial regulations and deliver exceptional solutions that drive our growth.",
    author: "Sarah Johnson, CTO",
    brief: "A seamlessly integrated tech team that has been handling TechMate's entire development needs for over 2 years, working in perfect alignment with Sydney business hours.",
    challenge: "TechMate Sydney needed to scale their development team rapidly to meet growing demand but faced prohibitive local hiring costs and talent shortages in the Australian fintech sector. They required developers with specialized knowledge of financial systems and Australian compliance requirements.",
    solution: "We assembled a dedicated team of 6 specialized developers who work exclusively for TechMate. The team operates during Sydney business hours and has been fully integrated into TechMate's internal operations, communication channels, and development processes.",
    collaborationApproach: [
      "Daily video standups with the Sydney office",
      "Shared project management and ticketing systems",
      "Regular sprint planning and review sessions",
      "Quarterly in-person visits for team bonding",
      "Transparent time tracking and performance metrics"
    ],
    results: [
      "Over $800,000 annual savings compared to local hiring",
      "95% on-time feature delivery rate",
      "Successfully launched 3 major platform versions",
      "Seamless integration with Australian banking systems",
      "Zero downtime for critical payment systems"
    ],
    testimonials: [
      {
        quote: "The best part about Upxtend is that I forget they're not physically in our office. Their team is responsive, aligned with our hours, and deeply integrated with our work culture.",
        author: "Mark Thompson, Product Manager at TechMate"
      },
      {
        quote: "Having a dedicated team that understands Australian financial regulations has been a game-changer for our compliance efforts.",
        author: "Jennifer Lee, Compliance Officer at TechMate"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    ],
    continuedSupport: "Our team continues to evolve with TechMate's growing needs, adding specialized skills as required and scaling with their business growth."
  },
  // Additional case studies would be defined here
];

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [study, setStudy] = useState<any>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundStudy = caseStudiesData.find(s => s.id === id);
    setStudy(foundStudy || null);
    
    if (foundStudy) {
      toast({
        title: `Viewing ${foundStudy.client}`,
        description: "Exploring our ongoing partnership details",
        duration: 3000
      });
    }
    
    window.scrollTo(0, 0);
  }, [id, toast]);
  
  const handleScheduleConsultation = () => {
    toast({
      title: "Scheduling Consultation",
      description: "Opening our consultation booking form",
      duration: 3000
    });
  };
  
  if (!study) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Partnership details not found</p>
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
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to all partnerships
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-upxtend-light text-upxtend-primary px-3 py-1 rounded-full text-sm font-medium">{study.industry}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500 flex items-center"><Clock className="w-4 h-4 mr-1" /> {study.workingHours}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{study.title}</h1>
              <p className="text-xl text-upxtend-primary font-medium mb-6">{study.client}</p>
              
              <p className="text-lg text-gray-700 mb-8">{study.brief}</p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-upxtend-primary hover:bg-upxtend-dark text-white flex items-center gap-2"
                  onClick={handleScheduleConsultation}
                >
                  <CalendarDays className="w-4 h-4" />
                  Schedule Similar Team for Your Business
                </Button>
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
      
      {/* Team Composition & Daily Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                <Users className="w-6 h-6 mr-2 text-upxtend-primary" /> Your Extended Team
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <div className="bg-upxtend-light p-1 rounded-full mr-2">
                      <Users className="w-4 h-4 text-upxtend-primary" />
                    </div>
                    Team Composition
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {study.teamComposition.map((member: string, idx: number) => (
                      <div key={idx} className="flex items-center bg-white p-3 rounded-lg border border-gray-100">
                        <div className="w-8 h-8 rounded-full bg-upxtend-primary/10 flex items-center justify-center mr-3">
                          <span className="text-upxtend-primary font-medium">{idx+1}</span>
                        </div>
                        <span>{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <div className="bg-upxtend-light p-1 rounded-full mr-2">
                      <Globe className="w-4 h-4 text-upxtend-primary" />
                    </div>
                    Australian Business Integration
                  </h3>
                  
                  <div className="space-y-2">
                    {study.australianIntegration.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-upxtend-primary mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-upxtend-light/30 p-8 rounded-xl border border-upxtend-primary/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                <Clock className="w-6 h-6 mr-2 text-upxtend-primary" /> Daily Collaboration
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <div className="bg-upxtend-primary/20 p-1 rounded-full mr-2">
                      <CalendarDays className="w-4 h-4 text-upxtend-primary" />
                    </div>
                    Working Hours & Schedule
                  </h3>
                  
                  <div className="bg-white p-4 rounded-lg border border-upxtend-primary/10 mb-4">
                    <span className="font-medium text-upxtend-primary flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> {study.workingHours}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {study.dailySchedule.map((item: any, idx: number) => (
                      <div key={idx} className="flex items-center">
                        <div className="bg-upxtend-primary/10 p-2 rounded-lg w-24 text-center shrink-0 mr-3">
                          <span className="text-sm font-medium text-upxtend-primary">{item.time}</span>
                        </div>
                        <span className="text-gray-700">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <div className="bg-upxtend-primary/20 p-1 rounded-full mr-2">
                      <MessageSquare className="w-4 h-4 text-upxtend-primary" />
                    </div>
                    Communication Tools
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.communicationTools.map((tool: string, idx: number) => (
                      <div key={idx} className="bg-white px-3 py-2 rounded-lg border border-upxtend-primary/10">
                        <span className="text-upxtend-primary">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-upxtend-primary/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Video className="w-4 h-4 mr-2 text-upxtend-primary" /> Daily Video Standups
                  </h4>
                  <p className="text-sm text-gray-700">
                    Our team joins your morning meeting just like any local employee would, ensuring 
                    everyone stays aligned and connected despite the physical distance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Challenge & Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                <BarChart className="w-6 h-6 mr-2 text-upxtend-primary" /> The Challenge
              </h2>
              <p className="text-gray-700 mb-6">{study.challenge}</p>
              
              <div>
                <h3 className="font-semibold mb-3">Current Projects:</h3>
                <div className="grid grid-cols-1 gap-2">
                  {study.currentProjects.map((project: string, idx: number) => (
                    <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="bg-upxtend-light rounded-full p-1 mr-2">
                        <Code className="w-4 h-4 text-upxtend-primary" />
                      </div>
                      <span>{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-upxtend-light/50 p-8 rounded-xl border border-upxtend-primary/10 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                <Users className="w-6 h-6 mr-2 text-upxtend-primary" /> Our Solution
              </h2>
              <p className="text-gray-700 mb-6">{study.solution}</p>
              
              <div>
                <h3 className="font-semibold mb-3">Collaboration Approach:</h3>
                <div className="space-y-2">
                  {study.collaborationApproach.map((approach: string, idx: number) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-upxtend-primary" />
                      <span>{approach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Partnership Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.results.map((result: string, idx: number) => (
                <div key={idx} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex items-center hover:shadow-md transition-all duration-300">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <p className="font-medium">{result}</p>
                </div>
              ))}
            </div>
            
            <blockquote className="mt-12 bg-white p-6 rounded-xl border-l-4 border-upxtend-primary shadow-md">
              <p className="text-lg italic text-gray-700 mb-4">"{study.quote}"</p>
              <footer className="font-medium text-right text-gray-600">— {study.author}</footer>
            </blockquote>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-center">Team Member Testimonials</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.testimonials?.map((testimonial: any, idx: number) => (
                  <blockquote key={idx} className="bg-upxtend-light/30 p-5 rounded-lg border border-upxtend-primary/10 shadow-sm">
                    <p className="italic text-gray-700 mb-3">"{testimonial.quote}"</p>
                    <footer className="font-medium text-upxtend-primary text-sm">— {testimonial.author}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ongoing Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Continuing Partnership</h2>
            
            <p className="text-center text-lg mb-8">{study.continuedSupport}</p>
            
            <div className="text-center">
              <Button 
                className="bg-upxtend-primary hover:bg-upxtend-dark text-white flex items-center gap-2 mx-auto"
                onClick={handleScheduleConsultation}
              >
                <CalendarDays className="w-4 h-4" />
                Schedule Your Team Consultation
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      {study.images && study.images.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Working Together</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.images.map((img: string, idx: number) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src={img}
                    alt={`${study.title} image ${idx+1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA */}
      <section className="py-16 bg-upxtend-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to extend your team?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your own dedicated tech team that works during your business hours, 
            understands your culture, and seamlessly integrates with your company.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white hover:bg-gray-100 text-upxtend-primary"
              onClick={handleScheduleConsultation}
            >
              Schedule Free Consultation
            </Button>
            <Link to="/expertise">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Our Technical Expertise
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
