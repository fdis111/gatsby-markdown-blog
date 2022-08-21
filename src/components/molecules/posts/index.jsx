import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Post from '../../atoms/post';

export default function Posts({ posts }) {
	return (
		<div>
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}

			<p>
				<Link to="/">&#8592; Home</Link>
			</p>
		</div>
	);
}

Posts.propTypes = {
	posts: PropTypes.arrayOf({
		title: PropTypes.string,
		slug: PropTypes.string,
		date: PropTypes.string,
		words: PropTypes.string,
	}).isRequired,
};
