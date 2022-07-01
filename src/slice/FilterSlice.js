import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    filter: "All",
  },
  reducers: {
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});
