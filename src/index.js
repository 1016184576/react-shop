import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import store from './store/store'
import './assets/scss/common/style.scss'

configure({ enforceActions: 'observed' });

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
