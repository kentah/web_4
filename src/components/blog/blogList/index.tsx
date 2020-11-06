import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post, useGetPostQuery } from '../../../generated/graphql';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogPost from './blogPost';

import './blogListStyle.css';

interface Props {
  post: Post;
}

const BlogList: React.FC<Props> = ({ post }) => {
  const { id, title, body } = post;

  const [postId, setPostId] = useState(id);

  useEffect(() => {
    console.log('blogList', postId);
  });

  return (
    <Router>
      <li className="title">
        <Link to={`/blog/${parseInt(id)}`}>{title}</Link>
      </li>
      <Switch>
        <Route path={`/blog/${id}`}>
          <BlogPost id={parseInt(id)} />
        </Route>
      </Switch>
    </Router>
  );
};

export default BlogList;
