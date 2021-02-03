import React, { useContext } from 'react';
import { ScoreContext } from '../../Context/scoreContext';
import './home.scss';

const Home = ({ history }) => {
  const { currentQuestion, restart } = useContext(ScoreContext);

  return (
    <section className="home page">
      <img
        src={`${process.env.PUBLIC_URL}/images/oficina.jpg`}
        alt=""
        className="page__background"
      />
      <h1>Filosofía moral</h1>
      <p>
        Vive tu vida como si cada una de tus acciones se convirtieran en una ley
        universal.
      </p>
      <button
        onClick={() => {
          history.push(`/pregunta/${currentQuestion}`);
        }}
        className="button"
      >
        {currentQuestion === 1 ? 'Entrar' : 'Continuar'}
      </button>
      {currentQuestion > 1 && (
        <button onClick={restart} className="button">
          Reiniciar
        </button>
      )}
    </section>
  );
};

export default Home;
