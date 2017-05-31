import gql from 'graphql-tag';
import { PROJECT_INFO, } from './fragments';

export const ALL_PROJECTS = gql`
  query GetProjects($where:ProjectWhereArgs, $orderBy:[ProjectOrderByArgs]){ 
  viewer {
    collection:allProjects(where:$where orderBy:$orderBy){
      edges{
        node{
          ...projectInfo
          
        }
      }
    }
  }
}
${PROJECT_INFO}`;

export const GET_PROJECT = gql`
  query GetProject($id: ID!){
    project:getProject(id:$id) {
      ...projectInfo
      
    }
  } 
${PROJECT_INFO}`;
