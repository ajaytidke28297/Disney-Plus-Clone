import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav-slice";
import movieSlice from "./movie-slice";
import userSlice from "./user-slice";

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    movie: movieSlice.reducer,
    user: userSlice.reducer,
  },
});
