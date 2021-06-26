import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./ImageSlider.module.css";
import Image from "../UI/Image";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Container {...settings}>
      <Image
        className={classes.img__wrapper}
        imageSrc="/images/slider-badging.jpg"
        alt="sliding"
      />
      <Image
        className={classes.img__wrapper}
        imageSrc="/images/slider-badag.jpg"
        alt="sliding"
      />
      <Image
        className={classes.img__wrapper}
        imageSrc="/images/slider-scale.jpg"
        alt="sliding"
      />
      <Image
        className={classes.img__wrapper}
        imageSrc="/images/slider-scales.jpg"
        alt="sliding"
      />
    </Container>
  );
}

export default ImageSlider;

const Container = styled(Slider)`
  padding-top: 2rem;

  ul li button {
    &::before {
      font-size: 1rem;
      color: rgba(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;
