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
    allTools { 
      edges {
        node {
          id
          name
          logo
     }
   }
 }
 allSkills {
    edges {
      node {
        name
        id
      }
    }
  }
  allFiles {
     edges {
       node {
         id
         details
         name
         blobUrl
         project{
           id
         }
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
    viewer{
      collection: allTools { 
        edges {
          node {
            id
            name
            logo
       }
     }
     }
     allSkills {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  } 
${PROJECT_INFO}`;

export const ADD_TOOL = gql`
  mutation AddTool($input: AddToToolsConnectionInput!){
    addToToolsConnection(input:$input){
      changedTools{
        tool{
          id
          name
          
      }
    project{
      id
      title
    }
  }
}
}
`;

export const ADD_SKILL = gql`
    mutation AddSkill($input: AddToProjectSkillsConnectionInput!){
      addToProjectSkillsConnection(input:$input){
      changedProjectSkills{
        skill{
          id
          name
          
        }
        project{
          id
          title
        }
      }
}
}
`;
