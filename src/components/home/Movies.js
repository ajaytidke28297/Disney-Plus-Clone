import React from "react";
import classes from "./Movies.module.css";
import Image from "../UI/Image";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Movies(props) {
  const movieList = useSelector((state) => state.movie.movies.slice(0, 4));

  return (
    <div className={classes.container}>
      <h4>{props.type}</h4>
      <div className={classes.movies}>
        {!movieList && <p>Loading...</p>}
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
