
import { FC } from 'react';
import { Code, GitCommit, MessageSquare, Users, Video } from 'lucide-react';

export const ProcessAnimation: FC = () => {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-indigo-100/30 to-white dark:from-blue-900/50 dark:via-indigo-900/30 dark:to-gray-900 opacity-70 z-0"></div>
      <div className="absolute inset-0 backdrop-blur-[100px] z-0"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full p-6">
          {/* Development Section */}
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg transform hover:scale-102 transition-all">
                <div className="space-y-2">
                  <div className="h-2 bg-blue-200 dark:bg-blue-700 rounded w-3/4 animate-pulse"></div>
                  <div className="h-2 bg-blue-100 dark:bg-blue-800 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <GitCommit className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-green-200 dark:bg-green-700 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="h-2 bg-green-100 dark:bg-green-800 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Section */}
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Video className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Team Sync</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="relative">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Users className="w-8 h-8 text-gray-400 dark:text-gray-500" />
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
                <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex space-x-2 items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-purple-200 dark:bg-purple-700 rounded w-full"></div>
                    <div className="h-2 bg-purple-100 dark:bg-purple-800 rounded w-2/3"></div>
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
