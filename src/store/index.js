import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav-slice";

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
  },
});
