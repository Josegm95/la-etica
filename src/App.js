import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/home';
import Question from './Pages/Question/question';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pregunta/:id" component={Question} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
