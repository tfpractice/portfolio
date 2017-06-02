import gql from 'graphql-tag';

export const PROJECT_INFO = gql`
  fragment projectInfo on Project {
    id
    title
    description
    features
    category  
    details  
    tools  {
      edges {
        node {
          id
          name
          logo
     }
    }
    }
    skills  {
      edges {
        node {
          id
          name
          
     }
    }
    }
    files {
     edges {
       node {
         name
         blobUrl
         id
       }
     }
   }
  }
`;
