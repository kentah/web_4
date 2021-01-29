import gql from 'graphql-tag';

export const MUTATION_CREATE_POST = gql`
  mutation makePost($title: String!, $body: String!, $ispublished: Boolean!) {
    createPost(
      data: {
        title: $title
        body: $body
        ispublished: $ispublished
        author: { id: 1 }
      }
    ) {
      title
    }
  }
`;
