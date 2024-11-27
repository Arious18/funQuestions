import React from 'react';
import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';

export function Congratulations() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/developer.azatik", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/yourusername", label: "Facebook" },
  ];

  return (
    <div className="text-center">
      <div className="animate-bounce mb-8">
        <Heart className="w-20 h-20 text-red-500 mx-auto fill-current" />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        bor  bu bizin ilkinji dususyk 🎉
      </h1>
      <p className="text-xl text-gray-600 mb-8">
       men gaty howesli sen bn gitjegim ucin 💖
      </p>
      <div className="space-y-4">
        <p className="text-lg text-gray-700">Let's stay connected:</p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all"
            >
              <Icon className="w-8 h-8 text-pink-500 hover:text-pink-600" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}