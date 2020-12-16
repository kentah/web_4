import React, {useEffect} from 'react';
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
 
  useEffect(() => {
    console.log(`At BlogPost ${id}`)
    console.log(data)
  }, [data, id])

  return(
    <div>
      <h2>{data?.post.title}</h2>
      <h4>{data?.post.author.first_name} {data?.post.author.last_name}</h4>
      <p>{data?.post.body}</p>
    </div> 
  )
};

export default BlogPost;
