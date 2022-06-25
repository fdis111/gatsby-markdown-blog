import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "./atoms/logo";
import BlogIcon from "./atoms/blogIcon";
import { github } from "../util/externalLinks";

import "../style/icons.css";
import GithubIcon from "./atoms/githubIcon";

const NavbarContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  .nav-links {
    a {
      color: #828282;
      display: inline-block;
      padding-left: 1em;

      transition: 0.3s;

      &:hover {
        color: #121212;
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
        <a href={github} target="blank">
          <GithubIcon />
        </a>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
