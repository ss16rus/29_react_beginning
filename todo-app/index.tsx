import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import firstReducer from './src/redux/reducers';
import anotherReducer from './src/redux/another_reducers';
import App from './src/components/App';


const middleware = [ thunk ];
if ( process.env.NODE_ENV !== 'production') {
  middleware.push( createLogger());
}

const firstStore = createStore(
  firstReducer,
  applyMiddleware(...middleware)
)

const anotherStore = createStore(
  anotherReducer,
  applyMiddleware(...middleware)
)

render (
  <Provider store={firstStore}>
    <App />
  </Provider>
  , document.querySelector('#root'));