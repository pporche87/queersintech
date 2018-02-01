import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import { BrowserRouter } from 'react-router-dom';
import { log } from 'util';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </ BrowserRouter>
), document.getElementById('root'));
