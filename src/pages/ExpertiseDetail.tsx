import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, CheckCircle, Calendar, Users, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const expertiseData = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Our web development team creates modern, responsive applications that drive business results. From simple marketing sites to complex web applications, we deliver solutions that balance performance, user experience, and maintainability.",
    services: [
      "Single Page Applications (SPAs)",
      "Progressive Web Apps (PWAs)",
      "E-commerce Platforms",
      "Content Management Systems",
      "Custom Web Portals",
      "API Development & Integration"
    ],
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
    ],
    process: [
      "Requirements Gathering & Analysis",
      "UI/UX Design & Prototyping",
      "Front-end Development",
      "Back-end Development",
      "Testing & QA",
      "Deployment & Maintenance"
    ],
    caseStudies: [
      {
        id: "techmate-sydney",
        title: "Payment Processing System",
        client: "TechMate Sydney",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        brief: "A secure payment platform for an Australian fintech company."
      },
      {
        id: "edutech-sydney",
        title: "Virtual Learning Environment",
        client: "EduTech Sydney",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        brief: "An interactive learning platform for Australian universities."
      }
    ],
    experts: [
      {
        name: "John Smith",
        role: "Senior Front-end Developer",
        experience: "10+ years",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      },
      {
        name: "Sarah Lee",
        role: "Back-end Architect",
        experience: "12+ years",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
      }
    ],
    faqs: [
      {
        question: "What web development frameworks do you specialize in?",
        answer: "Our team has deep expertise in React, Angular, Vue, and Next.js for front-end development, and Node.js, Express, Django, and Laravel for back-end development."
      },
      {
        question: "How long does a typical web development project take?",
        answer: "Project timelines vary based on complexity and requirements. Simple websites can take 4-6 weeks, while complex web applications typically require 3-6 months of development."
      },
      {
        question: "Do you provide ongoing maintenance and support?",
        answer: "Yes, we offer flexible maintenance and support packages to ensure your web application remains secure, up-to-date, and performs optimally."
      }
    ]
  },
  // Other expertise areas would be defined here
];

const ExpertiseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [expertise, setExpertise] = useState<any>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundExpertise = expertiseData.find(e => e.id === id);
    setExpertise(foundExpertise || null);
    
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!expertise) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Expertise area not found</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-upxtend-light to-white">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/expertise" className="inline-flex items-center text-upxtend-primary mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to all expertise areas
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{expertise.title}</h1>
            <p className="text-lg text-gray-700">
              {expertise.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.services.map((service: string, idx: number) => (
              <div key={idx} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-upxtend-primary" />
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Code className="w-7 h-7 mr-2 text-upxtend-primary" /> Technologies We Use
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {expertise.technologies.map((tech: any, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-all text-center">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />
                <p className="font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Development Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {expertise.process.map((step: string, idx: number) => (
              <div key={idx} className="relative">
                <div className="flex items-center mb-4">
                  <div className="bg-upxtend-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step}</h3>
                </div>
                <div className="pl-14">
                  <p className="text-gray-600">
                    {["We gather detailed requirements and understand your business needs.", 
                      "Our designers create intuitive user interfaces with your brand identity.",
                      "We build responsive front-end code using modern frameworks.",
                      "We develop robust back-end services that power your application.",
                      "Our QA team ensures your application is bug-free and performant.",
                      "We handle deployment and provide ongoing support and maintenance."][idx]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      {expertise.caseStudies && expertise.caseStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Related Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertise.caseStudies.map((study: any, idx: number) => (
                <Link 
                  key={idx} 
                  to={`/case-studies/${study.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-upxtend-primary transition-colors">{study.title}</h3>
                    <p className="text-sm text-upxtend-primary font-medium mb-3">{study.client}</p>
                    <p className="text-gray-600 mb-4">{study.brief}</p>
                    <div className="flex items-center text-upxtend-primary font-medium">
                      View Case Study 
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Meet Our Experts */}
      {expertise.experts && expertise.experts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Meet Our Experts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.experts.map((expert: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={expert.image} 
                      alt={expert.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{expert.name}</h3>
                    <p className="text-upxtend-primary font-medium mb-2">{expert.role}</p>
                    <p className="text-gray-600">{expert.experience} experience</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* FAQs */}
      {expertise.faqs && expertise.faqs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {expertise.faqs.map((faq: any, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-upxtend-primary to-upxtend-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start building with our {expertise.title} team?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project needs and learn how our experts can help you achieve your business goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-upxtend-primary flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ExpertiseDetail;
