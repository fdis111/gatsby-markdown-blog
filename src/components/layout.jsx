import * as React from "react";
import MainComponent from "../style/mainComponent.style";

const Layout = ({ pageTitle, children }) => {
  return (
    <MainComponent>
      <title>{pageTitle}</title>
      {children}
    </MainComponent>
  );
};

export default Layout;
