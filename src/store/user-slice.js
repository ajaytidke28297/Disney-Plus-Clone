import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user"));

const userSlice = createSlice({
  name: "user",
  initialState: !initialState
    ? {
        token: "",
        name: "",
        email: "",
        photo: "",
      }
    : {
        token: initialState.token,
        name: initialState.name,
        email: initialState.email,
        photo: initialState.photo,
      },
  reducers: {
    setUserLogin(state, action) {
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: state.token,
          name: state.name,
          email: state.email,
          photo: state.photo,
        })
      );
    },
    setSignOut(state) {
      state.token = null;
      state.name = null;
      state.email = null;
      state.photo = null;
      localStorage.removeItem("user");
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
