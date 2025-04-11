
import { Check, ArrowRight, Lightbulb, Users, Laptop, Presentation } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Technical Consultation",
      description: "We start by understanding your business goals, technical requirements, and team structure to create the perfect integration plan.",
      points: ["In-depth technical assessment", "Team structure planning", "Technology stack alignment"],
      icon: <Lightbulb className="w-12 h-12 text-upstart-purple" />,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      benefit: "Save hours of planning and research with our expert consultation"
    },
    {
      number: "02",
      title: "Team Assembly",
      description: "We handpick senior developers with the exact skills your project needs, ensuring cultural and technical fit with your company.",
      points: ["Skill-matched senior developers", "Cultural compatibility focus", "Australian business experience"],
      icon: <Users className="w-12 h-12 text-upstart-purple" />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      benefit: "Eliminate hiring risks with our pre-vetted senior talent pool"
    },
    {
      number: "03",
      title: "Integration & Onboarding",
      description: "Your new team members are seamlessly integrated into your workflow, tools, and processes with minimal disruption.",
      points: ["Workflow integration", "Communication protocols", "Development environment setup"],
      icon: <Laptop className="w-12 h-12 text-upstart-purple" />,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      benefit: "Start collaborating in days, not months"
    },
    {
      number: "04",
      title: "Collaborative Delivery",
      description: "Working as an extension of your team, we deliver high-quality code and maintain transparent communication throughout.",
      points: ["Agile development methodology", "Regular progress updates", "Quality assurance built-in"],
      icon: <Presentation className="w-12 h-12 text-upstart-purple" />,
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      benefit: "Experience development velocity that exceeds in-house teams"
    }
  ];
  
  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-b from-white to-upstart-lightPurple/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Integration Process</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We don't just provide services—we become an extension of your team through
            our proven four-step integration process that delivers results from day one.
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="p-6 md:p-8 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-upstart-lightPurple rounded-full p-3 mr-4 step-number">
                      <span className="text-xl font-bold text-upstart-purple">{step.number}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                  </div>
                  
                  <div className="mb-6">
                    {step.icon}
                  </div>
                  
                  <p className="text-gray-700 mb-6">{step.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {step.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center">
                        <div className="bg-upstart-lightPurple rounded-full p-1 mr-3">
                          <Check className="w-4 h-4 text-upstart-purple" />
                        </div>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-upstart-lightBlue to-upstart-lightPurple p-4 rounded-lg">
                    <p className="text-upstart-blue font-medium">
                      <strong>Key Benefit:</strong> {step.benefit}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 flex justify-center order-1 md:order-2 hidden md:flex">
                {index < steps.length - 1 ? (
                  <div className="h-full flex items-center">
                    <ArrowRight className="w-10 h-10 text-upstart-purple transform rotate-90 md:rotate-0" />
                  </div>
                ) : (
                  <div className="h-full flex items-center">
                    <div className="w-10 h-10 bg-upstart-gold rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="md:col-span-5 order-3">
                <div className="blob h-64 md:h-80 w-full" style={{ backgroundImage: `url(${step.image})` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
