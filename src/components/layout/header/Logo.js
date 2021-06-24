import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <NavLink className={classes.logoWrapper} to="/">
      <img
        className={classes.logo}
        src="/images/logo.svg"
        alt="DisneyPlus Hotstar"
      />
    </NavLink>
  );
}

export default Logo;
