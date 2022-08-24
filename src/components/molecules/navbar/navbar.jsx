import * as React from 'react';
import { Link } from 'gatsby';
import Logo from '../../atoms/logo';
import BlogIcon from '../../atoms/blogIcon';
import Container from '../../atoms/container';
import { NavbarContainer } from './style';

import '../../../style/icons.css';
import TipsIcon from '../../atoms/tipsIcon';

export default function Navbar() {
	return (
		<NavbarContainer>
			<Container>
				<div className="navbar-content">
					<div>
						<Link to="/" activeStyle={{ color: '#121212' }}>
							<Logo />
						</Link>
					</div>
					<div className="nav-links">
						<Link to="/stories" activeStyle={{ color: '#121212' }}>
							<BlogIcon />
						</Link>
						<Link to="/tips" activeStyle={{ color: '#121212' }}>
							<TipsIcon />
						</Link>
					</div>
				</div>
			</Container>
		</NavbarContainer>
	);
}
