import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { reducer as game, } from './game';

// const client = new ApolloClient();

export default client => combineReducers({ form, game, apollo: client.reducer(), });
