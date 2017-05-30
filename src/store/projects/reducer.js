
import { PROJECT_ACTIONS, } from './constants';

const projects = (state = [], { type, curry, }) =>
  PROJECT_ACTIONS.has(type) ? curry(state) : state;

export default projects;
