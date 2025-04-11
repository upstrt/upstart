
import { Code, Cloud, Database, Cpu, LineChart, Globe } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Software Development",
      description: "Bespoke solutions tailored to your business needs with clean, maintainable code.",
      bgClass: "bg-gradient-to-br from-upstart-lightPurple to-upstart-lightBlue"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Scalable, secure cloud infrastructure on AWS, Azure, or Google Cloud Platform.",
      bgClass: "bg-gradient-to-br from-upstart-lightBlue to-upstart-lightPurple"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Extract meaningful insights from your data with powerful pipelines and analytics.",
      bgClass: "bg-gradient-to-br from-upstart-lightPurple to-upstart-lightBlue"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Integration",
      description: "Implement cutting-edge ML and AI solutions to automate processes and enhance decision-making.",
      bgClass: "bg-gradient-to-br from-upstart-lightBlue to-upstart-lightPurple"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "DevOps Excellence",
      description: "Streamlined CI/CD pipelines and infrastructure-as-code for rapid, reliable delivery.",
      bgClass: "bg-gradient-to-br from-upstart-lightPurple to-upstart-lightBlue"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web & Mobile Development",
      description: "Responsive web apps and native mobile experiences for iOS and Android.",
      bgClass: "bg-gradient-to-br from-upstart-lightBlue to-upstart-lightPurple"
    }
  ];
  
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Expertise That Delivers</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our team brings senior-level expertise across the full technology stack, 
            functioning as a seamless extension of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 card-hover shine fadeIn" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${service.bgClass} p-3 rounded-lg inline-block mb-4`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 md:p-8 bg-gradient-to-r from-upstart-lightBlue to-upstart-lightPurple rounded-xl shadow-md fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Our tech stack is constantly evolving</h3>
              <p className="text-gray-700">
                We stay on the cutting edge of technology to ensure your business benefits from the latest innovations,
                while maintaining rock-solid stability and performance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <div className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="w-10 h-10" />
              </div>
              <div className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python" className="w-10 h-10" />
              </div>
              <div className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="AWS" className="w-10 h-10" />
              </div>
              <div className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <img src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" alt="Node.js" className="w-10 h-10" />
              </div>
              <div className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript" className="w-10 h-10" />
              </div>
              <div className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <img src="https://cdn.worldvectorlogo.com/logos/docker-3.svg" alt="Docker" className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
