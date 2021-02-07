import gql from 'graphql-tag';
import { CreatePostInput } from '../generated/graphql';

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

//export const MUTATION_CREATE_POST = gql`
//  mutation createPost($post: CreatePostInput!) {
//    createPost(data: $post) {
//      title
//    }
//  }
//`;
