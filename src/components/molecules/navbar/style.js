import styled from 'styled-components';

export const NavbarContainer = styled.div`
	/* margin: 20px 0; */

	a {
		text-decoration: none;
	}
	border-bottom: 1px solid #cbcbcb;
	padding-top: 1%;
	padding-bottom: 1%;
	.navbar-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.nav-links {
		a {
			font-family: 'Inter', sans-serif;
			color: #cbcbcb;
			display: inline-block;
			padding-left: 1em;

			transition: 0.3s;

			&:hover {
				color: #121212;
			}
		}
	}
`;

export default {
	NavbarContainer,
};
