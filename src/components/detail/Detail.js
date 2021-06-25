import React from "react";
import classes from "./Detail.module.css";
import styled from "styled-components";
import Image from "../UI/Image";

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
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 7rem);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
