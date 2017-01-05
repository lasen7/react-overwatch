import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from 'reducers/reducer';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger, promiseMiddleware()));

export default store;