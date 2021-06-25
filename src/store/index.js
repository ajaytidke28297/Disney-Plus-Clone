import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav-slice";
import movieSlice from "./movie-slice";

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    movie: movieSlice.reducer,
  },
});
