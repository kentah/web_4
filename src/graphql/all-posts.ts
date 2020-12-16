import gql from 'graphql-tag';

export const QUERY_ALL_POSTS = gql`
  query AllPosts {
    posts {
      id
      title
      body
      created_at
      updated_at
      ispublished
      author {
        id
        first_name
        last_name
        active
      }
    }
  }
`;
