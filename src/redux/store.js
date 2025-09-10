import { configureStore } from "@reduxjs/toolkit";
import breandsReducer from "./brands/slice";

export const store = configureStore({
  reducer: {
    brands: breandsReducer,
  },
});
