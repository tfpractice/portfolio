// import { combineReducers, } from 'redux';
import { GAME_ACTIONS, } from './constants';

// const request = (rState = {}, { type, curry, }) =>
//   DEFINITION_REQ_ACTIONS.has(type) ? curry(rState) : rState;

const game = (state = { inPlay: false, }, { type, curry, }) =>
  GAME_ACTIONS.has(type) ? curry(state) : state;

export default game;

 // combineReducers({ request, data, });
