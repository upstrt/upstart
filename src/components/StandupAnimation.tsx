import { useState, useEffect } from 'react';
import { Users, MessageSquare, Video, GitBranch, GitMerge, Bug, GitPullRequest, CheckCircle } from 'lucide-react';
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
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex-1">
              <div className="font-medium">Daily Sync</div>
              <div className="text-sm text-gray-500">
                <span className="inline-flex items-center">
                  <Video className="w-4 h-4 mr-1 text-green-500" />
                  Huddle in progress
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['AK', 'JS', 'RL', 'MN'].map((initials, i) => (
              <div 
                key={i} 
                className={`relative transform transition-all duration-300 ${
                  i <= currentStep % 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm">
                  {initials}
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Jira Board",
      icon: <GitBranch className="w-8 h-8 text-purple-500" />,
      content: (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-700">Sprint Board</div>
              <div className="flex space-x-2">
                {['To Do', 'In Progress', 'Review'].map((status, i) => (
                  <div key={i} className="text-xs px-2 py-1 bg-gray-100 rounded">{status}</div>
                ))}
              </div>
            </div>
            {[
              { title: "Feature: User Authentication", assignee: "AK", type: "feature" },
              { title: "Fix: Loading State", assignee: "JS", type: "bug" },
              { title: "API Integration", assignee: "RL", type: "task" }
            ].map((ticket, i) => (
              <div 
                key={i}
                className="bg-white border border-gray-200 rounded p-3 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
                style={{ 
                  animation: `slideIn 0.3s ease-out ${i * 0.1}s both`,
                  animationDelay: `${i * 100}ms`
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {ticket.type === 'bug' ? (
                      <Bug className="w-4 h-4 text-red-500" />
                    ) : ticket.type === 'feature' ? (
                      <GitPullRequest className="w-4 h-4 text-purple-500" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                    )}
                    <span className="text-sm font-medium">{ticket.title}</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs">
                    {ticket.assignee}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Team Chat",
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      content: (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm mr-2">
                AK
              </div>
              <div className="bg-blue-100 rounded-lg p-2 max-w-[80%]">
                <p className="text-sm">Just pushed the feature branch 🚀</p>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="bg-purple-100 rounded-lg p-2 max-w-[80%]">
                <p className="text-sm">Great! I'll review it right away 👍</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm ml-2">
                JS
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm mr-2">
                RL
              </div>
              <div className="bg-green-100 rounded-lg p-2 max-w-[80%]">
                <div className="flex items-center space-x-2">
                  <GitMerge className="w-4 h-4 text-green-600" />
                  <p className="text-sm">Merged PR #123: New User Dashboard</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 rounded-full bg-gray-300"
                    style={{
                      animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`
                    }}
                  />
                ))}
              </div>
              <span className="text-sm">Team is typing...</span>
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
    }, 4000);
    
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
      
      <style>
        {`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        `}
      </style>
    </div>
  );
};
