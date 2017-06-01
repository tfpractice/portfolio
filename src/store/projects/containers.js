import { compose, graphql, } from 'react-apollo';
import { qUtils, } from '../../utils';
import { ADD_TOOL, ALL_PROJECTS, GET_PROJECT, } from './queries';

const { viewNodes, } = qUtils;

export const WithProject = component => graphql(GET_PROJECT, {
  skip:  ({ project, }) => !project,
  options: ({ project: { id, }, }) => ({ variables: { id, }, }),
  props: ({ data, ownProps: { project, ...rest }, }) => {
    console.log('rest', rest);
    return ({
      projectQuery: data,
      projectData: data.loading ? project : data.project,
      toolArray: data.loading ? [] : viewNodes(data),

    });
  },
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

export const WithTools = component => WithProject(graphql(ADD_TOOL, {
  skip:  ({ project, }) => !project,
  options: ({ project: { id, }, }) => ({ refetechQueries: { query: GET_PROJECT, variables: { id, }, }, }),
  props: ({ mutate, ownProps: { project, }, }) => ({
 addTool: ({ id: toolId, }) =>
    mutate({ variables: { input: { projectId: project.id, toolId, }, }, }),
  }),
})(component));
