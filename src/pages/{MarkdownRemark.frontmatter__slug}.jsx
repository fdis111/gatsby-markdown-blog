import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Template({ data }) {
  const { html, frontmatter, rawMarkdownBody } = data.markdownRemark;

  console.log(data);
  const { title } = frontmatter;

  const MarkdownComponent = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={gruvboxDark}
          // showInlineLineNumbers
          // showLineNumbers
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <ReactMarkdown components={MarkdownComponent}>
          {rawMarkdownBody}
        </ReactMarkdown>
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
      rawMarkdownBody
    }
  }
`;
