import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { reducer as projects, } from './projects';

export default client =>
  combineReducers({ form, projects, apollo: client.reducer(), });
