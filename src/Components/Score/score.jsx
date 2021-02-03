import React, { useContext, useEffect } from 'react';
import { ScoreContext } from '../../Context/scoreContext';
import questions from '../../questions.json';
import './score.scss';

const Score = () => {
  const { racionalPoints, emotionalPoints } = useContext(ScoreContext);

  useEffect(() => {
    console.log(racionalPoints, emotionalPoints);
  }, [racionalPoints, emotionalPoints]);

  return (
    <div className="score-meter">
      <div className="score-meter__label">
        <span>R</span>
        <p>Pensamiento racional</p>
      </div>
      <span className="score-meter__rational" />
      <span className="score-meter__emotional" />
      <div className="score-meter__label">
        <span>E</span>
        <p>Pensamiento emocional</p>
      </div>
    </div>
  );
};

export default Score;
