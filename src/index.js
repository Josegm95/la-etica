import React from 'react';
import ReactDOM from 'react-dom';
import ScoreContextContainer from './Context/scoreContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ScoreContextContainer>
      <App />
    </ScoreContextContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
