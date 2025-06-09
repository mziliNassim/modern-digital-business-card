import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    toggleTheme: (state) => {
      localStorage.setItem("theme", state === "dark" ? "light" : "dark");
      return state === "dark" ? "light" : "dark";
    },
    getStoredTheme: (state) => {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme || state;
    },
    storeTheme: (state, action) => {
      localStorage.setItem("theme", action.payload);
      return action.payload;
    },
  },
});

export const { toggleTheme, getStoredTheme, storeTheme } = themeSlice.actions;
export default themeSlice.reducer;
