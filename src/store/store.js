import thunk from 'redux-thunk';
import { createLogger, } from 'redux-logger';
import { applyMiddleware, createStore, } from 'redux';

import reducer from './reducer';

const xFormType = type => !type.startsWith('@@');
const xApollo = type => !type.startsWith('APOLLO');
const typeFilter = type => [ xFormType, ].every(f => f(type));
const predicate = (getState, { type, }) => typeFilter(type);
const collapsed = (getState, action) => action.type;
const log = createLogger({ collapsed, predicate, });

export default client => applyMiddleware(thunk, log, client.middleware())(createStore)(reducer(client), {});
