import React from "react";
import { Link } from "gatsby";
import PostContainer from "./style";

const Post = ({ post }) => {
  const { title, slug, date, words } = post;

  function readingTime(words = 0, wpm = 200) {
    return Math.ceil(words / wpm);
  }

  return (
    <Link to={slug}>
      <PostContainer>
        <h2>{title}</h2>
        <h6>
          {date} · {readingTime(words)}min
        </h6>
      </PostContainer>
    </Link>
  );
};

export default Post;
