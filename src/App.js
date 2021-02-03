import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/home';
import Question from './Pages/Question/question';
import Credits from './Pages/Credits/credits';

import Header from './Components/Header/header';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pregunta/:id" exact component={Question} />
        <Route path="/credits" exact component={Credits} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
