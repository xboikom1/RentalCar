import { createSlice } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operations";

const slice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    page: 1,
    totalPages: 0,
    carById: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;

        if (action.payload.isAppend)
          state.cars = [...state.cars, ...action.payload.cars];
        else state.cars = action.payload.cars;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCars.rejected, (state) => {
        state.error = "Failed to fetch cars";
        state.isLoading = false;
      })
      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.carById = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchCarById.rejected, (state) => {
        state.error = "Failed to fetch car details";
        state.isLoading = false;
      });
  },
});

export default slice.reducer;
