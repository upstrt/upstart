
import { Check, ArrowDown, Lock, Code, Users, MessageSquare, FileCode, Zap } from "lucide-react";
import { useState } from "react";
import { ProcessAnimation } from './ProcessAnimation';

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: "01",
      title: "Technical Consultation",
      description: "We start by understanding your business goals, technical requirements, and team structure to create the perfect integration plan.",
      icon: <FileCode className="w-12 h-12 text-outteams-primary" />,
      benefits: [
        "In-depth technical assessment",
        "Team structure planning",
        "Technology stack alignment",
        "Clear project roadmap"
      ],
      emphasis: "We document everything and share it with you for complete transparency."
    },
    {
      number: "02",
      title: "Team Assembly",
      description: "We handpick the perfect tech experts with the exact skills your project needs, ensuring cultural and technical fit with your company.",
      icon: <Users className="w-12 h-12 text-purple-600" />,
      benefits: [
        "Skill-matched tech experts",
        "Cultural compatibility focus", 
        "Australian business experience",
        "Seamless team integration"
      ],
      emphasis: "You interview and approve every team member before they start."
    },
    {
      number: "03",
      title: "Transparent Development",
      description: "Your team delivers high-quality code with daily updates, always maintaining clear communication and complete code ownership.",
      icon: <Code className="w-12 h-12 text-outteams-primary" />,
      benefits: [
        "100% code ownership for clients",
        "Daily progress updates",
        "Full access to repositories",
        "Regular code reviews"
      ],
      emphasis: "You own ALL code produced, with complete IP rights and transparency."
    },
    {
      number: "04",
      title: "Collaboration & Communication",
      description: "We work as an extension of your team with consistent communication channels and regular check-ins, delivering outstanding results.",
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      benefits: [
        "Daily standups on your schedule",
        "Shared project management tools",
        "Australian timezone coverage",
        "Direct access to developers"
      ],
      emphasis: "Clear, consistent communication ensures we function as your team, not just a provider."
    },
  ];
  
  return (
    <section id="process" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Integration Process</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We don't just provide services—we become an extension of your team through
            our proven four-step integration process that delivers results from day one.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {steps.map((step, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${activeStep === index 
                  ? 'bg-gradient-to-r from-outteams-primary to-outteams-secondary text-white shadow-lg scale-110' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              onClick={() => setActiveStep(index)}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs 
                ${activeStep === index ? 'bg-white text-outteams-primary' : 'bg-blue-100 text-outteams-primary'}`}>
                {step.number}
              </div>
              {step.title}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-10">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-blue-100/20 p-6 md:p-8 transform transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-3 mr-4 step-number">
                  <span className="text-xl font-bold bg-gradient-to-r from-outteams-primary to-outteams-secondary bg-clip-text text-transparent">{steps[activeStep].number}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">{steps[activeStep].title}</h3>
              </div>
              
              <div className="mb-6 text-outteams-primary">
                {steps[activeStep].icon}
              </div>
              
              <p className="text-gray-700 mb-6">{steps[activeStep].description}</p>
              
              <div className="space-y-3 mb-6">
                {steps[activeStep].benefits.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-full p-1 mr-3">
                      <Check className="w-4 h-4 text-purple-700" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100/50">
                <div className="flex items-start">
                  <div className="mr-2 mt-1">
                    <Lock className="w-4 h-4 text-outteams-primary" />
                  </div>
                  <p className="text-blue-800 font-medium">
                    <strong>Key Promise:</strong> {steps[activeStep].emphasis}
                  </p>
                </div>
              </div>
              
              {activeStep < steps.length - 1 && (
                <div className="mt-6 text-center">
                  <button 
                    onClick={() => setActiveStep(prev => Math.min(prev + 1, steps.length - 1))}
                    className="inline-flex items-center justify-center text-sm text-outteams-primary hover:text-purple-600 transition-colors"
                  >
                    Next Step
                    <ArrowDown className="w-4 h-4 ml-1 transform rotate-90" />
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:col-span-2 flex justify-center order-1 md:order-2">
            <div className="hidden md:flex flex-col items-center h-full">
              <div className="h-full w-1 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full relative">
                <div 
                  className="absolute w-4 h-4 bg-white rounded-full border-2 border-outteams-primary shadow-lg left-1/2 transform -translate-x-1/2"
                  style={{ top: `${(activeStep / (steps.length - 1)) * 100}%` }}
                >
                  <div className="absolute w-full h-full rounded-full bg-outteams-primary animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 order-3">
            <div className="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-blue-100/20">
              {activeStep === 0 && (
                <div className="relative h-64 overflow-hidden rounded-lg animate-fadeIn">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-lg w-10/12 transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <Users className="w-6 h-6 text-outteams-primary" />
                        <h4 className="font-bold text-outteams-primary">Technical Assessment</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="h-3 bg-blue-100 rounded-full w-full animate-pulse" />
                        <div className="h-3 bg-blue-100 rounded-full w-3/4 animate-pulse" />
                        <div className="h-3 bg-blue-100 rounded-full w-5/6 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeStep === 1 && (
                <div className="relative h-64 overflow-hidden rounded-lg animate-fadeIn">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-3 w-10/12">
                      {[1, 2, 3].map((num) => (
                        <div 
                          key={num} 
                          className="bg-white rounded-lg p-3 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-outteams-primary to-outteams-secondary mb-3 flex items-center justify-center text-white">
                            {['JS', 'AK', 'RL'][num-1]}
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-sm">{['James S.', 'Aanya K.', 'Ryan L.'][num-1]}</p>
                            <p className="text-xs text-gray-600">{['Frontend', 'Backend', 'DevOps'][num-1]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8 md:hidden">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-outteams-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
        
        {(activeStep === steps.length - 1 || activeStep === steps.length - 2) && (
          <div className="mt-8">
            <ProcessAnimation />
          </div>
        )}
      </div>
    </section>
  );
}
