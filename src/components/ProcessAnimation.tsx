
import { FC } from 'react';
import { Code, GitCommit, MessageSquare, Users, Video, FileCheck, GitPullRequest, Bug, GitMerge, CheckCircle } from 'lucide-react';

export const ProcessAnimation: FC = () => {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-indigo-100/30 to-white opacity-70 z-0"></div>
      <div className="absolute inset-0 backdrop-blur-[100px] z-0"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full p-6">
          {/* Development Section */}
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1 bg-white rounded-lg p-4 shadow-lg transform hover:scale-102 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Feature Development</span>
                    <span className="text-xs text-green-500">In Progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">AK</div>
                    <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                  </div>
                  <div className="h-2 bg-blue-100 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <GitCommit className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1 bg-white rounded-lg p-4 shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Recent Commits</span>
                    <span className="text-xs text-blue-500">Just now</span>
                  </div>
                  
                  {[
                    { message: "Add user authentication", author: "AK" },
                    { message: "Fix loading state bug", author: "JS" }
                  ].map((commit, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <GitPullRequest className="w-3 h-3 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm">{commit.message}</div>
                        <div className="text-xs text-gray-500">by {commit.author}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Bug className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1 bg-white rounded-lg p-4 shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Bug Fixes</span>
                    <span className="text-xs text-green-500">2 resolved today</span>
                  </div>
                  
                  <div className="h-2 bg-green-200 rounded w-3/4"></div>
                  <div className="h-2 bg-red-100 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Section */}
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Video className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Team Sync</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="relative">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Users className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex space-x-2 items-start mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100"></div>
                  <div className="flex-1 bg-purple-50 rounded-lg p-2">
                    <div className="text-sm">The latest changes look good. Let's merge it.</div>
                    <div className="text-xs text-gray-500 mt-1">9:45 AM</div>
                  </div>
                </div>
                
                <div className="flex space-x-2 items-start mb-3 justify-end">
                  <div className="flex-1 bg-blue-50 rounded-lg p-2 max-w-[80%]">
                    <div className="text-sm">Great! I'll prepare the PR for review.</div>
                    <div className="text-xs text-gray-500 mt-1">9:46 AM</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                </div>
                
                <div className="flex space-x-2 items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100"></div>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 h-1.5 rounded-full bg-gray-400"
                        style={{
                          animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <GitMerge className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1 bg-white rounded-lg p-4 shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Pull Requests</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">3 Approved</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <div className="text-sm">User Authentication</div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <div className="text-sm">Dashboard Metrics</div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full border border-dashed border-blue-500"></div>
                    <div className="text-sm text-gray-500">Settings Page (waiting review)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
