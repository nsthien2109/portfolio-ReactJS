import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "../slice/UIslice";

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
  },
});

export default store;
