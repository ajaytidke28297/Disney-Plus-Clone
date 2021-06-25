import React from "react";
import classes from "./Image.module.css";

function Image(props) {
  const classNames =
    classes.img__wrapper + " " + (props.className ? props.className : "");

  return (
    <div className={classNames}>
      <img src={props.imageSrc} alt={props.alt} />
    </div>
  );
}

export default Image;
