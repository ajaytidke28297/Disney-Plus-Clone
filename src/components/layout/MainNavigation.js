import React from "react";
import classes from "./MainNavigation.module.css";
import Logo from "./header/Logo";
import NavMenuItem from "./header/NavMenuItem";
import { useSelector } from "react-redux";

function MainNavigation() {
  const navMenuList = useSelector((state) => state.nav.items);

  return (
    <header className={classes.header}>
      <Logo />
      <ul>
        {navMenuList &&
          navMenuList.map((item) => <NavMenuItem key={item} link={item} />)}
      </ul>
      <img
        className={classes["user-image"]}
        src="/images/user.jpg"
        alt="User"
      />
    </header>
  );
}

export default MainNavigation;
