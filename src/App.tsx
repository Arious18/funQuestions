import React, { useState } from 'react';
import { DateProposal } from './components/DateProposal';
import { Questions } from './components/Questions';
import { Congratulations } from './components/Congratulations';

function App() {
  const [stage, setStage] = useState<'proposal' | 'questions' | 'success'>('proposal');

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex items-center justify-center p-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff69b4' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-lg w-full">
        {stage === 'proposal' && <DateProposal onYes={() => setStage('questions')} />}
        {stage === 'questions' && <Questions onComplete={() => setStage('success')} />}
        {stage === 'success' && <Congratulations />}
      </div>
    </div>
  );
}

export default App;