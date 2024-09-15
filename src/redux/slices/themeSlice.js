// src/redux/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import theme from "../../constant/theme";

const initialState = {
  theme: theme.dark, 
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === theme.dark ? theme.light : theme.dark;
    },
    setLightTheme: (state) => {
      state.theme = theme.light;
    },
    setDarkTheme: (state) => {
      state.theme = theme.dark;
    },
  },
});

export const { toggleTheme, setLightTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
