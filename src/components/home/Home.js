import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/movie-slice";

function Home() {
  let recommend = [];
  let newDisney = [];
  let original = [];
  let trending = [];
  const user = useSelector((state) => state.user);
  const movieList = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        movieActions.setMovies({
          recommend,
          trending,
          original,
          newDisney,
        })
      );
    });
  }, [user.name, dispatch]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies
        type="Recommended movies"
        cat="recommend"
        movies={movieList.recommend}
      />
      <Movies
        type="New on Disney+"
        cat="newDisney"
        movies={movieList.newDisney}
      />
      <Movies type="Originals" cat="original" movies={movieList.original} />
      <Movies type="Trending" cat="trending" movies={movieList.trending} />
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
