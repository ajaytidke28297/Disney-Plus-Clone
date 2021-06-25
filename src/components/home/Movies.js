import React from "react";
import classes from "./Movies.module.css";
import Image from "../UI/Image";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Movies() {
  const movieList = useSelector((state) => state.movie.movies);

  return (
    <div className={classes.container}>
      <h4>Recommended for you</h4>
      <div className={classes.movies}>
        {movieList &&
          movieList.map((movie) => (
            <Link key={movie.id} to={`/detail/${movie.id}`}>
              <Image
                className={classes.img__wrapper}
                imageSrc={movie.cardImg}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Movies;
