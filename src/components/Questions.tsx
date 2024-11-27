import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

interface QuestionsProps {
  onComplete: () => void;
}

export function Questions({ onComplete }: QuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const questions = [
    {
      question: "Gowy goryan naharyn name ? Seni Sol taya akideyin! 🍝",
      options: ["Turkmen", "Japanese", "Mexican", "Surprise me!"],
    },
    {
      question: "Ilkinji dusysygymyzyn Yerini belle! 🎬",
      options: ["Cinema gijesi", "parkda", "Coffe dususyk", "Gowy wagt gecirjek yerimiz"],
    },
    {
      question: "nira gideli? ⏰",
      options: ["Bu hepde", "Sonky hepde", "hazir!", "Hacan bos bolsan sonda gideris"],
    },
  ];

  const handleAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="text-center max-w-md mx-auto">
      <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        {questions[currentQuestion].question}
      </h2>
      <div className="space-y-4">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={handleAnswer}
            className="w-full bg-pink-100 hover:bg-pink-200 text-pink-800 font-semibold py-3 px-6 rounded-lg flex items-center justify-between group transition-all"
          >
            <span>{option}</span>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
          </button>
        ))}
      </div>
    </div>
  );
}