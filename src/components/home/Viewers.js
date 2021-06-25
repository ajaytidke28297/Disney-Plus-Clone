import React from "react";
import classes from "./Viewers.module.css";

function Viewers() {
  return (
    <div className={classes.viewers}>
      <div className={classes.img__wrapper}>
        <img src="/images/viewers-disney.png" alt="disney" />
      </div>
      <div className={classes.img__wrapper}>
        <img src="/images/viewers-pixar.png" alt="disney" />
      </div>
      <div className={classes.img__wrapper}>
        <img src="/images/viewers-marvel.png" alt="disney" />
      </div>
      <div className={classes.img__wrapper}>
        <img src="/images/viewers-starwars.png" alt="disney" />
      </div>
      <div className={classes.img__wrapper}>
        <img src="/images/viewers-national.png" alt="disney" />
      </div>
    </div>
  );
}

export default Viewers;
