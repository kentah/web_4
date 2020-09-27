import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../generated/graphql';

import './blogListStyle.css';

interface Props {
  post: Post;
}
const BlogList: React.FC<Props> = ({ post }) => {
  const { id, title, body, a_id } = post;
  return (
    <li className="title">
      <Link className="link" to="/blog/:id">
        {title}
      </Link>
    </li>
  );
};

export default BlogList;
