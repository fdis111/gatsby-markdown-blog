import * as React from "react";
import GlobalStyle from "../style/globalStyles";
import Navbar from "./navbar";
import "../style/typography.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <main>
        <Navbar />
        <div className="page-content">{children}</div>
      </main>
    </>
  );
};

export default Layout;
