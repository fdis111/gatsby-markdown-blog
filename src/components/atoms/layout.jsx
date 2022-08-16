import * as React from "react";
import GlobalStyle from "../../style/globalStyles";
import Container from "./container";
import Navbar from "../navbar";
import "../../style/typography.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Navbar />
      <Container>
        <main>
          <div className="page-content">{children}</div>
        </main>
      </Container>
    </>
  );
};

export default Layout;
