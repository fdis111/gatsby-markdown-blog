import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({ data }) {
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          <a href="/stories">Stories</a>
        </p>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
