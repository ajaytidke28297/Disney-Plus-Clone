import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  const classNames =
    classes.button + " " + (props.className ? props.className : "");

  return (
    <button className={classNames}>
      {props.imageSrc && <img src={props.imageSrc} alt={props.alt} />}
      <span>{props.name}</span>
    </button>
  );
}

export default Button;
