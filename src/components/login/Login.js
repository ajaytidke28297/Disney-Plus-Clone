import React from "react";
import classes from "./Login.module.css";
import styled from "styled-components";
import Button from "../UI/Button";

function Login() {
  return (
    <Container>
      <div className={classes.CTA}>
        <img src="/images/cta-logo-one.svg" alt="cta" />
        <Button className={classes.CTA__btn} name="Get all there" />
        <p className={classes.description}>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img
          className={classes.bottom}
          src="/images/cta-logo-two.png"
          alt="cta 2"
        />
      </div>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 7rem);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
    z-index: -1;
  }
`;
