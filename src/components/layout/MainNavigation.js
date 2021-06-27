import React, { useEffect } from "react";
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

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [user.name, history]);

  const loginHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setUser = (user) => {
    dispath(
      userActions.setUserLogin({
        token: user.refreshToken,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const logoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        dispath(userActions.setSignOut());
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
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
          <div className={classes.signOut}>
            <img
              className={classes["user-image"]}
              src={user.photo}
              alt="User"
            />
            <div className={classes.dropdown}>
              <span onClick={logoutHandler}>Log out</span>
            </div>
          </div>
        </React.Fragment>
      )}
    </header>
  );
}

export default MainNavigation;
