import { graphql, } from 'react-apollo';
import { qUtils, } from '../../utils';
import { ALL_PROJECTS, GET_PROJECT, } from './queries';

const { viewNodes, } = qUtils;

export const WithProject = component => graphql(GET_PROJECT, {
  skip:  ({ project, ...props }) => { console.log('WithProject will skip?', props, !!project); return !project; },
  options: ({ project, }) => { console.log('project', project); return ({ variables: { id: project.id, }, }); },
  props: ({ data, ownProps: { project, ...rest }, }) => {
    console.log('"rest"', rest);
    return ({
      projectQuery: data,
      project: data.loading ? project : data.project,
    });
  },
})(component);

export const WithAll = component => graphql(ALL_PROJECTS, {
  props: ({ data, ...rest }) => {
    console.log('WithAll rest', rest);
    return ({
    projectsData: data,
    projects: data.loading ? [] : viewNodes(data),
    });
  },
})(component);
