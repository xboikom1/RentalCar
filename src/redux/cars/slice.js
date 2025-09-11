import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const slice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    totalCars: 0,
    page: 1,
    totalPages: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload.cars;
      state.totalCars = action.payload.totalCars;
      state.page = action.payload.page;
      state.totalPages = action.payload.totalPages;
    });
  },
});

export default slice.reducer;
