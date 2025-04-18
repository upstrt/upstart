
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, Cloud, Database, Cpu, LineChart, Globe, 
  SmartphoneIcon, MonitorIcon, ServerIcon, PencilRuler,
  ShieldCheck, Cog, ArrowRight, Users
} from "lucide-react";

const expertiseAreas = [
  {
    id: "web-development",
    icon: <MonitorIcon className="w-6 h-6" />,
    title: "Web Development",
    description: "Modern, responsive web applications built with the latest frameworks and technologies.",
    technologies: ["React", "Angular", "Vue", "Next.js", "Node.js", "Express"],
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "mobile-development",
    icon: <SmartphoneIcon className="w-6 h-6" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    color: "from-green-500 to-green-700"
  },
  {
    id: "cloud-solutions",
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure and architecture on leading platforms.",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
    color: "from-indigo-500 to-indigo-700"
  },
  {
    id: "data-engineering",
    icon: <Database className="w-6 h-6" />,
    title: "Data Engineering",
    description: "Data pipelines, warehousing, and analytics to extract meaningful insights.",
    technologies: ["PostgreSQL", "MongoDB", "Kafka", "Spark", "Hadoop", "Tableau"],
    color: "from-yellow-500 to-yellow-700"
  },
  {
    id: "ai-integration",
    icon: <Cpu className="w-6 h-6" />,
    title: "AI Integration",
    description: "Cutting-edge ML and AI solutions to automate processes and enhance decision-making.",
    technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Computer Vision", "NLP", "MLOps"],
    color: "from-purple-500 to-purple-700"
  },
  {
    id: "devops",
    icon: <Cog className="w-6 h-6" />,
    title: "DevOps Excellence",
    description: "Streamlined CI/CD pipelines and infrastructure-as-code for reliable delivery.",
    technologies: ["Jenkins", "GitHub Actions", "CircleCI", "Ansible", "Prometheus", "Grafana"],
    color: "from-red-500 to-red-700"
  },
  {
    id: "ui-ux-design",
    icon: <PencilRuler className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "User-centric design that balances aesthetics with functionality and usability.",
    technologies: ["Figma", "Adobe XD", "Sketch", "User Research", "Wireframing", "Prototyping"],
    color: "from-pink-500 to-pink-700"
  },
  {
    id: "cybersecurity",
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your applications and data.",
    technologies: ["Penetration Testing", "SAST/DAST", "Compliance", "Identity Management", "Encryption"],
    color: "from-gray-700 to-gray-900"
  }
];

const ExpertisePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-upxtend-light to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Technical Expertise</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              From front-end development to cloud architecture, our team brings senior-level expertise across the full technology stack. Whatever your business needs, we've got you covered.
            </p>
            <Button className="bg-upxtend-primary hover:bg-upxtend-dark text-white flex items-center gap-2 mx-auto shine">
              <Users className="w-5 h-5" />
              Meet Our Expert Team
            </Button>
          </div>
        </div>
      </section>
      
      {/* Expertise Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area) => (
              <Link 
                to={`/expertise/${area.id}`} 
                key={area.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
              >
                <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4 bg-upxtend-light/50 p-3 inline-block rounded-full">
                    <div className="text-upxtend-primary">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-upxtend-primary transition-colors">{area.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{area.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {area.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {area.technologies.length > 3 && (
                      <span className="text-xs bg-upxtend-light text-upxtend-primary px-2 py-1 rounded">
                        +{area.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-upxtend-primary font-medium">
                    Explore Details 
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Tech Team?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We combine technical excellence with a deep understanding of business needs to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-upxtend-primary">No Compromise on Quality</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="bg-upxtend-light rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Expert talent</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-upxtend-light rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Code reviews</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-upxtend-light rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Quality assurance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-upxtend-primary">Seamless Integration</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="bg-upxtend-light rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Compatible timezone</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-upxtend-light rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Daily standups</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-upxtend-light rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Your tools</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-upxtend-primary">Flexible Scaling</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="bg-upxtend-light rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>No long contracts</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-upxtend-light rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Scale on demand</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-upxtend-light rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-upxtend-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Pay as you go</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Ready to leverage our expertise for your next project?
            </p>
            <Button className="bg-upxtend-primary hover:bg-upxtend-dark text-white flex items-center gap-2 mx-auto">
              Schedule Your Risk-Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ExpertisePage;
