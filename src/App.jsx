import React, { useState } from 'react';
import { Background } from './components/Background';
import { DateProposal } from './components/DateProposal';
import { Questions } from './components/Questions';
import { Congratulations } from './components/Congratulations';

export function App() {
  const [stage, setStage] = useState('proposal');

  const renderStage = () => {
    switch (stage) {
      case 'proposal':
        return <DateProposal onYes={() => setStage('questions')} />;
      case 'questions':
        return <Questions onComplete={() => setStage('success')} />;
      case 'success':
        return <Congratulations />;
      default:
        return null;
    }
  };

  return (
    <Background>
      {renderStage()}
    </Background>
  );
}

export default App;