import React from "react";
import { graphql } from "gatsby";
import StoryTemplate from "../components/templates/storyTemplate";

export default function Template({ data }) {
  const { frontmatter, rawMarkdownBody } = data.markdownRemark;

  return (
    <StoryTemplate
      frontmatter={frontmatter}
      rawMarkdownBody={rawMarkdownBody}
    />
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
        cover
      }
      rawMarkdownBody
    }
  }
`;
