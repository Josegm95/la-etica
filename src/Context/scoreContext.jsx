import React, { createContext, useState, useEffect } from 'react';

export const ScoreContext = createContext(null);

const ScoreContextContainer = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState();
  const [racionalPoints, setRacionalPoints] = useState();
  const [emotionalPoints, setEmotionalPoints] = useState();

  const restart = () => {
    setCurrentQuestion(1);
    setRacionalPoints('0');
    setEmotionalPoints('0');
    localStorage.setItem('currentQuestion', 1);
    localStorage.setItem('racionalPoints', 0);
    localStorage.setItem('emotionalPoints', 0);
  };

  useEffect(() => {
    const localQuestion = parseInt(localStorage.getItem('currentQuestion'));
    const localRacional = localStorage.getItem('racionalPoints');
    const localEmotional = localStorage.getItem('emotionalPoints');

    if (localQuestion) {
      setCurrentQuestion(localQuestion);
    } else {
      localStorage.setItem('currentQuestion', 1);
      setCurrentQuestion(1);
    }

    if (localRacional) {
      setRacionalPoints(localRacional);
    } else {
      localStorage.setItem('racionalPoints', 0);
      setRacionalPoints(0);
    }

    if (localEmotional) {
      setEmotionalPoints(localEmotional);
    } else {
      localStorage.setItem('emotionalPoints', 0);
      setEmotionalPoints(0);
    }
  }, []);

  const store = {
    currentQuestion,
    setCurrentQuestion,
    racionalPoints,
    setRacionalPoints,
    emotionalPoints,
    setEmotionalPoints,
    restart,
  };

  return (
    <ScoreContext.Provider value={store}>{children}</ScoreContext.Provider>
  );
};

export default ScoreContextContainer;
