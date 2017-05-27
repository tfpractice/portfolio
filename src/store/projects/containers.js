import { graphql, } from 'react-apollo';
import { qUtils, } from '../../utils';
import { ALL_PROJECTS, } from './queries';

const { viewNodes, } = qUtils;

export const WithAll = component => graphql(ALL_PROJECTS, {
  props: ({ data, }) => ({
    projectsData: data,
    projects: data.loading ? [] : viewNodes(data),
  }),
})(component);
