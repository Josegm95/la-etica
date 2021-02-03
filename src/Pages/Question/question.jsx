import React, { useContext, useEffect, useState } from 'react';
import { ScoreContext } from '../../Context/scoreContext';
import questions from '../../questions.json';
import './question.scss';

const Question = ({
  history,
  match: {
    params: { id },
  },
}) => {
  const {
    currentQuestion,
    setCurrentQuestion,
    racionalPoints,
    setRacionalPoints,
    emotionalPoints,
    setEmotionalPoints,
  } = useContext(ScoreContext);
  const [question, setQuestion] = useState();
  const [answerSelected, setAnswerSelected] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (answerSelected === question.correctAnswer) {
      localStorage.setItem('racionalPoints', racionalPoints + 1);
      setRacionalPoints((prev) => prev + 1);
    } else {
      localStorage.setItem('emotionalPoints', emotionalPoints + 1);
      setEmotionalPoints((prev) => prev + 1);
    }

    setCurrentQuestion(parseInt(id) + 1);
    localStorage.setItem('currentQuestion', parseInt(id) + 1);
  };

  useEffect(() => {
    if (currentQuestion) {
      console.log(currentQuestion, parseInt(id));
      if (currentQuestion > questions.length) {
        history.push('/credits');
      } else if (currentQuestion === parseInt(id)) {
        setQuestion(questions[id - 1]);
        setAnswerSelected(null);
      } else {
        history.push(`/pregunta/${currentQuestion}`);
      }
    }
    // eslint-disable-next-line
  }, [id, currentQuestion]);

  return question ? (
    <section className="page question-page">
      <img
        src={`${process.env.PUBLIC_URL}/images/${question.backgroundImageName}`}
        alt=""
        className="page__background"
      />
      <div className="page__content">
        <h1 className="question-page__title">{question.title}</h1>
        <p className="question-page__paragraph">{question.paragraph} </p>
        <form onSubmit={handleSubmit}>
          {question.options.map((option, index) => (
            <div key={index} className="question-page__option">
              <input
                id={index}
                type="radio"
                name={question.title}
                checked={answerSelected === index + 1}
                onChange={() => {
                  setAnswerSelected(index + 1);
                }}
                required
              />
              <label
                htmlFor={index}
                className={answerSelected === index + 1 ? 'checked' : ''}
              >
                {option}
              </label>
            </div>
          ))}
          <button className="button">Seleccinar</button>
        </form>
      </div>
    </section>
  ) : (
    <div>Cargando...</div>
  );
};

export default Question;
