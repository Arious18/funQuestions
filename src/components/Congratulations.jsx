import React from 'react';
import { Heart, Instagram, Twitter, Github, Music, Star, ExternalLink } from 'lucide-react';

export function Congratulations() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/developer.azatik", label: "Instagram", color: "text-pink-500", bgColor: "bg-pink-50" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter", color: "text-blue-400", bgColor: "bg-blue-50" },
    { icon: Github, href: "https://github.com/yourusername", label: "Github", color: "text-gray-700", bgColor: "bg-gray-50" },
    { icon: Music, href: "https://spotify.com/yourusername", label: "Spotify", color: "text-green-500", bgColor: "bg-green-50" }
  ];

  return (
    <div className="text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center justify-center animate-ping">
          <Heart className="w-20 h-20 text-red-200" />
        </div>
        <Heart className="w-20 h-20 text-red-500 mx-auto relative z-10 animate-bounce fill-current" />
      </div>
      
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Bu bir dusysyk! 🎉
        </h1>
        <div className="flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 animate-pulse" fill="currentColor" />
          ))}
        </div>
        <p className="text-lg md:text-xl text-gray-600 animate-pulse">
     Garasasym gelenok! 💖
        </p>
      </div>

      <div className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl shadow-inner">
        <p className="text-sm md:text-base text-gray-600 mb-4 font-medium">
          ulgamda galalyn :
        </p>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map(({ icon: Icon, href, label, color, bgColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 p-4 ${bgColor} rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1`}
            >
              <Icon className={`w-5 h-5 ${color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium text-gray-600">{label}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500 animate-pulse">
        💝 Our adventure begins now 💝
      </div>
    </div>
  );
}