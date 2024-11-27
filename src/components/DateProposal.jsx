import React, { useState, useEffect } from 'react';
import { Heart, HeartCrack } from 'lucide-react';
import { Button } from './Button';

export function DateProposal({ onYes }) {
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const phrases = [
    "Ýok 😢", "Eminmi?", "Hakykatdanam eminmi?", "Ýene bir pikirlen!", "Soňky mümkinçilik!",
    "Elbetde dälmi?", "Munuň üçin ökünersiň!", "Ýene bir gezek pikir et!",
    "Hakykatdan doly eminmi?", "Bu ýalňyşlyk bolup biler!", "Rehim edäý!",
    "Şeýle sowuk bolma!", "Göwnüňi üýtgedäýmezmiň?", "Gaýtadan gözden geçirersiňmi?",
    "Bu soňky jogabyňmy?", "Kalbymy döwýäň 💔"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const hearts = document.querySelectorAll('.floating-heart');
      hearts.forEach(heart => heart.remove());
      createFloatingHeart();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const createFloatingHeart = () => {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.className = 'floating-heart fixed text-2xl animate-float';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  };

  const moveNoButton = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 60;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoButtonStyle({
      position: 'fixed',
      left: `${newX}px`,
      top: `${newY}px`,
      transition: 'all 0.3s ease',
      transform: `rotate(${Math.random() * 360}deg)`
    });
  };

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
    setYesScale(prev => Math.min(prev + 0.3, 2.5));
    createFloatingHeart();
    moveNoButton();
  };

  const handleNoHover = () => {
    if (Math.random() > 0.5) { // 50% chance to move on hover
      moveNoButton();
    } else {
      // If not moving, apply a random transform
      setNoButtonStyle(prev => ({
        ...prev,
        transform: `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.4})`,
        transition: 'all 0.3s ease'
      }));
    }
  };

  return (
    <div className="text-center">
      <div className="relative mb-8">
        <Heart 
          className={`w-24 h-24 text-red-500 mx-auto ${noCount > 0 ? 'animate-bounce' : 'animate-pulse'}`}
          fill={noCount > 0 ? 'currentColor' : 'none'}
        />
        {noCount > 0 && (
          <HeartCrack 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 text-red-300 animate-ping"
          />
        )}
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-8">
        Men bn aylanmana gidersinmi🌹
      </h1>

      <div className="flex flex-col gap-6 items-center relative">
        <Button
          onClick={onYes}
          style={{ transform: `scale(${yesScale})` }}
          className="min-w-[200px] z-20"
        >
         Howwa
        </Button>

        <Button
          variant="secondary"
          onClick={handleNoClick}
          onMouseEnter={handleNoHover}
          style={noButtonStyle}
          className="min-w-[200px]"
        >
          {phrases[Math.min(noCount, phrases.length - 1)]}
        </Button>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation: float linear forwards;
        }
      `}</style>
    </div>
  );
}