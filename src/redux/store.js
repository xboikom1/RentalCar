import { configureStore } from "@reduxjs/toolkit";
import breandsReducer from "./brands/slice";
import carsReducer from "./cars/slice";
import filtersReducer from "./filters/slice";

export const store = configureStore({
  reducer: {
    brands: breandsReducer,
    cars: carsReducer,
    filters: filtersReducer,
  },
});
