import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./ImageSlider.module.css";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <Container {...settings}>
      <div className={classes.img__wrapper}>
        <img src="/images/slider-badging.jpg" alt="sliding" />
      </div>
      <div className={classes.img__wrapper}>
        <img src="/images/slider-badag.jpg" alt="sliding" />
      </div>
      <div className={classes.img__wrapper}>
        <img src="/images/slider-badging.jpg" alt="sliding" />
      </div>
    </Container>
  );
}

export default ImageSlider;

const Container = styled(Slider)`
  padding-top: 2rem;

  ul li button {
    &::before {
      font-size: 10px;
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
