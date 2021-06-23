import React from "react";
import classes from "./MainNavigation.module.css";
import Logo from "./header/Logo";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Logo />
    </header>
  );
}

export default MainNavigation;
