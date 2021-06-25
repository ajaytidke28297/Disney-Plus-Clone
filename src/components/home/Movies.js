import React from "react";
import classes from "./Movies.module.css";
import Image from "../UI/Image";

function Movies() {
  return (
    <div className={classes.container}>
      <h4>Recommended for you</h4>
      <div className={classes.movies}>
        <Image
          className={classes.img__wrapper}
          imageSrc="/images/viewers-pixar.png"
          alt="pixar"
        />
        <Image
          className={classes.img__wrapper}
          imageSrc="/images/viewers-pixar.png"
          alt="pixar"
        />
        <Image
          className={classes.img__wrapper}
          imageSrc="/images/viewers-pixar.png"
          alt="pixar"
        />
        <Image
          className={classes.img__wrapper}
          imageSrc="/images/viewers-pixar.png"
          alt="pixar"
        />
      </div>
    </div>
  );
}

export default Movies;
