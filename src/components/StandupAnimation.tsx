
import { useState, useEffect } from 'react';
import { Users, MessageSquare, Video } from 'lucide-react';
import useSound from 'use-sound';

export const StandupAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [playPop] = useSound('/sounds/pop.mp3', { volume: 0.5 });
  
  const steps = [
    {
      title: "Daily Standup",
      icon: <Video className="w-8 h-8 text-blue-500" />,
      content: (
        <div className="bg-white rounded-lg shadow-lg p-4 transform transition-all duration-500">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                YT
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1">
              <div className="font-medium">Your Team</div>
              <div className="text-sm text-gray-500">Daily Sync • 10:00 AM AEST</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['AK', 'JS', 'RL'].map((initials, i) => (
              <div key={i} className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm">
                  {initials}
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Realtime Chat",
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      content: (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm mr-2">
                YT
              </div>
              <div className="bg-blue-100 rounded-lg p-2 max-w-[80%]">
                <p className="text-sm">How's the new feature coming along?</p>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="bg-purple-100 rounded-lg p-2 max-w-[80%]">
                <p className="text-sm">Just pushed the latest commits! Tests passing ✨</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm ml-2">
                AK
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse" />
              <span className="text-sm">Your team is typing...</span>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % steps.length;
        playPop();
        return next;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [playPop]);
  
  return (
    <div className="relative p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl opacity-50" />
      <div className="relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`transform transition-all duration-500 absolute inset-0 ${
              idx === currentStep 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center mb-4">
              {step.icon}
              <h3 className="text-xl font-semibold ml-2">{step.title}</h3>
            </div>
            {step.content}
          </div>
        ))}
      </div>
    </div>
  );
};
