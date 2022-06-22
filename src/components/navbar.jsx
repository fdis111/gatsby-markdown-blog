import * as React from "react";
import styled from "styled-components";
const NavbarContainer = styled.div`
  max-width: 1500px;

  /* padding: 10px; */

  margin: auto;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <img
        src="/static/943cedd71957b02eef6fc50af1f81a54/signature.svg"
        alt="logo"
      />
    </NavbarContainer>
  );
};

export default Navbar;
