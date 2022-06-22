import * as React from "react";
import MainComponent from "../style/mainComponent.style";
import Navbar from "./navbar";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Navbar />
      <MainComponent>
        <title>{pageTitle}</title>
        {children}
      </MainComponent>
    </>
  );
};

export default Layout;
