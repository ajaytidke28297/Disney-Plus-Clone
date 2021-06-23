import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <NavLink to="">
      <svg className={classes.logo}>
        <use href="/images/logo.svg#Layer_1"></use>
      </svg>
    </NavLink>
  );
}

export default Logo;
