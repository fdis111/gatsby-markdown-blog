import React from "react";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { html } = data.markdownRemark;

  return (
    <div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          <a href="/stories">Stories</a>
        </p>
      </div>
    </div>
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
