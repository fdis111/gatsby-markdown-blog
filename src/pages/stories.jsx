import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

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
    <Layout>
      <h1>Just a gatsby Blog</h1>

      {renderPosts(posts)}
    </Layout>
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
