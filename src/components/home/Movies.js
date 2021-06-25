import React from "react";
import classes from "./Movies.module.css";
import Image from "../UI/Image";
import { useSelector } from "react-redux";

function Movies() {
  const movieList = useSelector((state) => state.movie.movies);

  return (
    <div className={classes.container}>
      <h4>Recommended for you</h4>
      <div className={classes.movies}>
        {movieList &&
          movieList.map((movie) => (
            <Image
              key={movie.id}
              className={classes.img__wrapper}
              imageSrc={movie.cardImg}
            />
          ))}
      </div>
    </div>
  );
}

export default Movies;
