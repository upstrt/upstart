
import { Check, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Technical Consultation",
      description: "We start by understanding your business goals, technical requirements, and team structure to create the perfect integration plan.",
      points: ["In-depth technical assessment", "Team structure planning", "Technology stack alignment"]
    },
    {
      number: "02",
      title: "Team Assembly",
      description: "We handpick senior developers with the exact skills your project needs, ensuring cultural and technical fit with your company.",
      points: ["Skill-matched senior developers", "Cultural compatibility focus", "Australian business experience"]
    },
    {
      number: "03",
      title: "Integration & Onboarding",
      description: "Your new team members are seamlessly integrated into your workflow, tools, and processes with minimal disruption.",
      points: ["Workflow integration", "Communication protocols", "Development environment setup"]
    },
    {
      number: "04",
      title: "Collaborative Delivery",
      description: "Working as an extension of your team, we deliver high-quality code and maintain transparent communication throughout.",
      points: ["Agile development methodology", "Regular progress updates", "Quality assurance built-in"]
    }
  ];
  
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Integration Process</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We don't just provide services—we become an extension of your team through
            our proven four-step integration process.
          </p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:text-right">
                <div className="inline-block md:mr-0 bg-upstart-lightBlue rounded-lg px-4 py-2 text-upstart-blue font-bold text-xl">
                  {step.number}
                </div>
              </div>
              
              <div className="md:col-span-3">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-6">{step.description}</p>
                  
                  <div className="space-y-3">
                    {step.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center">
                        <div className="bg-upstart-lightPurple rounded-full p-1 mr-3">
                          <Check className="w-4 h-4 text-upstart-purple" />
                        </div>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex justify-center my-8">
                    <ArrowRight className="w-6 h-6 text-upstart-purple transform rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
