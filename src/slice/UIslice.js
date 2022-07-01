import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "ui",
  initialState: {
    page: "Home",
    darkMode: false,
  },
  reducers: {
    darkModeChange: (state, action) => {
      state.darkMode = !state.darkMode;
    },
    navigationChange: (state, action) => {
      state.page = action.payload;
    },
  },
});
