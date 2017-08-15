import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import contacts from './contacts'


const reducer = combineReducers({
  contacts,
});

const middleware = compose(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
));

const store = createStore(reducer, middleware);

export default store;
