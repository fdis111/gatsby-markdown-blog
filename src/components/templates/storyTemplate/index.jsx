import React from 'react';

import Layout from '../../atoms/layout';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Link } from 'gatsby';
import StoryTemplateContsainer from './style';

export default function StoryTemplate({ frontmatter, rawMarkdownBody }) {
	const { title, cover } = frontmatter;

	console.log(cover);

	const MarkdownComponent = {
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '');
			return !inline && match ? (
				<SyntaxHighlighter
					style={gruvboxDark}
					language={match[1]}
					PreTag="div"
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
		<>
			<div
				style={{
					margin: 'auto',
					minHeight: '500px',
					width: '100vw',
					background: `url("${cover}")`,
					backgroundSize: 'cover',
				}}
			/>
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
		</>
	);
}
