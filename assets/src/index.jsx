import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

const target = document.getElementById('main_container');

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
