import React, { useContext } from 'react';
import { ScoreContext } from '../../Context/scoreContext';
import './credits.scss';

const Credits = () => {
  const { racionalPoints, emotionalPoints } = useContext(ScoreContext);

  return (
    <section className="page credits__container">
      <img
        src={`${process.env.PUBLIC_URL}/images/credits.png`}
        alt=""
        className="page__background"
      />
      <div className="page__content">
        <h1>"Atrévete a pensar por tí mismo."</h1>
        <div className="credits__result">
          <p className="credits__result__rational">
            <span>Respuestas con pensamiento Racional:</span>
            {racionalPoints}
          </p>
          <p className="credits__result__emotional">
            <span>Respuestas con pensamiento Emocional:</span>
            {emotionalPoints}
          </p>
        </div>
        <h2>Bibliography</h2>
        <ul>
          <li>
            Gabás, R. (1990). El libre juego de facultades: Belleza y
            conocimiento en Kant. Enrahonar, (16), 41-56.
          </li>
          <li>Kant, I. (1785). Metafísica de las costumbres.</li>
          <li>
            Saldarriaga Madrigal, A. (2015, 02 26). Lo que el hombre hace, o
            puede y debe hacer, de sí mismo. Antropología pragmática y filosofía
            moral en Kant. Estudios de Filosofía, (52), 63-93.
          </li>
          <li>
            Maria Emma Grajales (Concepción de la idea y generación del
            contenido)
          </li>
          <li>Andres Quiceno (Diseño)</li>
          <li>Jose Gomez (Desarrollo)</li>
        </ul>
      </div>
    </section>
  );
};

export default Credits;
