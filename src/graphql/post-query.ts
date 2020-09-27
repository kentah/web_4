import gql from 'graphql-tag';

export const QUERY_GET_POST_BY_ID = gql`
  query getPost($id: Float!) {
    post(id: $id) {
      id
      title
      body
      ispublished
    }
  }
`;
