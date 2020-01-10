import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 


import App from './components/App';

const theme = createMuiTheme({
  palette: {
    primary: {
       light: '#FFA319',
       main: 'rgb(232,140,0)',
       dark: '#9C5D00'
    },
    secondary: {
      main: '#56565b',
    },
 }
})

// arrow function is a dummy reducer until we have a real reducer to use
const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme = { theme }>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);
