import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
  post: Post;
  authors: Array<Author>;
};

export type QueryPostArgs = {
  id: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  author: Author;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  ispublished: Scalars['Boolean'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  posts?: Array<Post>;
  active: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createAuthor: Author;
  updatePost: Post;
  updateAuthor: Author;
  deletePost: Scalars['Boolean'];
  deleteAuthor: Scalars['Boolean'];
};

export type MutationCreatePostArgs = {
  data: CreatePostInput;
};

export type MutationCreateAuthorArgs = {
  data: CreateAuthorInput;
};

export type MutationUpdatePostArgs = {
  data: UpdatePostInput;
  id: Scalars['Float'];
};

export type MutationUpdateAuthorArgs = {
  data: UpdateAuthorInput;
  id: Scalars['Float'];
};

export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};

export type MutationDeleteAuthorArgs = {
  id: Scalars['Float'];
};

export type CreatePostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
  ispublished: Scalars['Boolean'];
  author: AuthorInput;
};

export type AuthorInput = {
  id: Scalars['Float'];
};

export type CreateAuthorInput = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  active: Scalars['Boolean'];
};

export type UpdatePostInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  ispublished?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['Int']>;
};

export type UpdateAuthorInput = {
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
};

export type AllPostsQueryVariables = Exact<{ [key: string]: never }>;

export type AllPostsQuery = { __typename?: 'Query' } & {
  posts: Array<
    { __typename?: 'Post' } & Pick<
      Post,
      'id' | 'title' | 'body' | 'created_at' | 'updated_at' | 'ispublished'
    > & {
        author: { __typename?: 'Author' } & Pick<
          Author,
          'id' | 'first_name' | 'last_name' | 'active'
        >;
      }
  >;
};

export type MakePostMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
  ispublished: Scalars['Boolean'];
}>;

export type MakePostMutation = { __typename?: 'Mutation' } & {
  createPost: { __typename?: 'Post' } & Pick<Post, 'title'>;
};

export type GetPostQueryVariables = Exact<{
  id: Scalars['Float'];
}>;

export type GetPostQuery = { __typename?: 'Query' } & {
  post: { __typename?: 'Post' } & Pick<
    Post,
    'id' | 'title' | 'body' | 'created_at' | 'updated_at' | 'ispublished'
  > & {
      author: { __typename?: 'Author' } & Pick<
        Author,
        'id' | 'first_name' | 'last_name' | 'active'
      >;
    };
};

export const AllPostsDocument = gql`
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

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>
) {
  return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(
    AllPostsDocument,
    baseOptions
  );
}
export function useAllPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllPostsQuery,
    AllPostsQueryVariables
  >
) {
  return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(
    AllPostsDocument,
    baseOptions
  );
}
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<
  typeof useAllPostsLazyQuery
>;
export type AllPostsQueryResult = Apollo.QueryResult<
  AllPostsQuery,
  AllPostsQueryVariables
>;
export const MakePostDocument = gql`
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
export type MakePostMutationFn = Apollo.MutationFunction<
  MakePostMutation,
  MakePostMutationVariables
>;

/**
 * __useMakePostMutation__
 *
 * To run a mutation, you first call `useMakePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makePostMutation, { data, loading, error }] = useMakePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      ispublished: // value for 'ispublished'
 *   },
 * });
 */
export function useMakePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MakePostMutation,
    MakePostMutationVariables
  >
) {
  return Apollo.useMutation<MakePostMutation, MakePostMutationVariables>(
    MakePostDocument,
    baseOptions
  );
}
export type MakePostMutationHookResult = ReturnType<typeof useMakePostMutation>;
export type MakePostMutationResult = Apollo.MutationResult<MakePostMutation>;
export type MakePostMutationOptions = Apollo.BaseMutationOptions<
  MakePostMutation,
  MakePostMutationVariables
>;
export const GetPostDocument = gql`
  query getPost($id: Float!) {
    post(id: $id) {
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

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(
  baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  );
}
export function useGetPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  );
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<
  GetPostQuery,
  GetPostQueryVariables
>;
