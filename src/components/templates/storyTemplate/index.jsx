import React from 'react';

import Layout from '../../atoms/layout';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Link } from 'gatsby';
import StoryTemplateContsainer from './style';

export default function StoryTemplate({ frontmatter, rawMarkdownBody }) {
	const { title } = frontmatter;

	const MarkdownComponent = {
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '');
			return !inline && match ? (
				<SyntaxHighlighter
					style={gruvboxDark}
					language={match[1]}
					PreTag="div"
					showLineNumbers
					lineNumberContainerStyle
					{...props}
				>
					{String(children).replace(/\n$/, '')}
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
			<StoryTemplateContsainer>
				<ReactMarkdown components={MarkdownComponent}>
					{rawMarkdownBody}
				</ReactMarkdown>
				<div>
					<p>
						<Link to="/stories">&#8592; Stories</Link>
					</p>
				</div>
			</StoryTemplateContsainer>
		</Layout>
	);
}
