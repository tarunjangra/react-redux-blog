import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router'
import reducers from './reducers';
import routes from './routes/routes';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

const store = applyMiddleware(
  promise,
  thunkMiddleware
)(createStore);
// instead of browserHistory we also have hashHistory and memoryHistory to
// explore.
ReactDOM.render(
  <Provider store={store(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
