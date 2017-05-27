import thunk from 'redux-thunk';
import { createLogger, } from 'redux-logger';
import { applyMiddleware, createStore, } from 'redux';

import reducer from './reducer';

const predicate = (getState, { type, }) => !type.startsWith('@@');
const collapsed = (getState, action) => action.type;
const log = createLogger({ collapsed, predicate, });

export default client => applyMiddleware(thunk, log, client.middleware())(createStore)(reducer(client), {});
