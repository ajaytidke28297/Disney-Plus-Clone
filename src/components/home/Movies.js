import React from "react";
import classes from "./Movies.module.css";
import Image from "../UI/Image";
import { Link } from "react-router-dom";

function Movies(props) {
  console.log(props.movies);
  return (
    <div className={classes.container}>
      <h4>{props.type}</h4>
      <div className={classes.movies}>
        {!props.movies && <p>Loading...</p>}
        {props.movies &&
          props.movies.map((movie) => (
            <Link key={movie.id} to={`/detail/${props.cat}/${movie.id}`}>
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
