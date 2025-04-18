
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { Calendar, MessageSquare, GitMerge, Users } from 'lucide-react';

export const CollaborationTimeline = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [playPop] = useSound('/sounds/pop.mp3', { volume: 0.5 });
  
  const timelineSteps = [
    {
      time: "9:00 AM AEST",
      title: "Daily Standup",
      icon: <Users className="w-6 h-6" />,
      description: "Team sync with Sydney office",
      animation: "fade-right"
    },
    {
      time: "10:00 AM AEST",
      title: "Ticket Planning",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Sprint planning and task allocation",
      animation: "fade-left"
    },
    {
      time: "2:00 PM AEST",
      title: "Code Reviews",
      icon: <GitMerge className="w-6 h-6" />,
      description: "PR reviews and merges",
      animation: "fade-right"
    },
    {
      time: "4:30 PM AEST",
      title: "End of Day Sync",
      icon: <Calendar className="w-6 h-6" />,
      description: "Progress update and next day planning",
      animation: "fade-left"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % timelineSteps.length;
        playPop();
        return next;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [playPop]);
  
  return (
    <div className="relative p-6 bg-white rounded-xl shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
          Seamless Collaboration Timeline
        </h3>
        
        <div className="space-y-6">
          {timelineSteps.map((step, idx) => (
            <div
              key={idx}
              className={`transform transition-all duration-500 ${
                idx === currentStep 
                  ? 'scale-105 opacity-100' 
                  : 'scale-95 opacity-50'
              }`}
              data-aos={step.animation}
            >
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                <div className="flex-shrink-0 w-12 h-12 bg-upxtend-primary/10 rounded-full flex items-center justify-center mr-4">
                  {step.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <span className="text-sm text-upxtend-primary">{step.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
