// src/redux/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import theme from "../../constant/theme";

const initialState = {
  theme: theme.dark, 
  textColor : "text-white",
  subTextColor : "text-gray-200"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === theme.dark ? theme.light : theme.dark;
      state.textColor = state.theme === theme.dark ? "text-white" : "text-[#47025c]";
      state.subTextColor = state.theme == theme.dark ? "text-gray-200" : "text-gray-600";
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
