import { SET_PROJECTS, } from './constants';

const set = projects => state => projects;

export const setProjects = projects =>
({ type: SET_PROJECTS, curry: set(projects), });
