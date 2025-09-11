import { configureStore } from "@reduxjs/toolkit";
import breandsReducer from "./brands/slice";
import carsReducer from "./cars/slice";

export const store = configureStore({
  reducer: {
    brands: breandsReducer,
    cars: carsReducer,
  },
});
