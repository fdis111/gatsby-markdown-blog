import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const posts = edges.map((post) => ({
    id: post.node.id,
    ...post.node.frontmatter,
  }));

  const renderPosts = (posts) => {
    return (
      <ul>
        {posts.map(({ id, title, slug }) => {
          return (
            <li key={id}>
              <a href={slug}>{title}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <main>
      <h1>Just a gatsby Blog</h1>

      {renderPosts(posts)}
    </main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
