import React from 'react'
import { Link } from 'gatsby';

const Posts = ({posts}) => {
    return (
        <ul>
          {posts.map(({ id, title, slug }) => {
            return (
              <li key={id}>
                <Link to={slug}>{title}</Link>
              </li>
            );
          })}
        </ul>
    );
}

export default Posts