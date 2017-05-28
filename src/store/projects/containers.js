import { graphql, } from 'react-apollo';
import { qUtils, } from '../../utils';
import { ALL_PROJECTS, GET_PROJECT, } from './queries';

const { viewNodes, } = qUtils;

export const WithProject = component => graphql(GET_PROJECT, {
  skip:  ({ project, ...props }) => { console.log('WithProject will skip?', props, !!project); return !project; },
  options: ({ project: { id, }, }) => ({ variables: { id, }, }),
  props: ({ data, }) => ({
      projectQuery: data,
      project: data.loading ? {} : data.project,
  }),
})(component);

export const WithAll = component => graphql(ALL_PROJECTS, {
  props: ({ data, }) => ({
    projectsData: data,
    projects: data.loading ? [] : viewNodes(data),
  }),
})(component);
