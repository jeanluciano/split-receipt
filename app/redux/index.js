import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import myContacts from './contacts';
import friends from './friends';
import auth from './auth';
import receipt from './receipt';
import transactions from './transactions'

const reducer = combineReducers({
  myContacts,
  friends,
  receipt,
  user: auth,
  transactions,
});

const middleware = compose(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
