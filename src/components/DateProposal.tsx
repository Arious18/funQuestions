import React from 'react';
import { Heart } from 'lucide-react';

interface DateProposalProps {
  onYes: () => void;
}

export function DateProposal({ onYes }: DateProposalProps) {
  const handleNoHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLButtonElement;
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  };

  return (
    <div className="text-center">
      <div className="mb-8 animate-bounce">
        <Heart className="w-20 h-20 text-red-500 mx-auto" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Men bn dasaryk gidersinmi?
      </h1>
      <div className="space-x-4">
        <button
          onClick={onYes}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all"
        >
        Howwa 😊
        </button>
        <button
          onMouseEnter={handleNoHover}
          className="bg-gray-500 text-white font-bold py-3 px-8 rounded-full absolute"
        >Yok 😢
        </button>
      </div>
    </div>
  );
}