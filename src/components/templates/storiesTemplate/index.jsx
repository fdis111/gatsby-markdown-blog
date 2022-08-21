import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../atoms/layout';
import Posts from '../../molecules/posts';
import StoriesTemplateContainer from './style';

export default function StoriesTemplate({ posts }) {
	return (
		<Layout>
			<StoriesTemplateContainer>
				<div>
					<h1>Stories</h1>
					<p>
						New skills I learned, technologies I used or tutorials, sharing is
						caring.
					</p>
				</div>
				<div>
					<Posts posts={posts} />
				</div>
			</StoriesTemplateContainer>
		</Layout>
	);
}

StoriesTemplate.propTypes = {
	posts: PropTypes.arrayOf({
		title: PropTypes.string,
		slug: PropTypes.string,
		date: PropTypes.string,
		words: PropTypes.string,
	}).isRequired,
};
