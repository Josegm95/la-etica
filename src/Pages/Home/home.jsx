import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {
  return (
    <section className="home">
      <h1>Bla Bla Bla</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsum
        quam assumenda suscipit doloribus eligendi exercitationem dolorum
        eveniet eos molestiae, aperiam cupiditate ullam esse ducimus eius,
        explicabo officia necessitatibus provident.
      </p>
      <Link to="/pregunta/1">Jugar</Link>
    </section>
  );
};

export default Home;
