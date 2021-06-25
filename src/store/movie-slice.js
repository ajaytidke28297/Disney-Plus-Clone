import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
