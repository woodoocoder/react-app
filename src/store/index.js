import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

import RootReducer from './reducers'

const store = createStore(
    RootReducer,
    applyMiddleware(
      thunk,
      loggerMiddleware
    )
  );

export default store;