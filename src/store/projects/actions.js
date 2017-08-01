import { SET_PROJECTS } from './constants';

const fs = require('fs');

const set = projects => state => projects;

export const setProjects = projects => ({
  type: SET_PROJECTS,
  curry: set(projects),
});
export const staticPJ = projects => (dispatch) => {
  console.log('calling static');
  return Promise.resolve(dispatch(setProjects(projects)))
    .then(dispatch)
    .then(() => {
      console.log('successsfully set');
      console.log('fs, fs', fs);
      console.log('fs.writeFile', fs.writeFile);
    })
    .catch(console.error);
};
