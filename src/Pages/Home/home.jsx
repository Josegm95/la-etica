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
      <h1>Bla Bla Bla</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsum
        quam assumenda suscipit doloribus eligendi exercitationem dolorum
        eveniet eos molestiae, aperiam cupiditate ullam esse ducimus eius,
        explicabo officia necessitatibus provident.
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
