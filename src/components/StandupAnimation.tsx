
import { useState, useEffect } from 'react';
import { Users, MessageSquare, Video, GitBranch, GitMerge, Bug, GitPullRequest, CheckCircle, Mic, Camera } from 'lucide-react';
import useSound from 'use-sound';

interface Participant {
  id: string;
  name: string;
  role: string;
  avatar: string | null;
}

export const StandupAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [playPop] = useSound('/sounds/pop.mp3', { volume: 0.5 });
  
  const participants: Participant[] = [
    { id: 'YT', name: 'You (Team Lead)', role: 'Client', avatar: '/lovable-uploads/6544135d-288c-47a7-a417-6b7d587f1394.png' },
    { id: 'AK', name: 'Alex Kumar', role: 'Developer', avatar: null },
    { id: 'JS', name: 'Jessica Smith', role: 'Product Manager', avatar: null },
    { id: 'RL', name: 'Ryan Lee', role: 'QA Engineer', avatar: null }
  ];

  const steps = [
    {
      title: "Daily Standup",
      icon: <Video className="w-8 h-8 text-blue-500" />,
      content: (
        <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                  YT
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div>
                <div className="font-medium text-lg">Daily Sync</div>
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <span className="inline-flex items-center">
                    <Video className="w-4 h-4 mr-1 text-green-500" />
                    Live
                  </span>
                  <span className="inline-flex items-center">
                    <Mic className={`w-4 h-4 mr-1 ${isSpeaking ? 'text-blue-500 animate-pulse' : 'text-gray-400'}`} />
                    {isSpeaking ? 'Speaking' : 'Muted'}
                  </span>
                  <span className="inline-flex items-center">
                    <Camera className="w-4 h-4 mr-1 text-blue-500" />
                    On
                  </span>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">9:30 AM AEST</div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {['AK', 'JS', 'RL', 'MN'].map((initials, i) => (
              <div 
                key={i} 
                className={`transform transition-all duration-500 ${
                  i <= currentStep % 4 ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="relative group">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-medium transform transition-all duration-300 group-hover:scale-110">
                    {initials}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
                    i === currentStep % 4 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, dotIndex) => (
                        <div 
                          key={dotIndex}
                          className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                          style={{
                            animation: `bounce 1s ease-in-out ${dotIndex * 0.2}s infinite`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
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
        <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-medium text-gray-800">Sprint Board</div>
              <div className="flex space-x-3">
                {['To Do', 'In Progress', 'Review'].map((status, i) => (
                  <div key={i} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium">{status}</div>
                ))}
              </div>
            </div>
            
            {[
              { title: "Feature: User Authentication", assignee: "AK", type: "feature", status: "in-progress" },
              { title: "Fix: Loading State", assignee: "JS", type: "bug", status: "review" },
              { title: "API Integration", assignee: "RL", type: "task", status: "todo" }
            ].map((ticket, i) => (
              <div 
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
                style={{ 
                  animation: `slideIn 0.5s ease-out ${i * 0.2}s both`
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {ticket.type === 'bug' ? (
                      <Bug className="w-5 h-5 text-red-500" />
                    ) : ticket.type === 'feature' ? (
                      <GitPullRequest className="w-5 h-5 text-purple-500" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                    <div>
                      <span className="font-medium">{ticket.title}</span>
                      <div className="text-sm text-gray-500 mt-1">
                        Assigned to {ticket.assignee}
                      </div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ticket.status === 'review' ? 'bg-purple-100 text-purple-700' :
                    ticket.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {ticket.status}
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
        <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm mr-3">
                AK
              </div>
              <div className="flex-1">
                <div className="bg-blue-50 rounded-2xl p-3 max-w-[80%] transform transition-all duration-300 hover:scale-102">
                  <p className="text-sm mb-1">Just pushed the feature branch 🚀</p>
                  <p className="text-xs text-gray-500">9:45 AM</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start justify-end">
              <div className="flex-1">
                <div className="bg-purple-50 rounded-2xl p-3 max-w-[80%] ml-auto transform transition-all duration-300 hover:scale-102">
                  <p className="text-sm mb-1">Great! I'll review it right away 👍</p>
                  <p className="text-xs text-gray-500">9:46 AM</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm ml-3">
                JS
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm mr-3">
                RL
              </div>
              <div className="flex-1">
                <div className="bg-green-50 rounded-2xl p-3 max-w-[80%] transform transition-all duration-300 hover:scale-102">
                  <div className="flex items-center space-x-2">
                    <GitMerge className="w-4 h-4 text-green-600" />
                    <p className="text-sm mb-1">Merged PR #123: New User Dashboard</p>
                  </div>
                  <p className="text-xs text-gray-500">9:48 AM</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 pl-4">
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
    
    // Simulate speaking animation
    const speakingInterval = setInterval(() => {
      setIsSpeaking(prev => !prev);
    }, 1500);
    
    return () => {
      clearInterval(interval);
      clearInterval(speakingInterval);
    };
  }, [playPop, steps.length]);
  
  return (
    <div className="relative p-8 h-[700px] bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="relative h-full overflow-hidden rounded-xl backdrop-blur-lg border border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={participants[0].avatar || `https://ui-avatars.com/api/?name=${participants[0].id}&background=random`}
                  alt={participants[0].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div>
                <div className="font-medium text-lg">Daily Sync</div>
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <span className="inline-flex items-center">
                    <Video className="w-4 h-4 mr-1 text-green-500" />
                    Live
                  </span>
                  <span className="inline-flex items-center">
                    <Mic className={`w-4 h-4 mr-1 ${isSpeaking ? 'text-blue-500 animate-pulse' : 'text-gray-400'}`} />
                    {isSpeaking ? 'Speaking' : 'Muted'}
                  </span>
                  <span className="inline-flex items-center">
                    <Camera className="w-4 h-4 mr-1 text-blue-500" />
                    On
                  </span>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">9:30 AM AEST</div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {participants.map((participant, i) => (
              <div 
                key={i} 
                className={`transform transition-all duration-500 ${
                  i <= currentStep % 4 ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="relative group">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    {participant.avatar ? (
                      <img 
                        src={participant.avatar} 
                        alt={participant.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-lg font-medium text-white">{participant.id}</span>
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                  <div className="mt-2 text-center">
                    <p className="text-sm font-medium">{participant.name}</p>
                    <p className="text-xs text-gray-500">{participant.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
