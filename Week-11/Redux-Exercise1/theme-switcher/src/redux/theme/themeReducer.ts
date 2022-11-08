import { createSlice } from "@reduxjs/toolkit";
import { initialThemeState } from "./themeState";

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    changeTheme: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});

export default themeSlice.reducer;
