import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { reducer as game, } from './game';
import { reducer as projects, } from './projects';

// const client = new ApolloClient();

export default client =>
  combineReducers({ form, projects, game, apollo: client.reducer(), });
