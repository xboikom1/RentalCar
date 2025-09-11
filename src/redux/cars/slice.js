import { createSlice } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operations";

const slice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    totalCars: 0,
    page: 1,
    totalPages: 0,
    carById: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload.cars;
        state.totalCars = action.payload.totalCars;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.carById = action.payload;
      });
  },
});

export default slice.reducer;
