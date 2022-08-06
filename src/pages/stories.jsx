import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import StoriesTemplate from "../components/templates/storiesTemplate";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const posts = edges.map((post) => {
    const { id, excerpt, wordCount } = post.node;
    return {
      id,
      words: wordCount.words,
      excerpt,
      ...post.node.frontmatter,
    };
  });
  return <StoriesTemplate posts={posts} />;
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
          wordCount {
            words
          }
        }
      }
    }
  }
`;
