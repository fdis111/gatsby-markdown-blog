import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "./atoms/logo";
import BlogIcon from "./atoms/blogIcon";
import { github } from "../util/externalLinks";
import Container from "./atoms/container";

import "../style/icons.css";
import GithubIcon from "./atoms/githubIcon";
import TipsIcon from "./atoms/tipsIcon";

const NavbarContainer = styled.div`
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
      font-family: "Inter", sans-serif;
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

const Navbar = () => {
  return (
    <NavbarContainer>
      <Container>
        <div className="navbar-content">
          <div>
            <Link to="/" activeStyle={{ color: "#121212" }}>
              <Logo />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/stories" activeStyle={{ color: "#121212" }}>
              <BlogIcon />
            </Link>
            <Link to="/tips" activeStyle={{ color: "#121212" }}>
              <TipsIcon />
            </Link>
            {/* <a href={github} target="blank">
              <GithubIcon />
            </a> */}
          </div>
        </div>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
