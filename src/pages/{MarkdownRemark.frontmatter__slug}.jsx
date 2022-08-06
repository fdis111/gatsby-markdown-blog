import React from "react";
import { graphql, Link } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import Layout from "../components/layout";

deckDeckGoHighlightElement();

export default function Template({ data }) {
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          <Link to="/stories">&#8592; Stories</Link>
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
