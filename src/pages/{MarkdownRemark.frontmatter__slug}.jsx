import React from "react";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { fronmatter, html } = markdownRemark;
  console.log(fronmatter);

  // const { title, date } = fronmatter;

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        {/* <h1>{fronmatter.title}</h1> */}
        {/* <h2>{fronmatter.date}</h2> */}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <p>
          <a href="/blog">Blog</a>
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
