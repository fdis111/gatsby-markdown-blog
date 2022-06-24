import * as React from "react";
import styled from "styled-components";
import Logo from './atoms/logo/logo'


const NavbarContainer = styled.div`
  max-width: 1500px;

  /* padding: 10px; */

  margin: auto;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo/>
    </NavbarContainer>
  );
};

export default Navbar;
