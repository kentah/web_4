// TODO: Turn this into a blogList component

import React, { useEffect } from 'react';
import { useAllPostsQuery } from '../../generated/graphql';
import BlogList from './blogList';
import './blogStyle.css';

const Blog: React.FC = () => {
  const { loading, error, data } = useAllPostsQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error!!!</div>;
  }

  const { posts } = data;
  return (
    <div className="container">
      <ul className="blogFrame">
        {posts.map(post => {
          return <BlogList post={post} />;
        })}
      </ul>
    </div>
  );
};

export default Blog;
