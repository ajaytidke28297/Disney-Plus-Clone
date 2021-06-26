import React from "react";
import classes from "./MainNavigation.module.css";
import Logo from "./header/Logo";
import NavMenuItem from "./header/NavMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../../firebase";
import { userActions } from "../../store/user-slice";
import { useHistory } from "react-router-dom";

function MainNavigation() {
  const dispath = useDispatch();
  const history = useHistory();
  const navMenuList = useSelector((state) => state.nav.items);
  const user = useSelector((state) => state.user);

  const loginHandler = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      dispath(
        userActions.setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const logoutHandler = () => {
    auth.signOut().then(() => {
      dispath(userActions.setSignOut());
      history.push("/login");
    });
  };

  return (
    <header className={classes.header}>
      <Logo />
      {!user.name && (
        <button onClick={loginHandler} className={classes.login__btn}>
          Login
        </button>
      )}
      {user.name && (
        <React.Fragment>
          <ul>
            {navMenuList &&
              navMenuList.map((item) => <NavMenuItem key={item} link={item} />)}
          </ul>
          <img
            onClick={logoutHandler}
            className={classes["user-image"]}
            src={user.photo}
            alt="User"
          />
        </React.Fragment>
      )}
    </header>
  );
}

export default MainNavigation;
