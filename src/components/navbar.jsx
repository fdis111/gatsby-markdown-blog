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
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/90b5693f-bcf4-49e2-9027-827ee67f2e18/signature.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220622T210155Z&X-Amz-Expires=86400&X-Amz-Signature=6688143a71c7f5400e8a74ffc02ade5bac6106519c4c551456d395a3f2e5e19c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22signature.svg%22&x-id=GetObject"
        alt="logo"
      />
    </NavbarContainer>
  );
};

export default Navbar;
