import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

// arrow function is a dummy reducer until we have a real reducer to use
const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.querySelector('#root')
);
