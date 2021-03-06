import React from "react";
import classes from "./Detail.module.css";
import styled from "styled-components";
import Image from "../UI/Image";
import Button from "../UI/Button";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function Detail() {
  const { id, cat } = useParams();
  const movieList = useSelector((state) => state.movie);

  const movie = movieList[cat].find((item) => item.id === id);

  return (
    <Container>
      {movie && (
        <React.Fragment>
          <Image
            className={classes.img__wrapper}
            imageSrc={movie.backgroundImg}
            alt={movie.title}
          />
          <div className={classes.movie__title}>
            <img src={movie.titleImg} alt={movie.title} />
          </div>
          <div className={classes.controls}>
            <Button
              className={classes.play__button}
              imageSrc="/images/play-icon-black.png"
              alt="Play button"
              name="Play"
            />
            <Button
              className={classes.trailer__button}
              imageSrc="/images/play-icon-white.png"
              alt="Trailer button"
              name="Trailer"
            />
            <div className={classes.add__button}>
              <span>+</span>
            </div>
            <div className={classes.add__button}>
              <img src="/images/group-icon.png" alt="group icon" />
            </div>
          </div>
          <div className={classes.subtitle}>
            <p>{movie.subtitle}</p>
          </div>
          <div className={classes.description}>
            <p>{movie.description}</p>
          </div>
        </React.Fragment>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 7rem);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
