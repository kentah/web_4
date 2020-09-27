import gql from 'graphql-tag';

export const QUERY_ALL_POSTS = gql`
  query AllPosts {
    posts {
      id
      title
      body
      ispublished
      a_id
    }
  }
`;
