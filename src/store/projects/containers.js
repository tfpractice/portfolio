import { graphql } from 'react-apollo';

import { qUtils } from '../../utils';
import {
  ADD_SKILL,
  ADD_TOOL,
  ALL_PROJECTS,
  DROP_SKILL,
  DROP_TOOL,
  GET_PROJECT,
} from './queries';

const { viewNodes, edgeNodes } = qUtils;

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
    skip: ({ project, ...props }) => !project,
    options: ({ project }) => ({ variables: { id: project.id }}),
    props: ({ data, ownProps: { project }}) => {
      const xTool = ({ id: toolId }) =>
        !new Set(edgeNodes(project.tools).map(({ id }) => id)).has(toolId);
      const hasTool = tool => !xTool(tool);
      const xSkill = ({ id: skillId }) =>
        !new Set(edgeNodes(project.skills).map(({ id }) => id)).has(skillId);
      const hasSkill = skill => !xSkill(skill);

      const toolArray = data.loading ? [] : viewNodes(data);
      const skillArray = data.loading
        ? []
        : viewNodes({ viewer: { collection: data.viewer.allSkills }});
      const pTools = data.loading ? [] : toolArray.filter(hasTool);
      const xTools = data.loading ? [] : toolArray.filter(xTool);
      const pSkills = data.loading ? [] : skillArray.filter(hasSkill);
      const xSkills = data.loading ? [] : skillArray.filter(xSkill);

      return {
        projectQuery: data,
        project: data.loading ? project : data.project,
        projectData: data.loading ? project : data.project,
        images: data.loading ? [] : [],
        slides: data.loading ? [] : [],
        toolArray,
        skillArray,
        pTools,
        xTools,
        pSkills,
        xSkills,
      };
    },
  })(component);

export const WithTools = component =>
  WithProject(
    graphql(ADD_TOOL, {
      skip: ({ project }) => !project,
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
      skip: ({ project }) => !project,
      options: ({ project: { id }}) => ({ refetechQueries: { query: GET_PROJECT, variables: { id }}}),
      props: ({ mutate, ownProps }) => ({
        addSkill: ({ id: skillId }) =>
          mutate({ variables: { input: { projectId: ownProps.project.id, skillId }}}),
      }),
    })(component)
  );

export const DropSkill = component =>
  WithSkills(
    graphql(DROP_SKILL, {
      skip: ({ project }) => !project,
      options: ({ project: { id }}) => ({ refetechQueries: { query: GET_PROJECT, variables: { id }}}),
      props: ({ mutate, ownProps }) => ({
        dropSkill: ({ id: skillId }) =>
          mutate({ variables: { input: { projectId: ownProps.project.id, skillId }}}),
      }),
    })(component)
  );

export const DropTool = component =>
  DropSkill(
    graphql(DROP_TOOL, {
      skip: ({ project }) => !project,
      options: ({ project: { id }}) => ({ refetechQueries: { query: GET_PROJECT, variables: { id }}}),
      props: ({ mutate, ownProps }) => ({
        dropTool: ({ id: toolId }) =>
          mutate({ variables: { input: { projectId: ownProps.project.id, toolId }}}),
      }),
    })(component)
  );
