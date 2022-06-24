import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import Logo from './atoms/logo';
import BlogIcon from './atoms/blogIcon'



const NavbarContainer = styled.div`
  max-width: 1200px;

  /* padding: 10px; */

  margin: auto;
  /* height: 100px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
      <Link to="/">
      <Logo/>

      </Link>
      </div>
      <div>
        <Link to="/stories">
          <BlogIcon />

        </Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
