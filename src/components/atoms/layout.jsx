import * as React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../../style/globalStyles';
import Container from './container';
// import Navbar from '../molecules/navbar/navbar';
import '../../style/typography.css';

export default function Layout({ pageTitle, children }) {
	return (
		<>
			<GlobalStyle />
			<title>{pageTitle}</title>
			{/* <Navbar /> */}
			<Container>
				<main>
					<div className="page-content">{children}</div>
				</main>
			</Container>
		</>
	);
}

Layout.propTypes = {
	pageTitle: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};
