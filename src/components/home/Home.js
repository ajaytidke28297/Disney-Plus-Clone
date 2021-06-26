import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../../firebase";
import { useDispatch } from "react-redux";
import { movieActions } from "../../store/movie-slice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      const tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(movieActions.setMovies(tempMovies));
    });
  }, [dispatch]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies type="Recommended movies" l1="0" l2="4" />
      <Movies type="New on Disney+" l1="5" l2="9" />
      <Movies type="Originals" l1="10" l2="14" />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 7rem);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &::before {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -10;
  }
`;
