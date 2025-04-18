
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, Cloud, Database, Cpu, LineChart, Globe, 
  SmartphoneIcon, PencilRuler, ShieldCheck, Cog, ArrowRight
} from "lucide-react";

const solutions = [
  {
    id: "web-development",
    icon: <Code className="w-6 h-6" />,
    title: "Custom Software Development",
    description: "Bespoke solutions tailored to your business needs with clean, maintainable code.",
    technologies: ["React", "Angular", "Vue", "Next.js", "Node.js", "Express"],
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "cloud-solutions",
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure on AWS, Azure, or Google Cloud Platform.",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
    color: "from-blue-600 to-blue-800"
  },
  {
    id: "data-engineering",
    icon: <Database className="w-6 h-6" />,
    title: "Data Engineering",
    description: "Extract meaningful insights from your data with powerful pipelines and analytics.",
    technologies: ["PostgreSQL", "MongoDB", "Kafka", "Spark", "Hadoop", "Tableau"],
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "ai-integration",
    icon: <Cpu className="w-6 h-6" />,
    title: "AI Integration",
    description: "Implement cutting-edge ML and AI solutions to automate processes and enhance decision-making.",
    technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Computer Vision", "NLP", "MLOps"],
    color: "from-blue-600 to-blue-800"
  },
  {
    id: "devops-excellence",
    icon: <Cog className="w-6 h-6" />,
    title: "DevOps Excellence",
    description: "Streamlined CI/CD pipelines and infrastructure-as-code for rapid, reliable delivery.",
    technologies: ["Jenkins", "GitHub Actions", "CircleCI", "Ansible", "Prometheus", "Grafana"],
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "mobile-development",
    icon: <SmartphoneIcon className="w-6 h-6" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    color: "from-blue-600 to-blue-800"
  },
  {
    id: "ui-ux-design",
    icon: <PencilRuler className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "User-centric design that balances aesthetics with functionality and usability.",
    technologies: ["Figma", "Adobe XD", "Sketch", "User Research", "Wireframing", "Prototyping"],
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "cybersecurity",
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your applications and data.",
    technologies: ["Penetration Testing", "SAST/DAST", "Compliance", "Identity Management", "Encryption"],
    color: "from-blue-600 to-blue-800"
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-upxtend-light to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Solutions & Services</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              From front-end development to cloud architecture, our team brings senior-level expertise across the full technology stack. 
              Whatever your business needs, we've got you covered with our comprehensive solutions.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link 
                to={`/expertise/${solution.id}`} 
                key={solution.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
              >
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4 bg-upxtend-light/50 p-3 inline-block rounded-full">
                    <div className="text-upxtend-primary">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-upxtend-primary transition-colors">{solution.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{solution.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {solution.technologies.length > 3 && (
                      <span className="text-xs bg-upxtend-light text-upxtend-primary px-2 py-1 rounded">
                        +{solution.technologies.length - 3} more
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
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Deliver Our Solutions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We assign a dedicated team that integrates with your business, providing continuous support and development throughout your journey.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-xl shadow-md">
                <div className="md:w-1/3">
                  <div className="bg-upxtend-light/40 p-6 rounded-full mx-auto w-32 h-32 flex items-center justify-center">
                    <span className="text-4xl font-bold text-upxtend-primary">1</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Understanding Your Needs</h3>
                  <p className="text-gray-700">
                    We start with a comprehensive analysis of your business goals, technical requirements, and existing systems. 
                    This allows us to craft a solution that perfectly aligns with your objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-xl shadow-md">
                <div className="md:w-1/3">
                  <div className="bg-upxtend-light/40 p-6 rounded-full mx-auto w-32 h-32 flex items-center justify-center">
                    <span className="text-4xl font-bold text-upxtend-primary">2</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Assembling Your Dedicated Team</h3>
                  <p className="text-gray-700">
                    We select the right mix of specialists for your project from our pool of senior developers, 
                    designers, and other experts who will work exclusively with your business.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-xl shadow-md">
                <div className="md:w-1/3">
                  <div className="bg-upxtend-light/40 p-6 rounded-full mx-auto w-32 h-32 flex items-center justify-center">
                    <span className="text-4xl font-bold text-upxtend-primary">3</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Integration & Collaboration</h3>
                  <p className="text-gray-700">
                    Your dedicated team integrates seamlessly with your in-house staff, using your preferred tools 
                    and working during your business hours for real-time collaboration.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-xl shadow-md">
                <div className="md:w-1/3">
                  <div className="bg-upxtend-light/40 p-6 rounded-full mx-auto w-32 h-32 flex items-center justify-center">
                    <span className="text-4xl font-bold text-upxtend-primary">4</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Continuous Delivery & Improvement</h3>
                  <p className="text-gray-700">
                    We follow agile methodologies to ensure regular releases, transparent communication, and 
                    continuous improvement based on your feedback and evolving business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/calculator">
              <Button className="bg-upxtend-primary hover:bg-upxtend-dark text-white">
                Calculate Your Potential Savings
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-upxtend-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Tech Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss how our solutions can help your business scale efficiently.
          </p>
          <Link to="/process">
            <Button className="bg-white text-upxtend-primary hover:bg-gray-100 mr-4">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Solutions;
