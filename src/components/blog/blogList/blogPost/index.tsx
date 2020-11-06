import React from 'react';
import { useGetPostQuery } from '../../../../generated/graphql';

interface Props {
  id: number;
}

const BlogPost: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = useGetPostQuery({
    variables: {
      id,
    },
  });

  return(
    <div>
      <h2>{data?.post.title}</h2>
      <small>{data?.post.id}</small>
      <p>{data?.post.body}</p>
    </div> 
  )
};

export default BlogPost;
