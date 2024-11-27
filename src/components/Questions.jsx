import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './Button';

export function Questions({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [animation, setAnimation] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const questions = [
    {
      question: "Dusysyk yrimizi belle!! 🌟",
      options: ["Romantic Restaurant 🍝", "Col gun batymy 🌅", "Jadyly Park 🎡", "Yssy Cafe ☕"],
      emoji: "🌅"
    },
    {
      question: "Ilk dusysykda name edeli? 🎬",
      options: ["Kino gorli 🎬", "Yorali 🚶‍♀️", "Marozny iyeli 🍦", "Oyun oynaly 🎮"],
      emoji: "🎮"
    },
    {
      question: "Hacan bos bolyan? ⌚",
      options: ["bu hepde 📅", "Sonky hepde📆", "Hazir! ⚡", "Sen sayla! 🎯"],
      emoji: "📅"
    }
  ];

  const handleAnswer = (answer) => {
    setAnimation('animate-bounce');
    setSelectedAnswers([...selectedAnswers, answer]);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        setAnimation('');
      }, 500);
    } else {
      setTimeout(onComplete, 500);
    }
  };

  return (
    <div className="text-center">
      <div className={`mb-6 ${animation}`}>
        <Star className="w-16 h-16 text-yellow-400 mx-auto" />
      </div>

      <div className="mb-8">
        <span className="text-6xl mb-4 block animate-bounce">{questions[currentQuestion].emoji}</span>
        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
          {questions[currentQuestion].question}
        </h2>
      </div>

      <div className="space-y-3">
        {questions[currentQuestion].options.map((option, index) => (
          <Button
            key={index}
            variant="option"
            onClick={() => handleAnswer(option)}
            className="group"
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              <ArrowRight className="w-5 h-5 text-pink-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
            </div>
          </Button>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentQuestion ? 'bg-pink-500 w-4' : 
              index < currentQuestion ? 'bg-pink-300' : 'bg-pink-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}