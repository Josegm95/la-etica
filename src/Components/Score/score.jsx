import React, { useContext } from 'react';
import { ScoreContext } from '../../Context/scoreContext';
import questions from '../../questions.json';
import './score.scss';

const Score = () => {
  const { racionalPoints, emotionalPoints } = useContext(ScoreContext);

  const calcWidth = (points) => {
    if (points) {
      const width = (parseInt(points) / questions.length) * 100;
      return width;
    }
  };

  return (
    <div className="score-meter">
      <div className="score-meter__item">
        <span className="score-meter__title">R</span>
        <div className="score-meter__bar">
          <span
            style={{
              width: `${calcWidth(racionalPoints)}%`,
              backgroundColor: '#20E8E2',
            }}
          />
        </div>
        <p>Pensamiento racional</p>
      </div>
      <div className="score-meter__item">
        <span className="score-meter__title">E</span>
        <div className="score-meter__bar">
          <span
            style={{
              width: `${calcWidth(emotionalPoints)}%`,
              backgroundColor: '#24FFBA',
            }}
          />
        </div>
        <p>Pensamiento emocional</p>
      </div>
    </div>
  );
};

export default Score;
