import React from "react";
import { Link } from "gatsby";
import Post from "../../atoms/post";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}

      <p>
        <Link to="/">&#8592; Home</Link>
      </p>
    </div>
  );
};

export default Posts;
