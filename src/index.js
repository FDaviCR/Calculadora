import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <h1>React</h1>
    <h2>Calculator</h2>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
