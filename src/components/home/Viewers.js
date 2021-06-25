import React from "react";
import classes from "./Viewers.module.css";
import Image from "../UI/Image";

function Viewers() {
  return (
    <div className={classes.viewers}>
      <Image
        className={classes.img__wrapper}
        imageSrc="/images/viewers-disney.png"
        alt="disney"
      />
      <Image
        className={classes.img__wrapper}
        imageSrc="/images/viewers-pixar.png"
        alt="pixar"
      />
      <Image
        className={classes.img__wrapper}
        imageSrc="/images/viewers-marvel.png"
        alt="marvel"
      />
      <Image
        className={classes.img__wrapper}
        imageSrc="/images/viewers-starwars.png"
        alt="star wars"
      />
      <Image
        className={classes.img__wrapper}
        imageSrc="/images/viewers-national.png"
        alt="national geography"
      />
    </div>
  );
}

export default Viewers;
