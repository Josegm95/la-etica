import React, { useEffect, useState } from 'react';
import Questions from '../../Assets/questions.json';

const Question = ({
  history: {
    location: { pathname },
  },
}) => {
  const [question, setQuestion] = useState();
  const [answerSelected, setAnswerSelected] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Respuesta seleccionada: ', answerSelected);
  };

  useEffect(() => {
    console.log(Questions);
    setQuestion(Questions[pathname.split('/')[2] - 1]);
  }, []);

  return question ? (
    <section>
      <h1>{question.question}</h1>
      <p>
        ¿ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
        eveniet provident dolorum omnis at officia quae optio, quaerat atque!
        Consectetur perferendis temporibus nisi iusto excepturi, commodi quam
        quasi voluptate ipsam. ?
      </p>

      <form onSubmit={handleSubmit}>
        {question.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              value={index + 1}
              onChange={(e) => {
                setAnswerSelected(e.target.value);
              }}
              id={index}
            />
            <label htmlFor={index}>{option}</label>
          </div>
        ))}

        <input type="submit" value="Seleccionar" />
      </form>
    </section>
  ) : (
    <div>Cargando...</div>
  );
};

export default Question;
