import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configure_store';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configRoutes from './routes';

const target = document.getElementById('main_container');
const store = configureStore(browserHistory);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {configRoutes(store)}
    </Router>
  </Provider>,
  document.getElementById('app')
);
