import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "./atoms/logo";
import BlogIcon from "./atoms/blogIcon";

import "../style/icons.css";

const NavbarContainer = styled.div`
  max-width: 1000px;

  padding: 10px;

  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  .nav-links{
    
    a {
      color: #828282

      &:hover{
        color: #121212
      }
    }
  }

  
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Link to="/" activeStyle={{ color: "#121212" }}>
          <Logo />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/stories" activeStyle={{ color: "#121212" }}>
          <BlogIcon />
        </Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
