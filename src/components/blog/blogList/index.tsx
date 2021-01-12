import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post, useGetPostQuery } from '../../../generated/graphql';

import './blogListStyle.css';

interface Props {
  post: Post;
}

const BlogList: React.FC<Props> = ({ post }) => {
  const { id, title, body, created_at, updated_at, author } = post;
  const { first_name, last_name, active } = author;

  const [postId, setPostId] = useState(id);

  useEffect(() => {
    console.log('blogList', postId);
  }, [postId]);

  return (
    <div>
      <div className="postContainer">
        <li className="title">
          <Link to={`blog/${postId}`}>
            <div>{title}</div>
            <div className="author">
              {first_name} {last_name}
            </div>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default BlogList;
