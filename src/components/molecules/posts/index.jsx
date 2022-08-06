import React from "react";
import { Link } from "gatsby";

const Posts = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map(({ id, title, slug }) => {
          return (
            <li key={id}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
