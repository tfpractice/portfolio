import { graphql, } from 'react-apollo';
import { qUtils, } from '../../utils';
import { ALL_PROJECTS, GET_PROJECT, } from './queries';

const { viewNodes, } = qUtils;

export const WithProject = component => graphql(GET_PROJECT, {
  skip:  ({ project, }) => !project,
  options: ({ project: { id, }, }) => ({ variables: { id, }, }),
  props: ({ data, ownProps: { project, ...rest }, }) => ({
      projectQuery: data,
      projectData: data.loading ? project : data.project,
  }),
})(component);

export const WithAll = component => graphql(ALL_PROJECTS, {
  options: (...ops) => ({
 variables: {
 where: { category: { in: [ 'APP', 'LIB', 'SCRIPT', ], }, },
 orderBy: [{ field: 'category', direction: 'ASC', }, ],
 },
  }),
  props: ({ data, ...rest }) => ({
      projectsData: data,
      projectsArray: data.loading ? [] : viewNodes(data),
  }),
})(component);
