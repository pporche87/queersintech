import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import ErrorBoundary from './components/ErrorBoundary.js';

import { BrowserRouter } from 'react-router-dom';
import { log } from 'util';

ReactDOM.render((
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ BrowserRouter>
), document.getElementById('root'));
