const { createSlice } = require("@reduxjs/toolkit");

const navSlice = createSlice({
  name: "nav",
  initialState: {
    items: ["Home", "Search", "watchlist", "Originals", "Movies", "series"],
  },
  reducers: {},
});

export const navActions = navSlice.actions;

export default navSlice;
