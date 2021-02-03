import React from 'react';
import { Link } from 'react-router-dom';
import Score from '../Score/score';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <i className="fas fa-home" />
      </Link>
      <Score />
    </header>
  );
};

export default Header;
