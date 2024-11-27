import React from 'react';
import { Sparkles } from 'lucide-react';

export function Background({ children }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-white to-purple-100">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h20v20H0z\" fill=\"%23FF69B4\" fill-opacity=\"0.05\"/%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute inset-0 animate-pulse opacity-30">
          {[...Array(30)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-pink-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `scale(${Math.random() * 0.5 + 0.5})`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content container */}
      <div className="relative flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="bg-white/90 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl max-w-sm w-full border border-pink-100 transition-all duration-300 hover:shadow-pink-200/50">
          {children}
        </div>
      </div>
    </div>
  );
}