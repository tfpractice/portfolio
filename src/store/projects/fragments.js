import gql from 'graphql-tag';

export const TOOL_INFO = gql`
  fragment toolInfo on Tool {
    id
    name
    logo
    stack
  }
`;

export const SKILL_INFO = gql`
  fragment skillInfo on Skill {
    id
    name
  }
`;

export const FILE_INFO = gql`
  fragment fileInfo on File {
    id
    details
    name
    blobUrl
    project {
      id
    }
  }
`;
export const PROJECT_INFO = gql`
  fragment projectInfo on Project {
    id
    title
    url
    repo
    description
    features
    category  
    details  
    thoughts
    headerURL
    tools  {
      edges {
        node {
          ...toolInfo
     }
    }
    }
    skills  {
      edges {
        node {
        ...skillInfo      
     }
    }
    }
    files {
     edges {
       node {
        ...fileInfo
       }
     }
   }
  }
  ${TOOL_INFO}
  ${SKILL_INFO}
  ${FILE_INFO}`;
