import React from 'react';
import { useGetPostQuery } from '../../../../generated/graphql';

import './blogPostStyle.css'


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
    <div className='p-post'>
      <h2 className='p-title'>{data?.post.title}</h2>
      <h5 className='p-date'>{data?.post.created_at}</h5>
      <h4 className='p-author'>{data?.post.author.first_name} {data?.post.author.last_name}</h4>
      <p className='p-body'>{data?.post.body}</p>
    </div> 
  )
};

export default BlogPost;
