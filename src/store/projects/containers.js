import { graphql } from 'react-apollo';

import { qUtils } from '../../utils';
import { ADD_SKILL, ADD_TOOL, ALL_PROJECTS, GET_PROJECT } from './queries';

const { viewNodes } = qUtils;

const variables = {
  where: { category: { in: [ 'APP', 'LIB', 'SCRIPT' ]}},
  orderBy: [{ field: 'category', direction: 'ASC' }],
};

export const WithAll = component =>
  graphql(ALL_PROJECTS, {
    options: () => ({ variables }),
    props: ({ data }) => ({
      projectsData: data,
      projectsArray: data.loading ? [] : viewNodes(data),
    }),
  })(component);

export const WithProject = component =>
  graphql(GET_PROJECT, {
    skip: ({ project }) => project != true,
    options: ({ project }) => ({ variables: { id: project.id }}),
    props: ({ data, ownProps: { project }}) => ({
      projectQuery: data,
      project: data.loading ? project : data.project,
      projectData: data.loading ? project : data.project,
      images: data.loading ? [] : [], // edgeNodes(data.project.files),
      slides: data.loading ? [] : [], // edgeNodes(data.project.files),
      toolArray: data.loading ? [] : viewNodes(data),
      skillArray: data.loading
        ? []
        : viewNodes({ viewer: { collection: data.viewer.allSkills }}),
    }),
  })(component);

export const WithTools = component =>
  WithProject(
    graphql(ADD_TOOL, {
      skip: ({ project }) => project != true,
      options: ({ project: { id }}) => ({ refetechQueries: { query: GET_PROJECT, variables: { id }}}),
      props: ({ mutate, ownProps: { project }}) => ({
        addTool: ({ id: toolId }) =>
          mutate({ variables: { input: { projectId: project.id, toolId }}}),
      }),
    })(component)
  );

export const WithSkills = component =>
  WithTools(
    graphql(ADD_SKILL, {
      skip: ({ project }) => project != true,
      options: ({ project: { id }}) => ({ refetechQueries: { query: GET_PROJECT, variables: { id }}}),
      props: ({ mutate, ownProps: { project }}) => ({
        addSkill: ({ id: skillId }) =>
          mutate({ variables: { input: { projectId: project.id, skillId }}}),
      }),
    })(component)
  );
