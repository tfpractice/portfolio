import gql from 'graphql-tag';

export const PROJECT_INFO = gql`
  fragment projectInfo on Project {
    id
    title
    description
    features
    category    
    tools  {
      edges {
        node {
          id
          name
     }
   }
    }
  }
`;
