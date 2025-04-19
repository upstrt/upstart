
import { FC } from 'react';
import { Code, GitCommit, MessageSquare, Check } from 'lucide-react';

export const ProcessAnimation: FC = () => {
  return (
    <div className="relative h-64 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
        <div className="flex flex-col space-y-4 w-full max-w-md p-6">
          <div className="flex items-start space-x-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="flex-shrink-0">
              <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg transform hover:scale-102 transition-all">
              <div className="h-2 bg-blue-200 dark:bg-blue-700 rounded w-3/4 mb-2 animate-pulse" />
              <div className="h-2 bg-blue-100 dark:bg-blue-800 rounded w-1/2" />
            </div>
          </div>

          <div className="flex items-start space-x-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="flex-shrink-0">
              <GitCommit className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg transform hover:scale-102 transition-all">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-green-200 dark:bg-green-700 rounded w-1/2 mb-2" />
                  <div className="h-2 bg-green-100 dark:bg-green-800 rounded w-1/3" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div className="flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg transform hover:scale-102 transition-all">
              <div className="flex space-x-2 items-start">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900" />
                <div className="flex-1">
                  <div className="h-2 bg-purple-200 dark:bg-purple-700 rounded w-full mb-2" />
                  <div className="h-2 bg-purple-100 dark:bg-purple-800 rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
