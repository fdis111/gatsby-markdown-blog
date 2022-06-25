import * as React from "react";
import GlobalStyle from "../style/globalStyles";
import Navbar from "./navbar";
import "../style/typography.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>
        <title>{pageTitle}</title>
        {children}
      </main>
    </>
  );
};

export default Layout;
