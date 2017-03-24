import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import configureStore from './store';
import './material';
import './styles/normalize.scss';
import './styles/style.scss';

// TODO: find a better solution
if (process.env.NODE_ENV === 'development') {
  const Perf = require('react-addons-perf');
  window.Perf = Perf;
}

// eslint-disable-next-line
export const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>,
  document.getElementById('root')
);