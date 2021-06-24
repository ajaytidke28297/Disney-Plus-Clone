import React from "react";
import classes from "./NavMenuItem.module.css";
import { NavLink } from "react-router-dom";

function NavMenuItem(props) {
  return (
    <li className={classes.item}>
      <NavLink to={`/${props.link.toLowerCase()}`}>
        <img
          src={`/images/${props.link.toLowerCase()}-icon.svg`}
          alt={`${props.link.toLowerCase()} Icon`}
        />
        <span>{props.link}</span>
      </NavLink>
    </li>
  );
}

export default NavMenuItem;
