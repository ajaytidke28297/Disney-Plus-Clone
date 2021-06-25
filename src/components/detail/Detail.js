import React from "react";
import classes from "./Detail.module.css";
import styled from "styled-components";
import Image from "../UI/Image";
import Button from "../UI/Button";

function Detail() {
  return (
    <Container>
      <Image
        className={classes.img__wrapper}
        imageSrc="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
        alt="movie title"
      />
      <Image
        className={classes.movie__title}
        imageSrc="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
        alt="movie title"
      />
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
        <p>2018 7m Family, Fantasy, Kids, Animation</p>
      </div>
      <div className={classes.description}>
        <p>A chinese mom who's sad when her grown son leaves</p>
      </div>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 7rem);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
