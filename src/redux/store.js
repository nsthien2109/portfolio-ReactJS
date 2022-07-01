import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "../slice/UIslice";
import FilterSlice from "../slice/FilterSlice";

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
    filters: FilterSlice.reducer,
  },
});

export default store;
