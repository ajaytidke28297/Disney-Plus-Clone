import React from "react";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
