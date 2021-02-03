import React from 'react';
import './credits.scss';

const Credits = () => {
  return (
    <section className="page credits__container">
      <img
        src={`${process.env.PUBLIC_URL}/images/credits.png`}
        alt=""
        className="page__background"
      />
      <div className="page__content">
        <h2>"Atrévete a pensar por tí mismo."</h2>
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
        </ul>
      </div>
    </section>
  );
};

export default Credits;
